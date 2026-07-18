# sourav1998.github.io

Sourav Khanna's personal portfolio — built with Next.js (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Stack

- Next.js 16 (static export via `output: "export"`)
- Tailwind CSS v4
- TypeScript
- Self-hosted fonts (`@fontsource/inter`, `@fontsource/ibm-plex-mono`) — no external font requests at runtime

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Editing content

All resume-derived content (profile, experience, skills, projects, education, quotes) lives in one place:

```
lib/data.ts
```

Edit that file to update anything on the site — no need to touch the components.

To swap the downloadable resume, replace `public/Sourav_Khanna.pdf` (keep the filename, or update `resumeFile` in `lib/data.ts`).

## Production build

```bash
npm run build
```

This generates a fully static site in `out/`, ready for any static host — no Node server required in production.

## Deployment (GitHub Pages)

This repo includes `.github/workflows/deploy.yml`, which automatically builds and deploys to GitHub Pages on every push to `main`.

**One-time setup in GitHub:**

1. Push this repo to `github.com/Sourav1998/sourav1998.github.io`.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or re-run the workflow from the **Actions** tab) — the site will be live at `https://sourav1998.github.io/` a minute or two later.

No manual `next export` or branch juggling needed — the workflow handles it.
