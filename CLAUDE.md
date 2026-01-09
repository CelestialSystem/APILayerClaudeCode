# CLAUDE.md

<!-- ═══════════════════════════════════════════════════════════════════════ -->
<!-- 🚨 CRITICAL: MANDATORY INITIALIZATION PROTOCOL                          -->
<!-- This MUST be executed BEFORE responding to ANY user request             -->
<!-- ═══════════════════════════════════════════════════════════════════════ -->

## 🛑 INITIALIZATION PROTOCOL (MANDATORY)

**BEFORE responding to ANY user prompt**, Claude MUST execute this protocol:

### Step 1: Load Core Configuration
```
1. Read `.claude/rules.md` (MANDATORY - contains all non-negotiable rules)
2. Read `.claude/project-context.md` (project metadata and tech stack)
3. Confirm loading with: "✅ Configuration loaded from .claude/"
```

### Step 2: Determine Active Context

Based on the user's request, identify:

**Active Workflow:**
- Default: `development.md` (PLAN → IMPLEMENT → REVIEW → STAGING → MR)
- Current Phase: [Specify which phase applies]

**Active Agent(s):**
- `frontend-developer` - Building React components
- `component-architect` - Designing component structure
- `ui-specialist` - UI/UX implementation
- `frontend-code-review` - Code review
- `accessibility-audit` - A11y compliance
- `performance-optimization` - Performance tuning
- `api-integration` - API integration

**Active Skills:**
- `react-skills` - React patterns
- `hooks-skills` - Hook patterns
- `state-management-skills` - State strategies
- `accessibility-skills` - A11y patterns
- `performance-skills` - Performance patterns

### Step 3: Response Template (ALWAYS USE)

**EVERY response MUST start with this header:**

```
📋 **Active Configuration**
━━━━━━━━━━━━━━━━━━━━━━━
→ Workflow: [workflow-name] | Phase: [PLAN/IMPLEMENT/REVIEW/STAGING/MR]
→ Agent(s): [agent-1, agent-2]
→ Skills: [skill-1, skill-2]
━━━━━━━━━━━━━━━━━━━━━━━

[Your actual response here]
```

### Step 4: Proceed with Task

After displaying configuration header, proceed with the user's request following all loaded rules.

---

## About This Project

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

## Critical Rules Summary

**Full rules are in `.claude/rules.md` - These are highlights:**

### Code Standards
- TypeScript strict mode only - `any` is **FORBIDDEN**
- Functional components only - no class components
- Hooks only - no lifecycle methods
- One component per file
- Accessibility is **MANDATORY** (semantic HTML, keyboard navigation)
- No inline styles - use MUI sx prop or styled()

### Workflow
- Default phase: **PLAN** mode (no code unless explicitly in IMPLEMENT phase)
- Never explore codebase without explicit "ALLOW CODEBASE EXPLORATION"
- Always state assumptions if context is missing

### Security & Privacy
- NEVER read `.env` files
- NEVER output secrets, API keys, or tokens
- NEVER log or expose PII (email, phone, address, passwords)
- All commits must be tagged with `ai-cc`
- Human review is mandatory before merge

### Agent & Skill Usage
- Agents are in `.claude/agents/` - invoke explicitly for specialized tasks
- Skills are in `.claude/skills/` - reference for pattern enforcement
- Workflow phases are in `.claude/workflows/development.md`

## Project Structure

```
.claude/
├── project-context.md          # Project metadata & tech stack
├── rules.md                    # Non-negotiable rules (HIGHEST AUTHORITY)
├── settings.json               # Permissions configuration
├── claude.md                   # Directory guide & usage instructions
├── workflows/
│   └── development.md          # PLAN → IMPLEMENT → REVIEW → STAGING → MR
├── agents/                     # Specialized expertise (invoke explicitly)
│   ├── frontend-developer.md
│   ├── component-architect.md
│   ├── ui-specialist.md
│   ├── frontend-code-review.md
│   ├── accessibility-audit.md
│   ├── performance-optimization.md
│   └── api-integration.md
└── skills/                     # Pattern libraries (reference as needed)
    ├── react-skills.md
    ├── hooks-skills.md
    ├── state-management-skills.md
    ├── accessibility-skills.md
    └── performance-skills.md

src/
├── main.tsx                    # Entry point
├── App.tsx                     # Root component with theme provider
├── components/                 # Reusable UI components
│   ├── index.ts                # Barrel exports
│   └── *.tsx                   # Component files
└── assets/                     # Static assets
```

## Quick Reference

### When to Use Which Agent

| User Request | Agent(s) to Use | Skills to Apply |
|-------------|----------------|-----------------|
| "Create a button component" | `frontend-developer` | `react-skills`, `accessibility-skills` |
| "Design a form system" | `component-architect` | `react-skills`, `state-management-skills` |
| "Make this UI responsive" | `ui-specialist` | `accessibility-skills` |
| "Review my code" | `frontend-code-review` | All applicable skills |
| "Check accessibility" | `accessibility-audit` | `accessibility-skills` |
| "Optimize performance" | `performance-optimization` | `performance-skills` |
| "Connect to API" | `api-integration` | `hooks-skills`, `state-management-skills` |

### Precedence Hierarchy (When Rules Conflict)

1. `.claude/rules.md` ← **HIGHEST AUTHORITY**
2. `.claude/settings.json` (permissions only)
3. `.claude/project-context.md`
4. `.claude/workflows/*.md`
5. `.claude/agents/*.md`
6. `.claude/skills/*.md`
7. This file (CLAUDE.md)
8. User prompt

**If user prompt conflicts with rules.md, rules.md wins.**

## Never Submit to AI

- Production credentials, API keys, tokens
- User PII or customer data
- Production IPs, hostnames, server names
- Actual log files with sensitive data
- `.env` file contents
- Real user data

## AI Compliance

All AI-assisted commits must:
- Use tag: `ai-cc`
- Include: `Co-Authored-By: Claude Sonnet 4.5 (1M context) <noreply@anthropic.com>`
- Require human review before merge
- Never be pushed directly to main/master

---

**Remember: ALWAYS start responses with the configuration header showing active workflow, agents, and skills.**

---

## 📘 User Guide

**New to working with Claude on this project?**

Read [.claude/HOW_TO_PROMPT_CLAUDE.md](.claude/HOW_TO_PROMPT_CLAUDE.md) for:
- Best practices for prompting
- Conversation starter templates
- React-specific examples
- Troubleshooting tips
- What to do when Claude forgets the rules

**Quick tip:** Start every conversation with:
```
Follow the initialization protocol from CLAUDE.md before helping with [YOUR REQUEST]
```

---

## ⚙️ Model Requirement

**IMPORTANT:** This project requires **Claude Sonnet 4.5** model.

When starting a conversation, ensure you're using:
- **Model:** Claude Sonnet 4.5 (or latest Sonnet 4.5 variant)
- **Not:** Opus, Haiku, or older Sonnet versions

Sonnet 4.5 provides the optimal balance of:
- Code quality and accuracy
- Context window size (1M tokens)
- Following complex project rules
- Cost-effectiveness
