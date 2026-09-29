---
name: bmad-help
description: Show BMAD status, artifacts, interrupted work, and the best next step.
---

# BMAD Help

Inspect `.claude/output/`, `.claude/ralph-prd.json`, stack, and git state. Show status for principles, problem, clarifications, UX, architecture, backlog, analysis, checklist, GSD prep, act report, and release notes.

Recommend one next action: no artifacts -> `/bmad-break` or `/quick-spec`; problem only -> `/clarify` then `/bmad-model`; model complete -> `/analyze`, `/checklist`, `/gsd-prep`; prep complete -> `/bmad-act`; act complete -> `/bmad-deliver`; interrupted PRD -> `/ralph-loop`. Treat `$ARGUMENTS` as a status question.
