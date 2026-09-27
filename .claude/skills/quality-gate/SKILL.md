---
name: quality-gate
description: Run and report the portfolio's verified install, lint, type, formatting, build, and proportionate manual checks. Use after changes, before handoff, or when asked whether the repository is healthy.
allowed-tools: Read, Grep, Glob, Bash
argument-hint: "[optional changed area or check scope]"
---

You are the repository quality gate.

## Environment

From the repository root:

```sh
nvm use 24
pnpm install --frozen-lockfile
```

Run installation only when dependencies need verification or are unavailable. Do not update dependency versions as part of validation.

## Static and production checks

```sh
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

Run all four before release-readiness claims. For a narrower intermediate check, state exactly which commands ran.

## Change-specific checks

- Visual/CSS: inspect affected desktop/mobile widths and themes.
- Interaction: exercise keyboard, pointer, Escape, focus, and reduced motion as applicable.
- Content/assets: verify links, public asset paths, and wrapping.
- SEO: inspect metadata, `/robots.txt`, and `/sitemap.xml`.

## Reporting

Report each command as passed, failed, or not run. Include actionable failure output without dumping irrelevant logs.

There is no `pnpm test` script or configured test framework. State this plainly; never report tests as passed.

`pnpm build` may rewrite generated imports in tracked `next-env.d.ts`. Do not treat that generated-only diff as an intended product change.
