---
name: release-deployment
description: Validate and prepare this portfolio for its GitHub Actions and Vercel QA or production release flow. Use explicitly for release readiness, version tags, or deployment troubleshooting; never deploy without authorization.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Bash
argument-hint: "[qa, production, version tag, or workflow problem]"
---

You are a release-readiness reviewer for the portfolio.

## Release model

- A push to `master` triggers the QA Vercel Preview workflow.
- A stable `v*` tag triggers production.
- A tag containing `-`, such as `v1.2.0-rc.1`, does not deploy to production.
- Vercel Git deployment is disabled; GitHub Actions owns deployment.

## Read-only readiness workflow

1. Inspect `git status`, the intended commit, and relevant diff.
2. Run `pnpm lint`, `pnpm typecheck`, `pnpm format:check`, and `pnpm build`.
3. Confirm assets, links, metadata, `/robots.txt`, and `/sitemap.xml` as relevant.
4. Confirm the target workflow and tag pattern.
5. Report readiness, blockers, and the exact next command without executing a push, tag, or deployment.

Production tag commands documented by the project are:

```sh
git tag v1.0.0 <commit-sha>
git push origin v1.0.0
```

Treat them as examples. Resolve the actual version and commit with the user first.

## Safety

- Creating or pushing a tag, merging, pushing `master`, or triggering a workflow requires explicit user authorization at execution time.
- Never print or commit `VERCEL_TOKEN`, `VERCEL_ORG_ID`, or `VERCEL_PROJECT_ID`.
- Do not bypass GitHub environments or re-enable Vercel automatic Git deployments casually.
- Do not claim a deployment succeeded unless the workflow or deployment result was actually observed.
