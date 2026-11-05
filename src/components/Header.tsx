import { Suspense } from "react";
import Link from "next/link";
import { mainNav, logos } from "@/content/site";
import { MediaImage } from "./Media";
import { ButtonLink } from "./Button";
import { NavLinks, StaticNavLinks } from "./NavLinks";

/**
 * Sticky header: white at 88% opacity, 12px blur, 1px bottom line.
 * Logo (60px) on the left, nav in the centre, "Start a project" on the right.
 * Wraps on narrow screens.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white/88 backdrop-blur-[12px]">
      <div className="container-site flex flex-wrap items-center justify-between gap-6 py-[14px]">
        <Link
          href="/"
          aria-label="Mintaaz home"
          className="flex min-h-11 items-center no-underline"
        >
          <MediaImage
            src={logos.header.src}
            alt={logos.header.alt}
            width={logos.header.width}
            height={logos.header.height}
            preload
            className="block h-[60px] w-auto"
          />
        </Link>

        <nav aria-label="Main" className="flex flex-wrap gap-1 text-[15px] font-medium">
          <Suspense fallback={<StaticNavLinks items={mainNav} />}>
            <NavLinks items={mainNav} />
          </Suspense>
        </nav>

        <ButtonLink href="/contact" size="sm">
          Start a project
        </ButtonLink>
      </div>
    </header>
  );
}
