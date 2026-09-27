---
name: check
description: Run the portfolio's verified quality gate and report each result
---

Use `.claude/skills/quality-gate/SKILL.md`.

If $ARGUMENTS names a narrower scope, use it for additional manual checks, but do not omit the full gate when release readiness is requested.

## Workflow

1. Confirm Node 24 and the repository root.
2. Run:

```sh
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

3. Inspect `git status` for generated-only `next-env.d.ts` changes.
4. Report each command as passed, failed, or not run.
5. State that no automated test script exists.

Do not run `pnpm format`; this command is a non-mutating quality check apart from ordinary build artifacts.
