## Workflow Execution Lock

This workflow runs in CONTEXT-ONLY MODE by default.

Before responding, Claude must:
1. State the active workflow
2. State the current phase
3. List allowed actions
4. List forbidden actions

If exploration is required, Claude must ask permission.

# Frontend Development Workflow

This workflow defines the standard lifecycle for frontend changes.

## Execution Rules
- Follow phases strictly
- Do not skip phases
- Do not write code outside IMPLEMENT
- Do not review code outside REVIEW
- Do not generate MR content outside MR
- Ask for clarification if phase is unclear

---

## Phase: PLAN
Purpose:
- Understand requirements
- Design solution
- Identify risks

Allowed:
- Architecture decisions
- File structure proposals
- Step-by-step plan
- Risks & assumptions

Forbidden:
- Writing final code

---

## Phase: IMPLEMENT
Purpose:
- Implement approved plan

Allowed:
- Writing code
- Small focused changes
- Refactoring per plan

Requirements:
- Follow `.claude/rules.md`
- Use TypeScript
- Ensure accessibility
- No unrelated changes

---

## Phase: REVIEW
Purpose:
- Quality gate before commit

Focus on:
- Correctness
- Readability
- Performance
- Accessibility
- Rule violations

Forbidden:
- Adding new features

---

## Phase: STAGING
Purpose:
- Pre-merge safety check

Check:
- Breaking changes
- Environment assumptions
- Feature flags
- Rollback risk

---

## Phase: MR
Purpose:
- Create merge request content

Generate:
- MR title
- Description
- Testing checklist
- Review notes
