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

// Title and description come from index.html so the structured data always matches the page
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
if (!title || !description) throw new Error("prerender: <title> or meta description missing in index.html");
const today = new Date().toISOString().slice(0, 10);

// Escape "<" so the JSON can never close the <script> tag early
const jsonLd = JSON.stringify(structuredData({ title, description, dateModified: today })).replace(/</g, "\\u003c");

// React writes a few attributes with their JSX spelling (srcSet, fetchPriority...).
// Browsers treat HTML attribute names case-insensitively, so this only makes the
// source standard HTML; SVG attributes like viewBox are case-sensitive and left alone.
const JSX_ATTRS = { srcSet: "srcset", imageSrcSet: "imagesrcset", imageSizes: "imagesizes", fetchPriority: "fetchpriority" };
const toHtmlAttrs = (markup) =>
  markup.replace(/<[a-zA-Z][^>]*>/g, (tag) =>
    tag.replace(/\s(srcSet|imageSrcSet|imageSizes|fetchPriority)=/g, (_, name) => ` ${JSX_ATTRS[name]}=`),
  );

// React puts its image preload hints at the start of the app markup; they belong in <head>
let appHtml = render();
const preloads = appHtml.match(/^(?:<link [^>]*>)+/)?.[0] ?? "";
appHtml = appHtml.slice(preloads.length);
const headPreloads = preloads.replace(/(<link [^>]*?)\/?>/g, "  $1 />\n");

html = html
  .replace(placeholder, `<div id="root">${toHtmlAttrs(appHtml)}</div>`)
  .replace("</head>", `${toHtmlAttrs(headPreloads)}  <script type="application/ld+json">${jsonLd}</script>\n  </head>`);

fs.writeFileSync(templatePath, html);
fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml(today));
fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`prerender: wrote dist/index.html (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB) and dist/sitemap.xml`);
