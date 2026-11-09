"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";
import { isActive } from "./NavLinks";
import { Close, Menu } from "./icons";

/**
 * Hamburger menu for screens under 768px (md). The button sits in the header;
 * the panel drops down under it with the main nav as a full-width list.
 * "Start a project" stays in the header, not in this panel.
 * Closes on link tap, route change and Escape.
 */
export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  // Close whenever the route changes (e.g. back/forward).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-pill border border-line-strong bg-paper text-ink"
      >
        {open ? <Close size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-73px)] overflow-y-auto border-t border-line bg-paper"
      >
        <nav aria-label="Main" className="container-site flex flex-col py-4">
          {items.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-5 text-[22px] tracking-[-0.02em] no-underline ${
                  active ? "font-semibold" : "font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
