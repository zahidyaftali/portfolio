/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Build-time entry used by scripts/prerender.mjs to turn the app into static HTML
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export { structuredData, sitemapXml } from "./seo";

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
