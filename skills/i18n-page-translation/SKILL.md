---
name: i18n-page-translation
description: 为静态网页项目添加中英文翻译支持。当页面需要支持多语言切换（中文/English）时使用此 skill。它会指导 Agent 为页面元素添加 data-i18n 属性，并在 i18n.js 中配置翻译键值对。
---

# I18n Page Translation

## 概述

这个 skill 用于为静态网页项目（HTML/CSS/JavaScript）添加完整的中英文翻译支持。通过 data-i18n 属性和 i18n.js 翻译系统，实现页面的语言切换功能。

## 何时使用

- 需要为页面添加多语言支持
- 页面有大量需要翻译的静态文本
- 需要复用现有的 i18n.js 翻译系统
- 项目使用 data-i18n 属性的翻译机制

## 何时不要使用

- 页面已经有完整的翻译配置
- 项目不使用 i18n.js 系统
- 只需要翻译少量文字（可直接手动添加）

## 前置条件

使用此 skill 前，必须确认：

1. 项目已有 `i18n.js` 翻译系统
2. 项目已有 `script.js` 交互脚本
3. 需要翻译的页面没有引入 i18n.js（需要添加）
4. 页面使用标准布局结构（navbar + main content）

## 工作流程

### 1. 分析页面结构

读取目标 HTML 页面，分析：
- 需要翻译的所有文本元素
- 文本所在的 HTML 标签类型
- 是否已有 data-i18n 属性

### 2. 识别翻译模式

根据 NPC 页面经验，翻译键命名规范：

```
{page}.{section}.{element}
{page}.{npc_name}.{field}

示例：
npc.alex.name         - NPC 名称
npc.alex.location     - NPC 位置
npc.alex.birthday     - NPC 生日
npc.alex.love         - 最爱礼物
npc.alex.hate         - 讨厌礼物

nav.home              - 导航首页
nav.seasons           - 导航季节
page.title.npc        - 页面标题
npc.banner.title      - 横幅标题
```

### 3. 添加 data-i18n 属性

为每个需要翻译的文本元素添加 data-i18n 属性：

```html
<!-- 翻译前 -->
<div class="npc-name">亚历克斯 Alex</div>

<!-- 翻译后 -->
<div class="npc-name" data-i18n="npc.alex.name">亚历克斯 Alex</div>
```

**关键点**：
- data-i18n 属性值必须与 i18n.js 中的翻译键完全匹配
- 保留原始文本内容作为默认值
- 动态内容（如图片 alt、链接 href）使用对应属性：
  - `data-i18n` - 普通文本
  - `data-i18n-html` - 包含 HTML 的内容
  - `data-i18n-title` - title 属性
  - `data-i18n-placeholder` - placeholder 属性

### 4. 配置 i18n.js 翻译键

在 i18n.js 的 `zh-CN` 和 `en` 对象中添加翻译键值对：

```javascript
// 中文
'zh-CN': {
  // ... 现有翻译
  'npc.alex.name': '亚历克斯 Alex',
  'npc.alex.location': '📍 鹈鹕镇 · 广场',
  'npc.alex.birthday': '🎂 生日：夏14',
  'npc.alex.love': '❤️ 最爱：椰汁、煎蛋、华夫饼',
  'npc.alex.hate': '💔 讨厌：蒜',
}

// 英文
'en': {
  // ... 现有翻译
  'npc.alex.name': 'Alex',
  'npc.alex.location': '📍 Pelican Town · Town Square',
  'npc.alex.birthday': '🎂 Birthday: Summer 14',
  'npc.alex.love': '❤️ Loved: Coconut, Fried Egg, Hashbrowns',
  'npc.alex.hate': '💔 Hated: Garlic',
}
```

### 5. 确保脚本引用正确

检查 HTML 页面是否正确引入 i18n.js：

```html
<head>
  <!-- 其他内容 -->
  <script src="i18n.js"></script>  <!-- 必须在 script.js 之前 -->
  <script src="script.js"></script>
</head>
```

