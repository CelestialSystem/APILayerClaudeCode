# How to Prompt Claude - Best Practices Guide

**Purpose:** Learn how to prompt Claude effectively to ensure it follows all project rules, uses appropriate agents/skills, and produces the best results for your React frontend application.

---

## 🎯 Quick Start

### Every New Conversation - Start With This:

```
Follow the initialization protocol from CLAUDE.md:
1. Read .claude/rules.md
2. Read .claude/project-context.md
3. Display configuration header in all responses

Then help me with: [YOUR REQUEST HERE]
```

**Why this works:**
- ✅ Forces Claude to load all rules
- ✅ Makes Claude display active configuration
- ✅ Ensures consistency throughout conversation

---

## 📋 Understanding the Configuration Header

When Claude follows the protocol correctly, you'll see this at the start of every response:

```
📋 **Active Configuration**
━━━━━━━━━━━━━━━━━━━━━━━
→ Workflow: development | Phase: IMPLEMENT
→ Agent(s): frontend-developer
→ Skills: react-skills, hooks-skills, accessibility-skills
━━━━━━━━━━━━━━━━━━━━━━━
```

**What this tells you:**
- **Workflow & Phase**: Current development phase (PLAN/IMPLEMENT/REVIEW/STAGING/MR)
- **Agent(s)**: Which specialized expert is being used
- **Skills**: Which pattern libraries are being applied

**If you DON'T see this header:** Claude forgot the protocol. Remind it (see "When Claude Forgets" section).

---

## 🚀 Conversation Templates

### Template 1: New Session Start

**Copy this at the beginning of EVERY conversation:**

```
Follow the initialization protocol from CLAUDE.md before proceeding.

Confirm by showing:
- ✅ Configuration loaded
- Active workflow phase
- Relevant agents and skills

Then help me with: [YOUR REQUEST]
```

**Example:**
```
Follow the initialization protocol from CLAUDE.md before proceeding.

Confirm by showing:
- ✅ Configuration loaded
- Active workflow phase
- Relevant agents and skills

Then help me create a login form with email/password validation.
```

---

### Template 2: Mid-Conversation Reload (Every 10-15 Messages)

**Use this to refresh Claude's memory:**

```
Reload configuration:
1. Re-read .claude/rules.md
2. Show current configuration header
3. Continue with my next request

[YOUR NEXT REQUEST]
```

---

### Template 3: Request Specific Agent

**When you want a particular specialized agent:**

```
Use [AGENT-NAME] agent to [TASK]

Available agents:
- frontend-developer: Build components
- component-architect: Design structure
- ui-specialist: UI/UX implementation
- frontend-code-review: Review code
- accessibility-audit: Check accessibility
- performance-optimization: Optimize performance
- api-integration: Connect to APIs
```

**Example:**
```
Use component-architect agent to design a data table component with sorting, filtering, and pagination.
```

---

### Template 4: Apply Specific Skills

**When you want specific patterns enforced:**

```
Follow [SKILL-NAME] when [TASK]

Available skills:
- react-skills: React patterns
- hooks-skills: Hook patterns
- state-management-skills: State strategies
- accessibility-skills: A11y patterns
- performance-skills: Performance patterns
```

**Example:**
```
Follow react-skills and accessibility-skills when creating this button component.
```

---

### Template 5: Code Review Request

```
Use frontend-code-review agent to review this code:

[PASTE CODE HERE]

Check for:
- Rule violations
- Performance issues
- Accessibility problems
- Security concerns

Categorize as: Must-fix or Nice-to-have
```

---

## 📚 React Frontend Examples

### Example 1: Creating a Component (Basic)

**❌ Weak Prompt:**
```
Make a button component
```

**✅ Strong Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use frontend-developer agent to create a reusable Button component with:
- TypeScript props interface
- MUI styling (sx prop)
- Variants: primary, secondary, text
- Loading state with spinner
- Disabled state
- onClick handler
- Accessibility (ARIA labels, keyboard navigation)

Apply react-skills and accessibility-skills.
```

**Why it's better:**
- Loads configuration
- Specifies agent
- Clear requirements
- References skills
- Ensures accessibility

---

### Example 2: Component Architecture (Planning)

**❌ Weak Prompt:**
```
How should I structure a form?
```

**✅ Strong Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use component-architect agent in PLAN phase to design:

Form system for user registration with:
- Email, password, confirm password fields
- Real-time validation
- Error display
- Submit button with loading state
- Success/error notifications

Consider:
- Component composition
- State management approach
- Validation strategy
- Accessibility
- Reusability

Apply react-skills and state-management-skills.
```

