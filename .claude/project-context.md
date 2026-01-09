# APILayer Frontend Application - Project Context

## Project Overview

- **Project Name**: Frontend Application
- **Project Type**: Frontend Web Application
- **Version**: 1.0.0
- **Description**: Frontend application for UI, user flows, and API consumption
- **Primary Focus**: React-based user interface with emphasis on accessibility, performance, and maintainability

### Primary Users and Use Cases
- End users interacting with web-based UI
- Developers building and maintaining React components
- QA teams testing accessibility and functionality

### Business Objectives
- Provide intuitive, accessible user interface
- Ensure high performance and responsiveness
- Maintain code quality and test coverage (80% minimum)
- Enable rapid feature development with reusable components

---

## Technology Stack

### Frontend
- **Framework**: React 19
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite 7
- **UI Library**: MUI 6 with Emotion
- **Styling**: Emotion (CSS-in-JS), MUI sx prop
- **Linting**: ESLint 9 with typescript-eslint, react-hooks, react-refresh plugins

### State Management
- React Context (for simple state)
- Zustand (preferred for complex state)
- Redux Toolkit (if required for legacy or complex flows)

### API Communication
- REST APIs (primary)
- GraphQL (optional, if needed)
- Fetch API with AbortController for cancellation

### Testing
- **Unit/Component**: Jest + React Testing Library
- **E2E**: Playwright
- **Accessibility**: jest-axe
- **Coverage**: Minimum 80%

### Development Tools
- **Package Manager**: npm (default)
- **Dev Server**: Vite dev server (`npm run dev`)
- **Type Checking**: TypeScript compiler
- **Code Formatting**: Prettier (if configured)

---

## Project Structure

```
src/
├── main.tsx                    # Application entry point (renders App in StrictMode)
├── App.tsx                     # Root component with MUI ThemeProvider and CssBaseline
├── components/                 # Reusable UI components
│   ├── index.ts                # Barrel exports
│   └── *.tsx                   # Component files
├── hooks/                      # Custom React hooks
├── api/                        # API client and resource modules
├── types/                      # TypeScript type definitions
├── utils/                      # Utility functions
├── assets/                     # Static assets (images, fonts)
└── styles/                     # Global styles (if any)
```

---

## Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm test` - Run test suite
- `npm run test:coverage` - Run tests with coverage report

---

## Architecture Patterns

### Component Architecture
- `src/main.tsx` - Entry point, renders App in StrictMode
- `src/App.tsx` - Root component with MUI ThemeProvider and CssBaseline
- `src/components/` - Reusable UI components with barrel exports
- Components use barrel exports: `import { Component } from './components'`

### Data Flow
- Props down, events up (React standard)
- Context for cross-cutting concerns (theme, auth, i18n)
- State management for complex client state
- React Query/TanStack Query for server state (if adopted)

### Integration Patterns
- API client abstraction for backend communication
- Environment variables for configuration (`import.meta.env.VITE_*`)
- Error boundaries for graceful error handling

### Security Patterns
- Input validation at system boundaries
- XSS prevention via React's automatic escaping
- HTTPS-only API communication
- Secrets via environment variables (never hardcoded)

---

## Project Scope

### Included in Frontend Scope
- UI Components
- State Management (client-side)
- API Integration (consuming APIs)
- Accessibility (WCAG 2.1 AA compliance)
- Performance Optimization (rendering, bundle size)
- Unit & Component Testing

### Excluded from Frontend Scope
- Backend APIs (separate repository/team)
- Infrastructure (cloud, hosting, CDN)
- Deployment Pipelines (CI/CD managed separately)
- Secrets Management (handled by DevOps)
- Server Configuration (backend team responsibility)

---

## Critical Requirements

### Code Quality
- Minimum test coverage: **80%**
- All code must pass ESLint checks
- TypeScript strict mode enforced
- Code review required before merge

### Security
- Security compliance: OWASP Top 10
- No secrets in code or version control
- All AI code requires human review
- Commit tagging: `[ai-cc]` for AI-generated code

