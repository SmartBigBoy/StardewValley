# 双人成行攻略站 技术架构文档

## 1. 架构设计

```
┌─────────────────────────────────────────────────┐
│                    前端层                        │
│  HTML5 + CSS3 + Vanilla JavaScript              │
│  单页应用架构，支持多页面切换                     │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│                   数据层                         │
│  内嵌JSON数据（章节攻略、Boss、小游戏等）        │
└─────────────────────────────────────────────────┘
```

## 2. 技术选型

- **前端框架**：原生HTML5 + CSS3 + Vanilla JavaScript（无依赖）
- **样式方案**：CSS3变量 + Flexbox/Grid布局
- **动画效果**：CSS3 Transitions + Keyframes
- **图标库**：内联SVG图标
- **字体**：Google Fonts (Noto Sans SC + Poppins)

## 3. 页面路由

| 路由 | 页面 | 描述 |
|-----|------|------|
| index.html | 首页 | 章节导航、搜索入口、热门攻略 |
| chapters.html | 章节攻略页 | 7大章节详细攻略 |
| bosses.html | Boss战指南 | 11+个Boss打法详解 |
| minigames.html | 小游戏页 | 25个小游戏位置与玩法 |
| tips.html | 配合技巧页 | 双人合作技巧、避坑指南 |
| search.html | 搜索结果页 | 关键词搜索结果展示 |

## 4. 数据结构

### 4.1 章节数据结构
```javascript
{
  id: "chapter-1",
  name: "棚屋",
  nameEn: "The Shed",
  theme: "怨恨与工具",
  duration: "1.5-2小时",
  mechanics: ["锤子", "钉子"],
  sections: [...],
  minigames: [...]
}
```

### 4.2 Boss数据结构
```javascript
{
  id: "boss-1",
  name: "吸尘器",
  chapter: "棚屋",
  phases: [...],
  strategies: [...]
}
```

### 4.3 小游戏数据结构
```javascript
{
  id: "minigame-1",
  name: "暴打科迪",
  chapter: "棚屋",
  section: "万丈深渊",
  description: "...",
  tips: "..."
}
```

## 5. 核心组件

### 5.1 Header组件
- Logo与网站标题
- 导航菜单（首页/章节/Boss/小游戏/技巧）
- 搜索栏（收缩式）

### 5.2 Hero组件
- 游戏背景图
- 游戏标题与简介
- 开始探索按钮

### 5.3 Card组件
- 章节卡片（封面图+标题+简介）
- Boss卡片（图标+名称+章节）
- 小游戏卡片（名称+位置+图标）

### 5.4 ChapterNav组件
- 7章节水平滚动导航
- 当前章节高亮

### 5.5 SearchModal组件
- 全屏搜索模态框
- 实时搜索建议
- 热门搜索标签

### 5.6 Footer组件
- 版权信息
- 友链
- 社交媒体链接

## 6. 性能优化

- 图片懒加载
- CSS动画使用transform/opacity
- 事件委托减少监听器
- 本地缓存搜索结果
