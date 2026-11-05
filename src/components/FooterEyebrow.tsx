"use client";

import { usePathname } from "next/navigation";

/** Pages whose reference design leaves out the "(Contact)" label above the footer. */
const HIDDEN_ON = ["/about", "/contact", "/services", "/work/interaction"];

export function FooterEyebrow() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;
  return <p className="eyebrow m-0 mb-4 tracking-[0.08em]">(Contact)</p>;
}
