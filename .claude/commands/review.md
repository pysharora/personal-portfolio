---
name: review
description: Run a structured, read-only review of a portfolio diff or target
---

Use `.claude/skills/code-reviewer/SKILL.md`.

## Scope

- If $ARGUMENTS is provided, review that file, directory, commit, or diff.
- Otherwise review `git diff --cached`.
- If nothing is staged, review `git diff`.

## Checklist

- Correctness and asset/link integrity
- Accessibility and keyboard behavior
- Server/Client Component boundaries and effect cleanup
- Light, dark, grayscale, and system themes
- Desktop/mobile layout, reduced motion, and Safari behavior
- Content and metadata consistency
- Scope control and unnecessary complexity
- Validation evidence and missing-test risk

Report findings first with severity and `file:line`. Do not edit files unless the user asks for fixes after the review.
