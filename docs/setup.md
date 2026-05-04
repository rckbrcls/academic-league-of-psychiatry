# Setup

## Prerequisites

- Node.js compatible with Next.js 15.
- pnpm is recommended because `pnpm-lock.yaml` matches the current dependency set in `package.json`.

TODO: reconcile or remove `package-lock.json` if pnpm is the intended package manager.

## Install Dependencies

```bash
pnpm install
```

## Environment Variables

No project-specific environment variables were identified.

## Local Development

```bash
pnpm dev
```

## Available Scripts

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Start the Next.js development server. |
| `pnpm build` | Build the production app. |
| `pnpm start` | Start the production server after a build. |
| `pnpm lint` | Run the configured Next.js lint command. |

## Project-Specific Setup Notes

- Remote images from `images.unsplash.com` are allowed in `next.config.ts`.
- No database setup is required.
- No seed, migration, or initialization script was identified.
- No deployment provider or CI/CD workflow was identified.
- Browser auto-translation protection was not identified in `src/app/layout.tsx`; add it before production use if translation tools mutate the DOM.
