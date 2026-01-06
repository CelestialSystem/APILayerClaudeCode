## HARD STOP — TOOL & CODEBASE ACCESS

Claude must NOT:
- Read files
- Explore directories
- Run Bash commands
- Perform discovery tasks

UNLESS the user explicitly says:
"ALLOW CODEBASE EXPLORATION"

If this rule is violated, Claude must STOP and explain the violation.

# Project Rules (Authoritative)

This file defines non-negotiable rules for all AI-assisted work in this repository.

If any instruction conflicts with this file, this file wins.

---

## 1. Authority & Precedence

Order of authority:
1. `.claude/rules.md` (this file)
2. `.claude/settings.json`
3. `.claude/workflows/*.md`
4. `.claude/agents/*.md`
5. `.claude/skills/*.md`
6. User prompt

Claude must always obey higher-priority rules.

---

## 2. Execution Mode

Default mode: **Context-only**

Claude must:
- Treat `.claude/*.md` as the single source of truth
- Respond immediately using available context
- State assumptions if context is missing

Claude must NOT:
- Explore the codebase unless explicitly asked
- Run shell commands unless explicitly permitted
- Glob or scan files by default

---

## 3. Workflow Enforcement

- A workflow phase must be explicitly declared
- Claude must not skip phases
- Claude must not auto-advance phases
- Claude must stop and ask if phase is unclear

Phase rules:
- PLAN → no code
- IMPLEMENT → code allowed
- REVIEW → critique only
- STAGING → risk analysis only
- MR → description only

---

## 4. Coding Rules (Frontend)

- TypeScript only
- `any` is forbidden
- Functional components only
- Hooks only (no classes)
- One component per file
- No inline styles
- Accessibility is mandatory
- No business logic in JSX

---

## 5. Styling Rules

- Tailwind CSS or CSS Modules only
- No global CSS unless explicitly approved
- Responsive-first design
- Use design tokens where available

---

## 6. Performance Rules

- Avoid unnecessary re-renders
- Memoize expensive computations
- Lazy load routes where applicable
- Do not prematurely optimize

---

## 7. Accessibility Rules

- Use semantic HTML first
- All interactive elements must be keyboard accessible
- Buttons must be `<button>`, not `<div>`
- ARIA only when semantic HTML is insufficient
- Focus states must be visible

---

## 8. Security & Privacy Rules

Claude must NEVER:
- Request or output secrets
- Request `.env` files
- Log or expose PII
- Hardcode tokens or keys
- Include real user data

Any sensitive data must be masked or abstracted.

---

## 9. AI Compliance

- All AI-assisted commits must use tag: `ai-cc`
- Human material editing is mandatory
- Claude is an assistant, not an author of record
- Claude must not commit, push, or merge code

---

## 10. Review Standards

When reviewing code, Claude must:
- Categorize issues as `Must-fix` or `Nice-to-have`
- Reference violated rules explicitly
- Avoid unnecessary rewrites
- Prioritize correctness and safety

---

## 11. Assumptions & Clarifications

If information is missing:
- State assumptions explicitly
- Do not explore the codebase by default
- Ask clarifying questions only when necessary

---

## 12. Failure Handling

If Claude detects a conflict or violation:
- Stop
- Explain the issue
- Ask for guidance before proceeding
