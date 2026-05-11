document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    renderChapters();
    renderHotTips();
    initSearch();
    initMobileMenu();
    initScrollEffects();
    highlightActiveNav();
    initThemeToggle();
    initMusicToggle();
}

function renderChapters() {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) return;
    
    const chapterImages = {
        shed: 'https://images.licensed-game.com/chapters/shed.jpg',
        tree: 'https://images.licensed-game.com/chapters/tree.jpg',
        rose: 'https://images.licensed-game.com/chapters/rose.jpg',
        clock: 'https://images.licensed-game.com/chapters/clock.jpg',
        snowglobe: 'https://images.licensed-game.com/chapters/snowglobe.jpg',
        garden: 'https://images.licensed-game.com/chapters/garden.jpg',
        attic: 'https://images.licensed-game.com/chapters/attic.jpg'
    };
    
    const chapterEmojis = {
        shed: '🔨',
        tree: '🌲',
        rose: '🌹',
        clock: '🕐',
        snowglobe: '❄️',
        garden: '🌻',
        attic: '🎵'
    };
    
    grid.innerHTML = gameData.chapters.map(chapter => `
        <a href="chapters.html#${chapter.id}" class="chapter-card">
            <div class="chapter-card-banner" style="background: linear-gradient(135deg, ${chapter.color}40, ${chapter.color}10);">
                <img src="${chapterImages[chapter.id]}" alt="${chapter.name}" onerror="this.style.display='none'">
                <div class="chapter-card-banner-overlay"></div>
                <div class="chapter-card-number">${chapter.number}</div>
            </div>
            <div class="chapter-card-content">
                <h3 class="chapter-card-name">${chapterEmojis[chapter.id]} ${chapter.name}</h3>
                <span class="chapter-card-theme">${chapter.theme}</span>
                <p class="chapter-card-desc">${chapter.desc}</p>
                <div class="chapter-card-meta">
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6l4 2"></path>
                        </svg>
                        ${chapter.duration}
                    </span>
                    <span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        </svg>
                        ${chapter.mechanics.join(' + ')}
                    </span>
                </div>
            </div>
        </a>
    `).join('');
}

function renderHotTips() {
    const grid = document.getElementById('hotTipsGrid');
    if (!grid) return;
    
    const hotItems = [
        { title: '🐝 蜂后打法', desc: '点燃护甲是关键', icon: '⚔️', link: 'bosses.html#wasp-queen' },
        { title: '🧰 工具箱Boss三阶段', desc: '钉子固定与锁头攻击', icon: '🔧', link: 'bosses.html#toolbox' },
        { title: '🕐 时钟三重按钮', desc: '分身配合的完美应用', icon: '💡', link: 'tips.html' },
        { title: '🎮 25个小游戏位置', desc: '全收集无遗漏', icon: '📍', link: 'minigames.html' },
        { title: '🤝 双人配合四技巧', desc: '让你告别卡关', icon: '💪', link: 'tips.html' },
        { title: '🚀 失重跳跃规则', desc: '禁止连跳牢记', icon: '⚠️', link: 'tips.html' }
    ];
    
    grid.innerHTML = hotItems.map(item => `
        <a href="${item.link}" class="tip-card">
            <div class="tip-card-icon">${item.icon}</div>
            <div class="tip-card-content">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </a>
    `).join('');
}

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        themeToggle.classList.toggle('active');
    });
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            setTheme(theme);
            themeToggle.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!themeToggle.contains(e.target)) {
            themeToggle.classList.remove('active');
        }
    });
}

function setTheme(theme) {
    const html = document.documentElement;
    const themeIcon = document.querySelector('.theme-icon');
    
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const themeIcons = {
        'dark': '🌙',
        'light': '☀️',
        'eye-care': '📖'
    };
    
    if (themeIcon) {
        themeIcon.textContent = themeIcons[theme] || '🌙';
    }
    
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.dataset.theme === theme);
    });
}

function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (!musicToggle || !bgMusic) return;
    
    bgMusic.volume = 0.3;
    
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().then(() => {
                musicToggle.classList.add('playing');
            }).catch(err => {
                console.log('音乐播放需要用户交互');
            });
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
    
    bgMusic.addEventListener('ended', () => {
        musicToggle.classList.remove('playing');
    });
}

function initSearch() {
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchTags = document.querySelectorAll('.search-tag');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
        });
        
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
        
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                searchOverlay.classList.remove('active');
            }
            if (e.key === '/' && !searchOverlay.classList.contains('active') && document.activeElement.tagName !== 'INPUT') {
                e.preventDefault();
                searchOverlay.classList.add('active');
                searchInput.focus();
            }
        });
    }
    
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                performSearch(e.target.value);
            }, 200);
        });
    }
    
    searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const keyword = tag.dataset.search;
            searchInput.value = keyword;
            performSearch(keyword);
        });
    });
}

function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    if (!query.trim()) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    const queryLower = query.toLowerCase();
    const results = gameData.searchData.filter(item => 
        item.name.toLowerCase().includes(queryLower) ||
        item.keyword.toLowerCase().includes(queryLower)
    );
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">🔍 未找到相关结果，请尝试其他关键词</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(item => {
        const typeIcons = {
            chapter: '📖',
            boss: '⚔️',
            minigame: '🎮',
            tip: '💡'
        };
        
        const typeLabels = {
            chapter: '章节',
            boss: 'Boss',
            minigame: '小游戏',
            tip: '技巧'
        };
        
        const links = {
            chapter: `chapters.html#${item.id}`,
            boss: 'bosses.html',
            minigame: 'minigames.html',
            tip: 'tips.html'
        };
        
        return `
            <a href="${links[item.type]}" class="search-result-item">
                <div class="search-result-icon" style="font-size: 24px;">${typeIcons[item.type]}</div>
                <div class="search-result-content">
                    <h4>${item.name}</h4>
                    <p>${typeLabels[item.type]}</p>
                </div>
            </a>
        `;
    }).join('');
}

function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.querySelector('.nav');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
}

function initScrollEffects() {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(15, 15, 26, 0.95)';
        } else {
            header.style.background = 'var(--bg-card)';
        }
        
        lastScroll = currentScroll;
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.chapter-card, .quick-link, .character-card, .tip-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
