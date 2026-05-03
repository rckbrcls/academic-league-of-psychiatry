# Architecture

## Overview

The app is a small Next.js App Router site for an academic medical league. It is content-driven and keeps the public pages, shared layout, accessibility controls, and static assets in a compact structure.

## Components

- `src/app/`: public routes, route layouts, and page composition.
- `src/components/`: reusable visual components for header and meeting details.
- `src/context/`: theme and font-size providers.
- `public/`: images and institutional assets.

## Data Flow

1. The App Router renders static institutional pages.
2. Shared components provide navigation and detail views.
3. Context providers expose theme and font-size state to the interface.
4. Static images are served from `public/`.

## Trade-offs

- The simple structure is easy to maintain but currently depends on code-level content edits.
- Placeholder-like member and image content should be reviewed before launch.
