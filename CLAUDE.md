# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **React 19** + **Vite 6** (JSX, no TypeScript)
- Plain CSS (no CSS framework) — one `.css` file per component
- State managed with `useState` / `useEffect` only; no external state library
- Persistence via `localStorage` (key: `task-board-tasks`)

## Component Conventions

- Component files use PascalCase (e.g., `TaskItem.jsx`)
- One default export per file, matching the file name
- CSS class names use kebab-case (e.g., `task-item`, `add-btn`)
- Helper functions defined inside the component file they belong to, not exported unless shared

## Deploy

- Production URL: https://hyper427.github.io/task-board2/
- Deployed automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `master`
- `vite.config.js` sets `base: '/task-board2/'` for correct asset paths on GitHub Pages

## Git Rules

- After every code change, stage and commit the changes, then push to GitHub immediately.
- Commit messages should be written in English, concise, and describe what changed and why.
- Never amend published commits — always create a new commit.
- Never force-push unless the user explicitly requests it.
- Never skip pre-commit hooks (`--no-verify`).
