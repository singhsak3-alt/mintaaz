"use client";

import { useEffect } from "react";

/** Puts the plane and its white-text window on exactly the same animation clock. */
export function PlaneSync() {
  useEffect(() => {
    const id = window.setTimeout(() => {
      document.getAnimations?.().forEach((a) => {
        const name = (a as CSSAnimation).animationName;
        if (name === "mz-fly" || name === "mz-fly-inv") a.startTime = 0;
      });
    }, 0);
    return () => window.clearTimeout(id);
  }, []);
  return null;
}
