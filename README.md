# Academic League of Psychiatry

> **Status:** Maintenance status to be confirmed
> The repository contains a working institutional site, but placeholder-like content should be reviewed before treating it as production-ready.

Website for the Academic League of Psychiatry at Faculdade de Medicina de Jau - Unoeste. It presents the league, its mission, members, meetings, and educational focus around mental health and psychiatric training.

## Summary

- [What it is](#what-it-is)
- [Goals](#goals)
- [Site sections](#site-sections)
- [Project map](#project-map)
- [Current state](#current-state)
- [Working notes](#working-notes)

## What it is

This is a Next.js site for an academic medical league. The content explains the league's purpose, values, event programming, and member structure while giving students and visitors a clear institutional point of reference.

## Goals

- Present the league as a serious academic and extension initiative.
- Explain the role of psychiatry education, research, events, and humanized care.
- Organize public pages for mission, members, meetings, and meeting details.
- Keep the site simple enough for non-technical maintainers to update.

## Site sections

- Home page with institutional introduction and group image.
- Mission page with the league's values, commitments, and educational purpose.
- Members page with board and member presentation.
- Meetings page with cards for discussions, workshops, debates, and symposiums.
- Meeting detail page for deeper event context.

## Project map

```text
academic-league-of-psychiatry/
├── src/app/        # Next.js App Router pages and layouts
├── src/components/ # Header and meeting detail header
├── src/context/    # Theme and font-size context providers
├── public/         # League assets and images
└── package.json
```

## Current state

The repository is a small institutional web app. Some content is still placeholder-like, especially member names and remote example images, so it should be reviewed before being treated as final public data.

## Working notes

- Keep medical/institutional wording careful and factual.
- Replace placeholder people and remote stock images with approved league assets before launch.
- Keep accessibility controls such as theme and font-size context intact.
