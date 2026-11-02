# Cegron Care website

Marketing site for Cegron Care (adult homecare and children & young people support
across Aberdeen City and Aberdeenshire).

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing:** React Router 7 (`createBrowserRouter`)
- **Backend:** none - forms are validated in the browser and are not submitted anywhere yet.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173/cegroncare/
npm run lint
npm run build    # creates dist/ and dist/404.html
npm run preview  # serves the production build at http://localhost:4173/cegroncare/
```

The dev server and preview server both use the same base path as the deployed site
(`/cegroncare/`), so local URLs match production.

## Deployment (GitHub Pages)

The site is deployed by `.github/workflows/deploy.yml` on every push to `main`
(or manually from the Actions tab).

Live URL: <https://sarahuu.github.io/cegroncare/>

### One-time setup

1. Create the `sarahuu/cegroncare` repository on GitHub (public).
2. In **Settings -> Pages**, set **Source** to **GitHub Actions**.
3. Push `main`. The workflow lints, builds and publishes `dist/`.

### How the Pages quirks are handled

- **Asset paths** - `vite.config.js` sets `base` to `/cegroncare/`. Root-relative
  files in `public/` are referenced through the `asset()` helper in
  `src/lib/asset.js` so they resolve under that subpath.
- **Routing** - the router uses `import.meta.env.BASE_URL` as its `basename`, and
  `scripts/spa-fallback.mjs` copies `index.html` to `404.html` after each build so
  deep links such as `/cegroncare/referrals` load the app instead of GitHub's 404 page.

### Build environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `VITE_BASE_PATH` | `/cegroncare/` | Path the site is served from. Use `/` for a custom domain or a `*.github.io` user site. |
| `VITE_SITE_URL` | `https://www.cegroncare.co.uk` | Origin + base used for canonical links, Open Graph URLs and JSON-LD. Should include the base path. |

The workflow sets both to the GitHub Pages values. When the site moves to
`www.cegroncare.co.uk`, set `VITE_BASE_PATH=/` and
`VITE_SITE_URL=https://www.cegroncare.co.uk` (also add a `public/CNAME` file) and
update `public/sitemap.xml` and `public/robots.txt` for the new host.
