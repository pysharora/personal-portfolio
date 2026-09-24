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

## Project structure

Keep the repository organized by responsibility as the site grows:

- `app/` contains Next.js routes, the root layout, and route-level metadata.
- `app/components/layout/` contains shared site chrome such as the header, footer,
  mobile navigation, and theme controls.
- `app/components/sections/` contains the major page sections.
- `app/components/interactive/` contains client-side experiences such as the
  skills playground, testimonial carousel, and mouse effects.
- `app/components/cards/` contains reusable content cards.
- `app/components/ui/` contains small reusable UI primitives.
- `data/` contains portfolio content and contact data, separate from presentation.
- `styles/` contains global stylesheets and responsive or motion-specific styles.
- `lib/` contains shared utilities.
- `public/` contains static assets such as images, fonts, and the CV.

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

The workflows use GitHub environments `qa` and `production`, with repository
secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`. Build settings
are defined in `vercel.json`; automatic Vercel Git deployments are disabled.
