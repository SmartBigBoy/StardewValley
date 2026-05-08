/**
 * 星露谷物语攻略站 - 交互脚本
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initThemeToggle();
  initLangToggle();
  applyLanguage();
  initScrollEffects();
  initSearch();
  initBackToTop();
  initMobileMenu();
});

/**
 * 语言切换功能
 */
function initLangToggle() {
  const langToggle = document.querySelector('.lang-toggle');
  if (!langToggle) return;
  
  // 从 localStorage 读取语言设置
  const savedLang = localStorage.getItem('language');
  const currentLang = savedLang || 'zh-CN'; // 默认中文
  
  // 应用保存的语言
  if (savedLang) {
    applyLanguage(currentLang);
  }
  
  // 更新按钮文本
  langToggle.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  
  // 点击切换语言
  langToggle.addEventListener('click', function() {
    toggleLanguage(); // 使用 i18n.js 中的函数，不刷新页面
  });
}

/**
 * 导航栏滚动效果
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // 添加阴影效果
    if (currentScroll > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * 主题切换（明/暗模式）
 */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  // 从 localStorage 读取主题设置
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
  
  themeToggle.addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });
}

/**
 * 滚动动画效果
 */
function initScrollEffects() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animateElements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animateElements.forEach(el => observer.observe(el));
}

/**
 * 搜索功能 - 扩充版 300+ 条索引
 */
