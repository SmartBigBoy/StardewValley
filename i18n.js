/**
 * 星露谷物语攻略站 - 多语言支持
 * 支持简体中文 (zh-CN) 和 English (en)
 * 默认语言: English
 */

// 多语言文本数据
const i18n = {
  // 简体中文
  'zh-CN': {
    // 导航
    'nav.home': '首页',
    'nav.seasons': '季节攻略',
    'nav.skills': '技能系统',
    'nav.npc': 'NPC攻略',
    'nav.farm': '农场规划',
    'nav.fishing': '钓鱼指南',
    'nav.mines': '矿洞探险',
    'nav.crafting': '制造烹饪',
    'nav.beginner': '新手入门',
    'nav.community': '社区中心',
    'nav.gingerIsland': '姜岛',
    'nav.money': '赚钱攻略',
    'nav.achievements': '成就系统',
    'nav.combat': '战斗系统',
    'nav.foraging': '采集系统',
    'nav.slime': '史莱姆牧场',
    'nav.desert': '沙漠',
    'nav.mods': 'Mod教程',
    'nav.multiplayer': '联机',
    'nav.update16': '1.6版本',

    // 导航分组
    'nav.group.seasons': '季节攻略',
    'nav.group.skills': '技能系统',
    'nav.group.npc': 'NPC攻略',
    'nav.group.farm': '农场规划',
    'nav.group.fishing': '钓鱼指南',
    'nav.group.mines': '矿洞探险',
    'nav.group.more': '更多',

    // 页面标题
    'page.title.home': '星露谷物语攻略站 | Stardew Valley 中文指南',
    'page.title.seasons': '季节攻略 | 星露谷物语攻略站',
    'page.title.skills': '技能系统 | 星露谷物语攻略站',
    'page.title.npc': 'NPC攻略 | 星露谷物语攻略站',
    'page.title.farm': '农场规划 | 星露谷物语攻略站',
    'page.title.fishing': '钓鱼指南 | 星露谷物语攻略站',
    'page.title.mines': '矿洞探险 | 星露谷物语攻略站',
    'page.title.crafting': '制造烹饪 | 星露谷物语攻略站',
    'page.title.beginner': '新手入门 | 星露谷物语攻略站',
    'page.title.community': '社区中心 | 星露谷物语攻略站',
    'page.title.gingerIsland': '姜岛攻略 | 星露谷物语攻略站',
    'page.title.money': '赚钱攻略 | 星露谷物语攻略站',
    'page.title.achievements': '成就系统 | 星露谷物语攻略站',
    'page.title.combat': '战斗系统 | 星露谷物语攻略站',
    'page.title.foraging': '采集系统 | 星露谷物语攻略站',
    'page.title.slime': '史莱姆牧场 | 星露谷物语攻略站',
    'page.title.desert': '沙漠 | 星露谷物语攻略站',
    'page.title.mods': 'Mod教程 | 星露谷物语攻略站',
    'page.title.multiplayer': '联机教程 | 星露谷物语攻略站',
    'page.title.update16': '1.6版本更新 | 星露谷物语攻略站',

    // NPC页面翻译
    'npc.sidebar.title': '📖 目录',
    'npc.breadcrumb.home': '首页',
    'npc.breadcrumb.current': 'NPC攻略',
    'npc.banner.title': '👥 NPC攻略',
    'npc.section.bachelors': '🧑 可攻略男性（6人）',
    'npc.section.bachelors.subtitle': '鹈鹕镇的单身汉们，等待你的友谊与爱情',
    'npc.section.bachelorettes': '👩 可攻略女性（6人）',
    'npc.section.bachelorettes.subtitle': '温柔可爱的姑娘们，与你共度四季',
    'npc.section.villagers': '🏠 镇居民',
    'npc.section.villagers.subtitle': '鹈鹕镇的常驻居民们',
    'npc.section.special': '✨ 特殊人物',
    'npc.section.special.subtitle': '游戏中特殊的NPC角色',
    'npc.section.gifts': '🎁 礼物系统说明',
    'npc.section.gifts.subtitle': '了解礼物喜好，提升好感度',
    'npc.section.related': '📚 相关攻略',
    'npc.section.related.subtitle': '更多精彩内容推荐',
    'npc.gift.love': '❤️ 最爱',
    'npc.gift.hate': '💔 讨厌',
    'npc.gift.loved': '好感度 +45',
    'npc.gift.liked': '好感度 +20',
    'npc.gift.neutral': '好感度 +0',
    'npc.gift.hated': '好感度 -10',
    'npc.tip': '💡 小贴士：每周给同一NPC送礼物只能增加一次好感度，选择生日或节日送礼效果更佳！',

    // 姜岛探索页面翻译
    'ginger.breadcrumb.home': '首页',
    'ginger.breadcrumb.current': '姜岛探索',
    'ginger.page_title': '🏝️ 姜岛探索指南',
    'ginger.sidebar.title': '📖 目录',
    'ginger.sidebar.overview': '🗺️ 姜岛概述',
    'ginger.sidebar.regions': '🏝️ 岛屿区域',
    'ginger.sidebar.walnut': '🥜 金核桃收集',
    'ginger.sidebar.volcano': '🌋 火山地牢',
    'ginger.sidebar.crops': '🌴 热带作物',
    'ginger.sidebar.related': '📌 相关推荐',
    'ginger.island_overview': '📖 姜岛概述',
    'ginger.island_overview_subtitle': '解锁条件与岛屿特点',
    'ginger.island_regions': '🗺️ 岛屿区域详解',
    'ginger.island_regions_subtitle': '姜岛各个区域一览',
    'ginger.golden_walnut': '🥜 金核桃收集',
    'ginger.golden_walnut_subtitle': '共130个金核桃，分布在岛屿各处',
    'ginger.volcano_dungeon': '🌋 火山地牢攻略',
    'ginger.volcano_dungeon_subtitle': '挑战高难度地牢，获得珍贵奖励',
    'ginger.special_crops': '🌴 姜岛特色作物',
    'ginger.special_crops_subtitle': '热带气候下的特殊种植',

    // 姜岛探索页面内容翻译
    'ginger.unlock_title': '解锁条件',
    'ginger.unlock_1': '完成社区中心所有献祭包',
    'ginger.unlock_2': '拥有500g船费',
    'ginger.unlock_3': '在海滩找到威洛船长对话',
    'ginger.features_title': '岛屿特点',
    'ginger.feature_1': '热带气候，冬季也能种植',
    'ginger.feature_2': '独特的火山地牢',
    'ginger.feature_3': '金核桃收集任务',
    'ginger.feature_4': '西部农场开发区域',
    'ginger.beach_title': '🌊 海滩码头',
    'ginger.beach_desc': '乘坐渡轮到达的地方。有小超市可以购买热带种子。',
    'ginger.beach_tip_1': '购买椰子、杨桃种子',
    'ginger.beach_tip_2': '遇到岛民NPC',
    'ginger.beach_tip_3': '每日渡轮往返',
    'ginger.volcano_area_title': '🌋 火山地牢',
    'ginger.volcano_area_desc': '挑战性的地牢区域，产出珍贵矿物。',
    'ginger.volcano_tip_1': '需要10级战斗技能',
    'ginger.volcano_tip_2': '击败怪物收集矿物',
    'ginger.volcano_tip_3': '稀有宝箱和文物',
    'ginger.farm_title': '🌾 西部农场',
    'ginger.farm_desc': '可以建造小屋，种植热带作物。',
    'ginger.farm_tip_1': '建造岛屿小屋',
    'ginger.farm_tip_2': '种植香蕉、菠萝等',
    'ginger.farm_tip_3': '无限生长周期',
    'ginger.observatory_title': '🔭 山顶天文台',
    'ginger.observatory_desc': '解锁后可以免费查看幸运数值。',
    'ginger.observatory_tip_1': '需要收集金核桃',
    'ginger.observatory_tip_2': '每日免费幸运查看',
    'ginger.observatory_tip_3': '特殊事件触发',
    'ginger.walnut_method_title': '主要获取方式',
    'ginger.table_location': '地点',
    'ginger.table_count': '数量',
    'ginger.table_method': '获取方法',
    'ginger.walnut_loc_1': '岛屿各区域',
    'ginger.walnut_loc_2': '火山地牢',
    'ginger.walnut_loc_3': '化石挖掘点',
    'ginger.walnut_loc_4': '完成谜题',
    'ginger.walnut_loc_5': 'NPC赠送',
    'ginger.walnut_meth_1': '翻开草丛、挖掘',
    'ginger.walnut_meth_2': '击败怪物、挖掘',
    'ginger.walnut_meth_3': '使用锄头挖掘',
    'ginger.walnut_meth_4': '解决岛上谜题',
    'ginger.walnut_meth_5': '与岛上NPC建立友谊',
    'ginger.walnut_rewards_title': '🏆 金核桃里程碑奖励',
    'ginger.walnut_5': '<strong>5个</strong> - 解锁渡轮码头',
    'ginger.walnut_10': '<strong>10个</strong> - 解锁海滩超市',
    'ginger.walnut_15': '<strong>15个</strong> - 解锁岛屿东部小路',
    'ginger.walnut_20': '<strong>20个</strong> - 解锁山地小路',
    'ginger.walnut_30': '<strong>30个</strong> - 解锁山顶小路',
    'ginger.walnut_55': '<strong>55个</strong> - 解锁山顶天文台',
    'ginger.walnut_130': '<strong>130个</strong> - 全部完成！',
    'ginger.volcano_cond_title': '进入条件',
    'ginger.volcano_cond_1': '解锁姜岛后自动开放',
    'ginger.volcano_cond_2': '建议10级战斗以上',
    'ginger.volcano_cond_3': '准备充足的食物和药水',
    'ginger.volcano_rewards_title': '可获得物品',
    'ginger.volcano_item_1': '铱矿石 - 最珍贵的矿物',
    'ginger.volcano_item_2': '铱锭 - 制作顶级装备',
    'ginger.volcano_item_3': '稀有文物和宝石',
    'ginger.volcano_item_4': '金核桃',
    'ginger.table_crop': '作物',
    'ginger.table_price': '种子价格',
    'ginger.table_days': '生长天数',
    'ginger.table_sell': '售价',
    'ginger.table_note': '备注',
    'ginger.crop_coconut': '🥥 椰子',
    'ginger.crop_banana': '🍌 香蕉',
    'ginger.crop_pineapple': '🍍 菠萝',
    'ginger.crop_mango': '🥭 芒果',
    'ginger.crop_flower': '🌺 花',
    'ginger.crop_note_1': '可在岛屿西部种植',
    'ginger.crop_note_2': '热带水果',
    'ginger.crop_note_3': '高价值作物',
    'ginger.crop_note_4': '需要岛屿小屋',
    'ginger.crop_note_5': '只开花不结果',

    // 社区中心页面翻译
    'community.overview': '🏛️ 社区中心概述',
    'community.routes': '⚖️ 两条路线对比',
    'community.bundles': '📦 所有献祭包详解',
    'community.rewards': '🎁 完整奖励',
    'community.related': '📚 相关攻略',

    // 沙漠页面翻译
    'desert.overview': '🏜️ 沙漠概述',
    'desert.skull_cave': '⛏️ 骷髅洞攻略',
    'desert.trader': '🛒 沙漠商人',
    'desert.tips': '💡 实用技巧',
    'desert.related': '📚 相关攻略',

    // Mod教程页面翻译
    'mods.prep': '📦 安装前准备',
    'mods.recommend': '⭐ 热门Mod推荐',
    'mods.conflicts': '⚠️ Mod冲突解决',
    'mods.related': '📚 相关攻略',

    // 联机教程页面翻译
    'multiplayer.methods': '🌐 联机方式',
    'multiplayer.roles': '👥 联机分工',
    'multiplayer.tips': '⚠️ 注意事项',
    'multiplayer.related': '📚 相关攻略',

    // 1.6版本页面翻译
    'update16.items': '🎁 新增物品',
    'update16.events': '🎭 新增事件',
    'update16.improvements': '⚙️ 游戏改进',
    'update16.related': '📚 相关攻略',

    // 成就系统页面翻译
    'achievements.overview': '🏆 成就系统概览',
    'achievements.farming': '🌾 农业成就',
    'achievements.mining': '⛏️ 采矿成就',
    'achievements.fishing': '🎣 钓鱼成就',
    'achievements.social': '💬 社交成就',
    'achievements.related': '📚 相关攻略',

    // 战斗系统页面翻译
    'combat.profession': '⚔️ 职业选择',
    'combat.weapons': '🗡️ 武器推荐',
    'combat.monsters': '👹 怪物图鉴',
    'combat.tips': '💥 战斗技巧',
    'combat.related': '📚 相关攻略',

    // 赚钱攻略页面翻译
    'money.core': '💰 核心赚钱思路',
    'money.crops': '🌾 作物经济',
    'money.winemaking': '🍷 酿酒致富',
    'money.other': '📦 其他赚钱途径',
    'money.related': '📚 相关攻略',

    // 新手入门页面翻译
    'beginner.character': '👤 创建角色',
    'beginner.firstday': '📅 第一天指南',
    'beginner.energy': '⚡ 体力管理',
    'beginner.tools': '🔧 工具升级',
    'beginner.planning': '📆 四季规划',
    'beginner.related': '📚 相关攻略',

    // 首页英雄区域
    'hero.badge': '🌟 游戏版本 1.6 兼容',
    'hero.title': '欢迎来到<span>星露谷</span>',
    'hero.subtitle': '最全面的星露谷物语中文攻略站，涵盖种植、钓鱼、采矿、NPC社交等全方位指南',
    'hero.btn.explore': '开始探索',
    'hero.btn.guide': '新手攻略',

    // 搜索
    'search.placeholder': '搜索攻略、作物、NPC...',
    'search.btn': '搜索',
    'search.noResults': '未找到结果',

    // 导航分类
    'section.nav.title': '攻略分类',
    'section.nav.subtitle': '选择你感兴趣的模块，开始你的星露谷之旅',

    // 热门攻略
    'section.hot.title': '✨ 热门攻略',
    'section.hot.subtitle': '玩家最常查阅的高价值内容',

    // 关于游戏
    'section.about.title': '🎮 关于星露谷物语',
    'about.story': '🌾 你继承了爷爷在星露谷留下的老旧农场。带着那把锈迹斑斑的 Tools 和几枚硬币，你踏上了这片杂草丛生的土地。',
    'about.desc': '在这里，你可以重整旗鼓，把那片荒芜的土地变成一个繁荣的家园。种植庄稼、饲养动物、钓鱼、采矿、采集、烹饪……还有与镇上的居民们建立深厚的友谊，帮助重建社区中心，或是加入 JOJA 走向不同的发展道路。',
    'about.bottom': '🌟 <strong>无论你选择怎样的生活方式，星露谷永远欢迎你的归来。</strong>',
    'about.stats.days': '28天/季节',
    'about.stats.daysDesc': '每个季节28天',
    'about.stats.npc': '30+ NPC',
    'about.stats.npcDesc': '可社交村民',
    'about.stats.freedom': '无限可能',
    'about.stats.freedomDesc': '自由探索',

    // 导航卡片标题
    'card.seasons.title': '季节攻略',
    'card.seasons.desc': '春季播种、夏季丰收、秋季储藏、冬季探索，四季作物完整指南',
    'card.skills.title': '技能系统',
    'card.skills.desc': '耕种、采矿、采集、钓鱼、战斗五大技能树详解与专精选择',
    'card.npc.title': 'NPC攻略',
    'card.npc.desc': '村民喜好礼物表、约会攻略、结婚指南，提升好感度必备',
    'card.farm.title': '农场规划',
    'card.farm.desc': '8种农场地图详解、温室种植、自动化农场建设指南',
    'card.fishing.title': '钓鱼指南',
    'card.fishing.desc': '鱼类出没表、钓具升级攻略、传说鱼捕捉技巧',
    'card.mines.title': '矿洞探险',
    'card.mines.desc': '矿洞楼层解析、矿石分布、宝石收集与Boss攻略',
    'card.community.title': '社区中心',
    'card.community.desc': '社区中心献祭与JOJA超市两种路线完整攻略',
    'card.gingerIsland.title': '姜岛探索',
    'card.gingerIsland.desc': '新区域姜岛的完整探索指南，包括化石骨头等稀有物品',
    'card.beginner.title': '新手入门',
    'card.beginner.desc': '从创建角色到第一年收入规划，新手必看指南',
    'card.money.title': '赚钱攻略',
    'card.money.desc': '从第一年的小目标到百万富翁，最佳收益分析',
    'card.achievements.title': '成就系统',
    'card.achievements.desc': '全成就列表与完成攻略，达成100%完成度',
    'card.combat.title': '战斗系统',
    'card.combat.desc': '武器选择、杀怪技巧、Boss战攻略',
    'card.crafting.title': '制造烹饪',
    'card.crafting.desc': '完整合成表、烹饪食谱与自动制造机设置',
    'card.mods.title': 'Mod教程',
    'card.mods.desc': '如何安装和使用Mod，提升游戏体验',

    // 热门攻略卡片
    'card.year1.title': '第一年完美开局',
    'card.year1.desc': '新手必看！第一年如何规划才能顺利完成社区中心献祭，包含每个季节必做事项清单。',
    'card.crops.title': '最高收益作物排行',
    'card.crops.desc': '各季节利润最高的作物排名，考虑生长周期、酿酒加成后的实际收益分析。',
    'card.gifts.title': 'NPC最爱礼物速查',
    'card.gifts.desc': '快速查找每个NPC的最爱礼物，生日当天送对礼物事半功倍！',
    'card.bundles.title': '社区中心收集包',
    'card.bundles.desc': '社区中心所有收集包的完成攻略，包括稀有物品获取位置与时间。',
    'card.minesSpeed.title': '矿洞速通攻略',
    'card.minesSpeed.desc': '从1层到120层的最优路线，电梯解锁条件，以及各层重要矿物分布。',
    'card.legendFish.title': '传说鱼捕捉攻略',
    'card.legendFish.desc': '6条传说鱼的具体位置、时间和最优钓具配置，钓竿强化顺序。',

    // 标签
    'tag.spring': '春季',
    'tag.summer': '夏季',
    'tag.autumn': '秋季',
    'tag.winter': '冬季',
    'tag.hot': '🔥 热门',
    'tag.essential': '💝 必备',
    'tag.main': '⭐ 主线',
    'tag.advanced': '⛏️ 进阶',
    'tag.challenge': '🎣 挑战',

    // 页脚
    'footer.nav.title': '🌾 攻略分类',
    'footer.advanced.title': '🎣 进阶内容',
    'footer.resources.title': '🔗 参考资源',
    'footer.resources.wiki': 'Stardew Wiki',
    'footer.about.title': '📝 关于本站',
    'footer.links.seasons': '季节攻略',
    'footer.links.skills': '技能系统',
    'footer.links.npc': 'NPC攻略',
    'footer.links.farm': '农场规划',
    'footer.links.fishing': '钓鱼指南',
    'footer.links.mines': '矿洞探险',
    'footer.links.crafting': '制造烹饪',
    'footer.links.beginner': '新手入门',
    'footer.links.community': '社区中心',
    'footer.links.gingerIsland': '姜岛',
    'footer.links.money': '赚钱攻略',
    'footer.links.achievements': '成就系统',
    'footer.links.combat': '战斗系统',
    'footer.about.desc': '本站为星露谷物语中文攻略站',
    'footer.about.domain': '域名: StardewValley.help',
    'footer.about.copyright': '游戏版权归ConcernedApe所有',
    'footer.bottom': '© 2026 星露谷物语攻略站 | Made with 💚 for Stardew Valley fans',
    'footer.bottom.note': '本站内容仅供学习交流，请支持正版游戏',

    // 通用
    'common.backToTop': '返回顶部',
    'common.loading': '加载中...',
    'common.noResults': '未找到结果',

    // 语言切换按钮
    'lang.switch': 'EN',

    // 移动端菜单
    'menu.toggle': '☰'
  },

  // English
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.seasons': 'Seasons',
    'nav.skills': 'Skills',
    'nav.npc': 'NPC Guide',
    'nav.farm': 'Farm Layout',
    'nav.fishing': 'Fishing',
    'nav.mines': 'Mining',
    'nav.crafting': 'Crafting',
    'nav.beginner': 'Beginner',
    'nav.community': 'Community Center',
    'nav.gingerIsland': 'Ginger Island',
    'nav.money': 'Money Guide',
    'nav.achievements': 'Achievements',
    'nav.combat': 'Combat',
    'nav.foraging': 'Foraging',
    'nav.slime': 'Slime Ranch',
    'nav.desert': 'Desert',
    'nav.mods': 'Mods',
    'nav.multiplayer': 'Multiplayer',
    'nav.update16': 'Version 1.6',

    // Navigation groups
    'nav.group.seasons': 'Seasons',
    'nav.group.skills': 'Skills',
    'nav.group.npc': 'NPC',
    'nav.group.farm': 'Farm',
    'nav.group.fishing': 'Fishing',
    'nav.group.mines': 'Mining',
    'nav.group.more': 'More',

    // Page titles
    'page.title.home': 'Stardew Valley Guide | Complete Strategy Wiki',
    'page.title.seasons': 'Seasonal Guide | Stardew Valley Wiki',
    'page.title.skills': 'Skills System | Stardew Valley Wiki',
    'page.title.npc': 'NPC Guide | Stardew Valley Wiki',
    'page.title.farm': 'Farm Layout | Stardew Valley Wiki',
    'page.title.fishing': 'Fishing Guide | Stardew Valley Wiki',
    'page.title.mines': 'Mining Guide | Stardew Valley Wiki',
    'page.title.crafting': 'Crafting & Cooking | Stardew Valley Wiki',
    'page.title.beginner': 'Beginner Guide | Stardew Valley Wiki',
    'page.title.community': 'Community Center | Stardew Valley Wiki',
    'page.title.gingerIsland': 'Ginger Island | Stardew Valley Wiki',
    'page.title.money': 'Money Guide | Stardew Valley Wiki',
    'page.title.achievements': 'Achievements | Stardew Valley Wiki',
    'page.title.combat': 'Combat System | Stardew Valley Wiki',
    'page.title.foraging': 'Foraging | Stardew Valley Wiki',
    'page.title.slime': 'Slime Ranch | Stardew Valley Wiki',
    'page.title.desert': 'Calico Desert | Stardew Valley Wiki',
    'page.title.mods': 'Mod Guide | Stardew Valley Wiki',
    'page.title.multiplayer': 'Multiplayer | Stardew Valley Wiki',
    'page.title.update16': 'Version 1.6 Update | Stardew Valley Wiki',

    // NPC page translations
    'npc.sidebar.title': '📖 Contents',
    'npc.breadcrumb.home': 'Home',
    'npc.breadcrumb.current': 'NPC Guide',
    'npc.banner.title': '👥 NPC Guide',
    'npc.section.bachelors': '🧑 Marriageable Bachelors (6)',
    'npc.section.bachelors.subtitle': 'The single men of Pelican Town await your friendship and love',
    'npc.section.bachelorettes': '👩 Marriageable Bachelorettes (6)',
    'npc.section.bachelorettes.subtitle': 'Sweet and lovely ladies to spend the seasons with',
    'npc.section.villagers': '🏠 Villagers',
    'npc.section.villagers.subtitle': 'The residents of Pelican Town',
    'npc.section.special': '✨ Special Characters',
    'npc.section.special.subtitle': 'Special NPC characters in the game',
    'npc.section.gifts': '🎁 Gift System Guide',
    'npc.section.gifts.subtitle': 'Learn gift preferences to increase hearts',
    'npc.section.related': '📚 Related Guides',
    'npc.section.related.subtitle': 'More great content recommendations',
    'npc.gift.love': '❤️ Loved',
    'npc.gift.hate': '💔 Hated',
    'npc.gift.loved': 'Hearts +45',
    'npc.gift.liked': 'Hearts +20',
    'npc.gift.neutral': 'Hearts +0',
    'npc.gift.hated': 'Hearts -10',
    'npc.tip': '💡 Tip: You can only give one gift per week to each NPC. Giving gifts on birthdays or festivals is more effective!',

    // Ginger Island page translations
    'ginger.breadcrumb.home': 'Home',
    'ginger.breadcrumb.current': 'Ginger Island',
    'ginger.page_title': '🏝️ Ginger Island Guide',
    'ginger.sidebar.title': '📖 Contents',
    'ginger.sidebar.overview': '🗺️ Island Overview',
    'ginger.sidebar.regions': '🏝️ Island Regions',
    'ginger.sidebar.walnut': '🥜 Golden Walnut Collection',
    'ginger.sidebar.volcano': '🌋 Volcano Dungeon',
    'ginger.sidebar.crops': '🌴 Tropical Crops',
    'ginger.sidebar.related': '📌 Related Guides',
    'ginger.island_overview': '🗺️ Island Overview',
    'ginger.island_overview_subtitle': 'Unlock conditions and island features',
    'ginger.island_regions': '🗺️ Island Regions Guide',
    'ginger.island_regions_subtitle': 'Overview of all Ginger Island areas',
    'ginger.golden_walnut': '🥜 Golden Walnut Collection',
    'ginger.golden_walnut_subtitle': '130 golden walnuts scattered across the island',
    'ginger.volcano_dungeon': '🌋 Volcano Dungeon Guide',
    'ginger.volcano_dungeon_subtitle': 'Challenge the high-difficulty dungeon for rare rewards',
    'ginger.special_crops': '🌴 Ginger Island Special Crops',
    'ginger.special_crops_subtitle': 'Special farming in tropical climate',
    'ginger.related': '📚 Related Guides',

    // 姜岛探索页面内容翻译
    'ginger.unlock_title': 'Unlock Conditions',
    'ginger.unlock_1': 'Complete all Community Center bundles',
    'ginger.unlock_2': 'Have 500g for ferry fare',
    'ginger.unlock_3': "Talk to Captain Iruna on the beach",
    'ginger.features_title': 'Island Features',
    'ginger.feature_1': 'Tropical climate, can grow crops in winter',
    'ginger.feature_2': 'Unique Volcano Dungeon',
    'ginger.feature_3': 'Golden Walnut collection quest',
    'ginger.feature_4': 'West Island Farm area',
    'ginger.beach_title': '🌊 Beach Dock',
    'ginger.beach_desc': 'Where the ferry arrives. Has a small supermarket.',
    'ginger.beach_tip_1': 'Buy coconut and starfruit seeds',
    'ginger.beach_tip_2': 'Meet island NPCs',
    'ginger.beach_tip_3': 'Daily ferry service',
    'ginger.volcano_area_title': '🌋 Volcano Dungeon',
    'ginger.volcano_area_desc': 'Challenging dungeon area with rare minerals.',
    'ginger.volcano_tip_1': 'Requires Combat level 10+',
    'ginger.volcano_tip_2': 'Defeat monsters for minerals',
    'ginger.volcano_tip_3': 'Rare treasure chests and artifacts',
    'ginger.farm_title': '🌾 West Island Farm',
    'ginger.farm_desc': 'Build cabins and grow tropical crops.',
    'ginger.farm_tip_1': 'Build island cabins',
    'ginger.farm_tip_2': 'Plant bananas, pineapples, etc.',
    'ginger.farm_tip_3': 'Unlimited growth cycles',
    'ginger.observatory_title': '🔭 Summit Observatory',
    'ginger.observatory_desc': 'View luck stats for free after unlocking.',
    'ginger.observatory_tip_1': 'Requires collecting golden walnuts',
    'ginger.observatory_tip_2': 'Daily free luck viewing',
    'ginger.observatory_tip_3': 'Trigger special events',
    'ginger.walnut_method_title': 'Main Collection Methods',
    'ginger.table_location': 'Location',
    'ginger.table_count': 'Count',
    'ginger.table_method': 'Method',
    'ginger.walnut_loc_1': 'Various island areas',
    'ginger.walnut_loc_2': 'Volcano Dungeon',
    'ginger.walnut_loc_3': 'Fossil excavation sites',
    'ginger.walnut_loc_4': 'Complete puzzles',
    'ginger.walnut_loc_5': 'NPC gifts',
    'ginger.walnut_meth_1': 'Clear grass, dig',
    'ginger.walnut_meth_2': 'Defeat monsters, dig',
    'ginger.walnut_meth_3': 'Use hoe to dig',
    'ginger.walnut_meth_4': 'Solve island puzzles',
    'ginger.walnut_meth_5': 'Build friendship with island NPCs',
    'ginger.walnut_rewards_title': '🏆 Golden Walnut Milestone Rewards',
    'ginger.walnut_5': '<strong>5</strong> - Unlock ferry dock',
    'ginger.walnut_10': '<strong>10</strong> - Unlock beach supermarket',
    'ginger.walnut_15': '<strong>15</strong> - Unlock east island path',
    'ginger.walnut_20': '<strong>20</strong> - Unlock mountain path',
    'ginger.walnut_30': '<strong>30</strong> - Unlock summit path',
    'ginger.walnut_55': '<strong>55</strong> - Unlock Summit Observatory',
    'ginger.walnut_130': '<strong>130</strong> - All complete!',
    'ginger.volcano_cond_title': 'Entry Requirements',
    'ginger.volcano_cond_1': 'Opens after unlocking Ginger Island',
    'ginger.volcano_cond_2': 'Recommended Combat level 10+',
    'ginger.volcano_cond_3': 'Prepare sufficient food and potions',
    'ginger.volcano_rewards_title': 'Available Items',
    'ginger.volcano_item_1': 'Iridium Ore - Most precious mineral',
    'ginger.volcano_item_2': 'Iridium Bar - Craft top-tier equipment',
    'ginger.volcano_item_3': 'Rare artifacts and gems',
    'ginger.volcano_item_4': 'Golden Walnuts',
    'ginger.table_crop': 'Crop',
    'ginger.table_price': 'Seed Price',
    'ginger.table_days': 'Growth Days',
    'ginger.table_sell': 'Sell Price',
    'ginger.table_note': 'Notes',
    'ginger.crop_coconut': '🥥 Coconut',
    'ginger.crop_banana': '🍌 Banana',
    'ginger.crop_pineapple': '🍍 Pineapple',
    'ginger.crop_mango': '🥭 Mango',
    'ginger.crop_flower': '🌺 Flower',
    'ginger.crop_note_1': 'Can plant on west island',
    'ginger.crop_note_2': 'Tropical fruit',
    'ginger.crop_note_3': 'High-value crop',
    'ginger.crop_note_4': 'Requires island cabin',
    'ginger.crop_note_5': 'Flowers only, no fruit',

    // Community Center page translations
    'community.overview': '🏛️ Community Center Overview',
    'community.routes': '⚖️ Two Paths Comparison',
    'community.bundles': '📦 All Bundle Details',
    'community.rewards': '🎁 Complete Rewards',
    'community.related': '📚 Related Guides',

    // Desert page translations
    'desert.overview': '🏜️ Desert Overview',
    'desert.skull_cave': '⛏️ Skull Cave Guide',
    'desert.trader': '🛒 Desert Trader',
    'desert.tips': '💡 Useful Tips',
    'desert.related': '📚 Related Guides',

    // Mods page translations
    'mods.prep': '📦 Pre-Installation Setup',
    'mods.recommend': '⭐ Popular Mods',
    'mods.conflicts': '⚠️ Resolving Mod Conflicts',
    'mods.related': '📚 Related Guides',

    // Multiplayer page translations
    'multiplayer.methods': '🌐 Multiplayer Methods',
    'multiplayer.roles': '👥 Multiplayer Roles',
    'multiplayer.tips': '⚠️ Important Notes',
    'multiplayer.related': '📚 Related Guides',

    // Version 1.6 page translations
    'update16.items': '🎁 New Items',
    'update16.events': '🎭 New Events',
    'update16.improvements': '⚙️ Game Improvements',
    'update16.related': '📚 Related Guides',

    // Achievements page translations
    'achievements.overview': '🏆 Achievements Overview',
    'achievements.farming': '🌾 Farming Achievements',
    'achievements.mining': '⛏️ Mining Achievements',
    'achievements.fishing': '🎣 Fishing Achievements',
    'achievements.social': '💬 Social Achievements',
    'achievements.related': '📚 Related Guides',

    // Combat page translations
    'combat.profession': '⚔️ Profession Choice',
    'combat.weapons': '🗡️ Weapon Recommendations',
    'combat.monsters': '👹 Monster Guide',
    'combat.tips': '💥 Combat Tips',
    'combat.related': '📚 Related Guides',

    // Money Guide page translations
    'money.core': '💰 Core Money-Making Strategies',
    'money.crops': '🌾 Crop Economy',
    'money.winemaking': '🍷 Wine Making',
    'money.other': '📦 Other Money-Making Methods',
    'money.related': '📚 Related Guides',

    // Beginner page translations
    'beginner.character': '👤 Create Your Character',
    'beginner.firstday': '📅 First Day Guide',
    'beginner.energy': '⚡ Energy Management',
    'beginner.tools': '🔧 Tool Upgrades',
    'beginner.planning': '📆 Seasonal Planning',
    'beginner.related': '📚 Related Guides',

    // Home page hero
    'hero.badge': '🌟 Game Version 1.6 Compatible',
    'hero.title': 'Welcome to <span>Stardew Valley</span>',
    'hero.subtitle': 'The most comprehensive Stardew Valley guide covering farming, fishing, mining, NPC relationships and more',
    'hero.btn.explore': 'Start Exploring',
    'hero.btn.guide': 'Beginner Guide',

    // Search
    'search.placeholder': 'Search guides, crops, NPCs...',
    'search.btn': 'Search',
    'search.noResults': 'No results found',

    // Navigation categories
    'section.nav.title': 'Guide Categories',
    'section.nav.subtitle': 'Choose a module to start your Stardew Valley journey',

    // Popular guides
    'section.hot.title': '✨ Popular Guides',
    'section.hot.subtitle': 'High-value content frequently consulted by players',

    // About game
    'section.about.title': '🎮 About Stardew Valley',
    'about.story': '🌾 You inherited your grandfather\'s old farm in Stardew Valley. With a rusty old tools and a few coins, you set foot on this overgrown land.',
    'about.desc': 'Here, you can rebuild and transform the barren land into a thriving home. Grow crops, raise animals, fish, mine, forage, cook... Build deep friendships with the townspeople, help restore the Community Center, or take a different path with Joja Mart.',
    'about.bottom': '🌟 <strong>No matter what lifestyle you choose, Stardew Valley always welcomes you home.</strong>',
    'about.stats.days': '28 days/season',
    'about.stats.daysDesc': '28 days per season',
    'about.stats.npc': '30+ NPCs',
    'about.stats.npcDesc': 'Social villagers',
    'about.stats.freedom': 'Endless possibilities',
    'about.stats.freedomDesc': 'Free exploration',

    // Navigation card titles
    'card.seasons.title': 'Seasonal Guide',
    'card.seasons.desc': 'Spring planting, summer harvest, fall storage, winter exploration - complete guide for all seasonal crops',
    'card.skills.title': 'Skills System',
    'card.skills.desc': 'Farming, Mining, Foraging, Fishing, Combat - five skill trees with specializations',
    'card.npc.title': 'NPC Guide',
    'card.npc.desc': 'Gift preferences, dating攻略, marriage guide - everything for building relationships',
    'card.farm.title': 'Farm Layout',
    'card.farm.desc': '8 farm types explained, greenhouse farming, automated farm setup guides',
    'card.fishing.title': 'Fishing Guide',
    'card.fishing.desc': 'Fish locations, tackle upgrades, legendary fish catching tips',
    'card.mines.title': 'Mining Guide',
    'card.mines.desc': 'Mine floor layouts, ore distribution, gem collection and boss strategies',
    'card.community.title': 'Community Center',
    'card.community.desc': 'Complete guide for both Community Center bundles and Joja route',
    'card.gingerIsland.title': 'Ginger Island',
    'card.gingerIsland.desc': 'Complete exploration guide for the new area, including fossils and rare items',
    'card.beginner.title': 'Beginner Guide',
    'card.beginner.desc': 'From character creation to first year planning - essential reading for new players',
    'card.money.title': 'Money Guide',
    'card.money.desc': 'From first year goals to becoming a millionaire - best profit analysis',
    'card.achievements.title': 'Achievements',
    'card.achievements.desc': 'Full achievement list with guides to reach 100% completion',
    'card.combat.title': 'Combat System',
    'card.combat.desc': 'Weapon selection, monster slaying tips, boss battle strategies',
    'card.crafting.title': 'Crafting & Cooking',
    'card.crafting.desc': 'Complete crafting recipes, cooking recipes, and auto-grabber setup',
    'card.mods.title': 'Mod Guide',
    'card.mods.desc': 'How to install and use mods to enhance your game experience',

    // Popular guide cards
    'card.year1.title': 'Perfect First Year',
    'card.year1.desc': 'Must-read for beginners! How to plan the first year to complete the Community Center bundles with seasonal checklists.',
    'card.crops.title': 'Best Profit Crops',
    'card.crops.desc': 'Highest profit crops ranked by season, considering growth cycles and keg profitability.',
    'card.gifts.title': 'NPC Favorite Gifts',
    'card.gifts.desc': 'Quick lookup for each NPC\'s favorite gifts - double the effect on birthdays!',
    'card.bundles.title': 'Community Center Bundles',
    'card.bundles.desc': 'Complete guide for all Community Center bundles, including rare item locations and times.',
    'card.minesSpeed.title': 'Mine Speedrun',
    'card.minesSpeed.desc': 'Optimal route from level 1 to 120, elevator unlock conditions, and ore distribution.',
    'card.legendFish.title': 'Legendary Fish Guide',
    'card.legendFish.desc': 'Locations and times for all 6 legendary fish with optimal tackle configuration.',

    // Tags
    'tag.spring': 'Spring',
    'tag.summer': 'Summer',
    'tag.autumn': 'Fall',
    'tag.winter': 'Winter',
    'tag.hot': '🔥 Hot',
    'tag.essential': '💝 Essential',
    'tag.main': '⭐ Main',
    'tag.advanced': '⛏️ Advanced',
    'tag.challenge': '🎣 Challenge',

    // Footer
    'footer.nav.title': '🌾 Guide Categories',
    'footer.advanced.title': '🎣 Advanced Content',
    'footer.resources.title': '🔗 Resources',
    'footer.about.title': '📝 About This Site',
    'footer.links.seasons': 'Seasonal Guide',
    'footer.links.skills': 'Skills System',
    'footer.links.npc': 'NPC Guide',
    'footer.links.farm': 'Farm Layout',
    'footer.links.fishing': 'Fishing Guide',
    'footer.links.mines': 'Mining Guide',
    'footer.links.crafting': 'Crafting',
    'footer.links.beginner': 'Beginner Guide',
    'footer.links.community': 'Community Center',
    'footer.links.gingerIsland': 'Ginger Island',
    'footer.links.money': 'Money Guide',
    'footer.links.achievements': 'Achievements',
    'footer.links.combat': 'Combat System',
    'footer.about.desc': 'Stardew Valley Chinese Guide',
    'footer.about.domain': 'Domain: StardewValley.help',
    'footer.about.copyright': 'Game copyright belongs to ConcernedApe',
    'footer.bottom': '© 2026 Stardew Valley Guide | Made with 💚 for Stardew Valley fans',
    'footer.bottom.note': 'Content for learning only. Please support the official game.',

    // Common
    'common.backToTop': 'Back to Top',
    'common.loading': 'Loading...',
    'common.noResults': 'No results found',

    // Language switch button
    'lang.switch': '中文',

    // Mobile menu
    'menu.toggle': '☰'
  }
};

