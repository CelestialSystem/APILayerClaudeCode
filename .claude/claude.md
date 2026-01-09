# CLAUDE.md – Claude Code Configuration (.claude/)

## Overview

This directory contains Claude Code configuration files that define how Claude should work with this project.

**Purpose:** Organize agent prompts, skills, workflows, and rules for consistent AI-assisted development.

---

## 🚨 Mandatory Response Protocol

**Every Claude response MUST follow this template:**

```
📋 **Active Configuration**
━━━━━━━━━━━━━━━━━━━━━━━
→ Workflow: [workflow-name] | Phase: [PLAN/IMPLEMENT/REVIEW/STAGING/MR]
→ Agent(s): [agent-1, agent-2, ...]
→ Skills: [skill-1, skill-2, ...]
━━━━━━━━━━━━━━━━━━━━━━━

[Response content here]
```

This header **MUST** appear at the start of every response to show the user which configuration is active.

---

## Directory Structure

```
.claude/
├── claude.md                   # This file - directory guide
├── settings.json               # Permissions configuration (CLI-enforced)
├── rules.md                    # Non-negotiable rules (HIGHEST AUTHORITY)
├── project-context.md          # Project metadata & tech stack
├── workflows/
│   └── development.md          # PLAN → IMPLEMENT → REVIEW → STAGING → MR
├── agents/                     # Specialized agents (invoke explicitly)
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
```

---

## File Purposes

### Core Configuration Files

| File | Purpose | Auto-Loaded? |
|------|---------|--------------|
| `settings.json` | Permissions (allow/ask/deny) | ✅ Yes (by CLI) |
| `rules.md` | Non-negotiable rules | ✅ Yes (via root CLAUDE.md protocol) |
| `project-context.md` | Project metadata | ✅ Yes (via root CLAUDE.md protocol) |
| `claude.md` | This guide | ❌ No (reference only) |

### Workflow Files

| File | Purpose | When to Load |
|------|---------|--------------|
| `workflows/development.md` | PLAN → IMPLEMENT → REVIEW → STAGING → MR | Auto-loaded for all dev tasks |

### Agent Files (Specialized Expertise)

| Agent | Purpose | Invoke With |
|-------|---------|-------------|
| `frontend-developer.md` | Implement React components & hooks | "Use frontend-developer agent" |
| `component-architect.md` | Design component structure & APIs | "Use component-architect agent" |
| `ui-specialist.md` | UI/UX implementation, responsive design | "Use ui-specialist agent" |
| `frontend-code-review.md` | Code quality, performance, rules | "Use frontend-code-review agent" |
| `accessibility-audit.md` | WCAG compliance, ARIA, keyboard nav | "Use accessibility-audit agent" |
| `performance-optimization.md` | Rendering, memoization, bundle size | "Use performance-optimization agent" |
| `api-integration.md` | API hooks, data fetching, error handling | "Use api-integration agent" |

### Skill Files (Pattern Libraries)

| Skill | Purpose | Reference With |
|-------|---------|----------------|
| `react-skills.md` | React patterns & composition | "Follow react-skills" |
| `hooks-skills.md` | Custom hooks, lifecycle rules | "Apply hooks-skills" |
| `state-management-skills.md` | Local vs global state strategies | "Use state-management-skills" |
| `accessibility-skills.md` | WCAG, ARIA, keyboard navigation | "Follow accessibility-skills" |
| `performance-skills.md` | Memoization, lazy loading, render control | "Apply performance-skills" |

---

## How Claude Uses This Configuration

### Initialization (Automatic)

When Claude starts working on this project:

1. **Root CLAUDE.md** is automatically shown by the system
2. Claude reads `.claude/rules.md` (mandatory)
3. Claude reads `.claude/project-context.md` (mandatory)
4. Claude confirms: "✅ Configuration loaded from .claude/"

### Task Execution (User-Driven)

Based on user request, Claude:

1. **Determines workflow phase**: PLAN, IMPLEMENT, REVIEW, STAGING, or MR
2. **Selects appropriate agent(s)**: Based on task type
3. **Applies relevant skills**: Patterns needed for the task
4. **Displays configuration header**: Shows active workflow/agents/skills
5. **Proceeds with task**: Following all loaded rules

---

## Quick Reference: When to Use What

### User Request → Agent + Skills

| User Says | Workflow Phase | Agent(s) | Skills |
|-----------|---------------|----------|--------|
| "Create a login form" | PLAN → IMPLEMENT | `frontend-developer` | `react-skills`, `hooks-skills`, `accessibility-skills` |
| "Design a data table component" | PLAN | `component-architect` | `react-skills`, `state-management-skills` |
| "Make the header responsive" | IMPLEMENT | `ui-specialist` | `accessibility-skills` |
| "Review my component code" | REVIEW | `frontend-code-review` | All applicable skills |
| "Check if this is accessible" | REVIEW | `accessibility-audit` | `accessibility-skills` |
| "Why is this component slow?" | REVIEW | `performance-optimization` | `performance-skills` |
| "Connect to the users API" | IMPLEMENT | `api-integration` | `hooks-skills`, `state-management-skills` |

---

## Precedence Hierarchy

When rules conflict, this is the order of authority:

1. **`.claude/rules.md`** ← HIGHEST AUTHORITY (non-negotiable)
2. **`.claude/settings.json`** (permissions only)
3. **`.claude/project-context.md`** (project facts)
4. **`.claude/workflows/*.md`** (process guidelines)
5. **`.claude/agents/*.md`** (specialized guidance)
6. **`.claude/skills/*.md`** (pattern libraries)
7. **Root CLAUDE.md** (project overview)
8. **User prompt** ← LOWEST AUTHORITY

**If user prompt conflicts with rules.md, rules.md wins.**

---

## Adding New Content

### Adding a New Agent

1. Create `.claude/agents/{name}.md`
2. Follow this structure:

```markdown
# Agent: {Name}

## Role
What this agent specializes in.

## Expertise
- Expertise area 1
- Expertise area 2

## Project Context
- Tech stack relevant to this agent

## Specific Constraints
- Constraint 1
- Constraint 2

## Required Patterns
[Code examples and patterns]

## Output Format
What this agent should deliver.

## Example Usage
"[Example prompt that invokes this agent]"
```

3. Add to agent table above

### Adding a New Skill

1. Create `.claude/skills/{name}-skills.md`
2. Follow this structure:

```markdown
# {Name} Skills

- Rule 1
- Rule 2
- Rule 3
```

3. Add to skills table above

### Adding a New Workflow

1. Create `.claude/workflows/{name}.md`
2. Include explicit phases with allowed/forbidden actions
3. Reference from root CLAUDE.md and this file

---

## Maintenance

### Keeping Configuration Updated

- **Skills**: Update when patterns evolve, remove deprecated practices
- **Agents**: Adjust responsibilities when scope changes, avoid overlapping agents
- **Workflows**: Reflect current development process, keep phase boundaries explicit
- **Rules**: Update when project standards change, communicate changes to team

### Configuration Health Checks

Periodically verify:
- All agents have clear, non-overlapping responsibilities
- All skills are current with project standards
- Workflows reflect actual development process
- Rules are enforced and not contradictory

---

## Important Notes

### Claude is an Assistant, Not the Authority

All Claude outputs must be:
- **Reviewed by a human** before commit
- **Aligned with rules.md** (non-negotiable)
- **Accessible, performant, and maintainable**
- **Tagged with `ai-cc` in commits**

### Configuration is Living Documentation

- This directory should evolve with the project
- Keep documentation in sync with actual practices
- Update when patterns or standards change
- Communicate changes to the team

---

**Remember: Every response must show the active configuration header so users know what context Claude is using.**