### 6. 验证翻译功能

完成后验证：
1. 页面加载默认显示中文
2. 点击语言切换按钮可切换到英文
3. 点击切换回中文
4. 所有带 data-i18n 属性的元素都能正确翻译

## 常见翻译键模式

### 页面级别
```
{page}.banner.title     - 页面横幅标题
{page}.breadcrumb.home  - 面包屑首页
{page}.breadcrumb.current - 面包屑当前位置
{page}.sidebar.title   - 侧边栏标题
{page}.section.{name}  - 章节标题
{page}.section.{name}.subtitle - 章节副标题
```

### NPC/角色类
```
{page}.{id}.name        - 名称
{page}.{id}.location   - 位置
{page}.{id}.birthday   - 生日
{page}.{id}.love       - 最爱
{page}.{id}.hate       - 讨厌
{page}.{id}.schedule   - 日程
{page}.{id}.event      - 事件
```

### 卡片/列表类
```
{page}.card.{id}.title   - 卡片标题
{page}.card.{id}.desc    - 卡片描述
{page}.card.{id}.detail   - 卡片详情
```

### 信息类
```
{page}.info.{id}.title   - 信息标题
{page}.info.{id}.desc    - 信息描述
{page}.tip               - 提示文本
{page}.related.{id}.title - 相关标题
{page}.related.{id}.desc  - 相关描述
```

## 翻译原则

1. **准确性**：翻译内容必须准确反映原文含义
2. **一致性**：相同术语使用相同翻译
3. **完整性**：中英文翻译必须成对添加
4. **可读性**：英文翻译应自然流畅
5. **保留 Emoji**：保留文本中的 Emoji 表情符号

## 产出要求

1. **HTML 页面**：
   - 所有需要翻译的文本都添加了 data-i18n 属性
   - 保留了原始文本作为默认值
   - 脚本引用顺序正确

2. **i18n.js**：
   - 中文翻译键数量 = 英文翻译键数量
   - 翻译键命名规范一致
   - 翻译内容准确完整

3. **功能验证**：
   - 语言切换正常工作
   - 无 JavaScript 错误
   - 页面结构完整

## 注意事项

- 翻译键不能重复定义（JavaScript 对象会覆盖）
- 动态生成的内容不适用此方法
- 特殊字符需要正确转义

## 翻译完整性检查清单（必须逐项验证）

### HTML 页面检查
- [ ] 横幅区域（page-banner）的标题、副标题
- [ ] 面包屑导航（breadcrumb）
- [ ] 侧边栏目录（sidebar）
- [ ] 所有章节标题（section-title, h2）
- [ ] 所有子标题（h3）
- [ ] 表格内容（th 表头、td 单元格）
- [ ] 信息卡片（info-card）标题和内容
- [ ] 专精/技能卡片（specialization cards）
- [ ] 提示框（tip-box）内容
- [ ] 表格行内容（特别是表格单元格中的文本）
- [ ] 按钮文本（如果有）
- [ ] 页脚内容（如果有需要翻译的文本）

### 常见遗漏场景
1. **技能树表格**：等级(Lv)、解锁内容、专精选择标题
2. **卡片网格**：专精名称、描述、推荐文本
3. **信息卡片**：副标题、详细描述、提示文本
4. **表格表头**：列标题（如"等级"、"解锁内容"）
5. **表格单元格**：具体数值和描述文本
6. **提示框**：包含 HTML 标签的内容

### i18n.js 检查
- [ ] 中文和英文翻译键数量必须相等
- [ ] 每个翻译键都有中英文两个版本
- [ ] 翻译键命名规范统一
- [ ] 翻译内容准确

### 验证步骤
1. 统计 HTML 中 data-i18n 属性数量
2. 统计 i18n.js 中对应翻译键数量
3. 数量应大致匹配（允许少量特殊情况）
4. 在浏览器中测试语言切换
5. 检查所有关键内容是否正确翻译
- 翻译后需要实际测试验证
