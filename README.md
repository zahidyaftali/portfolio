# portfolio

Source for [zahidyaftali.com](https://zahidyaftali.com/), the portfolio of Zahid Ali Yaftali, a white label WordPress developer. It's built with React, Vite and Tailwind CSS and prerendered to static HTML, so search engines see the full page without running JavaScript.

## Run locally

Requires Node.js.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build and deploy

```bash
npm run build    # outputs to dist/
npm run preview  # serves dist/ locally to check the production build
```

Upload the contents of `dist/`, including the hidden `.htaccess`, to `public_html` on Hostinger.

`npm run build` runs three steps:

1. `vite build` builds the browser bundle.
2. `vite build --ssr src/entry-server.tsx` builds a Node version of the app.
3. `scripts/prerender.mjs` renders the app into `dist/index.html`, adds JSON-LD structured data from `src/seo.ts` and writes `dist/sitemap.xml`.

In the browser, `src/main.tsx` hydrates the prerendered HTML instead of rendering from scratch.

## Where things live

| What | Where |
| --- | --- |
| Page title, meta description, Open Graph tags | `index.html` |
| Structured data (Person, WebSite, FAQPage) and sitemap | `src/seo.ts` |
| Services, portfolio projects, FAQs | `src/data.ts` |
| Images, served from `/assets/images/` | `public/assets/images/` |
| `robots.txt`, `.htaccess`, favicon, web manifest | `public/` |

Each portfolio screenshot has two files: `<name>.webp` at 960px wide and `<name>-480.webp` at 480px wide. To add a project, add both files and a new entry in `portfolioData`.
