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
}

function renderChapters() {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) return;
    
    grid.innerHTML = gameData.chapters.map(chapter => `
        <a href="chapters.html#${chapter.id}" class="chapter-card">
            <div class="chapter-card-banner" style="background: linear-gradient(135deg, ${chapter.color}40, ${chapter.color}10);">
                <div class="chapter-card-number">${chapter.number}</div>
            </div>
            <div class="chapter-card-content">
                <h3 class="chapter-card-name">${chapter.name}</h3>
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
        { title: '蜂后打法', desc: '点燃护甲是关键', icon: 'target', link: 'bosses.html#wasp-queen' },
        { title: '工具箱Boss三阶段', desc: '钉子固定与锁头攻击', icon: 'target', link: 'bosses.html#toolbox' },
        { title: '时钟三重按钮', desc: '分身配合的完美应用', icon: 'search', link: 'tips.html' },
        { title: '25个小游戏位置', desc: '全收集无遗漏', icon: 'gamepad', link: 'minigames.html' },
        { title: '双人配合四技巧', desc: '让你告别卡关', icon: 'shield', link: 'tips.html' },
        { title: '失重跳跃规则', desc: '禁止连跳牢记', icon: 'alert', link: 'tips.html' }
    ];
    
    grid.innerHTML = hotItems.map(item => `
        <a href="${item.link}" class="tip-card">
            <div class="tip-card-icon">
                ${getIcon(item.icon)}
            </div>
            <div class="tip-card-content">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </a>
    `).join('');
}

function getIcon(name) {
    const icons = {
        target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
        search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>',
        gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="12" r="2"></circle></svg>',
        shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><path d="M12 9v4M12 17h.01"></path></svg>',
        users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
        megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l18-5v12L3 13v-2z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>'
    };
    return icons[name] || icons.target;
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
            if (e.key === '/' && !searchOverlay.classList.contains('active')) {
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
        resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 40px;">未找到相关结果，请尝试其他关键词</p>';
        return;
    }
    
    resultsContainer.innerHTML = results.map(item => {
        const typeIcons = {
            chapter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
            boss: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>',
            minigame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="12" r="2"></circle></svg>',
            tip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>'
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
                <div class="search-result-icon">${typeIcons[item.type]}</div>
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
            header.style.background = 'rgba(15, 15, 26, 0.85)';
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
    
    document.querySelectorAll('.chapter-card, .quick-link, .character-card, .tip-card').forEach(el => {
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

function renderChapterDetail(chapterId) {
    const chapter = gameData.chapters.find(c => c.id === chapterId);
    if (!chapter) return null;
    
    return `
        <div class="chapter-detail" id="${chapter.id}">
            <div class="chapter-detail-header" style="background: linear-gradient(135deg, ${chapter.color}30, ${chapter.color}10);">
                <span class="chapter-number">第${chapter.number}章</span>
                <h2>${chapter.name}</h2>
                <p class="chapter-theme">${chapter.theme}</p>
            </div>
            <div class="chapter-detail-content">
                <div class="chapter-info-cards">
                    <div class="info-card">
                        <h4>游戏时长</h4>
                        <p>${chapter.duration}</p>
                    </div>
                    <div class="info-card">
                        <h4>核心技能</h4>
                        <p>${chapter.mechanics.join(' + ')}</p>
                    </div>
                    <div class="info-card">
                        <h4>小游戏数量</h4>
                        <p>${chapter.minigames}个</p>
                    </div>
                </div>
                <div class="chapter-desc">
                    <p>${chapter.desc}</p>
                </div>
                <div class="chapter-sections">
                    <h3>关卡列表</h3>
                    <div class="sections-list">
                        ${chapter.sections.map((section, i) => `
                            <div class="section-item">
                                <span class="section-index">${i + 1}</span>
                                <div class="section-info">
                                    <h4>${section.name}</h4>
                                    <p>${section.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ${chapter.boss ? `
                    <div class="chapter-boss">
                        <h3>Boss战</h3>
                        <div class="boss-preview">
                            <h4>${chapter.boss.name}</h4>
                            <p>${chapter.boss.desc}</p>
                            <a href="bosses.html" class="btn btn-secondary">查看详细打法</a>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function renderBossCard(boss) {
    const typeColors = {
        简单: '#10B981',
        中等: '#F59E0B',
        困难: '#EF4444'
    };
    
    return `
        <div class="boss-card" id="${boss.id}">
            <div class="boss-header">
                <div class="boss-avatar">
                    ${getIcon('target')}
                </div>
                <div class="boss-info">
                    <h3>${boss.name}</h3>
                    <span class="boss-chapter">${boss.chapter}</span>
                    <span class="boss-difficulty" style="background: ${typeColors[boss.difficulty]}20; color: ${typeColors[boss.difficulty]};">
                        ${boss.difficulty}
                    </span>
                </div>
            </div>
            <div class="boss-phases">
                <h4>战斗阶段</h4>
                ${boss.phases.map(phase => `
                    <div class="phase-item">
                        <h5>${phase.name}</h5>
                        <div class="phase-attacks">
                            ${phase.attacks.map(attack => `<span class="attack-tag">${attack}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="boss-strategy">
                <h4>攻略要点</h4>
                <p>${boss.strategy}</p>
            </div>
            <div class="boss-tips">
                <h4>小技巧</h4>
                <p>${boss.tips}</p>
            </div>
        </div>
    `;
}

function renderMinigameCard(minigame) {
    return `
        <div class="minigame-card">
            <div class="minigame-header">
                <span class="minigame-number">#${minigame.id}</span>
                <h3>${minigame.name}</h3>
            </div>
            <div class="minigame-info">
                <p><strong>位置：</strong>${minigame.chapter} - ${minigame.section}</p>
                <p><strong>玩法：</strong>${minigame.desc}</p>
                <p><strong>技巧：</strong>${minigame.tips}</p>
            </div>
        </div>
    `;
}

function renderTipCard(tip) {
    return `
        <div class="tip-detail-card">
            <div class="tip-detail-header">
                <span class="tip-category">${tip.category}</span>
                <h3>${tip.title}</h3>
            </div>
            <p>${tip.desc}</p>
        </div>
    `;
}
