---
name: universal-code-review
description: Conduct structured, evidence-based code reviews across programming languages and frameworks. Use when asked to review correctness, security, performance, maintainability, or regressions.
---
# Universal Code Review

## Purpose
Review code changes using the conventions and architecture of the project being reviewed.

## Instructions
### 1. Establish scope
Confirm the target diff, files, feature, or subsystem and expected behaviour. Ask if ambiguity materially affects the review.

### 2. Understand the project
Inspect documentation, directory structure, language/framework versions, configuration, nearby implementation, callers, interfaces, and tests. Do not assume a stack or impose unrelated conventions.

### 3. Review applicable concerns
- Correctness, edge cases, and state transitions
- Input validation and error handling
- Authentication, authorization, and sensitive-data handling
- Performance and resource use
- API, schema, and backward compatibility
- Concurrency and lifecycle management where relevant
- Readability, modularity, and maintainability
- Test coverage and regression risk

### 4. Validate
Verify each suspected issue against code and context. Run relevant tests or static analysis only when available and authorized. Never claim checks passed unless run. Do not modify code during review unless asked.

### 5. Report findings first
For each finding use:
**[Severity] Title**
- **Location:** precise file and line/symbol
- **Problem:** concise explanation
- **Impact:** realistic consequence
- **Recommendation:** actionable correction

Order by severity and user impact. If no actionable issues are found, say so and summarize scope and checks.

### 6. Finish
Include overall assessment, checks actually performed, limitations, and highest-priority next action.

## Guardrails
Do not invent findings, line numbers, test results, or project details. Do not rewrite the implementation as part of a review. Protect secrets and personal data.
