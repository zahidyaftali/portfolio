// Runs after `vite build` + `vite build --ssr`: renders the app to static HTML so
// search engines and social previews get the full page without executing JavaScript.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const templatePath = path.join(distDir, "index.html");

const { render, structuredData, sitemapXml } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const placeholder = '<div id="root"></div>';
let html = fs.readFileSync(templatePath, "utf8");
if (!html.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

// Escape "<" so the JSON can never close the <script> tag early
const jsonLd = JSON.stringify(structuredData()).replace(/</g, "\\u003c");

html = html
  .replace(placeholder, `<div id="root">${render()}</div>`)
  .replace("</head>", `  <script type="application/ld+json">${jsonLd}</script>\n  </head>`);

fs.writeFileSync(templatePath, html);
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml(new Date().toISOString().slice(0, 10)));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote dist/index.html (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB) and dist/sitemap.xml`);
