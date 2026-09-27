---
description: Required checks and honest verification reporting for repository changes
globs: ["**"]
---

## Quality gate

Use Node 24 and run from the repository root:

```sh
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

- Run checks proportionate to the change; run all four before release readiness claims.
- `pnpm format` writes files; use `pnpm format:check` for read-only verification.
- There is no configured test runner or `pnpm test` script. Never say tests passed.
- For visual or interactive changes, supplement static checks with manual browser verification across affected widths, themes, keyboard behavior, and reduced motion.
- State exactly what was and was not verified.

`pnpm build` can rewrite generated imports in tracked `next-env.d.ts`. Treat that as generated noise and do not include it unless intentionally required.
