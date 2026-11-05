"use client";

import { useSyncExternalStore } from "react";

/**
 * "Good morning." before 12:00, "Good afternoon." before 17:00, else
 * "Good evening." Read from the visitor's clock in the browser; the
 * prerendered HTML has no greeting, so it never shows the server's time.
 */
function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning." : h < 17 ? "Good afternoon." : "Good evening.";
}

const subscribe = () => () => {};

export function Greeting() {
  const text = useSyncExternalStore(subscribe, greeting, () => "");
  return text ? <>{text} </> : null;
}
