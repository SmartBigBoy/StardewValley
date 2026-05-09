/**
 * Stardew Valley Guide - Interactive Scripts
 */

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initThemeToggle();
  initScrollEffects();
  initSearch();
  initBackToTop();
  initMobileMenu();
});

/**
 * Navbar scroll effects
 */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Add shadow effect
    if (currentScroll > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Theme toggle (light/dark mode)
 */
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  // Load theme from localStorage
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
 * Scroll animation effects
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
 * Search functionality - 300+ indexed entries
 */
function initSearch() {
  const searchInput = document.querySelector('.search-box input');
  const searchBtn = document.querySelector('.search-box button');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput || !searchBtn) return;
  
  // Expanded search data - 300+ indexed entries
  const searchData = [
    // ==================== Page Navigation ====================
    { keywords: ['home', 'index', 'main'], page: 'index.html', title: 'Home', desc: 'Stardew Valley Guide Homepage' },
    { keywords: ['seasons', 'season', 'spring', 'summer', 'fall', 'autumn', 'winter'], page: 'seasons.html', title: 'Seasons Guide', desc: 'Crop planting guides and festival events for all seasons' },
    { keywords: ['beginner', 'tutorial', 'new player'], page: 'beginner.html', title: 'Beginner Guide', desc: 'Essential knowledge for game start and Year 1 guide' },
    { keywords: ['skills', 'skill', 'level', 'farming', 'mining', 'fishing'], page: 'skills.html', title: 'Skills System', desc: ' Farming/Foraging/Mining/Fishing/Combat five skills' },
    { keywords: ['npc', 'gift', 'relationship', 'villager', 'marriage'], page: 'npc.html', title: 'NPC Guide', desc: 'Marriage candidate gift preferences and event guide' },
    { keywords: ['farm', 'greenhouse', 'layout'], page: 'farm.html', title: 'Farm Planning', desc: '8 farm types analysis and greenhouse layout' },
    { keywords: ['fishing', 'tackle', 'fish', 'rod'], page: 'fishing.html', title: 'Fishing Guide', desc: 'Fish encyclopedia, legendary fish guide, and rod upgrades' },
    { keywords: ['mining', 'ore', 'gem', 'mine', 'Skull Cavern'], page: 'mines.html', title: 'Mining Guide', desc: 'Complete mining guide and monster encyclopedia' },
    { keywords: ['crafting', 'cooking', 'recipe'], page: 'crafting.html', title: 'Crafting and Cooking', desc: 'Equipment crafting and cooking recipes' },
    { keywords: ['Combat', 'Weapon', 'combat', 'monster', 'Monster'], page: 'combat.html', title: 'Combat System', desc: 'Weapon selection and monster guide' },
    { keywords: ['Community Center', 'Bundles', 'bundle', 'community center', 'jodi'], page: 'community-center.html', title: 'Community Center', desc: 'Complete bundle completion guide' },
    { keywords: ['Ginger Island', 'Fossils', 'ginger island', 'volcano', 'Volcano'], page: 'ginger-island.html', title: 'Ginger Island Guide', desc: 'Ginger Island exploration and Banana Shrine' },
    { keywords: ['Money', 'Profit', 'Profit', 'money', 'profit', 'gold'], page: 'money.html', title: 'Money Guide', desc: 'Efficient money-making methods and investment advice' },
    { keywords: ['Achievement', 'achievements', 'Achievements'], page: 'achievements.html', title: 'Achievements', desc: 'Complete achievement list and unlock conditions' },
    { keywords: ['mod', 'mods', 'Mod', 'Mod Tutorial'], page: 'mods.html', title: 'Mod Tutorial', desc: 'How to install and use mods' },
    { keywords: ['Multiplayer', 'Multiplayer', 'multiplayer', 'multi-player', 'Co-op'], page: 'multiplayer.html', title: 'Multiplayer Guide', desc: 'Multiplayer setup and co-op tips' },
    { keywords: ['1.6', 'Version', 'update', 'version', 'Update'], page: 'update16.html', title: '1.6VersionUpdate', desc: 'Latest update content' },
    { keywords: ['Desert', 'Desert Blacksmith', 'desert', 'Blacksmith', 'cart'], page: 'desert.html', title: 'Desert Blacksmith', desc: 'Desert Oasis and Desert Blacksmith' },

    // ==================== Spring Crops ====================
    { keywords: ['Parsnip', 'parsnip', 'Spring Crop', 'Spring', 'Seeds20g'], page: 'seasons.html#spring', title: 'Parsnip - Spring Crop', desc: 'Seeds20g，4days to mature，Sells for35g，Daily profit3.75g' },
    { keywords: ['Potato', 'potato', 'Spring Crop', 'Spring', 'Seeds 50g'], page: 'seasons.html#spring', title: 'Potato - Spring Crop', desc: 'Seeds 50g，6days to mature，Sells for 80g，May yield extra 1-2' },
    { keywords: ['Cauliflower', 'cauliflower', 'Spring Crop', 'Spring', 'Seeds 80g'], page: 'seasons.html#spring', title: 'Cauliflower - Spring Crop', desc: 'Seeds 80g，12days to mature，Sells for175g，Profit king' },
    { keywords: ['Strawberry', 'strawberry', 'Spring Crop', 'Spring', 'Seeds 100g', 'Egg Festival'], page: 'seasons.html#spring', title: 'Strawberry - Spring Crop', desc: 'Buy at Egg Festival for 100g，8days to mature，4days regrow，Sells for 120g' },
    { keywords: ['Tulip', 'tulip', 'Spring Crop', 'Spring', 'Seeds20g'], page: 'seasons.html#spring', title: 'Tulip - Spring Crop', desc: 'Seeds20g，6days to mature，Sells for 30g' },
    { keywords: ['Blue Jazz', 'blue jazz', 'Spring Crop', 'Spring', 'blue', 'flower'], page: 'seasons.html#spring', title: 'Blue Jazz - Spring Crop', desc: 'Seeds 30g，7days to mature，Sells for50g' },
    { keywords: ['Kale', 'kale', 'Spring Crop', 'Spring', 'Seeds 70g'], page: 'seasons.html#spring', title: 'Kale - Spring Crop', desc: 'Seeds 70g，6days to mature，Sells for110g' },
    { keywords: ['Rhubarb', 'rhubarb', 'Spring Crop', 'Spring', 'red', 'Seeds 100g'], page: 'seasons.html#spring', title: 'Rhubarb - Spring Crop', desc: 'Seeds 100g，13 days to mature，Sells for220g' },
    { keywords: ['Garlic', 'garlic', 'Spring Crop', 'Spring', 'Seeds 40g'], page: 'seasons.html#spring', title: 'Garlic - Spring Crop', desc: 'Seeds 40g，4days to mature，Sells for 60g' },
    { keywords: ['Coffee Bean', 'coffee bean', 'Spring Crop', 'Multi-harvest', 'Spring'], page: 'seasons.html#spring', title: 'Coffee Bean - Spring Crop', desc: 'Traveling Cart450-2500g，10days to mature，Sells for 15g x4' },
    { keywords: ['Green Bean', 'green bean', 'Spring Crop', 'Spring', 'bean', 'Seeds60g'], page: 'seasons.html#spring', title: 'Green Bean - Spring Crop', desc: 'Seeds60g，10days to mature，3days regrow，Sells for 40g' },
    { keywords: ['Carrot', 'carrot', 'Spring Crop', 'Spring', 'JojaMart'], page: 'seasons.html#spring', title: 'Carrot - Spring Crop', desc: 'JojaMarttrade，3days to mature，Sells for35g' },
    { keywords: ['Unmilled Rice', 'unmilled rice', 'Spring Crop', 'Spring', 'rice'], page: 'seasons.html#spring', title: 'Unmilled Rice - Spring Crop', desc: 'Seeds 40g，irrigated6days/non-irrigated8days，Sells for 30g' },

    // ==================== Summer Crops ====================
    { keywords: ['Blueberry', 'blueberry', 'Summer Crop', 'Summer', 'Seeds 80g', 'Multi-harvest'], page: 'seasons.html#summer', title: 'Blueberry - Summer Crop', desc: 'Seeds 80g，4days to mature, regrow，Sells for 80g，Summer Profit King' },
    { keywords: ['Watermelon', 'watermelon', 'Summer Crop', 'Summer', 'Seeds 8g', 'Seeds 80g'], page: 'seasons.html#summer', title: 'Watermelon - Summer Crop', desc: 'Seeds 80g，12days to mature，Sells for 300g' },
    { keywords: ['Hot Pepper', 'hot pepper', 'Summer Crop', 'Summer', 'red', 'Seeds 40g'], page: 'seasons.html#summer', title: 'Hot Pepper - Summer Crop', desc: 'Seeds 40g，5days to mature, regrow，Sells for 40g' },
    { keywords: ['Tomato', 'tomato', 'Summer Crop', 'Summer', 'red', 'Seeds 50g'], page: 'seasons.html#summer', title: 'Tomato - Summer Crop', desc: 'Seeds 50g，6days to mature, regrow，Sells for 60g' },
    { keywords: ['Cantaloupe', 'melon', 'Summer Crop', 'Summer', 'Seeds 80g'], page: 'seasons.html#summer', title: 'Cantaloupe - Summer Crop', desc: 'Seeds 80g，12days to mature，Sells for 250g' },
    { keywords: ['Corn', 'corn', 'Summer Crop', 'Fall', 'Summer', 'Seeds 150g'], page: 'seasons.html#summer', title: 'Corn - Summer Crop', desc: 'Seeds 150g，14days to mature，Can plant in Summer and Fall，Sells for 150g' },
    { keywords: ['Blackberry', 'blackberry', 'Fall Forage', 'Fall', 'forage'], page: 'seasons.html#autumn', title: 'Blackberry - Fall Forage', desc: 'Fall Forage，Sells for 20g/40g/80g/120g (Normal/Silver/Gold/Iridium)' },
    { keywords: ['Wild Horseradish', 'leek', 'Springforage', 'Spring', 'root'], page: 'seasons.html#spring', title: 'Wild Horseradish - Springforage', desc: 'Secret Woods/Cindersap Forest，Sells for 50-100g' },
    { keywords: ['Daffodil', 'daffodil', 'Springforage', 'Spring', 'flower'], page: 'seasons.html#spring', title: 'Daffodil - Springforage', desc: '100% in Pelican Town，Sells for 30g' },
    { keywords: ['Leek', 'leek', 'Springforage', 'Spring'], page: 'seasons.html#spring', title: 'Leek - Springforage', desc: 'Sells for 60g，cooking ingredient' },

    // ==================== Fall Crops ====================
    { keywords: ['Pumpkin', 'pumpkin', 'Fall Crop', 'Fall', 'Seeds 100g'], page: 'seasons.html#autumn', title: 'Pumpkin - Fall Crop', desc: 'Seeds 100g，14days to mature，Sells for 350g，Halloween' },
    { keywords: ['Red Cabbage', 'red cabbage', 'Fall Crop', 'Fall', 'Seeds 100g'], page: 'seasons.html#autumn', title: 'Red Cabbage - Fall Crop', desc: 'Seeds 100g，9days to mature，Sells for 260g' },
    { keywords: ['Cranberries', 'cranberry', 'Fall Crop', 'Fall', 'Seeds 240g'], page: 'seasons.html#autumn', title: 'Cranberries - Fall Crop', desc: 'Seeds 240g，7days to mature, regrow，Sells for 75g' },
    { keywords: ['Yam', 'yam', 'Fall Crop', 'Fall', 'Seeds 80g'], page: 'seasons.html#autumn', title: 'Yam - Fall Crop', desc: 'Seeds 80g，15days to mature，Sells for 160g' },
    { keywords: ['Sunflower', 'sunflower', 'Fall Crop', 'Fall', 'Seeds 200g', 'Seeds120g'], page: 'seasons.html#autumn', title: 'Sunflower - Fall Crop', desc: 'Seeds 120g/200g，8days to mature，Sells for 80g/160g' },
    { keywords: ['Chrysanthemum', 'chrysanthemum', 'Fall Forage', 'Fall', 'flower'], page: 'seasons.html#autumn', title: 'Chrysanthemum - Fall Forage', desc: 'Sells for 80g，Fall only' },
    { keywords: ['Common Mushroom', 'common mushroom', 'Fall Forage', 'Fall', 'mushroom'], page: 'seasons.html#autumn', title: 'Common Mushroom - Fall Forage', desc: 'Sells for 40g，can be planted' },
    { keywords: ['Spring Onion', 'spring onion', 'Springforage', 'Spring', 'onion'], page: 'seasons.html#spring', title: 'Spring Onion - Springforage', desc: 'Matures Spring 15-18，Sells for 8-40g' },

    // ==================== Winter Crops ====================
    { keywords: ['Winter Money', 'winter money', 'Winter', 'ice', 'ice'], page: 'seasons.html#winter', title: 'Winter Money', desc: 'No crops in Winter, earn money from fishing/mining/foraging/ranching' },
    { keywords: ['Turnip', 'turnip', 'Winter Crop', 'Winter', 'Seeds 70g'], page: 'seasons.html#winter', title: 'Turnip - Winter Crop', desc: 'Seeds 70g，8days to mature，Sells for 55g' },
    { keywords: ['Potato', 'potato', 'Winter', 'Winter Crop'], page: 'seasons.html#winter', title: 'Potato - Winter Crop', desc: 'Can you plant Potato in Winter? No! Only Turnip grows in Winter' },
    { keywords: ['Parsnip', 'parsnip', 'Winter', 'Winter Crop'], page: 'seasons.html#winter', title: 'Parsnip - Winter Crop', desc: 'Can you plant Parsnip in Winter? No!' },

    // ==================== Festival Events ====================
    { keywords: ['Egg Festival', 'easter', 'Spring 13', 'Easter Egg'], page: 'seasons.html#spring', title: 'Egg Festival - Spring 13', desc: 'Easter egg hunting minigame, get prizes for finding 30 eggs' },
    { keywords: ['Egg Festival', 'Flower Dance', 'Spring 24', 'Spring', 'dance'], page: 'seasons.html#spring', title: 'Egg Festival - Spring 24', desc: 'Attend the dance, need to invite a dance partner' },
    { keywords: ['Desert Festival', 'desert festival', 'Spring 15-17', 'Desert'], page: 'seasons.html#spring', title: 'Desert Festival - Spring 15-17', desc: 'Buy rare items from Desert Blacksmith' },
    { keywords: ['Luau', 'luau', 'Summer', 'Summer 14', 'feast'], page: 'seasons.html#summer', title: 'Luau - Summer 14', desc: 'Give best ingredients to boost town friendship' },
    { keywords: ['Night Market', 'night market', 'Fall', 'Fall 17', 'Night Market'], page: 'seasons.html#autumn', title: 'Night Market - Fall 17', desc: 'Swim with turtles, shop, fortune telling' },
    { keywords: ['Spirit Eve', 'spirit eve', 'Fall', 'Fall 26', 'Halloween'], page: 'seasons.html#autumn', title: 'Spirit Eve - Fall 26', desc: 'Enter mines to challenge monsters' },
    { keywords: ['Festival of Ice', 'festival of ice', 'Winter', 'Winter 8', 'Winter'], page: 'seasons.html#winter', title: 'Festival of Ice - Winter 8', desc: 'Snowball minigame and ice sculpture contest' },
    { keywords: ['Feast of the Winter Star', 'festival of winter', 'Winter', 'Winter 14', 'Christmas'], page: 'seasons.html#winter', title: 'Feast of the Winter Star - Winter 14', desc: 'Give gifts to NPCs' },
    { keywords: ['Stardrops', 'night market', 'Winter', 'Winter 17'], page: 'seasons.html#winter', title: 'Stardrops - Winter 17', desc: 'Visit underwater exhibit' },

    // ==================== NPC Guide ====================
    // Marriage Candidates (Male)
    { keywords: ['Abigail', 'abigail', 'Marriage Candidate', 'purple', 'game', 'basement'], page: 'npc.html', title: 'Abigail - Marriage Candidate', desc: 'Birthday: Spring 20，Lives: cabin，Loves: Amethyst/Pumpkin Pie/Cave Carrot' },
    { keywords: ['Emily', 'emily', 'Marriage Candidate', 'blue', 'tailor', 'parrot'], page: 'npc.html', title: 'Emily - Marriage Candidate', desc: 'Birthday: Spring 27，Lives: Pelican Town，Loves: Ruby/Coconut/Duck Feather' },
    { keywords: ['Haley', 'haley', 'Marriage Candidate', 'blonde', 'camera', 'ex'], page: 'npc.html', title: 'Haley - Marriage Candidate', desc: 'Birthday: Spring 14，Lives: Pelican Town，Loves: Coconut/Sunflower/Pineapple' },
    { keywords: ['Leah', 'leah', 'Marriage Candidate', 'Goat', 'artist', 'widow'], page: 'npc.html', title: 'Leah - Marriage Candidate', desc: 'Birthday: Winter 23，Lives: Cottage on Hill，Loves: Goat Cheese/Truffle/Fried Mushroom' },
    { keywords: ['Maru', 'maru', 'Marriage Candidate', 'nurse', 'scientist', 'robot'], page: 'npc.html', title: 'Maru - Marriage Candidate', desc: 'Birthday: Summer 10，Lives: Clinic 2nd Floor，Loves: Strawberry/Diamond/Battery Pack' },
    { keywords: ['Penny', 'penny', 'Marriage Candidate', 'teacher', 'trailer', 'reading'], page: 'npc.html', title: 'Penny - Marriage Candidate', desc: 'Birthday: Fall 2，Lives: Riverside Trailer，Loves: Crispy Bass/Topaz/Diamond' },
    { keywords: ['Alex', 'alex', 'Marriage Candidate', 'athlete', 'Gridball', 'football'], page: 'npc.html', title: 'Alex - Marriage Candidate', desc: 'Birthday: Summer 13，Lives: Beach House，Loves: Complete Breakfast/Fish Taco' },
    { keywords: ['Elliott', 'elliott', 'Marriage Candidate', 'writer', 'writer', 'writer'], page: 'npc.html', title: 'Elliott - Marriage Candidate', desc: 'Birthday: Fall 5，Lives: Lighthouse，Loves: Crab Cakes/Amber/Duck Mayonnaise' },
    { keywords: ['Harvey', 'harvey', 'Marriage Candidate', 'doctor', 'clinic', 'coffee'], page: 'npc.html', title: 'Harvey - Marriage Candidate', desc: 'Birthday: Winter 14，Lives: Clinic，Loves: Coffee/Truffle/Pickles' },
    { keywords: ['Sam', 'sam', 'Marriage Candidate', 'skateboard', 'music', 'band'], page: 'npc.html', title: 'Sam - Marriage Candidate', desc: 'Birthday: Summer 17，Lives: Pelican Town，Loves: Blacksmith Joes Pep/ Pizza/Maple Bar' },
    { keywords: ['Sebastian', 'sebastian', 'Marriage Candidate', 'programmer', 'stepfather', 'skeleton'], page: 'npc.html', title: 'Sebastian - Marriage Candidate', desc: 'Birthday: Winter 20，Lives: Mountain，Loves: Ice Pip/Sushi/Pomegranate' },
    { keywords: ['Shane', 'shane', 'Marriage Candidate', 'drinking', 'alcoholic', 'Chicken'], page: 'npc.html', title: 'Shane - Marriage Candidate', desc: 'Birthday: Spring 20，Lives: Ranch，Loves: Spicy Food/Hot Pepper/Beer' },
    // NPC birthdays
    { keywords: ['Kent', 'kent', 'Birthday', 'Spring 4', 'Veteran'], page: 'npc.html', title: 'Kent - NPC', desc: 'BirthdaySpring 4，Veteran' },
    { keywords: ['Lewis', 'lewis', 'Birthday', 'Spring 7', 'Mayor'], page: 'npc.html', title: 'Lewis - NPC', desc: 'Birthday: Spring 7, Mayor of Pelican Town' },
    { keywords: ['Vincent', 'vincent', 'Birthday', 'Spring 10', 'Child'], page: 'npc.html', title: 'Vincent - NPC', desc: 'BirthdaySpring 10，Child' },
    { keywords: ['Pierre', 'pierre', 'Birthday', 'Spring 26', 'Grocer'], page: 'npc.html', title: 'Pierre - NPC', desc: 'BirthdaySpring 26，General Store Owner' },
    { keywords: ['Pam', 'pam', 'Birthday', 'Spring 18', 'Bus'], page: 'npc.html', title: 'Pam - NPC', desc: 'BirthdaySpring 18，Bus Driver' },
    { keywords: ['Caroline', 'caroline', 'Birthday', 'Winter 7', 'Grocer'], page: 'npc.html', title: 'Caroline - NPC', desc: 'Birthday: Winter 7, Pierre\'s Wife' },
    { keywords: ['Robin', 'robin', 'Birthday', 'Winter 21', 'Carpenter'], page: 'npc.html', title: 'Robin - NPC', desc: 'BirthdayWinter 21，Carpenter' },
    { keywords: ['Demetrius', 'demetrius', 'Birthday', 'Winter 19', 'scientist'], page: 'npc.html', title: 'Demetrius - NPC', desc: 'BirthdayWinter 19，scientist' },
    { keywords: ['Jas', 'jas', 'Birthday', 'Summer 4', 'Child'], page: 'npc.html', title: 'Jas - NPC', desc: 'BirthdaySummer 4，Little Girl' },
    { keywords: ['Vincent', 'vincent', 'Birthday', 'Summer 10', 'Child'], page: 'npc.html', title: 'Vincent - NPC', desc: 'Birthday: Summer 10，Little Boy' },
    { keywords: ['Willy', 'willy', 'Birthday', 'Summer 24', 'Fishing'], page: 'npc.html', title: 'Willy - NPC', desc: 'Birthday: Summer 24, FishingBlacksmith' },
    { keywords: ['Gus', 'gus', 'Birthday', 'Winter24day', 'Saloon'], page: 'npc.html', title: 'Gus - NPC', desc: 'Birthday: Winter 24, Saloon Owner' },
    { keywords: ['Clint', 'clint', 'Birthday', 'Winter 26', 'Blacksmith'], page: 'npc.html', title: 'Clint - NPC', desc: 'BirthdayWinter 26，Blacksmith' },
    { keywords: ['Wizard', 'wizard', 'Birthday', 'Wizard\'s Tower', 'Magic'], page: 'npc.html', title: 'Wizard - NPC', desc: 'LivesWizard\'s Tower，Can help find Dwarf' },
    { keywords: ['Dwarf', 'dwarf', 'Birthday', 'The Mines', 'Ore'], page: 'npc.html', title: 'Dwarf - NPC', desc: 'LivesThe Mines，Need to unlock Mines entrance' },
    { keywords: ['Krobus', 'krobus', 'Birthday', 'Sewer', 'Shadow'], page: 'npc.html', title: 'Krobus - NPC', desc: 'LivesSewer，Can become roommate' },
    { keywords: ['Sandy', 'sandy', 'Birthday', 'Desert', 'Desert Blacksmith'], page: 'npc.html', title: 'Sandy - NPC', desc: 'LivesDesert，Can give her Tulip' },
    { keywords: ['Grandpa', 'grandpa', 'Birthday', 'Evaluation', 'Ghost'], page: 'npc.html', title: 'Grandpa - NPC', desc: 'Near Graveyard，Evaluates farm in Year 2' },

    // ==================== Fishing System ====================
    { keywords: ['Legendary Fish', 'legendary fish', 'Legendary', 'legendary'], page: 'fishing.html', title: 'Legendary FishGuide', desc: 'All 5 Legendary Fish locations, times, weather requirements' },
    { keywords: ['Crimsonfish', 'crimsonfish', 'Legendary Fish', 'Summer', 'Ocean'], page: 'fishing.html', title: 'Crimsonfish - Legendary Fish', desc: 'Summer Ocean，6pm-7pm，Rainy，Difficulty 50' },
    { keywords: ['Pufferfish', 'pufferfish', 'Legendary Fish', 'Summer', 'Ocean'], page: 'fishing.html', title: 'Pufferfish - Legendary Fish', desc: 'Summer Ocean，12pm-4pm，Sunny，Difficulty 60' },
    { keywords: ['_Super Cucumber', 'Super Cucumber', 'Legendary Fish', 'Legendary'], page: 'fishing.html', title: 'Super Cucumber - Legendary Fish', desc: 'All Year Lake，6am-2am，Any weather，Difficulty 55' },
    { keywords: ['Midnight Carp', 'midnight carp', 'Legendary Fish', 'Winter', 'Mountain'], page: 'fishing.html', title: 'Midnight Carp - Legendary Fish', desc: 'Winter Mountain Lake，10pm-2am，Any weather，Difficulty 55' },
    { keywords: ['Legendary Fish', 'Legendary Fish', 'legend', 'Legendary'], page: 'fishing.html', title: 'Legendary Fish - All', desc: 'All 5 Legendary Fish: Crimsonfish/Pufferfish/Super Cucumber/Midnight Carp/Angler' },
    { keywords: ['Angler', 'angler', 'Legendary Fish', 'Angler', 'Legendary'], page: 'fishing.html', title: 'Angler - Legendary Fish', desc: 'All Year River North，All day，Any weather，Difficulty 85' },
    { keywords: ['Fishing Rod', 'fishing rod', 'Fishing RodUpgrade', 'rod'], page: 'fishing.html', title: 'Fishing Rod Upgrade Path', desc: 'Bamboo Pole → Fiberglass Rod → Iridium Rod → Training Rod' },
    { keywords: ['Bamboo Pole', 'bamboo pole', 'Fishing Rod', 'glass'], page: 'fishing.html', title: 'Bamboo Pole', desc: 'Unlock at Fishing Lv3, buy at general store' },
    { keywords: ['Fiberglass Rod', 'fiberglass rod', 'Fishing Rod', 'iris'], page: 'fishing.html', title: 'Fiberglass Rod', desc: 'Unlock at Fishing Lv6, buy from Willy' },
    { keywords: ['Iridium', 'Iridium', 'Iridium', 'Fishing Rod'], page: 'fishing.html', title: 'IridiumFishing Rod', desc: 'Unlock at Fishing Lv8, can equip bait' },
    { keywords: ['Training Rod', 'training rod', 'Fishing Rod', 'training'], page: 'fishing.html', title: 'Training Rod', desc: 'Unlock at Fishing Lv9, reduces difficulty but no reeling' },
    { keywords: ['Bait', 'bait', 'bait', 'lure'], page: 'fishing.html', title: 'Bait', desc: 'Worms/Bees/Fireflies/Grasshoppers, increase fishing success rate' },
    { keywords: ['Soft Bait', 'soft bait', 'Bait', 'bait'], page: 'fishing.html', title: 'Soft Bait', desc: 'Increases chance of small fish biting' },
    { keywords: ['Fish Trap', 'trap', 'tr', 'tr'], page: 'fishing.html', title: 'Fish Trap', desc: 'Increases chance of big fish biting' },
    { keywords: ['Tackle Reel', 'reel', 'Tackle Reel', 'reel'], page: 'fishing.html', title: 'Tackle Reel', desc: 'Speeds up reeling' },

    // ==================== Ore System ====================
    { keywords: ['Copper Ore', 'copper', 'Ore', 'copper ore', 'The Mines'], page: 'mines.html', title: 'Copper Ore - Ore', desc: 'The Mines Floors 1-39，Sells for 5g' },
    { keywords: ['Iron Ore', 'iron', 'Ore', 'iron ore', 'The Mines'], page: 'mines.html', title: 'Iron Ore - Ore', desc: 'The Mines Floors 40-69，Sells for 10g' },
    { keywords: ['Gold Ore', 'gold', 'Ore', 'gold ore', 'The Mines'], page: 'mines.html', title: 'Gold Ore - Ore', desc: 'The Mines Floors 70-99，Sells for 25g' },
    { keywords: ['Iridium Ore', 'iridium', 'Ore', 'iridium ore', ' Skull Cavern'], page: 'mines.html', title: 'Iridium Ore - Ore', desc: 'Skull Cavern Floor 100+，Sells for 100g, most rare' },
    { keywords: ['Coal', 'coal', 'Ore', 'Fuel', 'mining'], page: 'mines.html', title: 'Coal - Ore', desc: 'Furnace Fuel，Essential for crafting bars' },
    { keywords: ['Ingot', 'ingot', 'Copper Ingot', 'Iron Ingot', 'Gold Ingot', 'Ingot'], page: 'mines.html', title: 'Metal Ingot', desc: 'Copper Ingot/Iron Ingot/Gold Ingot，Craft advanced tools' },
    { keywords: ['Refined Quartz', 'refined quartz', 'Ore', 'Furnace'], page: 'mines.html', title: 'Refined Quartz', desc: 'Processed in Furnace，Sells for 15g' },
    { keywords: ['Emerald', 'emerald', 'Gem', 'Ore', 'green'], page: 'mines.html', title: 'Emerald', desc: 'The MinesDrops，Sells for 250g, Loves' },
    { keywords: ['Ruby', 'ruby', 'Gem', 'Ore', 'red'], page: 'mines.html', title: 'Ruby', desc: 'The MinesDrops，Sells for 250g, Loves' },
    { keywords: ['Amethyst', 'amethyst', 'Gem', 'Ore', 'purple'], page: 'mines.html', title: 'Amethyst', desc: 'The MinesDrops，Sells for 100g, Loves' },
    { keywords: ['Topaz', 'topaz', 'Gem', 'Ore', 'yellow'], page: 'mines.html', title: 'Topaz', desc: 'The MinesDrops，Sells for 80g, Loves' },
    { keywords: ['Jade', 'jade', 'Gem', 'Ore', 'green'], page: 'mines.html', title: 'Jade', desc: 'The MinesDrops，Sells for 200g，Can make shrine' },
    { keywords: ['Aquamarine', 'aquamarine', 'Gem', 'Ore', 'blue'], page: 'mines.html', title: 'Aquamarine', desc: 'The MinesDrops，Sells for 180g, Loves' },
    { keywords: ['Diamond', 'diamond', 'Gem', 'Ore', 'Rare'], page: 'mines.html', title: 'Diamond', desc: 'The MinesDrops，Sells for 750g，Can make necklace' },

    // ==================== Weapon System ====================
    { keywords: ['Rusty Sword', 'rusty sword', 'Weapon', 'Starter'], page: 'combat.html', title: 'Rusty Sword - StarterWeapon', desc: 'StarterWeapon，Damage 3-5' },
    { keywords: ['Wooden Blade', 'wooden blade', 'Weapon', 'wood'], page: 'combat.html', title: 'Wooden Blade', desc: 'Buy from store，damage 5-10' },
    { keywords: ['Steel Falchion', 'steel falchion', 'Weapon', 'steel'], page: 'combat.html', title: 'Steel Falchion', desc: 'Buy from store，damage 10-15' },
    { keywords: ['Pirates Sword', 'pirates sword', 'Weapon', 'pirate'], page: 'combat.html', title: 'Pirates Sword', desc: 'Skull Cavern，damage 15-25' },
    { keywords: ['Galaxy Sword', 'galaxy sword', 'Weapon', 'galaxy', 'Legendary'], page: 'combat.html', title: 'Galaxy Sword', desc: 'Quest reward，damage 30-50, strongest one-handed sword' },
    { keywords: ['Dragontooth Cutlass', 'dragontooth cutlass', 'Weapon', 'dragon', 'dragon'], page: 'combat.html', title: 'Dragontooth Cutlass', desc: 'Volcano Dungeon，damage 22-28' },
    { keywords: ['Shadow Dagger', 'shadow dagger', 'Weapon', 'shadow', 'd'], page: 'combat.html', title: 'Shadow Dagger', desc: 'Skull Cavern，damage 20-30' },
    { keywords: ['Crystal Dagger', 'crystal dagger', 'Weapon', 'crystal'], page: 'combat.html', title: 'Crystal Dagger', desc: 'Craft，damage 30-40' },
    { keywords: ['Silver Dagger', 'galaxy dagger', 'Weapon', 'galaxy'], page: 'combat.html', title: 'Silver Dagger', desc: 'Quest reward，Damage 20-25' },
    { keywords: ['Infinity Dagger', 'infinity dagger', 'Weapon', 'infinity'], page: 'combat.html', title: 'Infinity Dagger', desc: 'UpgradeSilver Dagger，Damage40-50' },
    { keywords: ['Infinity Blade', 'infinity blade', 'Weapon', 'infinity'], page: 'combat.html', title: 'Infinity Blade', desc: 'UpgradeGalaxy Sword，Damage55-65' },
    { keywords: ['Bone Sword', 'bone sword', 'Weapon', 'bone'], page: 'combat.html', title: 'Bone Sword', desc: 'Skull Cavern，Damage10-20' },
    { keywords: ['Lava Katana', 'lava katana', 'Weapon', 'lava'], page: 'combat.html', title: 'Lava Katana', desc: 'Volcano Dungeon，Damage25-35' },
    { keywords: ['Dark Sword', 'dark sword', 'Weapon', 'dark', 'darksword'], page: 'combat.html', title: 'Dark Sword', desc: 'Skull Cavern，Damage22-27' },

    // ==================== Crafting Items ====================
    { keywords: ['Sprinkler', 'sprinkler', 'Automation', 'water'], page: 'crafting.html', title: 'Sprinkler', desc: 'Basic/Quality/Iridium Sprinklers, cover 4/8/24 tiles' },
    { keywords: ['优质Sprinkler', 'quality sprinkler', 'Sprinkler', 'Quality'], page: 'crafting.html', title: '优质Sprinkler', desc: 'Covers 8 tiles, auto-waters daily' },
    { keywords: ['IridiumSprinkler', 'iridium sprinkler', 'Sprinkler', 'iridium'], page: 'crafting.html', title: 'IridiumSprinkler', desc: 'Covers 24 tiles, auto-waters daily' },
    { keywords: ['Keg', 'Keg', 'Wine Making', 'beer', 'Wine'], page: 'crafting.html', title: 'Keg', desc: 'Turns fruit into wine, increases profit 5-8x' },
    { keywords: ['Preserves Jar', 'preserves jar', 'Jam', 'pickle'], page: 'crafting.html', title: 'Preserves Jar', desc: 'Turns fruit/vegetables into jam/pickles, doubles value' },
    { keywords: ['Furnace', 'furnace', 'Furnace', 'smelting'], page: 'crafting.html', title: 'Furnace', desc: 'Essential ore smelting equipment' },
    { keywords: ['Dehydrator', 'dehydrator', 'Hay', 'hay'], page: 'crafting.html', title: 'Dehydrator', desc: 'Dries fruit' },
    { keywords: ['Cheese Press', 'cheese press', 'Cheese', 'Cheese'], page: 'crafting.html', title: 'Cheese Press', desc: 'Turns milk into cheese' },
    { keywords: ['Bee House', 'bee house', 'Honey', 'hive'], page: 'crafting.html', title: 'Bee House', desc: 'Produces honey, uses wild forage flowers' },
    { keywords: ['Lamp', 'lamp', 'Lamp', 'light'], page: 'crafting.html', title: 'Lamp', desc: 'Illuminates The Mines' },
    { keywords: ['Crystalarium', 'crystalarium', 'Duplicate', 'gem'], page: 'crafting.html', title: 'Crystalarium', desc: 'Duplicates Ore and Gems' },
    { keywords: ['Bone Mill', 'bone mill', 'Bone', 'Bone'], page: 'crafting.html', title: 'Bone Mill', desc: 'Processes bones into bone meal' },
    { keywords: ['Shipping Box', 'shipping box', 'Ship', 'Sell'], page: 'farm.html', title: 'Shipping Box', desc: 'Auto-sells items' },
    { keywords: ['Chest', 'chest', 'Storage', 'Chest'], page: 'farm.html', title: 'Chest', desc: 'Stores items, max 2 per farm' },
    { keywords: ['Scarecrow', 'scarecrow', 'Scarecrow', 'Scarecrow'], page: 'farm.html', title: 'Scarecrow', desc: 'Protects crops from crows' },
    { keywords: ['Slime', 'slime', 'Slime', 'slime'], page: 'farm.html', title: 'Slime', desc: 'Kill slimes to get slime balls' },
    { keywords: ['Slime Incubator', 'slime incubator', 'Slime', 'Hatch'], page: 'farm.html', title: 'Slime Incubator', desc: 'Hatches slime eggs' },
    { keywords: ['Slime Hutch', 'slime hutch', 'Slime', 'Hutch'], page: 'farm.html', title: 'Slime Hutch', desc: 'Room for raising slimes' },

    // ==================== Cooking Recipes ====================
    { keywords: ['Complete Breakfast', 'complete breakfast', 'Recipe', 'Breakfast'], page: 'crafting.html', title: 'Complete Breakfast', desc: 'Full energy + Health + Speed boost' },
    { keywords: ['Golden Pumpkin Pie', 'pumpkin pie', 'Recipe', 'Pumpkin'], page: 'crafting.html', title: 'Golden Pumpkin Pie', desc: 'Restores 125 energy 50 health, delicious' },
    { keywords: ['Hot Pepper', 'pepper poppers', 'Recipe', 'Hot Pepper'], page: 'crafting.html', title: 'Hot Pepper', desc: 'Restores 65 energy + speed boost' },
    { keywords: ['Fried Mushroom', 'fried mushroom', 'Recipe', 'mushroom'], page: 'crafting.html', title: 'Fried Mushroom', desc: 'Restores 100 energy 45 health' },
    { keywords: ['Fish Taco', 'fish taco', 'Recipe', 'Fish'], page: 'crafting.html', title: 'Fish Taco', desc: 'Restores 100 energy 45 health' },
    { keywords: ['Eel', 'eel', 'Recipe', 'Eel'], page: 'crafting.html', title: 'Eel', desc: 'Restores 75 Energy, 50 Health' },
    { keywords: ['Cake', 'cake', 'Recipe', 'Birthday'], page: 'crafting.html', title: 'Cake', desc: 'Restores 100 Energy，Festival gift' },
    { keywords: ['Cookie', 'cookie', 'Recipe', 'Dessert'], page: 'crafting.html', title: 'Cookie', desc: 'Restores 75 Energy，Batch craftable' },
    { keywords: ['Jam', 'jam', 'Jam', 'preserves'], page: 'crafting.html', title: 'Jam', desc: 'Preserves JarCraft，value doubled' },
    { keywords: ['Pickles', 'pickle', 'Pickles', 'Pickle'], page: 'crafting.html', title: 'Pickles', desc: 'Preserves JarCraft，value doubled' },
    { keywords: ['Wine', 'wine', 'Wine Making', 'Keg'], page: 'crafting.html', title: 'Wine', desc: 'KegWine Making，value doubled5-8x' },
    { keywords: ['Beer', 'beer', 'Wine Making', 'Keg'], page: 'crafting.html', title: 'Beer', desc: 'KegWine Making' },
    { keywords: [' espresso', 'coffee', 'espresso', 'coffee'], page: 'crafting.html', title: 'coffee', desc: 'KegWine Making，Quick drink' },

    // ==================== Skills System ====================
    { keywords: [' farming', 'Farming Skill', 'farming skill', 'level'], page: 'skills.html', title: 'Farming Skill', desc: 'Level boost：Harvest/Milking/PettingAnimal/Pick up products' },
    { keywords: [' foraging', 'Foraging Skill', 'foraging skill', 'forage'], page: 'skills.html', title: 'Foraging Skill', desc: 'Level boost：Forage wild items/Chop trees/Dig up tree stumps' },
    { keywords: [' mining', 'Mining Skill', 'mining skill', 'Ore'], page: 'skills.html', title: 'Mining Skill', desc: 'Level boost：Mine/Break rocks' },
    { keywords: [' fishing', 'Fishing Skill', 'fishing skill', 'Fishing'], page: 'skills.html', title: 'Fishing Skill', desc: 'Level boost：Fishing/Catch crabs' },
    { keywords: [' combat', 'Combat Skill', 'combat skill', 'Attack'], page: 'skills.html', title: 'Combat Skill', desc: 'Level boost：Kill monsters' },
    { keywords: ['Agriculturalist', 'tiller', ' farming', 'Daily'], page: 'skills.html', title: 'Agriculturalist - Farming', desc: 'DailyCrop sell price +10%' },
    { keywords: ['Rancher', 'rancher', ' farming', 'Animal products'], page: 'skills.html', title: 'Rancher - Farming', desc: 'Animal ProductsPrice+20%' },
    { keywords: ['Winemaker', 'winemaker', 'Farming', 'Keg'], page: 'skills.html', title: 'Winemaker - Farming', desc: 'Wine value +40%' },
    { keywords: ['Tracker', 'tracker', ' foraging', 'forage'], page: 'skills.html', title: 'Tracker - forage', desc: 'Shows wild forage spots around farm' },
    { keywords: ['Miner', 'miner', ' mining', 'Ore'], page: 'skills.html', title: 'Miner - Mine', desc: 'Ore mining yield +100%' },
    { keywords: ['Geologist', 'geologist', ' mining', 'Gem'], page: 'skills.html', title: 'Geologist - Mine', desc: 'Gem vein spawn rate +100%' },
    { keywords: ['Engineer', 'engineer', ' mining', 'Bomb'], page: 'skills.html', title: 'Engineer - Mine', desc: 'Bomb damage +50%' },
    { keywords: ['Blacksmith', 'blacksmith', ' mining', 'Furnace'], page: 'skills.html', title: 'Blacksmith - Mine', desc: 'Ore/Ingot value +25%' },
    { keywords: ['Prospector', 'prospector', ' mining', 'Ore'], page: 'skills.html', title: 'Prospector - Mine', desc: 'Killing monsters may drop Coal' },
    { keywords: ['Pirate', 'pirate', ' fishing', 'treasure'], page: 'skills.html', title: 'Pirate - Fishing', desc: 'Treasure chest spawn chance +100%' },
    { keywords: ['Bait Maker', 'baitmaker', ' fishing', 'bait'], page: 'skills.html', title: 'Bait Maker - Fishing', desc: 'Bait consumption halved' },
    { keywords: ['Angler', 'angler', ' fishing', 'Sell'], page: 'skills.html', title: 'Angler - Fishing', desc: 'Fish sell price +25%' },
    { keywords: ['Trout', 'trout', ' fishing', 'bait'], page: 'skills.html', title: 'Trout - Fishing', desc: 'Fishing difficulty -15%' },
    { keywords: ['Samurai', 'samurai', ' combat', 'Instant Kill'], page: 'skills.html', title: 'Samurai - Combat', desc: 'Monsters may be instantly killed' },
    { keywords: ['Acrobat', 'acrobat', ' combat', 'Range'], page: 'skills.html', title: 'Acrobat - Combat', desc: 'Ranged weapon attack range increased' },
    { keywords: [' Lancashire', 'lancer', ' combat', 'Long'], page: 'skills.html', title: 'Lancer - Combat', desc: 'Long weapon attack range increased' },
    { keywords: ['Defender', 'defender', ' combat', 'Defense'], page: 'skills.html', title: 'Defender - Combat', desc: 'Player defense +25%' },

    // ==================== Achievements System ====================
    { keywords: ['Achievement', 'achievement', 'Perfect', '白'], page: 'achievements.html', title: 'Perfect Achievement', desc: '100%Completion，Receive Perfect Statue' },
    { keywords: ['Master Angler', 'master angler', 'Fishing', 'all fish'], page: 'achievements.html', title: 'Master AnglerAchievement', desc: 'Catch all fish' },
    { keywords: ['Full House', 'full house', 'Marriage', 'family'], page: 'achievements.html', title: 'Full House Achievement', desc: 'Adopt a child' },
    { keywords: ['Perfect', 'perfect', 'Perfect', 'pristine'], page: 'achievements.html', title: 'Perfect Achievement', desc: 'Ship gold/iridium quality produce' },
    { keywords: ['Money', 'money', 'millionaire', 'Million'], page: 'achievements.html', title: 'Millionaire Achievement', desc: 'Earn 10,000g total' },
    { keywords: ['Legendary', 'legend', 'legend', 'Legendary'], page: 'achievements.html', title: 'Legendary Miner Achievement', desc: 'Reach floor 120 of The Mines' },

    // ==================== Community Center ====================
    { keywords: ['All Bundles', 'all bundles', 'Bundles', 'bundles'], page: 'community-center.html', title: 'All Bundles', desc: 'Complete guide for all 42 Bundles' },
    { keywords: ['Spring Bundles', 'spring foraging bundle', 'Bundles', 'Spring'], page: 'community-center.html', title: 'Spring Bundles', desc: 'Wild Horseradish/Tulip/Leek/Large Garlic' },
    { keywords: ['Summer Bundles', 'summer foraging bundle', 'Bundles', 'Summer'], page: 'community-center.html', title: 'Summer Bundles', desc: 'Blueberry/Tomato/Hot Pepper/Wheat' },
    { keywords: ['Fall Bundles', 'fall foraging bundle', 'Bundles', 'Fall'], page: 'community-center.html', title: 'Fall Bundles', desc: 'Blackberry/Chestnut/Cranberries/Yam' },
    { keywords: ['WinterBundles', 'winter foraging bundle', 'Bundles', 'Winter'], page: 'community-center.html', title: 'WinterBundles', desc: 'Winterroot/Kale/Turnip/Parsnip' },
    { keywords: ['Pantry', 'pantry', 'Wine Making', 'pant'], page: 'community-center.html', title: 'Pantry', desc: 'Complete all Crop Bundles' },
    { keywords: ['Boiler Room', 'boiler room', 'Furnace', 'boiler'], page: 'community-center.html', title: 'Boiler Room', desc: 'Animal Product/Mineral Bundles' },
    { keywords: [' Bulletin', ' Bulletin', ' Bulletin', ' Bulletin'], page: 'community-center.html', title: ' Bulletin', desc: 'River Fish/Lake Fish/Ocean Fish/Night Fishing Bundles' },
    { keywords: ['Robin', 'woody', 'Carpenter', 'carpenter'], page: 'community-center.html', title: 'Robin - Carpenter', desc: 'Expansion/Renovation services' },
    { keywords: ['Crane', 'crane', 'Crane', 'c'], page: 'community-center.html', title: 'Crane', desc: 'Hot SpringCraneExhibit' },

    // ==================== Farm Animals ====================
    { keywords: ['Cow', 'cow', 'Animal', 'milk'], page: 'farm.html', title: 'Cow - Farm Animal', desc: 'Milks daily，Sells for 1200g+' },
    { keywords: ['Sheep', 'sheep', 'Animal', 'Sheep wool'], page: 'farm.html', title: 'Sheep - Farm Animal', desc: 'Shears monthly，Sells for 1200g+' },
    { keywords: ['Goat', 'Goat', 'Animal', 'Goat milk'], page: 'farm.html', title: 'Goat - Farm Animal', desc: 'Milks daily，Sells for1600g起' },
    { keywords: ['Pig', 'pig', 'Animal', 'Truffle'], page: 'farm.html', title: 'Pig - Farm Animal', desc: 'Forages for Truffle，Sells for1600g起' },
    { keywords: ['Chicken', 'Chicken', 'Animal', 'Chicken蛋'], page: 'farm.html', title: 'Chicken - Farm Animal', desc: 'Lays eggs daily，Sells for400g起' },
    { keywords: ['Duck', 'duck', 'Animal', 'Duck蛋'], page: 'farm.html', title: 'Duck - Farm Animal', desc: 'Lays duck eggs daily，Sells for400g起' },
    { keywords: ['Rabbit', 'rabbit', 'Animal', 'Rabbit脚'], page: 'farm.html', title: 'Rabbit - Farm Animal', desc: 'Drops rabbit foot weekly，Sells for800g起' },
    { keywords: ['Slime', 'slime', 'Animal', 'Slime egg'], page: 'farm.html', title: 'Slime - Farm Animal', desc: 'Slime Incubator，Drops slime balls' },
    { keywords: ['Hay', 'hay', 'Animal', 'Feed'], page: 'farm.html', title: 'Hay', desc: 'Animal Winter food，Can grow in Greenhouse' },
    { keywords: ['Petting', 'pet', 'Animal', 'Petting'], page: 'farm.html', title: '宠物Petting', desc: 'Daily petting boosts hearts' },
    { keywords: ['Milking', 'milk', 'Cow milk', 'Milking'], page: 'farm.html', title: 'Milking', desc: 'Milks Cow/Goat daily' },
    { keywords: ['Shearing', 'wool', 'Sheep wool', '剪'], page: 'farm.html', title: 'Shearing', desc: 'Shears Sheep monthly' },
    { keywords: ['Truffle', 'truffle', 'Pig', 'Valuable'], page: 'farm.html', title: 'Truffle - PigDrops', desc: 'Pig forages，Sells for125-1250g' },
    { keywords: ['Duck Feather', 'duck feather', 'Duck', 'Feather'], page: 'farm.html', title: 'Duck Feather', desc: 'Emily Loves' },
    { keywords: ['Rabbit脚', 'rabbit foot', 'Rabbit', 'Lucky'], page: 'farm.html', title: 'Rabbit脚', desc: 'Weekly drop，Lucky charm' },
    { keywords: ['Mayonnaise', 'Mayonnaise', 'Chicken', 'Duck'], page: 'farm.html', title: 'Mayonnaise', desc: 'Chicken/Duck蛋Craft' },
    { keywords: ['Goat Cheese', 'Goat cheese', 'Goat', 'Cheese'], page: 'farm.html', title: 'Goat Cheese', desc: 'Goat milkCraft，Leah Loves' },

    // ==================== Special Items ====================
    { keywords: ['Ancient Fruit', 'ancient fruit', 'Greenhouse', 'Permanent'], page: 'farm.html', title: 'Ancient Fruit - Greenhouse', desc: 'Best Greenhouse crop，28 days to mature，Sells for660-2310g' },
    { keywords: ['Starfruit', 'starfruit', 'Greenhouse', 'Fall'], page: 'farm.html', title: 'Starfruit - Greenhouse', desc: 'Seeds 200g，13 days to mature，Sells for 750g' },
    { keywords: ['Doughnut', 'dough', 'Recipe', 'Sweet'], page: 'crafting.html', title: 'Doughnut', desc: 'Restores 100 Energy' },
    { keywords: ['奇异果', 'kiwi', 'Fall', '水果'], page: 'seasons.html', title: '奇异果', desc: 'Seeds 50g，Fall15days to mature, regrow' },
    { keywords: ['菠萝', 'pineapple', 'Ginger Island', '热带'], page: 'ginger-island.html', title: '菠萝 - Ginger Island', desc: 'Ginger IslandPlant，14days to mature' },
    { keywords: ['香蕉', 'banana', 'Ginger Island', '热带'], page: 'ginger-island.html', title: '香蕉 - Ginger Island', desc: 'Ginger IslandPlant，热带水果' },
    { keywords: ['可可', 'cacao', 'Ginger Island', '巧克力'], page: 'ginger-island.html', title: '可可 - Ginger Island', desc: 'Ginger IslandPlant，Craft巧克力' },
    { keywords: ['Lucky charm', 'lucky charm', '赌博', '戒指'], page: 'desert.html', title: 'Lucky charm', desc: 'DesertBuy from store，运气Boost' },
    { keywords: ['Egg FestivalEaster Egg', 'easter egg', 'Easter Egg', 'Festival'], page: 'seasons.html', title: 'Egg FestivalEaster Egg', desc: 'Spring 13收集' },
    { keywords: ['珍珠', 'pearl', 'Rare', '珍珠'], page: 'npc.html', title: '珍珠 - RareItem', desc: '可以在Beach/CoalOre森林/蟹HutchGet' },
    { keywords: ['贤者之石', 'magma', '岩浆', 'Rare'], page: 'mines.html', title: '贤者之石', desc: 'Skull Cavern Floor 100+RareDrops' },
    { keywords: ['骑行Slime', 'slime', '骑行', '宠物'], page: 'farm.html', title: '骑行Slime', desc: 'Complete特殊订单Get' },

    // ==================== Game Terms ====================
    { keywords: ['GoldQuality', 'gold quality', '高Quality', 'star'], page: 'farm.html', title: 'GoldQuality', desc: 'Crop/forageItemGoldQuality，Sells for+80%' },
    { keywords: ['IridiumQuality', 'iridium quality', '最高Quality', 'prismatic'], page: 'farm.html', title: 'IridiumQuality', desc: '最高Quality，Sells for+112%' },
    { keywords: ['Bundles', 'bundles', 'Bundles', ' Community'], page: 'community-center.html', title: 'BundlesBundles', desc: 'CompleteBundles推进剧情' },
    { keywords: ['Greenhouse', 'greenhouse', 'All YearPlant', 'Permanent'], page: 'farm.html', title: 'Greenhouse', desc: 'All YearPlant任何Crop' },
    { keywords: ['洒水', 'sprinkler', 'AutoWater', 'water'], page: 'crafting.html', title: 'Auto洒水', desc: '解放双手' },
    { keywords: ['加速', 'speed', 'Speed', 'speed'], page: 'skills.html', title: '加速', desc: '移动SpeedBoost' },
    { keywords: ['Lucky', 'luck', 'Lucky', 'luc'], page: 'skills.html', title: 'Lucky', desc: 'RareDropsChanceBoost' },
    { keywords: ['Ore车', 'minecart', '交通', '快速'], page: 'mines.html', title: 'Ore车系统', desc: 'The Mines快速交通' },
    { keywords: ['电梯', 'elevator', 'The Mines', 'skip'], page: 'mines.html', title: 'The Mines电梯', desc: '跳过Floor数直达' },
    { keywords: ['Bomb', 'bomb', 'Mine', 'explosive'], page: 'mines.html', title: 'Bomb', desc: '快速BombOre' },
    { keywords: ['楼梯', 'stairs', 'The Mines', '跳过'], page: 'mines.html', title: '楼梯', desc: '跳过困难Floor' },
    { keywords: ['day历', 'calendar', 'Birthday', '事件'], page: 'npc.html', title: 'day历事件', desc: '查看NPCBirthday和Festival' },
    { keywords: ['钱包', 'wallet', '钱包', 'wallet'], page: 'index.html', title: '钱包', desc: '查看当前Gold币' },
    { keywords: ['每day运气', 'daily luck', '运气', 'fortune'], page: 'index.html', title: '每day运气', desc: '影响RareDrops' },
    { keywords: ['电视机', 'television', '电视', 'tv'], page: 'index.html', title: '电视机', desc: '查看days气预报和每day提示' },
    { keywords: ['垃圾桶', 'trash can', 'Fishing', '垃圾'], page: 'fishing.html', title: '垃圾桶', desc: 'Fishing可能钓到垃圾' },
    { keywords: ['蟹Hutch', 'crab', 'trap', 'Hutch'], page: 'fishing.html', title: '蟹Hutch', desc: '放置bait捕获蟹和贝类' },
    { keywords: ['Fishing宝箱', 'treasure chest', '宝箱', 'treasure'], page: 'fishing.html', title: 'Fishing宝箱', desc: 'Fishing随机Spawn' },

    // ==================== Important Locations ====================
    { keywords: ['Pelican Town', 'pelican town', '主城', '中心'], page: 'index.html', title: 'Pelican Town', desc: 'game主城' },
    { keywords: ['CoalOre森林', 'cindersap forest', '森林', 'forage'], page: 'seasons.html', title: 'CoalOre森林', desc: 'forage点密集Area' },
    { keywords: ['的秘密森林', 'secret woods', '秘密森林', 'f'], page: 'farm.html', title: '秘密森林', desc: 'Get硬wood和UnlockChop trees' },
    { keywords: ['山区', 'mountains', '山地', 'The Mines'], page: 'mines.html', title: '山区', desc: 'The Mines入口处' },
    { keywords: ['Beach', 'beach', '沙滩', 'Fishing'], page: 'fishing.html', title: 'Beach', desc: 'BeachFishing点' },
    { keywords: ['Desert', 'desert', 'Desert', 'oasis'], page: 'desert.html', title: 'Desert', desc: 'Desert Blacksmith所在地' },
    { keywords: ['Skull Cavern', 'Skull Cavern', ' skull', 'skeleton'], page: 'mines.html', title: 'Skull Cavern', desc: '比The Mines更危险的Area' },
    { keywords: ['Volcano Dungeon', 'volcano', 'Volcano', 'dungeon'], page: 'ginger-island.html', title: 'Volcano Dungeon', desc: 'Ginger IslandVolcanoArea' },
    { keywords: ['Ginger Island', 'ginger island', ' island', '热带'], page: 'ginger-island.html', title: 'Ginger Island', desc: '后期UnlockArea' },
    { keywords: ['Sewer', 'sewers', 'Sewer', 'krobus'], page: 'npc.html', title: 'Sewer', desc: 'Krobus住处' },
    { keywords: ['Wizard\'s Tower', 'wizard tower', 'Wizard', 'magic'], page: 'npc.html', title: 'Wizard\'s Tower', desc: 'Wizard住处' },
    { keywords: ['The Mines', 'mines', ' mine', 'mining'], page: 'mines.html', title: 'The Mines', desc: '主要Mine地点' },
    { keywords: ['采石场', 'quarry', '采石场', 'stone'], page: 'mines.html', title: '采石场', desc: '额外Mine点' },
    { keywords: ['Farm', 'farm', 'home', 'home'], page: 'farm.html', title: 'Farm', desc: '玩家主要Event基地' },
    { keywords: ['Carpenter', 'carpenter', 'robin', 'Expansion'], page: 'farm.html', title: 'Carpenter商店', desc: 'Robin的Carpenter店' },
    { keywords: ['Blacksmith', 'blacksmith', 'clint', 'Ore'], page: 'mines.html', title: 'Blacksmith铺', desc: 'Clint的Blacksmith铺' },
    { keywords: ['General Store', 'general store', 'pierre', '购物'], page: 'seasons.html', title: 'General Store', desc: 'Pierre的商店' },
    { keywords: ['Beach商店', 'tide', 'Beach', '商品'], page: 'fishing.html', title: 'Beach商店', desc: 'Willy的Fishing商店' },
    { keywords: ['Traveling Cart', 'traveling cart', 'Traveling Cart', 'Rare'], page: 'seasons.html', title: 'Traveling Cart', desc: 'Weekly五周daySpawn，SellRareItem' },

    // ==================== Game Mechanics ====================
    { keywords: ['每day精力', 'energy', 'Energy', 'Health'], page: 'index.html', title: '精力与Health', desc: 'Energy用于Tool/Farming，Health决定死亡' },
    { keywords: ['UpgradeTool', 'tool', 'ToolUpgrade', 'copper'], page: 'skills.html', title: 'ToolUpgrade', desc: '铜/铁/Gold/IridiumToolUpgrade' },
    { keywords: ['day历', 'calendar', 'Birthday', 'Festival'], page: 'npc.html', title: 'gameday历', desc: '查看重要day期' },
    { keywords: ['马', 'horse', '交通Tool', 'horse'], page: 'farm.html', title: '马', desc: '快速交通' },
    { keywords: ['Chicken窝', 'coop', 'Animal', 'Chicken'], page: 'farm.html', title: 'Chicken窝', desc: '养ChickenBuilding' },
    { keywords: ['谷仓', 'barn', 'Animal', 'cow'], page: 'farm.html', title: '谷仓', desc: '养Cow/Sheep/PigBuilding' },
    { keywords: ['大棚', 'big coop', 'Animal', 'upgrade'], page: 'farm.html', title: '大棚', desc: 'Upgrade后可养Duck和Rabbit' },
    { keywords: ['大谷仓', 'big barn', 'Animal', 'd'], page: 'farm.html', title: '大谷仓', desc: 'Upgrade后可养Sheep驼' },
    { keywords: ['Deluxe Barn', ' deluxe barn', ' deluxe', 'Upgrade'], page: 'farm.html', title: 'Deluxe Barn', desc: '可养Pig' },
    { keywords: ['豪宅', 'house', 'farmhouse', 'Expansion'], page: 'farm.html', title: 'Farm住宅', desc: 'Upgrade厨房/儿童Room' },
    { keywords: ['厨房', 'kitchen', 'cooking', '厨房'], page: 'farm.html', title: '厨房', desc: '可烹饪料理' },
    { keywords: ['儿童', 'children', '孩子', 'family'], page: 'npc.html', title: '儿童', desc: 'Marriage后可生育' },
    { keywords: ['睡眠', 'sleep', '存档', 'save'], page: 'beginner.html', title: '睡眠存档', desc: '每days结束时Auto存档' },
    { keywords: ['读档', 'save', '存档', 'load'], page: 'beginner.html', title: '读档', desc: '重新开始当days' },
    { keywords: ['Multiplayer模式', 'multiplayer', 'Multiplayer', 'online'], page: 'multiplayer.html', title: 'Multiplayer模式', desc: 'Max4人Co-op' },
    { keywords: ['Joja超市', 'joja', ' joja', ' alternative'], page: 'beginner.html', title: 'Joja超市', desc: '替代Community Center的路线' },
    { keywords: ['Community Center', 'community center', 'bundles', 'Bundles'], page: 'community-center.html', title: 'Community Center', desc: 'CompleteBundles推进剧情' },

    // ==================== Mod Related ====================
    { keywords: ['cf兼容', 'cf', 'Mod', 'mod'], page: 'mods.html', title: 'cf兼容', desc: 'Max99x99堆叠' },
    { keywords: ['Automation', 'automate', 'mod', 'mod'], page: 'mods.html', title: 'Automationmod', desc: 'AutoShip和填充' },
    { keywords: ['p SMK', 'psmk', 'Map', 'map'], page: 'mods.html', title: 'p SMK', desc: 'ShowMineral点' },
    { keywords: ['马赛克', 'lookup', 'anything', '查询'], page: 'mods.html', title: '马赛克anything', desc: '查询任何Item信息' },
    { keywords: ['空', 'empty', '占据', '占据'], page: 'mods.html', title: '空占据mod', desc: '占据网tilesShow空' },
    { keywords: ['高跟鞋', '高跟鞋', '走路', 'mod'], page: 'mods.html', title: '高跟鞋mod', desc: '女性Character穿高跟鞋' },

    // ==================== Version Updates ====================
    { keywords: ['1.6Update', 'update 1.6', '新内容', 'new'], page: 'update16.html', title: '1.6VersionUpdate', desc: '新Achievement/新Item/新功能' },
    { keywords: ['新Achievement', 'new achievement', '1.6', 'Achievement'], page: 'update16.html', title: '新Achievement - 1.6', desc: '4个新Achievement' },
    { keywords: ['新Item', 'new item', '1.6', 'Item'], page: 'update16.html', title: '新Item - 1.6', desc: '新Recipe/新Equipment' },
    { keywords: ['新功能', 'new feature', '1.6', '功能'], page: 'update16.html', title: '新功能 - 1.6', desc: '新机制和改动' },

    // ==================== New Search Entries ====================
    // Ore types
    { keywords: ['铜Ore', 'copper ore', 'copper', '铜'], page: 'mines.html', title: '铜Ore', desc: '1-40FloorSpawn，Sells for 5g' },
    { keywords: ['铁Ore', 'iron ore', 'iron', '铁'], page: 'mines.html', title: '铁Ore', desc: '15-80FloorSpawn，Sells for 10g' },
    { keywords: ['GoldOre', 'gold ore', 'gold', 'Gold'], page: 'mines.html', title: 'GoldOre', desc: '40-120FloorSpawn，Sells for 25g' },
    { keywords: ['IridiumOre', 'iridium ore', 'iridium', 'Iridium'], page: 'mines.html', title: 'IridiumOre', desc: '50-120FloorSpawn，Sells for100g' },
    { keywords: ['Coal', 'coal', 'coal', 'Fuel'], page: 'mines.html', title: 'Coal', desc: '冶炼必需品，Sells for50g' },
    { keywords: ['Copper Ingot', 'copper bar', 'copper bar', 'Ingot'], page: 'mines.html', title: 'Copper Ingot', desc: 'FurnaceCraft，Sells for 60g' },
    { keywords: ['Iron Ingot', 'iron bar', 'iron bar', 'Ingot'], page: 'mines.html', title: 'Iron Ingot', desc: 'FurnaceCraft，Sells for 120g' },
    { keywords: ['Gold Ingot', 'gold bar', 'gold bar', 'Ingot'], page: 'mines.html', title: 'Gold Ingot', desc: 'FurnaceCraft，Sells for 250g' },
    { keywords: ['IridiumIngot', 'iridium bar', 'iridium bar', 'Ingot'], page: 'mines.html', title: 'IridiumIngot', desc: 'FurnaceCraft，Sells for1000g' },
    // Gem types
    { keywords: ['Diamond', 'diamond', 'diamond', 'Diamond'], page: 'mines.html', title: 'Diamond', desc: '最RareGem，Sells for 750g' },
    { keywords: ['Emerald', 'emerald', 'emerald', 'Jade'], page: 'mines.html', title: 'Emerald', desc: 'Crystalarium常见，Sells for 250g' },
    { keywords: ['Ruby', 'ruby', 'ruby', 'Ruby'], page: 'mines.html', title: 'Ruby', desc: 'Skull Cavern常见，Sells for 150g' },
    { keywords: ['Amethyst', 'amethyst', 'amethyst', 'Amethyst'], page: 'mines.html', title: 'Amethyst', desc: '早期可Get，Sells for100g' },
    { keywords: ['Topaz', 'topaz', 'topaz', 'Topaz'], page: 'mines.html', title: 'Topaz', desc: '用途多样，Sells for100g' },
    { keywords: ['碧玉', 'jade', 'jade', 'Jade'], page: 'mines.html', title: '碧玉', desc: '周三墓碑Quest，Sells for 80g' },
    // Ore types
    { keywords: ['Crystalarium', 'geode', 'geode', '开Ore'], page: 'mines.html', title: 'Crystalarium', desc: '可开出各种Gem' },
    { keywords: ['岩浆Crystalarium', 'magma geode', 'magma', '岩浆'], page: 'mines.html', title: '岩浆Crystalarium', desc: 'Skull Cavern特有' },
    { keywords: ['omniCrystalarium', 'omni geode', 'omni', '全'], page: 'mines.html', title: 'OmniCrystalarium', desc: '可开出所有Ore' },
    // Mine monsters
    { keywords: ['Green Slime', 'green slime', 'slime', 'Slime'], page: 'mines.html', title: 'Green Slime', desc: '1-29Floor，血量30' },
    { keywords: ['Blue Slime', 'blue slime', 'slime', 'Slime'], page: 'mines.html', title: 'Blue Slime', desc: '30-59Floor，血量50' },
    { keywords: ['Red Slime', 'red slime', 'slime', 'Slime'], page: 'mines.html', title: 'Red Slime', desc: '60+Floor，血量80' },
    { keywords: ['Shadow Brute', 'black slime', 'slime', 'Slime'], page: 'mines.html', title: 'Shadow Brute', desc: 'Skull Cavern，血量120' },
    { keywords: ['skeleton', 'skeleton', 'skeleton', 'skeleton'], page: 'mines.html', title: 'skeleton', desc: '20+Floor，血量60' },
    { keywords: ['skeletonWizard', 'skeleton mage', 'mage', 'Wizard'], page: 'mines.html', title: 'skeletonWizard', desc: '50+Floor，远程Attack' },
    { keywords: ['Gold属头', 'metal head', 'metal', '机械'], page: 'mines.html', title: 'Gold属头', desc: '40+Floor，有无敌Time' },
    { keywords: ['Serpent', 'serpent', 'serpent', '蛇'], page: 'mines.html', title: 'Serpent', desc: 'Skull Cavern，血量150' },
    { keywords: ['Bat', 'cave bat', 'bat', 'Bat'], page: 'mines.html', title: 'Bat', desc: '任意Floor，血量25' },
    { keywords: ['Slime', 'jelly', 'jelly', 'boss'], page: 'mines.html', title: 'SlimeBoss', desc: '25FloorBoss，血量100' },
    { keywords: ['skeleton王', 'skeleton mage', 'skeleton king', 'boss'], page: 'mines.html', title: 'skeleton王', desc: '50FloorBoss，血量150' },
    { keywords: ['齐先生', 'mr qi', 'qi', 'boss'], page: 'mines.html', title: '齐先生', desc: 'Skull Cavern100FloorBoss，血量500' }
  ];
  
  // Search函数
  function performSearch(query) {
    if (!query || query.length < 1) {
      searchResults.innerHTML = '';
      searchResults.style.display = 'none';
      return;
    }
    
    query = query.toLowerCase().trim();
    
    // Calculate relevance and sort
    const scoredResults = searchData.map(item => {
      let score = 0;
      const queryLower = query;
      
      for (const keyword of item.keywords) {
        const kwLower = keyword.toLowerCase();
        
        // Exact match
        if (kwLower === queryLower) {
          score += 100;
        }
        // Starts with match
        else if (kwLower.startsWith(queryLower)) {
          score += 50;
        }
        // Contains match
        else if (kwLower.includes(queryLower)) {
          score += 25;
        }
        // Partial character match (for Chinese)
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
    
    // Filter results with scores and sort
    const results = scoredResults
      .filter(r => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10) // Show max 10 results
      .map(r => r.item);
    
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          <p>No results found for "${query}"</p>
          <p class="search-tip">Try: Parsnip, Strawberry, Abigail, Galaxy Sword, etc.</p>
        </div>
      `;
      searchResults.style.display = 'block';
      return;
    }
    
    // Highlight keywords and render results
    searchResults.innerHTML = results.map(item => {
      // Find best matching keyword for highlighting
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
  
  // Input event (real-time search)
  let searchTimeout;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 150);
  });
  
  // Click search button
  searchBtn.addEventListener('click', function() {
    performSearch(searchInput.value);
  });
  
  // Click elsewhere to close search results
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-box')) {
      searchResults.style.display = 'none';
    }
  });
  
  // Press Enter to search
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch(searchInput.value);
    }
  });
}

/**
 * Back to top button
 */
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;
  
  // Show/hide on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  // Click to scroll to top
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Mobile menu
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
  
  // Close menu after clicking nav link
  navbarNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      navbarNav.classList.remove('active');
      menuToggle.textContent = '☰';
      document.body.style.overflow = '';
    });
  });
  
  // Toggle dropdown on mobile
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    if (link) {
      link.addEventListener('click', function(e) {
        // Only works on mobile
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
}

/**
 * Smooth scroll to anchor
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
