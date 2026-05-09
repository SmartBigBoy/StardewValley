# Stardew Valley Guide

## Project Overview

The most comprehensive Stardew Valley guide collection, supporting version 1.6. Pure static website, no backend required.

## Tech Stack

- Pure Frontend: HTML5 + CSS3 + Vanilla JavaScript
- No framework dependencies
- Fonts: Google Fonts (Noto Sans SC)
- Dark/Light theme support

## Directory Structure

```
/workspace/projects/
├── index.html          # Homepage (main navigation)
├── styles.css          # Global styles
├── script.js           # Interaction logic
├── scripts/            # Preview scripts
│   ├── coze-preview-build.sh
│   └── coze-preview-run.sh
├── *.html              # Guide pages (18 pages)
└── images/             # Images organized by page
    ├── nav-card/       # Navigation card images
    ├── achievements/   # Achievements page
    ├── beginner/       # Beginner guide
    ├── combat/         # Combat system
    ├── community-center/ # Community Center
    ├── crafting/       # Crafting
    ├── desert/         # Desert
    ├── farm/           # Farm
    ├── fish/           # Fish
    ├── fishing/        # Fishing
    ├── foraging/       # Foraging
    ├── ginger-island/  # Ginger Island
    ├── hero/           # Homepage banner
    ├── mines/          # Mines
    ├── mods/           # Mod tutorial
    ├── money/          # Money guide
    ├── multiplayer/    # Multiplayer
    ├── npc/            # NPC images
    ├── seasons/        # Seasons (with four season subfolders)
    ├── skills/         # Skills
    ├── slime/          # Slime
    ├── update16/       # Version 1.6
    ├── cooking/        # Cooking
    └── items/          # Item images
```

## Key Entry Points / Core Modules

- **Homepage**: index.html
- **Theme Toggle**: script.js (dark/light mode)

## Running and Preview

- **Preview Port**: 5000
- **Preview Method**: Python http.server for static file service
- **Preview Commands**:
  - Build: `bash scripts/coze-preview-build.sh`
  - Run: `bash scripts/coze-preview-run.sh`

## Deployment Configuration

- Pure static deployment
- Can be deployed directly to any static hosting service (GitHub Pages, Vercel, Netlify, etc.)
- No backend services required

## User Preferences and Long-term Constraints

- **Git Push Strategy**: Default commit only, no push. Execute `git push` only when user explicitly requests it
- **Partial Modification Principle**: When modifying local content, must evaluate whether it affects global or other modules. If so, must inform user in advance and wait for confirmation before executing
- Static resources first, no build steps
- Image paths use relative paths `images/`

## Common Issues and Prevention

- No backend dependencies, all data hardcoded in HTML
- Preview uses Python http.server, ensure Python 3 is available
