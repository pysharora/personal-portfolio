---
description: GitHub Actions and Vercel QA/production release constraints
globs: [".github/workflows/**", "vercel.json", "README.md"]
---

## Delivery topology

- Pull requests run `.github/workflows/ci.yml` on Node 24.
- Pushes to `master` deploy a Vercel Preview into the `qa` GitHub environment.
- Stable `v*` tags deploy to production; tags containing `-` do not.
- Vercel automatic Git deployment is disabled in `vercel.json`.
- Workflows require `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.

## Safety

- Do not push, merge, create tags, change environments, or trigger deployments without explicit user authorization.
- Inspect the exact commit and working tree before proposing a tag.
- Run the full quality gate before release readiness claims.
- Keep project commands pnpm-based. The workflow's global Vercel CLI installation is an implementation detail, not a contributor package-management convention.
- Never expose or request secret values in committed files or command output.
