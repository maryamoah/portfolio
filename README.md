# Mary Abenawa Techiesiwa Amoah Portfolio

A production-ready cybersecurity portfolio for Mary Abenawa Techiesiwa Amoah, built with Vite, React, Tailwind CSS, Framer Motion, and Lucide React icons. The site highlights cybersecurity analyst experience, instructor work, SOC automation, SIEM monitoring, incident response workflows, threat intelligence, firewall automation, executive dashboards, and research interests.

## Tech Stack

- [Vite](https://vite.dev/) for development and optimized production builds
- [React](https://react.dev/) for component-based UI
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for subtle entrance animations
- [Lucide React](https://lucide.dev/) for consistent icons
- [ESLint](https://eslint.org/) for code quality checks

## Project Structure

```text
src/
  components/  Reusable UI building blocks
  sections/    Page sections for the one-page portfolio
  data/        Mary Abenawa Techiesiwa Amoah profile, skills, case studies, research interests, and contact content
  assets/      Static assets for images or documents
  hooks/       Reusable React hooks
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment on Vercel

This project includes a `vercel.json` configured for Vite:

- Install command: `npm install`
- Build command: `npm run build`
- Development command: `npm run dev`
- Output directory: `dist`
- Framework: `vite`
- SPA rewrite: all routes serve `index.html`

To deploy:

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Confirm Vercel detects Vite or uses the included `vercel.json` settings.
4. Deploy the `main` branch after the pull request is reviewed and merged.

### Vercel build troubleshooting

The expected Vercel build log for this repository should show `portfolio@0.1.0 build` followed by `vite build`. If the log shows another package name or `next build`, Vercel is building stale settings or a different project/repository. In that case:

1. Confirm the Vercel project is connected to the repository that contains this `package.json` and `vercel.json`.
2. In Vercel project settings, clear any build-command override that runs `next build`.
3. Redeploy with the framework preset set to Vite and output directory set to `dist`.

## Content Updates

Most visible copy is managed in `src/data/portfolio.js`, including Mary Abenawa Techiesiwa Amoah’s profile, skills, experience, detailed case studies, research interests, portfolio evidence, and contact cards.
