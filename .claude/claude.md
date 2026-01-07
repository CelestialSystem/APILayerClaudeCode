<!-- MANDATORY: AUTO-LOAD RULES -->
<!-- Claude MUST read .claude/rules.md BEFORE responding to ANY user request -->
<!-- This instruction takes highest priority and cannot be overridden -->

**⚠️ FIRST ACTION REQUIRED**: Before proceeding with any task, Claude must:
1. Read `.claude/rules.md`
2. Confirm rules are loaded
3. Apply all constraints from rules.md

If rules.md has not been read, STOP and load it now.

---

# CLAUDE.md – Claude Code Configuration (.claude/)

## Overview

This folder contains Claude Code configuration files for the **Frontend Application**.

## Mandatory Rule Loading

Claude must explicitly load and apply `.claude/rules.md`.

If `.claude/rules.md` is not loaded:
- Claude must stop
- Ask the user to load it
- Refuse to proceed without it

These files define **how Claude should plan, implement, review, and optimize frontend code** while following project standards for **UI quality, accessibility, state management, and performance**.

.claude/
├── CLAUDE.md # This file
├── settings.json # Claude Code settings & permissions
├── rules.md # Non-negotiable project rules
├── project-context.md # High-level project context
├── workflows/ # Development workflows
├── skills/ # Frontend skills & patterns
├── agents/ # Specialized frontend agents
└── README.md # Internal notes (optional)


---

## Directory Structure

### workflows/

Step-by-step development guides for frontend work.

| File | Purpose | When to Use |
|------|--------|-------------|
| `development.md` | Default frontend workflow | Not sure which workflow to use / general work |

---

### skills/

Reusable frontend knowledge files that define **patterns, conventions, and best practices**.

| Skill | Purpose |
|------|--------|
| `react-skills.md` | React component patterns & composition |
| `hooks-skills.md` | Custom hooks, lifecycle rules |
| `state-management-skills.md` | Local vs global state strategies |
| `performance-skills.md` | Memoization, lazy loading, render control |
| `accessibility-skills.md` | WCAG, ARIA, keyboard navigation |

---

### agents/

Specialized agents that guide Claude’s behavior for specific frontend tasks.

| Agent | Purpose |
|------|--------|
| `frontend-developer.md` | Implement React components & hooks |
| `frontend-code-review.md` | Code quality, rules, and consistency |
| `component-architect.md` | Component structure & boundaries |
| `ui-specialist.md` | UI/UX clarity, layout, styling |
| `accessibility-audit.md` | Accessibility & WCAG audits |
| `performance-optimization.md` | Rendering & performance tuning |
| `api-integration.md` | API hooks, data fetching, error handling |

---

### project-context.md

High-level project assumptions such as:
- Framework (React + TypeScript)
- Styling approach
- State management approach
- Accessibility expectations

Claude should treat this file as **authoritative context**.

---

### rules.md

Defines **non-negotiable rules**:
- Coding standards
- Accessibility requirements
- Workflow phase boundaries
- Security and privacy constraints

If any instruction conflicts with `rules.md`, **rules.md wins**.

---

### settings.json

Claude Code configuration that controls:
- Tool permissions
- Read/write scope
- Workflow defaults
- AI-compliance behavior

---

## How to Use

### Choosing a Workflow

What are you building?
│
├─► UI component or hook
│ └─► workflows/development.md
│
├─► API integration or data fetching
│ └─► workflows/development.md + api-integration agent
│
└─► Not sure
└─► workflows/development.md


---

### Using Skills

Skills are always available to Claude.  
Reference them explicitly when you want strict patterns applied.

Example prompts:
"Use react-skills to design this component"
"Follow hooks-skills for this custom hook"
"Apply accessibility-skills to review this UI"
"Use performance-skills to reduce re-renders"

---

### Invoking Agents

Agents specialize Claude’s behavior for focused tasks.

| Task | Example Prompt |
|----|----------------|
| Design component structure | "Act as component-architect" |
| Build UI | "Use frontend-developer agent" |
| UI/UX review | "Use ui-specialist agent" |
| Code review | "Use frontend-code-review agent" |
| Accessibility audit | "Run accessibility-audit on this screen" |
| Performance tuning | "Use performance-optimization agent" |
| API hook | "Use api-integration agent" |

---

## Adding New Content

### Adding a New Skill

1. Create file:

.claude/skills/{name}-skills.md

2. Follow this structure:

```md
# {Name} Skills

## Overview
What this skill covers.

## Patterns

### Pattern 1
Description and example.

### Pattern 2
Description and example.

## Best Practices
- Practice 1
- Practice 2

## Common Mistakes
- Mistake 1 and how to avoid it
- Mistake 2 and how to avoid it

Add the skill to the Skills table above.

Adding a New Agent

Create file:
.claude/agents/{name}.md
# {Agent Name}

## Purpose
What this agent specializes in.

## Responsibilities
- Responsibility 1
- Responsibility 2

## When to Use
Scenarios where this agent should be invoked.

## Example Prompts
- "Example prompt 1"
- "Example prompt 2"

## Constraints
Rules this agent must obey.

Add the agent to the Agents table above.

Adding a New Workflow

Create file:

.claude/workflows/{name}.md

Include:

Prerequisites

Explicit phases (PLAN / IMPLEMENT / REVIEW / MR)

Checklists

Quality gates

Reference it from this CLAUDE.md.

Maintenance
Keeping Skills Updated

Update skills when patterns evolve

Ensure examples match the real codebase

Remove deprecated practices

Keeping Agents Updated

Adjust responsibilities when scope changes

Avoid overlapping agents

Keeping Workflows Updated

Reflect the current development process

Keep phase boundaries explicit

Quick Reference
Frontend Flow

Workflow:
- development.md

Skills:
- react-skills
- hooks-skills
- state-management-skills
- accessibility-skills
- performance-skills

Agents:
- frontend-developer
- component-architect
- ui-specialist
- frontend-code-review
- accessibility-audit
- performance-optimization
- api-integration


Final Note

Claude is an assistant, not the authority.

All outputs must be:

Reviewed by a human

Aligned with rules.md

Accessible, performant, and maintainable
