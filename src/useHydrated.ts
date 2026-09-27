/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";

/**
 * False in the prerendered HTML and on the first browser render (so hydration
 * matches), true right after. Used to add the duplicate items that looping
 * carousels need only in the browser, so search engines read each item once.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
