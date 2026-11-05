"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/content/site";

/** Returns true when `href` is the current section (case studies count as Work). */
export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return <StaticNavLinks items={items} pathname={pathname} />;
}

/** Same markup, no hook: used as the Suspense fallback. */
export function StaticNavLinks({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname?: string;
}) {
  return (
    <>
      {items.map((item) => {
        const active = pathname ? isActive(pathname, item.href) : false;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "px-[14px] py-3 font-semibold underline underline-offset-[6px]"
                : "px-[14px] py-3 no-underline"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