// 当前语言 - 默认为 English
let currentLang = 'en';

/**
 * 初始化语言设置
 */
function initI18n() {
  // 从 localStorage 读取语言设置
  const savedLang = localStorage.getItem('language');
  if (savedLang && i18n[savedLang]) {
    currentLang = savedLang;
  } else {
    // 默认使用 English
    currentLang = 'en';
  }

  // 应用语言
  applyLanguage(currentLang);
}

/**
 * 切换语言
 */
function toggleLanguage() {
  currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
  localStorage.setItem('language', currentLang);
  applyLanguage(currentLang);
  updateLangButton();
}

/**
 * 应用语言到页面
 */
function applyLanguage(lang) {
  const translations = i18n[lang];
  if (!translations) return;

  // 更新所有带有 data-i18n 属性的元素 (innerText)
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      element.innerText = translations[key];
    }
  });

  // 更新所有带有 data-i18n-html 属性的元素 (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[key]) {
      element.innerHTML = translations[key];
    }
  });

  // 更新所有带有 data-i18n-placeholder 属性的输入框
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[key]) {
      element.placeholder = translations[key];
    }
  });

  // 更新所有带有 data-i18n-title 属性的元素
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    if (translations[key]) {
      element.title = translations[key];
    }
  });

  // 更新页面标题
  const pageKey = document.body.getAttribute('data-page') || 'home';
  const titleKey = `page.title.${pageKey}`;
  if (translations[titleKey]) {
    document.title = translations[titleKey];
  }

  // 设置 html lang 属性
  document.documentElement.lang = lang;
}

/**
 * 更新语言切换按钮文本
 */
function updateLangButton() {
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  }
}

/**
 * 获取翻译文本
 * @param {string} key - 翻译键名
 * @returns {string} 翻译后的文本
 */
function t(key) {
  return i18n[currentLang][key] || key;
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', initI18n);