---

### Example 3: API Integration

**❌ Weak Prompt:**
```
Connect to user API
```

**✅ Strong Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use api-integration agent to:

Create API integration for user management:
- Endpoints: GET /users, POST /users, PUT /users/:id, DELETE /users/:id
- TypeScript types for User, CreateUserRequest, UpdateUserRequest
- Custom hooks: useUsers, useCreateUser, useUpdateUser, useDeleteUser
- Error handling with ApiError class
- Loading states
- Request cancellation on unmount

Apply hooks-skills and state-management-skills.
```

---

### Example 4: Accessibility Review

**❌ Weak Prompt:**
```
Check if this is accessible
```

**✅ Strong Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use accessibility-audit agent to review this component:

[PASTE CODE]

Check for:
- Semantic HTML usage
- ARIA attributes (only where necessary)
- Keyboard navigation support
- Focus management
- Color contrast (conceptual)
- Screen reader compatibility
- WCAG 2.1 AA compliance

Apply accessibility-skills and provide:
- Must-fix issues
- Nice-to-have improvements
- Code examples for fixes
```

---

### Example 5: Performance Optimization

**❌ Weak Prompt:**
```
This is slow, fix it
```

**✅ Strong Prompt:**
```
Follow the initialization protocol from CLAUDE.md.

Use performance-optimization agent to analyze:

[PASTE CODE]

Check for:
- Unnecessary re-renders
- Missing memoization (useMemo, useCallback)
- Expensive computations in render
- Large bundle size contributors
- Missing lazy loading

Apply performance-skills and provide:
- Specific issues found
- Code examples with fixes
- Expected performance improvement
```

---

### Example 6: Form with Validation

**✅ Complete Example:**
```
Follow the initialization protocol from CLAUDE.md.

Use frontend-developer agent to create a LoginForm component:

Requirements:
- Email field (validate format)
- Password field (min 8 chars)
- "Remember me" checkbox
- Submit button
- Loading state during submission
- Error display (field-level and form-level)
- Success redirect after login

Technical constraints:
- Functional component with hooks
- TypeScript strict mode
- MUI components
- Form validation (not using library)
- Error handling for API failures
- Accessible (ARIA labels, error announcements)

Apply:
- react-skills (functional components, composition)
- hooks-skills (useState, useCallback for handlers)
- accessibility-skills (semantic HTML, ARIA)

Display configuration header before implementation.
```

---

### Example 7: Complex State Management

**✅ Complete Example:**
```
Follow the initialization protocol from CLAUDE.md.

Use component-architect agent in PLAN phase to design:

Shopping cart state management:
- Add/remove items
- Update quantity
- Calculate totals
- Persist to localStorage
- Sync across tabs

Evaluate approaches:
1. React Context + useReducer
2. Zustand
3. Redux Toolkit

Recommend best approach for this use case and explain:
- Why this approach?
- File structure
- Type definitions
- Example usage

Apply state-management-skills.
```

---

### Example 8: Code Review Before Commit

**✅ Complete Example:**
```
Follow the initialization protocol from CLAUDE.md.

Use frontend-code-review agent in REVIEW phase to review:

[PASTE ALL CHANGED FILES]

Check for:
- TypeScript strict mode compliance (no 'any')
- Functional components only
- Accessibility (semantic HTML, ARIA, keyboard nav)
- Performance (memoization, re-renders)
- Security (input validation, XSS prevention)
- Rules violations from .claude/rules.md

Provide feedback as:
- Must-fix: Critical issues blocking merge
- Nice-to-have: Improvements for future

Apply all relevant skills.
```

---

## 🛠️ When Claude Forgets

### Signs Claude Forgot the Protocol

1. **No configuration header** at start of response
2. **Uses `any` type** (forbidden by rules)
3. **Suggests class components** (functional only)
4. **Skips accessibility** features
5. **Doesn't follow coding standards**

### Quick Fixes

#### Fix 1: Remind About Header
```
Show the configuration header first before continuing
```

#### Fix 2: Reload Rules
```
Reload .claude/rules.md and confirm you've loaded it
```

