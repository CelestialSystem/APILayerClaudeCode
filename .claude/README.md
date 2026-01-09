# .claude/ Directory - Updated Documentation

## 📁 User Guides (In Root Directory)

| File | Location | Purpose |
|------|----------|---------|
| **HOW_TO_PROMPT_CLAUDE.md** | `/HOW_TO_PROMPT_CLAUDE.md` | Complete prompting guide with React examples |
| **QUICK_REFERENCE.md** | `/QUICK_REFERENCE.md` | One-page cheat sheet for quick lookup |

**These are in the root directory for easy discovery!**

---

## 📁 Files in .claude/ Directory

### For Users (Understanding the System)

| File | Purpose |
|------|---------|
| **CHANGES.md** | Detailed changelog of restructure |
| **SUMMARY.md** | Executive summary of changes |
| **USER_GUIDE_CREATED.md** | Summary of user guide creation |

### For Configuration

| File | Purpose |
|------|---------|
| **settings.json** | Permissions configuration (CLI-enforced) |
| **rules.md** | Non-negotiable rules (highest authority) |
| **project-context.md** | Project metadata & tech stack |
| **claude.md** | Directory guide & how Claude uses config |
| **README.md** | Original agent directory guide |

### Subdirectories

| Directory | Contents |
|-----------|----------|
| **workflows/** | Development workflow (PLAN → IMPLEMENT → REVIEW) |
| **agents/** | 7 specialized agent files |
| **skills/** | 5 pattern library files |

---

## 🚀 Getting Started

### Step 1: Read the User Guide (5 minutes)
Open: **/HOW_TO_PROMPT_CLAUDE.md** (in root directory)

Skim these sections:
- 🎯 Quick Start
- 📋 Understanding the Configuration Header
- 📚 React Frontend Examples (pick 2-3 relevant ones)

### Step 2: Print the Quick Reference
Open: **/QUICK_REFERENCE.md** (in root directory)

Print it or keep it open in a browser tab.

### Step 3: Start Your First Conversation
Copy this prompt:
```
Follow the initialization protocol from CLAUDE.md before helping with [YOUR REQUEST]
```

Paste it at the start of every conversation.

---

## 📚 Full Project Documentation Structure

```
/ (Root)
├── 📘 HOW_TO_PROMPT_CLAUDE.md   ← User guide (START HERE!)
├── 📋 QUICK_REFERENCE.md        ← Cheat sheet (PRINT THIS!)
├── CLAUDE.md                    ← Project overview & init protocol
└── .claude/                     ← Configuration directory
    ├── 📝 CHANGES.md            ← What changed
    ├── 📊 SUMMARY.md            ← Change summary
    ├── 📝 USER_GUIDE_CREATED.md ← User guide creation summary
    ├── ⚙️ settings.json         ← Permissions
    ├── 📜 rules.md              ← Project rules (highest authority)
    ├── 📄 project-context.md    ← Project metadata
    ├── 📖 claude.md             ← How config works
    ├── 📋 README.md             ← Original README
    ├── workflows/
    │   └── development.md       ← PLAN → IMPLEMENT → REVIEW → STAGING → MR
    ├── agents/                  ← Specialized experts
    │   ├── frontend-developer.md
    │   ├── component-architect.md
    │   ├── ui-specialist.md
    │   ├── frontend-code-review.md
    │   ├── accessibility-audit.md
    │   ├── performance-optimization.md
    │   └── api-integration.md
    └── skills/                  ← Pattern libraries
        ├── react-skills.md
        ├── hooks-skills.md
        ├── state-management-skills.md
        ├── accessibility-skills.md
        └── performance-skills.md
```

---

## 🎯 Key Concepts

### 1. Configuration Header
Every Claude response should show:
```
📋 **Active Configuration**
→ Workflow: development | Phase: IMPLEMENT
→ Agent(s): frontend-developer
→ Skills: react-skills, accessibility-skills
```

### 2. User Guides are in Root
- Easy to find
- Easy to share
- Visible in repository browsers

### 3. Configuration is in .claude/
- Technical files
- Rules and settings
- Agent/skill definitions

---

## 💡 Quick Tips

1. **Start with user guides** in root directory
2. **Use QUICK_REFERENCE.md** for quick lookups
3. **Check configuration header** in every Claude response
4. **Reload rules** after 10-15 messages in long conversations

---

## 📞 Questions?

**Where do I start?**
→ Read **/HOW_TO_PROMPT_CLAUDE.md** (root directory)

**I need a quick reminder**
→ Check **/QUICK_REFERENCE.md** (root directory)

**What's in .claude/ directory?**
→ Configuration files, rules, agents, skills (technical)

**How do I know which agent to use?**
→ See agent table in **/QUICK_REFERENCE.md**

---

## 🎉 File Organization Rationale

### Root Directory (User-Facing)
```
HOW_TO_PROMPT_CLAUDE.md  ← "How do I use Claude?"
QUICK_REFERENCE.md       ← "Quick lookup"
CLAUDE.md                ← "What is this project?"
```
→ **For developers using Claude**

### .claude/ Directory (Configuration)
```
rules.md           ← "What are the rules?"
settings.json      ← "What can Claude do?"
agents/            ← "Specialized expertise"
skills/            ← "Pattern libraries"
```
→ **For Claude & system configuration**

---

**Last Updated:** January 9, 2026  
**Next Steps:** Read **/HOW_TO_PROMPT_CLAUDE.md** in root directory!
