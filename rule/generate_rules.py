#!/usr/bin/env python3
"""Convert a single OpenClash rule list file to a YAML rule provider."""
# Usage: python3 generate_rules.py input.list output_dir

from __future__ import annotations

import argparse
import ipaddress
import sys
from pathlib import Path


def parse_list(path: Path) -> list[str]:
    """Parse a .list file and return a sorted list of unique rules."""
    rules: list[str] = []
    seen: set[str] = set()
    for line_number, raw_line in enumerate(path.read_text(encoding="utf-8-sig").splitlines(), 1):
        rule = raw_line.strip()
        if not rule or rule.startswith(("#", ";")):
            continue
        if rule in seen:
            raise ValueError(f"{path}:{line_number}: duplicate rule: {rule}")
        seen.add(rule)

        parts = [part.strip() for part in rule.split(",")]
        rule_type = parts[0]
        if len(parts) < 2:
            raise ValueError(f"{path}:{line_number}: malformed rule: {rule}")

        # Validate CIDR rules
        if rule_type in {"IP-CIDR", "IP-CIDR6"}:
            try:
                network = ipaddress.ip_network(parts[1], strict=False)
            except ValueError as exc:
                raise ValueError(f"{path}:{line_number}: invalid CIDR: {parts[1]}") from exc
            expected_type = "IP-CIDR6" if network.version == 6 else "IP-CIDR"
            if rule_type != expected_type:
                raise ValueError(
                    f"{path}:{line_number}: {parts[1]} must use {expected_type}, not {rule_type}"
                )
        # All other valid rule types are silently accepted.
        rules.append(rule)

    return sorted(rules)


def render_yaml(source: Path, rules: list[str]) -> str:
    """Render a YAML rule provider document."""
    lines = [
        f"# Generated from {source.as_posix()}",
        f"# TOTAL: {len(rules)}",
        "",
    ]
    if not rules:
        lines.append("payload: []")
    else:
        lines.append("payload:")
        for rule in rules:
            escaped = rule.replace("'", "''")
            needs_quotes = rule.startswith("DOMAIN-REGEX,")
            lines.append(f"  - '{escaped}'" if needs_quotes else f"  - {rule}")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Convert a rule list to YAML provider.")
    parser.add_argument("input", type=Path, help="Path to the .list file")
    parser.add_argument("output_dir", type=Path, help="Directory to write the .yaml file")
    args = parser.parse_args()

    list_path = args.input.resolve()
    output_dir = args.output_dir.resolve()
    if not list_path.is_file():
        print(f"ERROR: input file not found: {list_path}", file=sys.stderr)
        return 1

    try:
        rules = parse_list(list_path)
    except ValueError as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 1

    yaml_name = list_path.stem + ".yaml"
    output_path = output_dir / yaml_name
    output_dir.mkdir(parents=True, exist_ok=True)
    content = render_yaml(list_path, rules)
    output_path.write_text(content, encoding="utf-8", newline="\n")
    print(f"Generated {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())