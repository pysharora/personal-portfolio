---
name: ralph
description: Coordinate multi-task implementation through dependency-safe agent-team rounds.
---

# Ralph

Resolve input from `$ARGUMENTS`, `backlog.yaml`, or the conversation. Read architecture, principles, checklist, and context packs when present.

1. Write `.claude/ralph-prd.json` with small stories, value, acceptance criteria, dependencies, rounds, and `passes: false`.
2. Present rounds, shared contracts, ownership, and verification; wait for confirmation.
3. Do not create branches or commits without explicit authorization.
4. Before each round, define shared contracts and remove hidden dependencies.
5. Assign one teammate per independent story when teams are available; require analogous-code inspection and plan approval before edits.
6. Give each teammate bounded context and exclusive file ownership.
7. Validate every result against acceptance criteria, theme invariants, content truth, and the diff. Rework failures; mark only validated stories passed.
8. Run `/review`, `/check`, visual/theme/accessibility checks, and security review where relevant.
9. Write `.claude/output/act-report.md` with results, files, evidence, deviations, and risks.

Never invent test results; this repository currently has no test suite.
