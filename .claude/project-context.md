# APILayer Ecosystem - Base Project Context

## Project Overview

- **What the system does**: [High-level description of the project]
- **Primary users and use cases**: [Target users and their use cases]
- **Business objectives**: [Key business goals]

## Technology Stack

- **Frontend**: React 19, TypeScript, Vite 7, MUI 6 with Emotion
- **Backend**: [Framework and versions]
- **Database**: [Database type and version]
- **Cache**: [Caching solution]
- **API Gateway**: [Gateway technology]
- **Infrastructure**: [Cloud provider and key services]
- **CI/CD**: [Pipeline technology]
- **Monitoring**: [Observability stack]

## Commands

- `npm run dev` - Start development server
- `npm run build` - Type-check and build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Patterns

- `src/main.tsx` - Entry point, renders App in StrictMode
- `src/App.tsx` - Root component with MUI ThemeProvider
- `src/components/` - Reusable UI components with barrel exports
- Components use barrel exports: `import { Component } from './components'`
- [Data flow patterns]
- [Integration patterns]
- [Security patterns]

## Critical Requirements

- Minimum test coverage: 80%
- Security compliance: OWASP Top 10
- Performance targets: [Response times, throughput]
- Code review: All AI code requires human review
- Commit tagging: [ai-cc] for AI-generated code

## Code Standards

- **Style Guide**: TypeScript strict mode, ESLint 9 with typescript-eslint
- **Documentation**: [Documentation standards]
- **Testing**: [Testing frameworks and requirements]
- **Error Handling**: [Error handling patterns]

## Security Requirements

- Input validation standards
- Authentication/authorization patterns
- Secrets management approach
- Encryption requirements
- Audit logging requirements

## Never Submit to AI

- Production credentials, API keys, tokens
- User PII or customer data
- Production IPs, hostnames, server names
- Actual log files with sensitive data
- Proprietary algorithms (generalize them)
