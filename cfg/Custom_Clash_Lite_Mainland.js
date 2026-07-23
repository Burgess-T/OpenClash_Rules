// 此规则用于 clash-verge 等支持扩展脚本的客户端，可以本地直接完成订阅转换
// 规则来源于 Custom_Clash_Lite_Mainland.ini
function main(config, profileName) {
  // 1. 配置规则集 (Rule Providers)
  config['rule-providers'] = {
    'custom_proxy': {
      type: 'http',
      behavior: 'classical',
      url: 'https://gh-proxy.com/https://raw.githubusercontent.com/Burgess-T/OpenClash_Rules/main/rule/Custom_Proxy.list',
      path: './rule_set/custom_proxy.yaml',
      interval: 86000
    },
    'custom_direct': {
      type: 'http',
      behavior: 'classical',
      url: 'https://gh-proxy.com/https://raw.githubusercontent.com/Burgess-T/OpenClash_Rules/main/rule/Custom_Direct.list',
      path: './rule_set/custom_direct.yaml',
      interval: 28800
    },
    'custom_direct_domain': {
      type: 'http',
      behavior: 'domain',
      url: 'https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.yaml',
      path: './rule_set/custom_direct_domain.yaml',
      interval: 28800
    },
    'custom_direct_classical_ip': {
      type: 'http',
      behavior: 'classical',
      url: 'https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_IP.yaml',
      path: './rule_set/custom_direct_classical_ip.yaml',
      interval: 28800
    },
    'steam_cdn_classical': {
      type: 'http',
      behavior: 'classical',
      url: 'https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Classical.yaml',
      path: './rule_set/steam_cdn_classical.yaml',
      interval: 28800
    }
  };

  // 2. 配置节点分组 (Proxy Groups)
  config['proxy-groups'] = [
    {
      name: '✍️ 手动选择',
      type: 'select',
      'include-all': true,
      proxies: [
        '♻️ 自动选择',
        '🎯 直连',
        '📉 低倍率',
        '📈 高倍率',
        '🇭🇰 香港',
        '🇺🇸 美国',
        '🇯🇵 日本',
        '🇸🇬 新加坡',
        '🇼🇸 台湾'
      ]
    },
    {
      name: '♻️ 自动选择',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      proxies: [
        '🇭🇰 香港',
        '🇺🇸 美国',
        '🇯🇵 日本',
        '🇸🇬 新加坡',
        '🇼🇸 台湾'
      ]
    },
    {
      name: '🇬 谷歌服务',
      type: 'select',
      proxies: ['✍️ 手动选择', '♻️ 自动选择', '🎯 直连', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '🤖 AI服务',
      type: 'select',
      proxies: ['✍️ 手动选择', '♻️ 自动选择', '🎯 直连', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '🎮 Steam',
      type: 'select',
      proxies: ['✍️ 手动选择', '♻️ 自动选择', '🎯 直连', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '🎮 游戏平台',
      type: 'select',
      proxies: ['🎯 直连', '✍️ 手动选择', '♻️ 自动选择', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '🎓 学术期刊',
      type: 'select',
      proxies: ['🎯 直连', '✍️ 手动选择', '♻️ 自动选择', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '🚄 测速工具',
      type: 'select',
      proxies: ['🎯 直连', '✍️ 手动选择', '♻️ 自动选择', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '💾 网盘下载',
      type: 'select',
      proxies: ['✍️ 手动选择', '♻️ 自动选择', '📉 低倍率', '📈 高倍率', '🎯 直连', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '💬 telegram',
      type: 'select',
      proxies: ['✍️ 手动选择', '♻️ 自动选择', '📉 低倍率', '📈 高倍率', '🎯 直连', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '🐟 漏网之鱼',
      type: 'select',
      proxies: ['✍️ 手动选择', '♻️ 自动选择', '📉 低倍率', '📈 高倍率', '🎯 直连', '🇭🇰 香港', '🇺🇸 美国', '🇯🇵 日本', '🇸🇬 新加坡', '🇼🇸 台湾']
    },
    {
      name: '📉 低倍率',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(?:0\\.[1-9]\\d?\\s*(?:x|X|倍|倍率)|(?:x|X|倍|倍率)\\s*0\\.[1-9]\\d?)'
    },
    {
      name: '📈 高倍率',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(?:(?:1\\.(?:0*[1-9]\\d*)|[2-9]\\d*(?:\\.\\d+)?))\\s*(?:x|X|倍|倍率)|(?:x|X|倍|倍率)\\s*(?:1\\.(?:0*[1-9]\\d*)|[2-9]\\d*(?:\\.\\d+)?)'
    },
    {
      name: '🇭🇰 香港',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)'
    },
    {
      name: '🇺🇸 美国',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)'
    },
    {
      name: '🇯🇵 日本',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)'
    },
    {
      name: '🇸🇬 新加坡',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)'
    },
    {
      name: '🇼🇸 台湾',
      type: 'url-test',
      url: 'https://www.google.com/generate_204',
      interval: 300,
      tolerance: 50,
      'include-all': true,
      filter: '(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)'
    },
    {
      name: '🎯 直连',
      type: 'select',
      proxies: ['DIRECT']
    }
  ];

  // 3. 配置分流规则 (Rules)
  config['rules'] = [
    'GEOSITE,private,🎯 直连',
    'GEOIP,private,🎯 直连,no-resolve',
    'RULE-SET,custom_proxy,✍️ 手动选择',
    'RULE-SET,custom_direct,🎯 直连',
    'RULE-SET,custom_direct_domain,🎯 直连',
    'RULE-SET,custom_direct_classical_ip,🎯 直连',
    'GEOSITE,google-cn,🎯 直连',
    'GEOSITE,cloudflare-cn,🎯 直连',
    'GEOSITE,category-games@cn,🎯 直连',
    'RULE-SET,steam_cdn_classical,🎯 直连',
    'GEOSITE,category-game-platforms-download,🎯 直连',
    'GEOSITE,category-public-tracker,🎯 直连',
    'GEOSITE,github,✍️ 手动选择',
    'GEOSITE,microsoft,🎯 直连',
    'GEOSITE,google,🇬 谷歌服务',
    'GEOIP,google,🇬 谷歌服务,no-resolve',
    'GEOSITE,category-ai-!cn,🤖 AI服务',
    'GEOSITE,steam,🎮 Steam',
    'GEOSITE,category-games,🎮 游戏平台',
    'GEOSITE,meta,🇺🇸 美国',
    'GEOSITE,bahamut,🇼🇸 台湾',
    'GEOSITE,category-scholar-!cn,🎓 学术期刊',
    'GEOSITE,category-speedtest,🚄 测速工具',
    'GEOSITE,category-netdisk-!cn,💾 网盘下载',
    'GEOIP,telegram,💬 telegram,no-resolve',
    'GEOSITE,gfw,✍️ 手动选择',
    'GEOSITE,cn,🎯 直连',
    'MATCH,🐟 漏网之鱼'
  ];

  return config;
}