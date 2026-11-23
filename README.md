# Personal portfolio

My personal website, built with Next.js, React, and TypeScript. The homepage is
a big-type poster that flips between an Engineer and a PM side, plus a hidden
newsprint "print" theme.

## Development

Requires Node.js 24+ and pnpm 12.5.1.

```sh
nvm use 24
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Project structure

Keep the repository organized by responsibility as the site grows:

- `app/` contains Next.js routes, the root layout, and route-level metadata.
- `app/components/layout/` contains shared site chrome such as the header, footer,
  the engineer/PM switch, and the mode provider.
- `app/components/sections/` contains the major page sections.
- `app/components/interactive/` contains client-side behaviour such as the animated
  headline, scroll reveals, the quote carousel, and the experience accordion.
- `data/` contains portfolio content and contact data, separate from presentation.
- `styles/` contains global stylesheets and responsive or motion-specific styles.
- `lib/` contains shared utilities.
- `public/` contains static assets such as images, the OG image, and both CVs.

Add new files to the folder that matches their responsibility. Keep route files
and global styles at the top level of `app/`, and avoid putting content data or
general utilities inside component folders.

## Checks

```sh
pnpm format:check
pnpm typecheck
pnpm build
```

Run `pnpm format` to format the project.

## Deployment

GitHub Actions deploys to Vercel:

- **Deploy QA:** `master` pushes and merges deploy to Vercel Preview.
- **Deploy Production:** version tags such as `v1.0.0` deploy to Production.
- Tags containing a hyphen, such as `v1.0.0-rc.1`, do not deploy.

To release, tag the commit tested in QA:

```sh
git tag v1.0.0 <commit-sha>
git push origin v1.0.0
```
