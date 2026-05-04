# Troubleshooting

## Dependency Install Looks Inconsistent

The repository has both `pnpm-lock.yaml` and `package-lock.json`. The pnpm lockfile appears to match the current `package.json` more closely.

Use:

```bash
pnpm install
```

TODO: choose one package manager and reconcile the lockfiles.

## Remote Images Do Not Load

Several member and meeting images use Unsplash URLs. Confirm `next.config.ts` still allows:

```ts
images: {
  domains: ["images.unsplash.com"],
}
```

For production, prefer approved local assets under `public/`.

## Meeting Detail Content Looks Wrong

The meeting detail route reads `title`, `description`, `imageUrl`, and `extendedText` from URL search parameters in `src/app/meetings/[id]/page.tsx`.

If the URL is edited manually, the displayed detail content can change. Open detail pages from `/meetings` to use the expected generated parameters.

## Theme Or Font Size Does Not Persist

Theme and font-size preferences are stored in `localStorage`.

Relevant files:

- `src/context/ThemeContext.tsx`
- `src/context/FontSizeContext.tsx`
- `src/components/Header.tsx`
- `src/components/MeetingDetailsHeader.tsx`

If persistence fails, confirm the browser allows local storage.

## Browser Translation Breaks The Interface

No browser auto-translation protection was identified in `src/app/layout.tsx`. Add it before production use if automatic translation tools mutate the DOM.

## Lint Command Fails

The current lint script is:

```json
"lint": "next lint"
```

If it fails before checking source files, review compatibility with Next.js `15.0.3`.
