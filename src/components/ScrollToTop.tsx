"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Opens every page at the top. Next.js <Link> keeps scroll position when the
 * new page is already in view, so this resets scroll on each route change.
 * URLs with a #hash (e.g. /contact#faq) are left alone so the browser can
 * scroll to that section.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
