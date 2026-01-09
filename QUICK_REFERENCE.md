# Quick Reference Card

## 🚀 Start Every Conversation With This

```
Follow the initialization protocol from CLAUDE.md before helping with [YOUR REQUEST]
```

---

## 📋 Agents Quick Reference

| When You Need... | Use This Agent | Example Prompt |
|-----------------|----------------|----------------|
| **Build a component** | `frontend-developer` | "Use frontend-developer agent to create a Button component" |
| **Design architecture** | `component-architect` | "Use component-architect agent to design a form system" |
| **Style & layout** | `ui-specialist` | "Use ui-specialist agent to make this responsive" |
| **Review code** | `frontend-code-review` | "Use frontend-code-review agent to review this code" |
| **Check accessibility** | `accessibility-audit` | "Use accessibility-audit agent to check this component" |
| **Optimize performance** | `performance-optimization` | "Use performance-optimization agent to optimize this" |
| **Connect to API** | `api-integration` | "Use api-integration agent to create user API hooks" |

---

## 🎯 Skills Quick Reference

| When You Need... | Apply This Skill | Example |
|-----------------|------------------|---------|
| **React patterns** | `react-skills` | "Apply react-skills when building this" |
| **Custom hooks** | `hooks-skills` | "Follow hooks-skills for this custom hook" |
| **State management** | `state-management-skills` | "Use state-management-skills for cart state" |
| **Accessibility** | `accessibility-skills` | "Apply accessibility-skills to make it WCAG compliant" |
| **Performance** | `performance-skills` | "Use performance-skills to reduce re-renders" |

---

## 🔄 Common Prompts (Copy & Paste)

### Create a Component
```
Follow initialization protocol from CLAUDE.md.
Use frontend-developer agent to create a [COMPONENT] with:
- [Requirement 1]
- [Requirement 2]
- TypeScript types
- Accessibility
Apply react-skills and accessibility-skills.
```

### Review Code
```
Follow initialization protocol from CLAUDE.md.
Use frontend-code-review agent to review:

[PASTE CODE]

Check for rules violations, performance, and accessibility.
Categorize as Must-fix or Nice-to-have.
```

### Check Accessibility
```
Follow initialization protocol from CLAUDE.md.
Use accessibility-audit agent to check:

[PASTE CODE]

Ensure WCAG 2.1 AA compliance with fixes.
```

### Connect to API
```
Follow initialization protocol from CLAUDE.md.
Use api-integration agent to create API integration for [RESOURCE]:
- Endpoints: [LIST]
- Types: [LIST]
- Custom hooks: [LIST]
- Error handling
Apply hooks-skills.
```

---

## 🛠️ When Claude Forgets

### No Configuration Header?
```
Show the configuration header first
```

### Using 'any' type?
```
This violates rules.md (no 'any' types). Fix with proper TypeScript types.
```

### After 10-15 messages?
```
Reload configuration:
1. Re-read .claude/rules.md
2. Show configuration header
3. Continue
```

---

## ✅ What You Should See

Every response should start with:
```
📋 **Active Configuration**
━━━━━━━━━━━━━━━━━━━━━━━
→ Workflow: development | Phase: IMPLEMENT
→ Agent(s): frontend-developer
→ Skills: react-skills, accessibility-skills
━━━━━━━━━━━━━━━━━━━━━━━
```

**If you don't see this:** Claude forgot. Use the reminders above.

---

## 📖 Full Documentation

See [HOW_TO_PROMPT_CLAUDE.md](HOW_TO_PROMPT_CLAUDE.md) for:
- Complete examples
- React-specific scenarios
- Workflow-specific prompts
- Advanced techniques
- Troubleshooting

---

**Print this and keep it handy! 📌**

---

## ⚙️ Model Requirement

**ALWAYS USE:** Claude Sonnet 4.5

- ✅ Optimal for this project
- ❌ Don't use: Opus, Haiku, older Sonnet versions

Check your model before starting!

---
