# Stardew Valley Guide - 星露谷物语攻略站

## 项目概述

星露谷物语（Stardew Valley）全网最全中文攻略大合集，支持1.6版本。纯静态网站，无需后端。

## 技术栈

- 纯前端：HTML5 + CSS3 + Vanilla JavaScript
- 多语言支持：i18n.js（中文/英文）
- 无框架依赖
- 字体：Google Fonts (Noto Sans SC)

## 目录结构

```
/workspace/projects/
├── index.html          # 首页（主导航）
├── styles.css          # 全站样式
├── script.js           # 交互逻辑
├── i18n.js             # 多语言配置
├── scripts/            # 预览脚本
│   ├── coze-preview-build.sh
│   └── coze-preview-run.sh
├── *.html              # 各攻略页面（18个）
└── images/             # 325张配图
```

## 关键入口 / 核心模块

- **首页**：index.html
- **多语言切换**：i18n.js + script.js
- **主题切换**：script.js（暗色/亮色模式）

## 运行与预览

- **预览端口**：5000
- **预览方式**：Python http.server 提供静态文件服务
- **预览命令**：
  - Build: `bash scripts/coze-preview-build.sh`
  - Run: `bash scripts/coze-preview-run.sh`

## 部署配置

- 纯静态部署
- 可直接部署到任意静态托管服务（GitHub Pages、Vercel、Netlify 等）
- 无需后端服务

## 用户偏好与长期约束

- 静态资源优先，无构建步骤
- 保持多语言架构完整
- 图片路径使用相对路径 `images/`

## 常见问题和预防

- 无后端依赖，所有数据硬编码在 HTML 中
- 预览使用 Python http.server，需确保 Python 3 可用
