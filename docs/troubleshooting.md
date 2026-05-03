# Troubleshooting

## Content looks inaccurate

Review member names, image sources, and institutional copy before publishing. The README notes that some content appears placeholder-like.

## Lint command fails

The project uses `npm run lint`. Check the Next.js and ESLint versions in `package.json` before changing lint configuration.

## Images do not load

Prefer approved local assets under `public/` for production content. Remote or placeholder assets can break or drift over time.