#### Fix 3: Reference Specific Rule
```
Remember: no 'any' types allowed (check rules.md section 4)
```

#### Fix 4: Full Reset (In Long Conversations)
```
Let's start fresh:
1. Re-read .claude/rules.md
2. Re-read .claude/project-context.md
3. Show configuration header
4. Continue with my request
```

---

## 🎓 Advanced Prompting Techniques

### Technique 1: Multi-Phase Workflow

```
Follow the initialization protocol from CLAUDE.md.

Let's work in phases:

PHASE 1 (PLAN):
Use component-architect agent to design a user profile page

PHASE 2 (IMPLEMENT):
Use frontend-developer agent to implement the design

PHASE 3 (REVIEW):
Use frontend-code-review agent to review the implementation

Start with PHASE 1.
```

### Technique 2: Multiple Agents

```
Follow the initialization protocol from CLAUDE.md.

Use both component-architect and ui-specialist agents to:
- Design the component structure (architect)
- Implement responsive UI with MUI (ui-specialist)

For a responsive navigation header with mobile menu.
```

### Technique 3: Explicit Constraints

```
Follow the initialization protocol from CLAUDE.md.

Use frontend-developer agent with these STRICT constraints:
- ❌ NO 'any' types
- ❌ NO inline styles
- ❌ NO class components
- ✅ MUST be keyboard accessible
- ✅ MUST include loading/error states
- ✅ MUST use MUI components

Create a data table component.
```

---

## 📊 Prompt Quality Checklist

Before submitting your prompt, check:

**Essential (Must Have):**
- [ ] Includes "Follow the initialization protocol from CLAUDE.md"
- [ ] Specifies what you want built/reviewed
- [ ] Mentions phase if applicable (PLAN/IMPLEMENT/REVIEW)

**Recommended (Should Have):**
- [ ] Specifies agent to use
- [ ] Lists skills to apply
- [ ] Includes acceptance criteria
- [ ] Mentions constraints

**Optional (Nice to Have):**
- [ ] Example of desired output
- [ ] Links to similar implementations
- [ ] Performance requirements
- [ ] Browser support requirements

---

## 🚫 Common Mistakes to Avoid

### Mistake 1: Vague Requests
**❌ Bad:**
```
Make a form
```

**✅ Good:**
```
Follow initialization protocol. Use frontend-developer agent to create a registration form with email, password, name fields, validation, and error handling. Apply react-skills and accessibility-skills.
```

### Mistake 2: Not Specifying Agent
**❌ Bad:**
```
Review my code
```

**✅ Good:**
```
Use frontend-code-review agent to review this code for rules violations, performance, and accessibility issues.
```

### Mistake 3: Forgetting to Reload in Long Conversations
**❌ Bad:**
```
[After 20 messages]
Now create another component
```

**✅ Good:**
```
[After 20 messages]
Reload configuration and show header, then create another component
```

### Mistake 4: Accepting Rule Violations
**❌ Bad:**
```
Claude: [Uses 'any' type]
You: Thanks! [Moves on]
```

**✅ Good:**
```
Claude: [Uses 'any' type]
You: This uses 'any' which violates rules.md. Fix it with proper TypeScript types.
```

---

## 💡 Pro Tips

### Tip 1: Save Common Prompts
Create a `prompts/` folder with reusable templates:
```
prompts/
├── new-component.md
├── code-review.md
├── api-integration.md
├── accessibility-audit.md
└── performance-check.md
```

### Tip 2: Use Project-Specific Context
```
For our [PROJECT NAME] app, which uses [SPECIFIC TECH], create...
```

### Tip 3: Reference Existing Code
```
Similar to the UserProfile component (src/components/UserProfile.tsx), create a ProductCard component with...
```

### Tip 4: Specify Test Requirements
```
Include unit tests with React Testing Library covering:
- User interactions
- Loading states
- Error states
- Accessibility (jest-axe)
```

### Tip 5: Ask for Explanation
```
Use component-architect agent to design this component, and explain:
- Why this approach?
- Alternative approaches considered
- Trade-offs
```

---

## 🔄 Workflow-Specific Prompts

### PLAN Phase
```
Use [AGENT] agent in PLAN phase to design [FEATURE]

Do NOT write implementation code yet.

Provide:
- Component structure
- Props interfaces
- State management approach
- Key considerations

Apply relevant skills.
```

