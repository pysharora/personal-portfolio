---
name: bmad-run
description: Run the complete gated BMAD workflow for a substantial portfolio initiative.
---

# BMAD Run

Use for multi-feature work, major redesigns, a CMS or data layer, new integrations, or architectural changes.

1. Optionally run `/brainstorm` and `/principles`.
2. Run `/bmad-break`; wait for problem confirmation.
3. Run `/clarify`; resolve significant ambiguity.
4. Run `/ux-spec` for material screen, flow, interaction, or responsive changes.
5. Run `/bmad-model`; wait for architecture and backlog confirmation.
6. Run `/analyze`; CRITICAL findings block progress.
7. Run `/checklist`; unresolved FAIL items block progress unless explicitly waived.
8. Run `/gsd-prep`; confirm context packs and file ownership.
9. Run `/bmad-act`, which delegates implementation to `/ralph`.
10. Run `/bmad-deliver` for final evidence and release notes.

Artifacts live in `.claude/output/`. Adapt verification honestly: the repository has no automated test suite, so use its quality gate plus explicit visual, theme, responsive, keyboard, reduced-motion, SEO, and content checks. Use `$ARGUMENTS` as the initial brief.