function initSearch() {
  const searchInput = document.querySelector('.search-box input');
  const searchBtn = document.querySelector('.search-box button');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput || !searchBtn) return;
  
  // 扩充搜索数据 - 300+ 条索引
  const searchData = [
    // ==================== 页面导航 ====================
    { keywords: ['首页', '主页', 'home', 'index'], page: 'index.html', title: '首页', desc: '星露谷物语攻略站首页' },
    { keywords: ['季节', '季节攻略', 'seasons', 'season', 'spring', 'summer', 'fall', 'autumn', 'winter'], page: 'seasons.html', title: '季节攻略', desc: '各季节作物种植攻略与节日活动' },
    { keywords: ['新手', '入门', 'beginner', 'tutorial', '新手教程'], page: 'beginner.html', title: '新手入门', desc: '游戏开局必备知识与第一年攻略' },
    { keywords: ['技能', '升级', 'skills', 'skill', 'level', '等级'], page: 'skills.html', title: '技能系统', desc: ' Farming/Foraging/Mining/Fishing/Combat 五大技能' },
    { keywords: ['npc', '好感', '礼物', '村民', 'gift', 'relationship', 'villager'], page: 'npc.html', title: 'NPC攻略', desc: '可结婚对象礼物喜好与事件攻略' },
    { keywords: ['农场', '规划', 'farm', 'greenhouse', '温室'], page: 'farm.html', title: '农场规划', desc: '8种农场类型分析与温室布局' },
    { keywords: ['钓鱼', '鱼饵', 'fishing', 'tackle', 'fish', '鱼'], page: 'fishing.html', title: '钓鱼指南', desc: '鱼类图鉴、传说鱼攻略与钓竿升级' },
    { keywords: ['矿洞', '矿石', 'mining', 'ore', 'gem', 'mine', '矿'], page: 'mines.html', title: '矿洞探险', desc: '采矿业完整攻略与怪物图鉴' },
    { keywords: ['制造', '合成', 'crafting', 'cooking', '食谱', '配方'], page: 'crafting.html', title: '制造烹饪', desc: '装备合成与食谱烹饪' },
    { keywords: ['战斗', '武器', 'combat', 'monster', '怪物'], page: 'combat.html', title: '战斗系统', desc: '武器选择与怪物攻略' },
    { keywords: ['社区中心', '献祭', 'bundle', 'community center', 'jodi'], page: 'community-center.html', title: '社区中心', desc: '全部收集包完成攻略' },
    { keywords: ['姜岛', '化石', 'ginger island', 'volcano', '火山'], page: 'ginger-island.html', title: '姜岛攻略', desc: '姜岛探索与香蕉神庙' },
    { keywords: ['赚钱', '收益', '利润', 'money', 'profit', 'gold'], page: 'money.html', title: '赚钱攻略', desc: '高效赚钱方法与投资建议' },
    { keywords: ['成就', 'achievements', '成就系统'], page: 'achievements.html', title: '成就系统', desc: '全成就列表与解锁条件' },
    { keywords: ['mod', 'mods', '模组', '模组教程'], page: 'mods.html', title: 'Mod教程', desc: '如何安装和使用Mod' },
    { keywords: ['联机', '多人', 'multiplayer', 'multi-player', '合作'], page: 'multiplayer.html', title: '联机教程', desc: '多人模式设置与联机技巧' },
    { keywords: ['1.6', '版本', 'update', 'version', '更新'], page: 'update16.html', title: '1.6版本更新', desc: '最新版本更新内容' },
    { keywords: ['沙漠', '沙漠商人', 'desert', '商人', 'cart'], page: 'desert.html', title: '沙漠商人', desc: '沙漠集市与沙漠商人' },

    // ==================== 春季作物 ====================
    { keywords: ['防风草', 'parsnip', '春季作物', '春季', '种子20g'], page: 'seasons.html#spring', title: '防风草 - 春季作物', desc: '种子20g，4天成熟，售价35g，日均利润3.75g' },
    { keywords: ['土豆', 'potato', '春季作物', '春季', '种子50g'], page: 'seasons.html#spring', title: '土豆 - 春季作物', desc: '种子50g，6天成熟，售价80g，有几率多收1-2个' },
    { keywords: ['花椰菜', 'cauliflower', '春季作物', '春季', '种子80g'], page: 'seasons.html#spring', title: '花椰菜 - 春季作物', desc: '种子80g，12天成熟，售价175g，利润之王' },
    { keywords: ['草莓', 'strawberry', '春季作物', '春季', '种子100g', '花舞节'], page: 'seasons.html#spring', title: '草莓 - 春季作物', desc: '花舞节购入100g，8天成熟，4天再收，售价120g' },
    { keywords: ['郁金香', 'tulip', '春季作物', '春季', '种子20g'], page: 'seasons.html#spring', title: '郁金香 - 春季作物', desc: '种子20g，6天成熟，售价30g' },
    { keywords: ['蓝爵', 'blue jazz', '春季作物', '春季', '蓝色', '花'], page: 'seasons.html#spring', title: '蓝爵 - 春季作物', desc: '种子30g，7天成熟，售价50g' },
    { keywords: ['甘蓝菜', 'kale', '春季作物', '春季', '种子70g'], page: 'seasons.html#spring', title: '甘蓝菜 - 春季作物', desc: '种子70g，6天成熟，售价110g' },
    { keywords: ['大黄', 'rhubarb', '春季作物', '春季', '红色', '种子100g'], page: 'seasons.html#spring', title: '大黄 - 春季作物', desc: '种子100g，13天成熟，售价220g' },
    { keywords: ['蒜', 'garlic', '春季作物', '春季', '种子40g'], page: 'seasons.html#spring', title: '蒜 - 春季作物', desc: '种子40g，4天成熟，售价60g' },
    { keywords: ['咖啡豆', 'coffee bean', '春季作物', '多次收获', '春季'], page: 'seasons.html#spring', title: '咖啡豆 - 春季作物', desc: '旅行货车450-2500g，10天成熟，售价15x4' },
    { keywords: ['青豆', 'green bean', '春季作物', '春季', '豆', '种子60g'], page: 'seasons.html#spring', title: '青豆 - 春季作物', desc: '种子60g，10天成熟，3天再收，售价40g' },
    { keywords: ['胡萝卜', 'carrot', '春季作物', '春季', '浣熊商店'], page: 'seasons.html#spring', title: '胡萝卜 - 春季作物', desc: '浣熊商店兑换，3天成熟，售价35g' },
    { keywords: ['未碾米', 'unmilled rice', '春季作物', '春季', '稻米'], page: 'seasons.html#spring', title: '未碾米 - 春季作物', desc: '种子40g，灌溉6天/未灌溉8天，售价30g' },

    // ==================== 夏季作物 ====================
    { keywords: ['蓝莓', 'blueberry', '夏季作物', '夏季', '种子80g', '多次收获'], page: 'seasons.html#summer', title: '蓝莓 - 夏季作物', desc: '种子80g，4天成熟再收，售价80g，夏季利润之王' },
    { keywords: ['西瓜', 'watermelon', '夏季作物', '夏季', '种子8g', '种子80g'], page: 'seasons.html#summer', title: '西瓜 - 夏季作物', desc: '种子80g，12天成熟，售价300g' },
    { keywords: ['辣椒', 'hot pepper', '夏季作物', '夏季', '红色', '种子40g'], page: 'seasons.html#summer', title: '辣椒 - 夏季作物', desc: '种子40g，5天成熟再收，售价40g' },
    { keywords: ['番茄', 'tomato', '夏季作物', '夏季', '红色', '种子50g'], page: 'seasons.html#summer', title: '番茄 - 夏季作物', desc: '种子50g，6天成熟再收，售价60g' },
    { keywords: ['甜瓜', 'melon', '夏季作物', '夏季', '种子80g'], page: 'seasons.html#summer', title: '甜瓜 - 夏季作物', desc: '种子80g，12天成熟，售价250g' },
    { keywords: ['玉米', 'corn', '夏季作物', '秋季', '夏季', '种子150g'], page: 'seasons.html#summer', title: '玉米 - 夏季作物', desc: '种子150g，14天成熟，夏季和秋季可种，售价150g' },
    { keywords: ['黑莓', 'blackberry', '秋季采集', '秋季', '采集'], page: 'seasons.html#autumn', title: '黑莓 - 秋季采集', desc: '秋季采集，售价20g(普通)/40g(银)/80g(金)/120g(铱)' },
    { keywords: ['野山葵', 'leek', '春季采集', '春季', '根茎'], page: 'seasons.html#spring', title: '野山葵 - 春季采集', desc: '秘密森林/煤矿森林，售价50-100g' },
    { keywords: ['黄水仙', 'daffodil', '春季采集', '春季', '花'], page: 'seasons.html#spring', title: '黄水仙 - 春季采集', desc: '鹈鹕镇100%，售价30g' },
    { keywords: ['韭葱', 'leek', '春季采集', '春季'], page: 'seasons.html#spring', title: '韭葱 - 春季采集', desc: '售价60g，烹饪材料' },

    // ==================== 秋季作物 ====================
    { keywords: ['南瓜', 'pumpkin', '秋季作物', '秋季', '种子100g'], page: 'seasons.html#autumn', title: '南瓜 - 秋季作物', desc: '种子100g，14天成熟，售价350g，万圣节' },
    { keywords: ['红叶卷心菜', 'red cabbage', '秋季作物', '秋季', '种子100g'], page: 'seasons.html#autumn', title: '红叶卷心菜 - 秋季作物', desc: '种子100g，9天成熟，售价260g' },
    { keywords: ['蔓越莓', 'cranberry', '秋季作物', '秋季', '种子240g'], page: 'seasons.html#autumn', title: '蔓越莓 - 秋季作物', desc: '种子240g，7天成熟再收，售价75g' },
    { keywords: ['山药', 'yam', '秋季作物', '秋季', '种子80g'], page: 'seasons.html#autumn', title: '山药 - 秋季作物', desc: '种子80g，15天成熟，售价160g' },
    { keywords: ['向日葵', 'sunflower', '秋季作物', '秋季', '种子200g', '种子120g'], page: 'seasons.html#autumn', title: '向日葵 - 秋季作物', desc: '种子120g/200g，8天成熟，售价80g/160g' },
    { keywords: ['菊花', 'chrysanthemum', '秋季采集', '秋季', '花'], page: 'seasons.html#autumn', title: '菊花 - 秋季采集', desc: '售价80g，秋季特有' },
    { keywords: ['普通蘑菇', 'common mushroom', '秋季采集', '秋季', '蘑菇'], page: 'seasons.html#autumn', title: '普通蘑菇 - 秋季采集', desc: '售价40g，可种植' },
    { keywords: ['美洲大树莓', 'spring onion', '春季采集', '春季', '树莓'], page: 'seasons.html#spring', title: '美洲大树莓 - 春季采集', desc: '春季15-18日成熟，售价8-40g' },

    // ==================== 冬季作物 ====================
    { keywords: ['冬季赚钱', 'winter money', '冬季', '冰', 'ice'], page: 'seasons.html#winter', title: '冬季赚钱', desc: '冬季无作物，钓鱼/矿洞/采集/养殖赚钱' },
    { keywords: ['芜菁', 'turnip', '冬季作物', '冬季', '种子70g'], page: 'seasons.html#winter', title: '芜菁 - 冬季作物', desc: '种子70g，8天成熟，售价55g' },
    { keywords: ['土豆', 'potato', '冬季', '冬季作物'], page: 'seasons.html#winter', title: '土豆 - 冬季作物', desc: '冬季可以种土豆吗？不行！冬季作物只有芜菁' },
    { keywords: ['防风草', 'parsnip', '冬季', '冬季作物'], page: 'seasons.html#winter', title: '防风草 - 冬季作物', desc: '冬季可以种防风草吗？不行！' },

    // ==================== 节日活动 ====================
    { keywords: ['复活节', 'easter', '春季13日', '彩蛋'], page: 'seasons.html#spring', title: '复活节 - 春季13日', desc: '找彩蛋小游戏，找到30个蛋可获奖品' },
    { keywords: ['花舞节', 'flower dance', '春季24日', '春季', '舞蹈'], page: 'seasons.html#spring', title: '花舞节 - 春季24日', desc: '参加舞会，需邀请一位舞伴' },
    { keywords: ['沙漠节', 'desert festival', '春季15-17日', '沙漠'], page: 'seasons.html#spring', title: '沙漠节 - 春季15-17日', desc: '沙漠商人处购买稀有物品' },
    { keywords: ['夏威夷宴会', 'luau', '夏季', '夏季14日', '宴会'], page: 'seasons.html#summer', title: '夏威夷宴会 - 夏季14日', desc: '献上最佳食材提升社区好感' },
    { keywords: ['月光水母', 'night market', '秋季', '秋季17日', '夜市'], page: 'seasons.html#autumn', title: '月光水母夜市 - 秋季17日', desc: '与海龟游泳、购物、占卜' },
    { keywords: ['万灵节', 'spirit eve', '秋季', '秋季26日', '万圣'], page: 'seasons.html#autumn', title: '万灵节 - 秋季26日', desc: '进入矿洞挑战怪物' },
    { keywords: ['冬日诗集', 'festival of ice', '冬季', '冬季8日', '冬季'], page: 'seasons.html#winter', title: '冬日诗集 - 冬季8日', desc: '雪球游戏和冰雕比赛' },
    { keywords: ['冰雪祭', 'festival of winter', '冬季', '冬季14日', '圣诞'], page: 'seasons.html#winter', title: '冰雪祭 - 冬季14日', desc: '赠送礼物给各NPC' },
    { keywords: ['冬星漫步', 'night market', '冬季', '冬季17日'], page: 'seasons.html#winter', title: '冬星漫步 - 冬季17日', desc: '参观水下展览' },

    // ==================== NPC攻略 ====================
    // 可结婚男性
    { keywords: ['阿比盖尔', 'abigail', '可结婚', '紫色', '游戏', '地下室'], page: 'npc.html', title: '阿比盖尔 - 可结婚对象', desc: '生日春季20日，住址小屋，最爱礼物紫水晶/南瓜派/洞穴萝卜' },
    { keywords: ['艾米丽', 'emily', '可结婚', '蓝色', '裁缝', '鹦鹉'], page: 'npc.html', title: '艾米丽 - 可结婚对象', desc: '生日春季27日，住址鹈鹕镇，最爱礼物红宝石/椰子/鸭毛' },
    { keywords: ['海莉', 'haley', '可结婚', '金发', '相机', '前任'], page: 'npc.html', title: '海莉 - 可结婚对象', desc: '生日春季14日，住址鹈鹕镇，最爱礼物椰子/向日葵/凤梨' },
    { keywords: ['莉亚', 'leah', '可结婚', '山羊', '艺术家', '寡妇'], page: 'npc.html', title: '莉亚 - 可结婚对象', desc: '生日冬季23日，住址山坡木屋，最爱礼物山羊奶酪/松露/炒蘑菇' },
    { keywords: ['玛鲁', 'maru', '可结婚', '护士', '科学家', '机器人'], page: 'npc.html', title: '玛鲁 - 可结婚对象', desc: '生日夏季10日，住址诊所二楼，最爱礼物草莓/钻石/充电电池' },
    { keywords: ['潘妮', 'penny', '可结婚', '老师', '拖车', '读书'], page: 'npc.html', title: '潘妮 - 可结婚对象', desc: '生日秋季2日，住址河畔拖车，最爱礼物香脆石鱼/黄宝石/钻石' },
    { keywords: ['亚历克斯', 'alex', '可结婚', '运动员', 'gridball', 'football'], page: 'npc.html', title: '亚历克斯 - 可结婚对象', desc: '生日夏季13日，住址海滩小屋，最爱礼物完整早餐/海陆混合披萨' },
    { keywords: ['艾利欧特', 'elliott', '可结婚', '作家', '作家', '作家'], page: 'npc.html', title: '艾利欧特 - 可结婚对象', desc: '生日秋季5日，住址海滩灯塔，最爱礼物螃蟹大餐/龙涎香/鸭蛋黄' },
    { keywords: ['哈维', 'harvey', '可结婚', '医生', '诊所', '咖啡'], page: 'npc.html', title: '哈维 - 可结婚对象', desc: '生日冬季14日，住址诊所，最爱礼物咖啡/松露/腌菜' },
    { keywords: ['山姆', 'sam', '可结婚', '滑板', '音乐', 'band'], page: 'npc.html', title: '山姆 - 可结婚对象', desc: '生日夏季17日，住址鹈鹕镇，最爱礼物Trader Joe Pep/披萨/枫糖浆棒' },
    { keywords: ['塞巴斯蒂安', 'sebastian', '可结婚', '程序员', '继父', '骷髅'], page: 'npc.html', title: '塞巴斯蒂安 - 可结婚对象', desc: '生日冬季20日，住址山坡，最爱礼物冰柱/寿司/石榴' },
    { keywords: ['谢恩', 'shane', '可结婚', '喝酒', '酒鬼', '鸡'], page: 'npc.html', title: '谢恩 - 可结婚对象', desc: '生日春季20日，住址牧场，最爱礼物辛辣食物/辣椒/啤酒' },
    // NPC生日
    { keywords: ['肯特', 'kent', '生日', '春季4日', '退伍军人'], page: 'npc.html', title: '肯特 - NPC', desc: '生日春季4日，退伍军人' },
    { keywords: ['刘易斯', 'lewis', '生日', '春季7日', '镇长'], page: 'npc.html', title: '刘易斯 - NPC', desc: '生日春季7日，鹈鹕镇镇长' },
    { keywords: ['文森特', 'vincent', '生日', '春季10日', '小孩'], page: 'npc.html', title: '文森特 - NPC', desc: '生日春季10日，小孩' },
    { keywords: ['皮埃尔', 'pierre', '生日', '春季26日', '杂货商'], page: 'npc.html', title: '皮埃尔 - NPC', desc: '生日春季26日，杂货店老板' },
    { keywords: ['潘姆', 'pam', '生日', '春季18日', '公交'], page: 'npc.html', title: '潘姆 - NPC', desc: '生日春季18日，公车司机' },
    { keywords: ['卡洛琳', 'caroline', '生日', '冬季7日', '杂货商'], page: 'npc.html', title: '卡洛琳 - NPC', desc: '生日冬季7日，皮埃尔妻子' },
    { keywords: ['罗宾', 'robin', '生日', '冬季21日', '木匠'], page: 'npc.html', title: '罗宾 - NPC', desc: '生日冬季21日，木匠' },
    { keywords: ['德米特里厄斯', 'demetrius', '生日', '冬季19日', '科学家'], page: 'npc.html', title: '德米特里厄斯 - NPC', desc: '生日冬季19日，科学家' },
    { keywords: ['贾斯', 'jas', '生日', '夏季4日', '小孩'], page: 'npc.html', title: '贾斯 - NPC', desc: '生日夏季4日，小女孩' },
    { keywords: ['文森特', 'vincent', '生日', '夏季10日', '小孩'], page: 'npc.html', title: '文森特 - NPC', desc: '生日夏季10日，小男孩' },
    { keywords: ['威利', 'willy', '生日', '夏季24日', '钓鱼'], page: 'npc.html', title: '威利 - NPC', desc: '生日夏季24日，钓鱼商人' },
    { keywords: ['格斯', 'gus', '生日', '冬季24日', '酒馆'], page: 'npc.html', title: '格斯 - NPC', desc: '生日冬季24日，酒馆老板' },
    { keywords: ['克林特', 'clint', '生日', '冬季26日', '铁匠'], page: 'npc.html', title: '克林特 - NPC', desc: '生日冬季26日，铁匠' },
    { keywords: ['法师', 'wizard', '生日', '法师塔', '魔法'], page: 'npc.html', title: '法师 - NPC', desc: '住址法师塔，可帮助找矮人' },
    { keywords: ['矮人', 'dwarf', '生日', '矿洞', '矿石'], page: 'npc.html', title: '矮人 - NPC', desc: '住址矿洞，需解锁矿洞入口' },
    { keywords: ['科罗布斯', 'krobus', '生日', '下水道', '影子'], page: 'npc.html', title: '科罗布斯 - NPC', desc: '住址下水道，可成为室友' },
    { keywords: ['桑迪', 'sandy', '生日', '沙漠', '沙漠商人'], page: 'npc.html', title: '桑迪 - NPC', desc: '住址沙漠，可送她郁金香' },
    { keywords: ['爷爷', 'grandpa', '生日', '评价', '鬼魂'], page: 'npc.html', title: '爷爷 - NPC', desc: '墓地附近，第2年评价农场' },

    // ==================== 钓鱼系统 ====================
    { keywords: ['传说鱼', 'legendary fish', '传说', 'legendary'], page: 'fishing.html', title: '传说鱼攻略', desc: '全部5条传说鱼位置、时间、天气要求' },
    { keywords: ['绯红鱼', 'crimsonfish', '传说鱼', '夏季', '海洋'], page: 'fishing.html', title: '绯红鱼 - 传说鱼', desc: '夏季海洋，6:00-7:00pm，雨天，难度50' },
    { keywords: ['河豚', 'pufferfish', '传说鱼', '夏季', '海洋'], page: 'fishing.html', title: '河豚 - 传说鱼', desc: '夏季海洋，12:00-4:00pm，晴天，难度60' },
    { keywords: ['_SUPER_HOOK', '超级钩', '传说鱼', '传说'], page: 'fishing.html', title: '超级钩 - 传说鱼', desc: '全年湖泊，6:00-2:00am，任意天气，难度55' },
    { keywords: ['午夜鲤鱼', 'midnight carp', '传说鱼', '冬季', '深山'], page: 'fishing.html', title: '午夜鲤鱼 - 传说鱼', desc: '冬季深山湖泊，22:00-2:00am，任意天气，难度55' },
    { keywords: ['传说鱼_legendary', '传说鱼_legend', 'legend', '传说'], page: 'fishing.html', title: '传说鱼 - 全部', desc: '全部5条传说鱼：绯红鱼/河豚/SUPER_HOOK/午夜鲤鱼/冰柱鱼' },
    { keywords: ['冰柱鱼', 'angler', '传说鱼', '鮟鱇', '传说'], page: 'fishing.html', title: '冰柱鱼 - 传说鱼', desc: '全年河流最北端，全天，任意天气，难度85' },
    { keywords: ['钓竿', 'fishing rod', '钓竿升级', 'rod'], page: 'fishing.html', title: '钓竿升级路线', desc: '竹钓竿→玻璃浮筒→鸢尾花钓竿→irkle钓竿→高级钓竿' },
    { keywords: ['玻璃浮筒', 'bamboo pole', '钓竿', '玻璃'], page: 'fishing.html', title: '玻璃浮筒', desc: '钓鱼等级3解锁，鹈鹕镇商店购买' },
    { keywords: ['鸢尾花钓竿', 'fiberglass rod', '钓竿', 'iris'], page: 'fishing.html', title: '鸢尾花钓竿', desc: '钓鱼等级6解锁，威利处购买' },
    { keywords: ['irkle', 'irkle', 'irkle', '钓竿'], page: 'fishing.html', title: 'irkle钓竿', desc: '钓鱼等级8解锁，可装备诱饵' },
    { keywords: ['高级钓竿', 'training rod', '钓竿', 'training'], page: 'fishing.html', title: '高级钓竿', desc: '钓鱼等级9解锁，降低难度但不用卷线' },
    { keywords: ['鱼饵', 'bait', '诱饵', 'lure'], page: 'fishing.html', title: '鱼饵', desc: '蚯蚓/蜜蜂/萤火虫/鸠鸠蝇等，提高钓鱼成功率' },
    { keywords: ['软饵', 'soft bait', '鱼饵', '饵'], page: 'fishing.html', title: '软饵', desc: '增加小鱼上钩几率' },
    { keywords: ['鱼陷阱', 'trap', 'tr', 'tr'], page: 'fishing.html', title: '鱼陷阱', desc: '提高大鱼上钩几率' },
    { keywords: ['卷线器', 'reel', '卷线器', 'reel'], page: 'fishing.html', title: '卷线器', desc: '加快收线速度' },

    // ==================== 矿石系统 ====================
    { keywords: ['铜矿', 'copper', '矿石', 'copper ore', '矿洞'], page: 'mines.html', title: '铜矿 - 矿石', desc: '矿洞1-39层，售价5g' },
    { keywords: ['铁矿', 'iron', '矿石', 'iron ore', '矿洞'], page: 'mines.html', title: '铁矿 - 矿石', desc: '矿洞40-69层，售价10g' },
    { keywords: ['金矿', 'gold', '矿石', 'gold ore', '矿洞'], page: 'mines.html', title: '金矿 - 矿石', desc: '矿洞70-99层，售价25g' },
    { keywords: ['铱矿', 'iridium', '矿石', 'iridium ore', ' skull cavern'], page: 'mines.html', title: '铱矿 - 矿石', desc: '骷髅洞100层+，售价100g，最稀有' },
    { keywords: ['煤炭', 'coal', '矿石', '燃料', 'mining'], page: 'mines.html', title: '煤炭 - 矿石', desc: '熔炉燃料，制造合金必备' },
    { keywords: ['锭', 'ingot', '铜锭', '铁锭', '金锭', '锭'], page: 'mines.html', title: '金属锭', desc: '铜锭/铁锭/金锭，制作高级工具' },
    { keywords: ['精炼石英', 'refined quartz', '矿石', '熔炉'], page: 'mines.html', title: '精炼石英', desc: '熔炉加工，售价15g' },
    { keywords: ['绿宝石', 'emerald', '宝石', '矿石', 'green'], page: 'mines.html', title: '绿宝石', desc: '矿洞产出，售价250g，最爱礼物' },
    { keywords: ['红宝石', 'ruby', '宝石', '矿石', 'red'], page: 'mines.html', title: '红宝石', desc: '矿洞产出，售价250g，最爱礼物' },
    { keywords: ['紫水晶', 'amethyst', '宝石', '矿石', 'purple'], page: 'mines.html', title: '紫水晶', desc: '矿洞产出，售价100g，最爱礼物' },
    { keywords: ['黄玉', 'topaz', '宝石', '矿石', 'yellow'], page: 'mines.html', title: '黄玉', desc: '矿洞产出，售价80g，最爱礼物' },
    { keywords: ['翡翠', 'jade', '宝石', '矿石', 'green'], page: 'mines.html', title: '翡翠', desc: '矿洞产出，售价200g，可制作祭坛' },
    { keywords: ['蓝宝石', 'aquamarine', '宝石', '矿石', 'blue'], page: 'mines.html', title: '蓝宝石', desc: '矿洞产出，售价180g，最爱礼物' },
    { keywords: ['钻石', 'diamond', '宝石', '矿石', '稀有'], page: 'mines.html', title: '钻石', desc: '矿洞产出，售价750g，可制作项链' },

    // ==================== 武器系统 ====================
    { keywords: ['锈剑', 'rusty sword', '武器', '初始'], page: 'combat.html', title: '锈剑 - 初始武器', desc: '初始武器，伤害3-5' },
    { keywords: ['木剑', 'wooden blade', '武器', '木'], page: 'combat.html', title: '木剑', desc: '矿石采购，伤害5-10' },
    { keywords: ['骑士剑', 'steel falchion', '武器', 'steel'], page: 'combat.html', title: '骑士剑', desc: '商店购买，伤害10-15' },
    { keywords: ['海盗剑', 'pirates sword', '武器', 'pirate'], page: 'combat.html', title: '海盗剑', desc: '骷髅洞，伤害15-25' },
    { keywords: ['银河剑', 'galaxy sword', '武器', 'galaxy', '传说'], page: 'combat.html', title: '银河剑', desc: '任务奖励，伤害30-50，最强单手剑' },
    { keywords: ['屠龙剑', 'dragontooth cutlass', '武器', 'dragon', '龙'], page: 'combat.html', title: '屠龙剑', desc: '火山地牢，伤害22-28' },
    { keywords: ['暗影匕首', 'shadow dagger', '武器', 'shadow', 'd'], page: 'combat.html', title: '暗影匕首', desc: '骷髅洞，伤害20-30' },
    { keywords: ['钻石匕首', 'crystal dagger', '武器', 'crystal'], page: 'combat.html', title: '钻石匕首', desc: '制作，伤害30-40' },
    { keywords: ['银河匕首', 'galaxy dagger', '武器', 'galaxy'], page: 'combat.html', title: '银河匕首', desc: '任务奖励，伤害20-25' },
    { keywords: ['无尽匕首', 'infinity dagger', '武器', 'infinity'], page: 'combat.html', title: '无尽匕首', desc: '升级银河匕首，伤害40-50' },
    { keywords: ['无尽之刃', 'infinity blade', '武器', 'infinity'], page: 'combat.html', title: '无尽之刃', desc: '升级银河剑，伤害55-65' },
    { keywords: ['骨剑', 'bone sword', '武器', 'bone'], page: 'combat.html', title: '骨剑', desc: '骷髅洞，伤害10-20' },
    { keywords: ['熔岩刀', 'lava katana', '武器', 'lava'], page: 'combat.html', title: '熔岩刀', desc: '火山地牢，伤害25-35' },
    { keywords: ['黑暗之剑', 'dark sword', '武器', 'dark', 'darksword'], page: 'combat.html', title: '黑暗之剑', desc: '骷髅洞，伤害22-27' },

    // ==================== 制造物品 ====================
    { keywords: ['洒水器', 'sprinkler', '自动化', 'water'], page: 'crafting.html', title: '洒水器', desc: '基础/品质/铱洒水器，分别覆盖4/8/24格' },
    { keywords: ['优质洒水器', 'quality sprinkler', '洒水器', '品质'], page: 'crafting.html', title: '优质洒水器', desc: '覆盖8格，每天自动浇水' },
    { keywords: ['铱洒水器', 'iridium sprinkler', '洒水器', 'iridium'], page: 'crafting.html', title: '铱洒水器', desc: '覆盖24格，每天自动浇水' },
    { keywords: ['小桶', 'keg', '酿酒', 'beer', '葡萄酒'], page: 'crafting.html', title: '小桶', desc: '将水果酿酒，利润翻5-8倍' },
    { keywords: ['罐头瓶', 'preserves jar', '果酱', 'pickle'], page: 'crafting.html', title: '罐头瓶', desc: '将水果/蔬菜制成果酱/腌菜，价值翻2倍' },
    { keywords: ['熔炉', 'furnace', '熔炉', 'smelting'], page: 'crafting.html', title: '熔炉', desc: '熔炼矿石必备设备' },
    { keywords: ['烘干机', 'dehydrator', '干草', 'hay'], page: 'crafting.html', title: '烘干机', desc: '将水果烘干' },
    { keywords: ['起司机', 'cheese press', '起司', '奶酪'], page: 'crafting.html', title: '起司机', desc: '将牛奶制成奶酪' },
    { keywords: ['蜂箱', 'bee house', '蜂蜜', 'hive'], page: 'crafting.html', title: '蜂箱', desc: '生产蜂蜜，野外采集花蜜' },
    { keywords: ['灯', 'lamp', '灯笼', 'light'], page: 'crafting.html', title: '灯笼', desc: '矿洞照明' },
    { keywords: ['晶球', 'crystalarium', '复制', 'gem'], page: 'crafting.html', title: '晶球', desc: '复制矿石和宝石' },
    { keywords: ['骨骨', 'bone mill', '骨', '骨'], page: 'crafting.html', title: '骨骨', desc: '将骨头加工成骨粉' },
    { keywords: ['发货箱', 'shipping box', '发货', '卖'], page: 'farm.html', title: '发货箱', desc: '自动出售物品' },
    { keywords: ['储物箱', 'chest', '存储', '箱子'], page: 'farm.html', title: '储物箱', desc: '存储物品，每个农场最多2个' },
    { keywords: ['稻草人', 'scarecrow', '稻草人', '驱赶乌鸦'], page: 'farm.html', title: '稻草人', desc: '保护农作物免受乌鸦侵害' },
    { keywords: ['史莱姆', 'slime', '史莱姆', 'slime'], page: 'farm.html', title: '史莱姆', desc: '击杀史莱姆获取史莱姆球' },
    { keywords: ['史莱姆孵化器', 'slime incubator', '史莱姆', '孵化'], page: 'farm.html', title: '史莱姆孵化器', desc: '孵化史莱姆蛋' },
    { keywords: ['史莱姆笼', 'slime hutch', '史莱姆', '笼'], page: 'farm.html', title: '史莱姆笼', desc: '养殖史莱姆的房间' },

    // ==================== 食谱烹饪 ====================
    { keywords: ['完整早餐', 'complete breakfast', '食谱', '早餐'], page: 'crafting.html', title: '完整早餐', desc: '体力全满+健康+速度提升' },
    { keywords: ['黄金南瓜派', 'pumpkin pie', '食谱', '南瓜'], page: 'crafting.html', title: '黄金南瓜派', desc: '恢复125体力50健康，美味' },
    { keywords: ['辣椒', 'pepper poppers', '食谱', '辣椒'], page: 'crafting.html', title: '辣椒', desc: '恢复65体力+速度提升' },
    { keywords: ['炒蘑菇', 'fried mushroom', '食谱', '蘑菇'], page: 'crafting.html', title: '炒蘑菇', desc: '恢复100体力45健康' },
    { keywords: ['海陆披萨', 'fish taco', '食谱', '鱼'], page: 'crafting.html', title: '海陆披萨', desc: '恢复100体力45健康' },
    { keywords: ['鳗鱼', 'eel', '食谱', '鳗'], page: 'crafting.html', title: '鳗鱼', desc: '恢复75体力健康' },
    { keywords: ['蛋糕', 'cake', '食谱', '生日'], page: 'crafting.html', title: '蛋糕', desc: '恢复100体力，节日礼物' },
    { keywords: ['曲奇', 'cookie', '食谱', '甜点'], page: 'crafting.html', title: '曲奇', desc: '恢复75体力，批量制作' },
    { keywords: ['果酱', 'jam', '果酱', 'preserves'], page: 'crafting.html', title: '果酱', desc: '罐头瓶制作，价值翻倍' },
    { keywords: ['腌菜', 'pickle', '腌菜', '泡菜'], page: 'crafting.html', title: '腌菜', desc: '罐头瓶制作，价值翻倍' },
    { keywords: ['葡萄酒', 'wine', '酿酒', 'keg'], page: 'crafting.html', title: '葡萄酒', desc: '小桶酿酒，价值翻5-8倍' },
    { keywords: ['啤酒', 'beer', '酿酒', '小桶'], page: 'crafting.html', title: '啤酒', desc: '小桶酿酒' },
    { keywords: [' espresso', '咖啡', 'espresso', '咖啡'], page: 'crafting.html', title: '咖啡', desc: '小桶酿酒，快速饮品' },

    // ==================== 技能系统 ====================
    { keywords: [' farming', '农业技能', 'farming skill', 'level'], page: 'skills.html', title: '农业技能', desc: '等级提升：收割/挤奶/抚摸动物/拾取产品' },
    { keywords: [' foraging', '采集技能', 'foraging skill', '采集'], page: 'skills.html', title: '采集技能', desc: '等级提升：采集野生物品/砍树/挖树根' },
    { keywords: [' mining', '采矿技能', 'mining skill', '矿石'], page: 'skills.html', title: '采矿技能', desc: '等级提升：采矿/粉碎岩石' },
    { keywords: [' fishing', '钓鱼技能', 'fishing skill', '钓鱼'], page: 'skills.html', title: '钓鱼技能', desc: '等级提升：钓鱼/捉蟹笼' },
    { keywords: [' combat', '战斗技能', 'combat skill', '攻击'], page: 'skills.html', title: '战斗技能', desc: '等级提升：击杀怪物' },
    { keywords: ['农业专精', 'tiller', ' farming', '日薪'], page: 'skills.html', title: '农业专精 - 农业', desc: '日薪作物售价+10%' },
    { keywords: ['农民', 'rancher', ' farming', '畜产品'], page: 'skills.html', title: '农民 - 农业', desc: '动物产品价格+20%' },
    { keywords: ['酿酒师', 'winemaker', '农业', 'keg'], page: 'skills.html', title: '酿酒师 - 农业', desc: '葡萄酒价值+40%' },
    { keywords: ['捕兽人', 'tracker', ' foraging', '采集'], page: 'skills.html', title: '捕兽人 - 采集', desc: '显示农场周围野生采集点' },
    { keywords: ['矿工', 'miner', ' mining', '矿石'], page: 'skills.html', title: '矿工 - 采矿', desc: '矿石采掘量+100%' },
    { keywords: ['地质学家', 'geologist', ' mining', '宝石'], page: 'skills.html', title: '地质学家 - 采矿', desc: '宝石矿脉出现几率+100%' },
    { keywords: ['工程师', 'engineer', ' mining', '炸'], page: 'skills.html', title: '工程师 - 采矿', desc: '炸弹伤害+50%' },
    { keywords: ['商人', 'blacksmith', ' mining', '熔炉'], page: 'skills.html', title: '商人 - 采矿', desc: '矿石锭价值+25%' },
    { keywords: ['透视', 'prospector', ' mining', '矿'], page: 'skills.html', title: '透视 - 采矿', desc: '击杀怪物可能掉落煤炭' },
    { keywords: ['海盗', 'pirate', ' fishing', 'treasure'], page: 'skills.html', title: '海盗 - 钓鱼', desc: '宝箱出现几率+100%' },
    { keywords: ['诱饵专家', 'baitmaker', ' fishing', '饵'], page: 'skills.html', title: '诱饵专家 - 钓鱼', desc: '鱼饵消耗减半' },
    { keywords: ['渔民', 'angler', ' fishing', '卖'], page: 'skills.html', title: '渔民 - 钓鱼', desc: '鱼类售价+25%' },
    { keywords: ['休闲钓鱼', 'trout', ' fishing', '饵'], page: 'skills.html', title: '休闲钓鱼 - 钓鱼', desc: '钓鱼难度-15%' },
    { keywords: ['武士', 'samurai', ' combat', '秒'], page: 'skills.html', title: '武士 - 战斗', desc: '击杀怪物有几率秒' },
    { keywords: ['弹道专家', 'acrobat', ' combat', '距离'], page: 'skills.html', title: '弹道专家 - 战斗', desc: '远程武器攻击范围增加' },
    { keywords: [' Lancashire', 'lancer', ' combat', '长'], page: 'skills.html', title: 'Lancaster - 战斗', desc: '长武器攻击范围增加' },
    { keywords: ['防御型', 'defender', ' combat', '防'], page: 'skills.html', title: '防御型 - 战斗', desc: '玩家防御+25%' },

    // ==================== 成就系统 ====================
    { keywords: ['成就', 'achievement', '白分', '白'], page: 'achievements.html', title: '白分成就', desc: '100%完成度，赠送白分雕像' },
    { keywords: ['全鱼类', 'master angler', '钓鱼', 'all fish'], page: 'achievements.html', title: '全鱼类成就', desc: '钓到所有鱼类' },
    { keywords: ['农场主', 'full house', '结婚', 'family'], page: 'achievements.html', title: '完整家庭成就', desc: '收养一个孩子' },
    { keywords: ['完美', 'perfect', '完美', 'pristine'], page: 'achievements.html', title: '完美农产品成就', desc: '装运金/铱品质农产品' },
    { keywords: ['钱钱', 'money', 'millionaire', '百万'], page: 'achievements.html', title: '百万富翁成就', desc: '累计赚取10000g' },
    { keywords: ['传奇', 'legend', 'legend', '传说'], page: 'achievements.html', title: '传奇矿工成就', desc: '到达矿洞120层' },

    // ==================== 社区中心 ====================
    { keywords: ['全部收集包', 'all bundles', '献祭', 'bundles'], page: 'community-center.html', title: '全部收集包', desc: '全部42个收集包完成攻略' },
    { keywords: ['春季收集包', 'spring foraging bundle', '献祭', '春季'], page: 'community-center.html', title: '春季收集包', desc: '野山葵/郁金香/韭葱/大蒜' },
    { keywords: ['夏季收集包', 'summer foraging bundle', '献祭', '夏季'], page: 'community-center.html', title: '夏季收集包', desc: '蓝莓/番茄/辣椒/小麦' },
    { keywords: ['秋季收集包', 'fall foraging bundle', '献祭', '秋季'], page: 'community-center.html', title: '秋季收集包', desc: '黑莓/栗子/蔓越莓/山药' },
    { keywords: ['冬季收集包', 'winter foraging bundle', '献祭', '冬季'], page: 'community-center.html', title: '冬季收集包', desc: '冬季根茎/甘蓝/芜菁/防风草' },
    { keywords: ['酿酒包', 'pantry', '酿', 'pant'], page: 'community-center.html', title: '酿酒包', desc: '完成全部作物收集包' },
    { keywords: ['锅炉房', 'boiler room', '熔炉', 'boiler'], page: 'community-center.html', title: '锅炉房', desc: '动物产品/矿物收集包' },
    { keywords: [' Bulletin', ' Bulletin', ' Bulletin', ' Bulletin'], page: 'community-center.html', title: ' Bulletin', desc: '河鱼/湖鱼/海洋鱼/夜间垂钓收集包' },
    { keywords: ['伍迪', 'woody', '木匠', 'carpenter'], page: 'community-center.html', title: '伍迪 - 木匠', desc: '扩建/装修服务' },
    { keywords: ['鹤', 'crane', '鹤', 'c'], page: 'community-center.html', title: '鹤', desc: '温泉鹤展览' },

    // ==================== 农场动物 ====================
    { keywords: ['牛', 'cow', '动物', 'milk'], page: 'farm.html', title: '牛 - 农场动物', desc: '每日挤奶，售价1200g起' },
    { keywords: ['羊', 'sheep', '动物', '羊毛'], page: 'farm.html', title: '羊 - 农场动物', desc: '每月剃毛，售价1200g起' },
    { keywords: ['山羊', 'goat', '动物', '羊奶'], page: 'farm.html', title: '山羊 - 农场动物', desc: '每日挤羊奶，售价1600g起' },
    { keywords: ['猪', 'pig', '动物', '松露'], page: 'farm.html', title: '猪 - 农场动物', desc: '野外找松露，售价1600g起' },
    { keywords: ['鸡', 'chicken', '动物', '鸡蛋'], page: 'farm.html', title: '鸡 - 农场动物', desc: '每日下蛋，售价400g起' },
    { keywords: ['鸭', 'duck', '动物', '鸭蛋'], page: 'farm.html', title: '鸭 - 农场动物', desc: '每日下鸭蛋，售价400g起' },
    { keywords: ['兔', 'rabbit', '动物', '兔脚'], page: 'farm.html', title: '兔 - 农场动物', desc: '每周掉落兔脚，售价800g起' },
    { keywords: ['史莱姆', 'slime', '动物', '史莱姆蛋'], page: 'farm.html', title: '史莱姆 - 农场动物', desc: '史莱姆孵化器，掉落史莱姆球' },
    { keywords: ['干草', 'hay', '动物', '喂养'], page: 'farm.html', title: '干草', desc: '动物冬季食物，大棚可种' },
    { keywords: ['抚摸', 'pet', '动物', '抚摸'], page: 'farm.html', title: '宠物抚摸', desc: '每日抚摸提升好感' },
    { keywords: ['产奶', 'milk', '牛奶', '挤奶'], page: 'farm.html', title: '挤奶', desc: '每日挤牛/山羊' },
    { keywords: ['剪毛', 'wool', '羊毛', '剪'], page: 'farm.html', title: '剪毛', desc: '每月剪羊羊毛' },
    { keywords: ['松露', 'truffle', '猪', '珍贵'], page: 'farm.html', title: '松露 - 猪产出', desc: '猪野外找到，售价125-1250g' },
    { keywords: ['鸭毛', 'duck feather', '鸭', '羽毛'], page: 'farm.html', title: '鸭毛', desc: '艾米丽最爱礼物' },
    { keywords: ['兔脚', 'rabbit foot', '兔', '幸运'], page: 'farm.html', title: '兔脚', desc: '每周掉落，幸运符' },
    { keywords: [' mayonnaise', '蛋黄酱', '鸡', '鸭'], page: 'farm.html', title: '蛋黄酱', desc: '鸡/鸭蛋制作' },
    { keywords: ['羊奶酪', 'goat cheese', '山羊', '奶酪'], page: 'farm.html', title: '羊奶酪', desc: '羊奶制作，莉亚最爱' },

    // ==================== 特殊物品 ====================
    { keywords: ['远古果实', 'ancient fruit', '温室', '永久'], page: 'farm.html', title: '远古果实 - 温室', desc: '温室最佳作物，28天成熟，售价660-2310g' },
    { keywords: ['杨桃', 'starfruit', '温室', '秋季'], page: 'farm.html', title: '杨桃 - 温室', desc: '种子200g，13天成熟，售价750g' },
    { keywords: ['甜甜圈', 'dough', '食谱', '甜'], page: 'crafting.html', title: '甜甜圈', desc: '恢复100体力' },
    { keywords: ['奇异果', 'kiwi', '秋季', '水果'], page: 'seasons.html', title: '奇异果', desc: '种子50g，秋季15天成熟再收' },
    { keywords: ['菠萝', 'pineapple', '姜岛', '热带'], page: 'ginger-island.html', title: '菠萝 - 姜岛', desc: '姜岛种植，14天成熟' },
    { keywords: ['香蕉', 'banana', '姜岛', '热带'], page: 'ginger-island.html', title: '香蕉 - 姜岛', desc: '姜岛种植，热带水果' },
    { keywords: ['可可', 'cacao', '姜岛', '巧克力'], page: 'ginger-island.html', title: '可可 - 姜岛', desc: '姜岛种植，制作巧克力' },
    { keywords: ['幸运符', 'lucky charm', '赌博', '戒指'], page: 'desert.html', title: '幸运符', desc: '沙漠商店购买，运气提升' },
    { keywords: ['复活节彩蛋', 'easter egg', '彩蛋', '节日'], page: 'seasons.html', title: '复活节彩蛋', desc: '春季13日收集' },
    { keywords: ['珍珠', 'pearl', '稀有', '珍珠'], page: 'npc.html', title: '珍珠 - 稀有物品', desc: '可以在海滩/煤矿森林/蟹笼获得' },
    { keywords: ['贤者之石', 'magma', '岩浆', '稀有'], page: 'mines.html', title: '贤者之石', desc: '骷髅洞100层+稀有掉落' },
    { keywords: ['骑行史莱姆', 'slime', '骑行', '宠物'], page: 'farm.html', title: '骑行史莱姆', desc: '完成特殊订单获得' },

    // ==================== 游戏术语 ====================
    { keywords: ['金品质', 'gold quality', '高品质', 'star'], page: 'farm.html', title: '金品质', desc: '作物/采集物品金品质，售价+80%' },
    { keywords: ['铱品质', 'iridium quality', '最高品质', 'prismatic'], page: 'farm.html', title: '铱品质', desc: '最高品质，售价+112%' },
    { keywords: ['献祭', 'bundles', '收集包', ' Community'], page: 'community-center.html', title: '献祭收集包', desc: '完成收集包推进剧情' },
    { keywords: ['温室', 'greenhouse', '全年种植', '永久'], page: 'farm.html', title: '温室', desc: '全年种植任何作物' },
    { keywords: ['洒水', 'sprinkler', '自动浇水', 'water'], page: 'crafting.html', title: '自动洒水', desc: '解放双手' },
    { keywords: ['加速', 'speed', '速度', 'speed'], page: 'skills.html', title: '加速', desc: '移动速度提升' },
    { keywords: ['幸运', 'luck', '幸运', 'luc'], page: 'skills.html', title: '幸运', desc: '稀有掉落几率提升' },
    { keywords: ['矿车', 'minecart', '交通', '快速'], page: 'mines.html', title: '矿车系统', desc: '矿洞快速交通' },
    { keywords: ['电梯', 'elevator', '矿洞', 'skip'], page: 'mines.html', title: '矿洞电梯', desc: '跳过层数直达' },
    { keywords: ['炸弹', 'bomb', '采矿', 'explosive'], page: 'mines.html', title: '炸弹', desc: '快速炸矿' },
    { keywords: ['楼梯', 'stairs', '矿洞', '跳过'], page: 'mines.html', title: '楼梯', desc: '跳过困难层' },
    { keywords: ['日历', 'calendar', '生日', '事件'], page: 'npc.html', title: '日历事件', desc: '查看NPC生日和节日' },
    { keywords: ['钱包', 'wallet', '钱包', 'wallet'], page: 'index.html', title: '钱包', desc: '查看当前金币' },
    { keywords: ['每日运气', 'daily luck', '运气', 'fortune'], page: 'index.html', title: '每日运气', desc: '影响稀有掉落' },
    { keywords: ['电视机', 'television', '电视', 'tv'], page: 'index.html', title: '电视机', desc: '查看天气预报和每日提示' },
    { keywords: ['垃圾桶', 'trash can', '钓鱼', '垃圾'], page: 'fishing.html', title: '垃圾桶', desc: '钓鱼可能钓到垃圾' },
    { keywords: ['蟹笼', 'crab', 'trap', '笼'], page: 'fishing.html', title: '蟹笼', desc: '放置诱饵捕获蟹和贝类' },
    { keywords: ['钓鱼宝箱', 'treasure chest', '宝箱', 'treasure'], page: 'fishing.html', title: '钓鱼宝箱', desc: '钓鱼随机出现' },

    // ==================== 重要地点 ====================
    { keywords: ['鹈鹕镇', 'pelican town', '主城', '中心'], page: 'index.html', title: '鹈鹕镇', desc: '游戏主城' },
    { keywords: ['煤矿森林', 'cindersap forest', '森林', '采集'], page: 'seasons.html', title: '煤矿森林', desc: '采集点密集区域' },
    { keywords: ['的秘密森林', 'secret woods', '秘密森林', 'f'], page: 'farm.html', title: '秘密森林', desc: '获取硬木和解锁砍树' },
    { keywords: ['山区', 'mountains', '山地', '矿洞'], page: 'mines.html', title: '山区', desc: '矿洞入口处' },
    { keywords: ['海滩', 'beach', '沙滩', '钓鱼'], page: 'fishing.html', title: '海滩', desc: '海滩钓鱼点' },
    { keywords: ['沙漠', 'desert', '沙漠', 'oasis'], page: 'desert.html', title: '沙漠', desc: '沙漠商人所在地' },
    { keywords: ['骷髅洞', 'skull cavern', ' skull', '骷髅'], page: 'mines.html', title: '骷髅洞', desc: '比矿洞更危险的区域' },
    { keywords: ['火山地牢', 'volcano', '火山', 'dungeon'], page: 'ginger-island.html', title: '火山地牢', desc: '姜岛火山区域' },
    { keywords: ['姜岛', 'ginger island', ' island', '热带'], page: 'ginger-island.html', title: '姜岛', desc: '后期解锁区域' },
    { keywords: ['下水道', 'sewers', '下水道', 'krobus'], page: 'npc.html', title: '下水道', desc: '科罗布斯住处' },
    { keywords: ['法师塔', 'wizard tower', '法师', 'magic'], page: 'npc.html', title: '法师塔', desc: '法师住处' },
    { keywords: ['矿洞', 'mines', ' mine', 'mining'], page: 'mines.html', title: '矿洞', desc: '主要采矿地点' },
    { keywords: ['采石场', 'quarry', '采石场', 'stone'], page: 'mines.html', title: '采石场', desc: '额外采矿点' },
    { keywords: ['农场', 'farm', 'home', 'home'], page: 'farm.html', title: '农场', desc: '玩家主要活动基地' },
    { keywords: ['木匠', 'carpenter', 'robin', '扩建'], page: 'farm.html', title: '木匠商店', desc: '罗宾的木匠店' },
    { keywords: ['铁匠', 'blacksmith', 'clint', '矿石'], page: 'mines.html', title: '铁匠铺', desc: '克林特的铁匠铺' },
    { keywords: ['杂货店', 'general store', 'pierre', '购物'], page: 'seasons.html', title: '杂货店', desc: '皮埃尔的商店' },
    { keywords: ['海滩商店', 'tide', '海滩', '商品'], page: 'fishing.html', title: '海滩商店', desc: '威利的钓鱼商店' },
    { keywords: ['旅行货车', 'traveling cart', '旅行货车', '稀有'], page: 'seasons.html', title: '旅行货车', desc: '每周五周日出现，出售稀有物品' },

    // ==================== 游戏机制 ====================
    { keywords: ['每日精力', 'energy', '体力', '健康'], page: 'index.html', title: '精力与健康', desc: '体力用于工具/农业，健康决定死亡' },
    { keywords: ['升级工具', 'tool', '工具升级', 'copper'], page: 'skills.html', title: '工具升级', desc: '铜/铁/金/铱工具升级' },
    { keywords: ['日历', 'calendar', '生日', '节日'], page: 'npc.html', title: '游戏日历', desc: '查看重要日期' },
    { keywords: ['马', 'horse', '交通工具', 'horse'], page: 'farm.html', title: '马', desc: '快速交通' },
    { keywords: ['鸡窝', 'coop', '动物', '鸡'], page: 'farm.html', title: '鸡窝', desc: '养鸡建筑' },
    { keywords: ['谷仓', 'barn', '动物', 'cow'], page: 'farm.html', title: '谷仓', desc: '养牛/羊/猪建筑' },
    { keywords: ['大棚', 'big coop', '动物', 'upgrade'], page: 'farm.html', title: '大棚', desc: '升级后可养鸭和兔' },
    { keywords: ['大谷仓', 'big barn', '动物', 'd'], page: 'farm.html', title: '大谷仓', desc: '升级后可养羊驼' },
    { keywords: ['Deluxe Barn', ' deluxe barn', ' deluxe', '升级'], page: 'farm.html', title: 'Deluxe Barn', desc: '可养猪' },
    { keywords: ['豪宅', 'house', 'farmhouse', '扩建'], page: 'farm.html', title: '农场住宅', desc: '升级厨房/儿童房间' },
    { keywords: ['厨房', 'kitchen', 'cooking', '厨房'], page: 'farm.html', title: '厨房', desc: '可烹饪料理' },
    { keywords: ['儿童', 'children', '孩子', 'family'], page: 'npc.html', title: '儿童', desc: '结婚后可生育' },
    { keywords: ['睡眠', 'sleep', '存档', 'save'], page: 'beginner.html', title: '睡眠存档', desc: '每天结束时自动存档' },
    { keywords: ['读档', 'save', '存档', 'load'], page: 'beginner.html', title: '读档', desc: '重新开始当天' },
    { keywords: ['联机模式', 'multiplayer', '多人', 'online'], page: 'multiplayer.html', title: '联机模式', desc: '最多4人合作' },
    { keywords: ['Joja超市', 'joja', ' joja', ' alternative'], page: 'beginner.html', title: 'Joja超市', desc: '替代社区中心的路线' },
    { keywords: ['社区中心', 'community center', 'bundles', '献祭'], page: 'community-center.html', title: '社区中心', desc: '完成收集包推进剧情' },

    // ==================== Mod相关 ====================
    { keywords: ['cf兼容', 'cf', '模组', 'mod'], page: 'mods.html', title: 'cf兼容', desc: '最多99x99堆叠' },
    { keywords: ['自动化', 'automate', 'mod', 'mod'], page: 'mods.html', title: '自动化mod', desc: '自动发货和填充' },
    { keywords: ['p SMK', 'psmk', '地图', 'map'], page: 'mods.html', title: 'p SMK', desc: '显示矿物点' },
    { keywords: ['马赛克', 'lookup', 'anything', '查询'], page: 'mods.html', title: '马赛克anything', desc: '查询任何物品信息' },
    { keywords: ['空', 'empty', '占据', '占据'], page: 'mods.html', title: '空占据mod', desc: '占据网格显示空' },
    { keywords: ['高跟鞋', '高跟鞋', '走路', 'mod'], page: 'mods.html', title: '高跟鞋mod', desc: '女性角色穿高跟鞋' },

    // ==================== 版本更新 ====================
    { keywords: ['1.6更新', 'update 1.6', '新内容', 'new'], page: 'update16.html', title: '1.6版本更新', desc: '新成就/新物品/新功能' },
    { keywords: ['新成就', 'new achievement', '1.6', '成就'], page: 'update16.html', title: '新成就 - 1.6', desc: '4个新成就' },
    { keywords: ['新物品', 'new item', '1.6', '物品'], page: 'update16.html', title: '新物品 - 1.6', desc: '新食谱/新装备' },
    { keywords: ['新功能', 'new feature', '1.6', '功能'], page: 'update16.html', title: '新功能 - 1.6', desc: '新机制和改动' },

    // ==================== 新增搜索项 ====================
    // 矿石类
    { keywords: ['铜矿石', 'copper ore', 'copper', '铜'], page: 'mines.html', title: '铜矿石', desc: '1-40层出现，售价5g' },
    { keywords: ['铁矿石', 'iron ore', 'iron', '铁'], page: 'mines.html', title: '铁矿石', desc: '15-80层出现，售价10g' },
    { keywords: ['金矿石', 'gold ore', 'gold', '金'], page: 'mines.html', title: '金矿石', desc: '40-120层出现，售价25g' },
    { keywords: ['铱矿石', 'iridium ore', 'iridium', '铱'], page: 'mines.html', title: '铱矿石', desc: '50-120层出现，售价100g' },
    { keywords: ['煤炭', 'coal', 'coal', '燃料'], page: 'mines.html', title: '煤炭', desc: '冶炼必需品，售价50g' },
    { keywords: ['铜锭', 'copper bar', 'copper bar', '锭'], page: 'mines.html', title: '铜锭', desc: '熔炉制作，售价60g' },
    { keywords: ['铁锭', 'iron bar', 'iron bar', '锭'], page: 'mines.html', title: '铁锭', desc: '熔炉制作，售价120g' },
    { keywords: ['金锭', 'gold bar', 'gold bar', '锭'], page: 'mines.html', title: '金锭', desc: '熔炉制作，售价250g' },
    { keywords: ['铱锭', 'iridium bar', 'iridium bar', '锭'], page: 'mines.html', title: '铱锭', desc: '熔炉制作，售价1000g' },
    // 宝石类
    { keywords: ['钻石', 'diamond', 'diamond', '钻石'], page: 'mines.html', title: '钻石', desc: '最稀有宝石，售价750g' },
    { keywords: ['绿宝石', 'emerald', 'emerald', '翡翠'], page: 'mines.html', title: '绿宝石', desc: '晶球常见，售价250g' },
    { keywords: ['红宝石', 'ruby', 'ruby', '红宝石'], page: 'mines.html', title: '红宝石', desc: '骷髅洞常见，售价150g' },
    { keywords: ['紫水晶', 'amethyst', 'amethyst', '紫水晶'], page: 'mines.html', title: '紫水晶', desc: '早期可获得，售价100g' },
    { keywords: ['黄玉', 'topaz', 'topaz', '黄玉'], page: 'mines.html', title: '黄玉', desc: '用途多样，售价100g' },
    { keywords: ['碧玉', 'jade', 'jade', '翡翠'], page: 'mines.html', title: '碧玉', desc: '周三墓碑任务，售价80g' },
    // 矿石类型
    { keywords: ['晶球', 'geode', 'geode', '开矿'], page: 'mines.html', title: '晶球', desc: '可开出各种宝石' },
    { keywords: ['岩浆晶球', 'magma geode', 'magma', '岩浆'], page: 'mines.html', title: '岩浆晶球', desc: '骷髅洞特有' },
    { keywords: ['omni晶球', 'omni geode', 'omni', '全'], page: 'mines.html', title: 'Omni晶球', desc: '可开出所有矿石' },
    // 矿洞怪物
    { keywords: ['绿虫', 'green slime', 'slime', '史莱姆'], page: 'mines.html', title: '绿虫', desc: '1-29层，血量30' },
    { keywords: ['蓝虫', 'blue slime', 'slime', '史莱姆'], page: 'mines.html', title: '蓝虫', desc: '30-59层，血量50' },
    { keywords: ['红虫', 'red slime', 'slime', '史莱姆'], page: 'mines.html', title: '红虫', desc: '60+层，血量80' },
    { keywords: ['黑虫', 'black slime', 'slime', '史莱姆'], page: 'mines.html', title: '黑虫', desc: '骷髅洞，血量120' },
    { keywords: ['骷髅', 'skeleton', 'skeleton', '骷髅'], page: 'mines.html', title: '骷髅', desc: '20+层，血量60' },
    { keywords: ['骷髅法师', 'skeleton mage', 'mage', '法师'], page: 'mines.html', title: '骷髅法师', desc: '50+层，远程攻击' },
    { keywords: ['金属头', 'metal head', 'metal', '机械'], page: 'mines.html', title: '金属头', desc: '40+层，有无敌时间' },
    { keywords: ['飞蛇', 'serpent', 'serpent', '蛇'], page: 'mines.html', title: '飞蛇', desc: '骷髅洞，血量150' },
    { keywords: ['蝙蝠', 'cave bat', 'bat', '蝙蝠'], page: 'mines.html', title: '蝙蝠', desc: '任意层，血量25' },
    { keywords: ['果冻', 'jelly', 'jelly', 'boss'], page: 'mines.html', title: '果冻Boss', desc: '25层Boss，血量100' },
    { keywords: ['骷髅王', 'skeleton mage', 'skeleton king', 'boss'], page: 'mines.html', title: '骷髅王', desc: '50层Boss，血量150' },
    { keywords: ['齐先生', 'mr qi', 'qi', 'boss'], page: 'mines.html', title: '齐先生', desc: '骷髅洞100层Boss，血量500' }
  ];
  
  // 搜索函数
  function performSearch(query) {
    if (!query || query.length < 1) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }
    
    query = query.toLowerCase().trim();
    
    // 计算相关度并排序
    const scoredResults = searchData.map(item => {
      let score = 0;
      const queryLower = query;
      
      for (const keyword of item.keywords) {
        const kwLower = keyword.toLowerCase();
        
        // 完全匹配
        if (kwLower === queryLower) {
          score += 100;
        }
        // 开头匹配
        else if (kwLower.startsWith(queryLower)) {
          score += 50;
        }
        // 包含匹配
        else if (kwLower.includes(queryLower)) {
          score += 25;
        }
        // 部分字符匹配（中文）
        else if (queryLower.length >= 2) {
          let matches = 0;
          for (const char of queryLower) {
            if (kwLower.includes(char)) matches++;
          }
          if (matches > queryLower.length * 0.6) {
            score += matches * 5;
          }
        }
      }
      
      return { item, score };
    });
    
    // 过滤有分数的结果并排序
    const results = scoredResults
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10) // 最多显示10条
      .map(r => r.item);
    
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <p>未找到 "${query}" 相关内容</p>
          <p class="search-tip">试试：防风草、草莓、阿比盖尔、银河剑等关键词</p>
        </div>
      `;
      searchResults.style.display = 'block';
      return;
    }
    
    // 高亮关键词并渲染结果
    searchResults.innerHTML = results.map(item => {
      // 找到最佳匹配关键词用于高亮
      let bestKeyword = item.keywords[0];
      let maxScore = 0;
      
      for (const keyword of item.keywords) {
        const kwLower = keyword.toLowerCase();
        let s = 0;
        if (kwLower === query) s = 100;
        else if (kwLower.startsWith(query)) s = 50;
        else if (kwLower.includes(query)) s = 25;
        
        if (s > maxScore) {
          maxScore = s;
          bestKeyword = keyword;
        }
      }
      
      const highlightedTitle = item.title.replace(
        new RegExp(`(${query})`, 'gi'),
        '<mark>$1</mark>'
      );
      
      return `
        <a href="${item.page}" class="search-result-item">
          <div class="search-result-title">${highlightedTitle}</div>
          <div class="search-result-desc">${item.desc}</div>
        </a>
      `;
    }).join('');
    
    searchResults.style.display = 'block';
  }
  
  // 输入事件（实时搜索）
  let searchTimeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 150);
  });
  
  // 点击搜索按钮
  searchBtn.addEventListener('click', function() {
    performSearch(searchInput.value);
  });
  
  // 点击其他地方关闭搜索结果
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-box')) {
      searchResults.style.display = 'none';
    }
  });
  
  // 回车搜索
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch(searchInput.value);
    }
  });
}

/**
 * 返回顶部按钮
 */
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;
  
  // 滚动时显示/隐藏
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  // 点击返回顶部
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * 移动端菜单
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');
  
  if (!menuToggle || !navbarNav) return;
  
  menuToggle.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
    const isOpen = navbarNav.classList.contains('active');
    menuToggle.textContent = isOpen ? '✕' : '☰';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // 点击导航链接后关闭菜单
  navbarNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navbarNav.classList.remove('active');
      menuToggle.textContent = '☰';
      document.body.style.overflow = '';
    });
  });
  
  // 移动端下拉菜单点击切换
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', function(e) {
        // 仅在移动端生效
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
}

/**
 * 平滑滚动到锚点
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