### IMPLEMENT Phase
```
Use [AGENT] agent in IMPLEMENT phase to implement [FEATURE]

Based on the plan from earlier, write production-ready code.

Apply relevant skills and follow all rules.md constraints.
```

### REVIEW Phase
```
Use frontend-code-review agent in REVIEW phase to review:

[CODE]

Provide Must-fix and Nice-to-have feedback.
```

### STAGING Phase
```
Review this PR before merge:

Changes:
[LIST FILES CHANGED]

Check for:
- Breaking changes
- Security issues
- Performance impact
- Missing tests
```

---

## 📖 Real-World Scenarios

### Scenario 1: Starting a New Feature
```
Follow initialization protocol from CLAUDE.md.

I'm starting a new feature: User settings page

PHASE 1 - PLAN:
Use component-architect agent to design:
- Page layout
- Settings sections (profile, preferences, security)
- Form structure
- State management

Apply react-skills and state-management-skills.

After planning, we'll move to IMPLEMENT phase.
```

### Scenario 2: Bug Fix
```
Follow initialization protocol from CLAUDE.md.

Use frontend-developer agent to fix:

Bug: Form validation not working on password field

Current code:
[PASTE CODE]

Expected behavior: Show error if password < 8 characters

Apply hooks-skills.
```

### Scenario 3: Refactoring
```
Follow initialization protocol from CLAUDE.md.

Use frontend-code-review agent to suggest refactoring:

[PASTE CURRENT CODE]

Goals:
- Improve readability
- Better performance
- Extract reusable logic
- Maintain functionality

Apply react-skills and performance-skills.
```

### Scenario 4: Adding Accessibility
```
Follow initialization protocol from CLAUDE.md.

Use accessibility-audit agent to audit and fix:

[PASTE COMPONENT]

Make it WCAG 2.1 AA compliant:
- Add ARIA where needed
- Ensure keyboard navigation
- Fix focus management
- Provide screen reader support

Apply accessibility-skills with code examples.
```

---

## 🎯 Summary: The Perfect Prompt Formula

```
[1. INITIALIZATION]
Follow the initialization protocol from CLAUDE.md.

[2. AGENT SELECTION]
Use [AGENT-NAME] agent

[3. PHASE (if applicable)]
in [PHASE-NAME] phase

[4. TASK DESCRIPTION]
to [ACTION] [WHAT]:
- Requirement 1
- Requirement 2
- Requirement 3

[5. CONSTRAINTS (if applicable)]
Technical constraints:
- Constraint 1
- Constraint 2

[6. SKILLS]
Apply [SKILL-1] and [SKILL-2].

[7. OUTPUT FORMAT (if applicable)]
Provide:
- [Output 1]
- [Output 2]
```

---

## 📞 Need Help?

**If prompts aren't working:**
1. Check that `.claude/` files exist
2. Try the "Full Reset" fix from "When Claude Forgets"
3. Reference specific rules: "Check .claude/rules.md section X"
4. Simplify your request and add requirements incrementally

**If Claude violates rules:**
1. Point out the specific rule: "This violates rules.md section 4: no 'any' types"
2. Ask for fix: "Rewrite with proper TypeScript types"
3. Confirm: "Show the configuration header to confirm you're following rules"

---

**Remember:** Good prompts = Better results. Take 30 seconds to write a clear prompt and save 10 minutes of back-and-forth!

---

## ⚙️ Model Requirement

**CRITICAL:** Always use **Claude Sonnet 4.5** model for this project.

### How to Check Your Model

When starting a conversation:
1. Check which model you're using
2. Ensure it says "Claude Sonnet 4.5" or "claude-sonnet-4-5"
3. If using a different model (Opus, Haiku, older Sonnet), switch to Sonnet 4.5

### Why Sonnet 4.5?

- ✅ Optimal code quality
- ✅ 1M token context window (handles large codebases)
- ✅ Best at following complex project rules
- ✅ Cost-effective for development work
- ✅ Right balance of speed and capability

### What If I Use a Different Model?

**Haiku:** Too fast, may skip rules and produce lower quality code
**Opus:** Overkill for most tasks, more expensive, no significant benefit
**Older Sonnet:** Outdated capabilities, may not follow rules as well

**Bottom line:** Sonnet 4.5 is specifically tuned for this type of development work.

---
