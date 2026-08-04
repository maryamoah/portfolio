# Portfolio — Mary Amoah

Personal site for Mary Amoah, Senior Information Security Specialist.
Single-page React application covering security engineering experience,
detection content, and SOC platform work.

**Live:** <https://portfolio-mary-amoah-s-projects.vercel.app>

---

## Stack

| | |
| --- | --- |
| Build | [Vite](https://vite.dev/) |
| UI | [React](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | [ESLint](https://eslint.org/) |
| Hosting | [Vercel](https://vercel.com/) |

No router, no state library, no CMS. The site is one page with anchor
navigation, and all copy lives in a single data file. That is a
deliberate constraint: content changes should not require touching
components.

---

## Structure

```text
src/
  components/   Shared primitives: GlassCard, Badge, SectionHeader,
                ProjectVisual, Navbar, Footer
  sections/     One file per page section
  data/
    portfolio.js  All site copy and project data
  hooks/        useScrollSpy — drives active nav state
  assets/       Static images and documents
```

### Section order

The page renders in this order, and the navbar mirrors it exactly:

1. **Hero** — positioning, primary claim, two CTAs
2. **Featured Engineering Projects** — four flagship projects with
   expandable case studies
3. **Technical Projects** — shorter previews, expand on demand
4. **Experience** — professional history
5. **Skills** — grouped capability chips
6. **About** — context and working approach
7. **Contact** — email, GitHub, LinkedIn, resume

Nav order and page order are kept in sync intentionally. An earlier
version had them diverge, which made anchor links jump backwards.

---

## Content

Nearly all visible copy lives in `src/data/portfolio.js`. Editing that
file is usually enough — components read from it and rarely need
changes.

The file exports:

| Export | Drives |
| --- | --- |
| `profile` | Name, role badge, headline, sub-line |
| `featuredWork` | Featured project cards and case studies |
| `projects` | Technical project cards |
| `githubProjects` | Repository cards, each with a real `href` |
| `experience` | Professional history entries |
| `skillGroups` | Grouped skill chips |
| `contactCards` | Contact and profile links |

### Conventions

- **Every repository entry needs an `href`.** Repo cards were previously
  rendered as plain text with no links, which defeated the point.
- **First person throughout.** No third-person self-reference.
- **Concrete over adjectival.** Prefer a number to a description.
- **No inflated claims.** Specifically avoided: "enterprise-grade",
  "production-ready", "battle-tested", "comprehensive". Work that is
  experimental is labelled experimental.

---

## Local development

```bash
npm install
npm run dev        # dev server
npm run lint       # ESLint
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

Run `npm run lint && npm run build` before pushing. Both run clean on
`main`.

---

## Deployment

Vercel builds from `main` on push. Settings are committed in
`vercel.json`:

| Setting | Value |
| --- | --- |
| Framework | `vite` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Rewrites | All routes serve `index.html` |

Branch pushes produce preview deployments. Note that Vercel
Authentication is enabled for deployment-specific URLs, so preview links
require a login — the project alias above is the public URL.

### Build troubleshooting

A correct build log shows `portfolio@0.1.0 build` followed by
`vite build`. If it shows a different package name or `next build`,
Vercel is building the wrong project or a stale override:

1. Confirm the Vercel project points at this repository.
2. Clear any build-command override in project settings.
3. Redeploy with framework preset `vite` and output directory `dist`.

---

## Notes

Sections are added by creating a file in `src/sections/`, importing it
into `App.jsx`, and adding a matching nav entry. Keep the nav array and
the render order aligned — `useScrollSpy` depends on the anchor IDs
matching.

Animations are entrance-only (fade and slide on scroll into view). There
is no scroll-linked or continuous animation, which keeps the page cheap
to render and avoids motion sickness triggers.

---

## License

Personal portfolio. The code is available to read; the content, copy,
and imagery are not licensed for reuse.
