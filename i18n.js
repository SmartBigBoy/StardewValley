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
    'footer.about.domain': '域名: openclow.net',
    'footer.about.copyright': '游戏版权归ConcernedApe所有',
    'footer.bottom': '© 2024 星露谷物语攻略站 | Made with 💚 for Stardew Valley fans',
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
    'footer.about.domain': 'Domain: openclow.net',
    'footer.about.copyright': 'Game copyright belongs to ConcernedApe',
    'footer.bottom': '© 2024 Stardew Valley Guide | Made with 💚 for Stardew Valley fans',
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
