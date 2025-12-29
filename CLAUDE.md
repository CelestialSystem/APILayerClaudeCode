# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Tech Stack

- React 19 with TypeScript
- Vite 7 for bundling and dev server
- MUI 6 with Emotion for styling
- ESLint 9 with typescript-eslint, react-hooks, and react-refresh plugins

## Architecture

- `src/main.tsx` - Application entry point, renders App in StrictMode
- `src/App.tsx` - Root component with MUI ThemeProvider and CssBaseline
- Theme is defined in App.tsx using `createTheme()`
- Components use barrel exports: `import { Component } from './components'`

## Project Structure

```
.claude/
├── project-context.md          # Base context (all agents inherit)
├── README.md                   # Agent usage guide
└── agents/
    ├── backend/                # Backend specializations
    │   ├── api-architect.md
    │   ├── backend-developer.md
    │   ├── database-engineer.md
    │   ├── integration-specialist.md
    │   └── caching-specialist.md
    ├── frontend/               # Frontend specializations
    │   ├── component-architect.md
    │   ├── frontend-developer.md
    │   ├── api-integration.md
    │   └── ui-specialist.md
    ├── testing/                # Testing specializations
    │   ├── test-strategy.md
    │   ├── backend-testing.md
    │   ├── frontend-testing.md
    │   ├── e2e-testing.md
    │   └── security-testing.md
    └── devops/                 # DevOps specializations
        ├── infrastructure-architect.md
        ├── terraform-specialist.md
        ├── kubernetes-specialist.md
        ├── gateway-specialist.md
        ├── cicd-specialist.md
        └── monitoring-specialist.md

src/
├── main.tsx                    # Entry point
├── App.tsx                     # Root component with theme provider
├── components/                 # Reusable UI components
│   ├── index.ts                # Barrel exports
│   └── *.tsx                   # Component files
└── assets/                     # Static assets
```
