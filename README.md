# APILayer Frontend Application

React 19 + TypeScript + Vite + MUI frontend application with comprehensive Claude AI configuration.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

**Commands:**
- `npm run dev` - Start development server (Vite)
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

---

## 🤖 Working with Claude AI

This project has Claude Code configuration for AI-assisted development.

### Getting Started with Claude

1. **Read the user guide:** [HOW_TO_PROMPT_CLAUDE.md](HOW_TO_PROMPT_CLAUDE.md)
2. **Print the cheat sheet:** [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
3. **Start conversations with:**
   ```
   Follow the initialization protocol from CLAUDE.md before helping with [YOUR REQUEST]
   ```

### Important: Use Claude Sonnet 4.5

**This project requires Claude Sonnet 4.5 model** for optimal results.

---

## 📚 Documentation Structure

### User-Facing Documentation (Root Directory)

| File | Purpose | When to Use |
|------|---------|-------------|
| **[CLAUDE.md](CLAUDE.md)** | Project overview & initialization protocol | First file Claude reads (auto-loaded) |
| **[HOW_TO_PROMPT_CLAUDE.md](HOW_TO_PROMPT_CLAUDE.md)** | Complete prompting guide with React examples | Learning how to prompt Claude effectively |
| **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** | One-page cheat sheet | Quick lookup for agents/skills/prompts |

### Claude Configuration (.claude/ Directory)

| File | Purpose | Used By |
|------|---------|---------|
| **[.claude/rules.md](.claude/rules.md)** | Non-negotiable project rules (HIGHEST AUTHORITY) | Claude (loaded via initialization protocol) |
| **[.claude/project-context.md](.claude/project-context.md)** | Project metadata, tech stack, requirements | Claude (loaded via initialization protocol) |
| **[.claude/settings.json](.claude/settings.json)** | Permissions (allow/ask/deny) | Claude Code CLI (enforced automatically) |
| **[.claude/claude.md](.claude/claude.md)** | How Claude uses the configuration | Developers (understanding system) |
| **[.claude/README.md](.claude/README.md)** | .claude/ directory guide | Developers (understanding structure) |

### Agents & Skills (.claude/ Directory)

| Directory | Contents | How to Use |
|-----------|----------|------------|
| **[.claude/agents/](.claude/agents/)** | 7 specialized agents (frontend-developer, component-architect, ui-specialist, etc.) | Invoke explicitly: "Use frontend-developer agent" |
| **[.claude/skills/](.claude/skills/)** | 5 pattern libraries (react-skills, hooks-skills, accessibility-skills, etc.) | Reference explicitly: "Apply react-skills" |
| **[.claude/workflows/](.claude/workflows/)** | Development workflow (PLAN → IMPLEMENT → REVIEW → STAGING → MR) | Loaded automatically |

---

## 🎯 How Files Are Used

### For Claude (AI Assistant)

**Auto-loaded at conversation start:**
- ✅ `CLAUDE.md` - Tells Claude to load rules and show configuration header

**Loaded via initialization protocol:**
- ✅ `.claude/rules.md` - Non-negotiable rules Claude must follow
- ✅ `.claude/project-context.md` - Project facts and requirements

**Enforced by CLI:**
- ✅ `.claude/settings.json` - Permissions (what Claude can/cannot do)

**Loaded when invoked:**
- ✅ `.claude/agents/*.md` - When user says "Use [agent-name] agent"
- ✅ `.claude/skills/*.md` - When user says "Apply [skill-name]"

### For Developers (Humans)

**Learning resources:**
- 📘 `HOW_TO_PROMPT_CLAUDE.md` - Comprehensive guide with React examples
- 📋 `QUICK_REFERENCE.md` - One-page cheat sheet (print this!)

**Understanding the system:**
- 📖 `CLAUDE.md` - Project overview and how to work with Claude
- 📖 `.claude/README.md` - Understanding .claude/ directory structure
- 📖 `.claude/claude.md` - How Claude uses the configuration

---

## 📋 Configuration Summary

### What Claude Must Follow

**Precedence hierarchy (highest to lowest):**
1. `.claude/rules.md` ← **HIGHEST AUTHORITY**
2. `.claude/settings.json` (permissions only)
3. `.claude/project-context.md`
4. `.claude/workflows/*.md`
5. `.claude/agents/*.md`
6. `.claude/skills/*.md`
7. `CLAUDE.md`
8. User prompt

### Key Rules

- **TypeScript strict mode** - `any` type is **FORBIDDEN**
- **Functional components only** - No class components
- **Hooks only** - No lifecycle methods
- **Accessibility mandatory** - WCAG 2.1 AA compliance
- **Model:** Claude Sonnet 4.5 required

See [.claude/rules.md](.claude/rules.md) for complete list.

---

## 🎓 Example Usage

### Creating a Component

**Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use frontend-developer agent to create a LoginForm component with:
- Email and password fields
- Validation
- Loading states
- Error handling
- Accessibility

Apply react-skills, hooks-skills, and accessibility-skills.
```

**Claude will respond with:**
```
📋 **Active Configuration**
━━━━━━━━━━━━━━━━━━━━━━━
→ Workflow: development | Phase: IMPLEMENT
→ Agent(s): frontend-developer
→ Skills: react-skills, hooks-skills, accessibility-skills
━━━━━━━━━━━━━━━━━━━━━━━

[Creates LoginForm following all project rules]
```

### Code Review

**Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use frontend-code-review agent to review this code:

[PASTE CODE]

Check for rules violations, performance, and accessibility.
Categorize as Must-fix or Nice-to-have.
```

---

## 🛠️ Tech Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite 7
- **UI Library:** MUI 6 with Emotion
- **Styling:** Emotion (CSS-in-JS), MUI sx prop
- **Linting:** ESLint 9 with typescript-eslint
- **State Management:** React Context, Zustand (preferred)
- **Testing:** Jest + React Testing Library (80% coverage required)

See [.claude/project-context.md](.claude/project-context.md) for complete tech stack.

---

## 📦 Project Structure

```
/
├── CLAUDE.md                      # Claude initialization protocol
├── HOW_TO_PROMPT_CLAUDE.md       # User guide for prompting Claude
├── QUICK_REFERENCE.md             # One-page cheat sheet
├── README.md                      # This file
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .claude/                       # Claude configuration
│   ├── rules.md                   # Non-negotiable rules
│   ├── project-context.md         # Project metadata
│   ├── settings.json              # Permissions
│   ├── claude.md                  # Configuration guide
│   ├── README.md                  # .claude/ directory guide
│   ├── workflows/
│   │   └── development.md         # PLAN → IMPLEMENT → REVIEW
│   ├── agents/                    # 7 specialized agents
│   │   ├── frontend-developer.md
│   │   ├── component-architect.md
│   │   ├── ui-specialist.md
│   │   ├── frontend-code-review.md
│   │   ├── accessibility-audit.md
│   │   ├── performance-optimization.md
│   │   └── api-integration.md
│   └── skills/                    # 5 pattern libraries
│       ├── react-skills.md
│       ├── hooks-skills.md
│       ├── state-management-skills.md
│       ├── accessibility-skills.md
│       └── performance-skills.md
├── src/
│   ├── main.tsx                   # Entry point
│   ├── App.tsx                    # Root component
│   ├── components/                # Reusable UI components
│   │   ├── index.ts               # Barrel exports
│   │   └── *.tsx
│   └── assets/
└── public/
```

---

## 🤝 Contributing

### For Human Developers

1. Read [HOW_TO_PROMPT_CLAUDE.md](HOW_TO_PROMPT_CLAUDE.md)
2. Print [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
3. Use Claude Sonnet 4.5 model
4. Start conversations with initialization protocol
5. All AI-assisted commits must be tagged with `ai-cc`
6. Human review required before merge

### For Claude AI

1. You will automatically see `CLAUDE.md` at conversation start
2. Follow the initialization protocol (load rules, show config header)
3. Apply appropriate agents and skills based on task
4. Display configuration header in every response
5. Follow all rules in `.claude/rules.md` (non-negotiable)

---

## 📖 Quick Links

**Getting Started:**
- [HOW_TO_PROMPT_CLAUDE.md](HOW_TO_PROMPT_CLAUDE.md) - Complete user guide
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Cheat sheet

**Configuration:**
- [CLAUDE.md](CLAUDE.md) - Project overview
- [.claude/rules.md](.claude/rules.md) - Project rules
- [.claude/README.md](.claude/README.md) - .claude/ directory guide

---

## 🎯 Key Takeaways

1. **Use Claude Sonnet 4.5** - Required for this project
2. **Start with initialization protocol** - Load rules before working
3. **Check configuration header** - Every response should show active config
4. **Follow the rules** - `.claude/rules.md` is non-negotiable
5. **Use the guides** - `HOW_TO_PROMPT_CLAUDE.md` for learning, `QUICK_REFERENCE.md` for quick lookups

---

## 📞 Questions?

- **How do I prompt Claude?** → Read [HOW_TO_PROMPT_CLAUDE.md](HOW_TO_PROMPT_CLAUDE.md)
- **Quick lookup?** → Check [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
- **How does Claude use config?** → Read [.claude/claude.md](.claude/claude.md)
- **What are the rules?** → See [.claude/rules.md](.claude/rules.md)

---

**Version:** 1.0.0  
**Last Updated:** January 9, 2026  
**License:** [Your License]
