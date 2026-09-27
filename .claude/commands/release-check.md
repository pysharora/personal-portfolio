---
name: release-check
description: Perform a read-only QA or production release-readiness review
---

Use `.claude/skills/release-deployment/SKILL.md` with $ARGUMENTS.

## Workflow

1. Resolve whether the target is QA (`master`) or production (stable `v*` tag).
2. Inspect `git status`, current branch, intended commit, and relevant diff.
3. Run `/check` and any relevant `/visual-check` coverage.
4. Verify public assets, metadata, `/robots.txt`, and `/sitemap.xml` when affected.
5. Confirm the workflow trigger and required GitHub environment.
6. Report READY or BLOCKED with evidence and the proposed next command.

Do not push, merge, create tags, or trigger workflows. Those actions require a separate explicit authorization.
