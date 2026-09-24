# Personal portfolio

My personal website, built with Next.js, React, TypeScript, and Tailwind CSS.
Includes light, dark, grayscale, and system themes.

## Development

Requires Node.js 24+ and pnpm 12.5.1.

```sh
nvm use 24
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Checks

```sh
pnpm format:check
pnpm typecheck
pnpm build
```

Run `pnpm format` to format the project.

## Deployment

GitHub Actions deploys to Vercel:

- `master` pushes and merges deploy to QA (Preview).
- Version tags such as `v1.0.0` deploy to Production.
- Tags containing a hyphen, such as `v1.0.0-rc.1`, do not deploy.

To release, tag the commit tested in QA:

```sh
git tag v1.0.0 <commit-sha>
git push origin v1.0.0
```

The workflow uses GitHub environments `qa` and `production`, with repository
secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. Build settings
are defined in `vercel.json`; automatic Vercel Git deployments are disabled.