### Performance
- First Contentful Paint (FCP): < 1.5s
- Time to Interactive (TTI): < 3.5s
- Lighthouse score: > 90
- Bundle size optimization (code splitting, lazy loading)

### Accessibility
- WCAG 2.1 AA compliance (minimum)
- Keyboard navigation support
- Screen reader compatibility
- Semantic HTML and ARIA where needed

---

## Code Standards

### Style Guide
- TypeScript strict mode enforced
- ESLint 9 with typescript-eslint
- Functional components only (no class components)
- Hooks only (no lifecycle methods)
- Arrow functions for component definitions
- 2-space indentation

### Documentation Standards
- JSDoc comments for complex props interfaces
- Inline comments for non-obvious logic
- README for feature modules
- Storybook stories for reusable components (if adopted)

### Testing Standards
- React Testing Library for component tests
- Mock external dependencies and APIs
- Test user behavior, not implementation
- Accessibility tests with jest-axe

### Error Handling Standards
- User-friendly error messages
- Error boundaries for component failures
- Proper async error handling (try/catch)
- Never expose stack traces to users

---

## Security Requirements

### Input Validation
- Validate all user inputs
- Sanitize data before rendering
- Use parameterized queries (if applicable)
- Implement rate limiting on forms

### Authentication & Authorization
- Token-based authentication (JWT or similar)
- Secure token storage (HttpOnly cookies or secure storage)
- Proper session management
- Least-privilege access control

### Secrets Management
- Never hardcode secrets
- Use environment variables (`VITE_*`)
- Never commit `.env` files
- Rotate secrets regularly (managed by DevOps)

### Encryption Requirements
- HTTPS only for all API communication
- Sensitive data encrypted at rest (backend responsibility)
- Secure token generation
- Proper password handling (backend responsibility)

---

## Never Submit to AI

**Claude must NEVER see or process:**
- Production credentials, API keys, tokens
- User PII (email, phone, full name, address)
- Production IPs, hostnames, server names
- Actual log files with sensitive data
- `.env` file contents
- Real user data from production databases
- Proprietary algorithms (must be generalized for AI)

---

## Development Workflow

### Default Workflow
- **PLAN** → Design and architecture
- **IMPLEMENT** → Code implementation
- **REVIEW** → Code review and quality check
- **STAGING** → Pre-merge safety check
- **MR** → Merge request creation

### Branching Strategy
- `main` - Production-ready code
- `develop` - Integration branch
- Feature branches: `feature/[feature-name]`
- Bug fix branches: `fix/[bug-name]`

### Commit Standards
- Conventional Commits format
- AI-assisted commits tagged with `ai-cc`
- Include `Co-Authored-By: Claude ...`
- Link to issue/ticket when applicable

---

## Performance Targets

- **Response Time**: UI interactions < 100ms
- **Page Load**: Initial load < 3s on 3G
- **Bundle Size**: Main bundle < 500KB (gzipped)
- **Rendering**: 60fps for animations
- **Accessibility**: WCAG 2.1 AA compliance

---

## Integration Points

### Backend APIs
- RESTful APIs for data operations
- Authentication via JWT tokens
- Error responses follow standard format
- API base URL via environment variable

### Third-Party Services
- None currently integrated (add as needed)

### Analytics & Monitoring
- Error tracking (Sentry or similar, if configured)
- Performance monitoring (Web Vitals)
- User analytics (Google Analytics or similar, if configured)

---

## Team & Collaboration

### Code Review
- All code requires human review
- AI-generated code requires extra scrutiny
- Review checklist enforced
- Security review for sensitive changes

### Communication
- Issue tracking via JIRA/GitHub Issues
- Code comments for complex logic
- Documentation in `.claude/` for AI guidance
- README files for human developers

---

**This context is authoritative. Claude should treat this as the single source of truth for project metadata.**

---

## Model Requirement

**Required Model:** Claude Sonnet 4.5

This project is optimized for Claude Sonnet 4.5 model, which provides:
- Sufficient context window (1M tokens)
- High code quality
- Strong rule adherence
- Cost-effective performance

Other models (Opus, Haiku, older Sonnet versions) are not recommended and may produce inconsistent results.

---
