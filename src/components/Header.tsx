import { Suspense } from "react";
import Link from "next/link";
import { mainNav, logos } from "@/content/site";
import { MediaImage } from "./Media";
import { ButtonLink } from "./Button";
import { NavLinks, StaticNavLinks } from "./NavLinks";
import { MobileMenu } from "./MobileMenu";

/**
 * Sticky header: white at 88% opacity, 12px blur, 1px bottom line.
 * Logo (60px) on the left, nav in the centre, "Start a project" on the right.
 * Under 768px (md) the nav collapses into a hamburger menu; "Start a project"
 * stays in the header beside it, and the logo drops to 40px so all three fit.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-white/88 backdrop-blur-[12px]">
      <div className="container-site flex flex-wrap items-center justify-between gap-6 py-[14px] max-md:flex-nowrap max-md:gap-3">
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
            className="block h-[60px] w-auto max-md:h-10"
          />
        </Link>

        <nav aria-label="Main" className="hidden flex-wrap gap-1 text-[15px] font-medium md:flex">
          <Suspense fallback={<StaticNavLinks items={mainNav} />}>
            <NavLinks items={mainNav} />
          </Suspense>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/contact" size="sm" className="max-md:px-4">
            Start a project
          </ButtonLink>
          <Suspense fallback={null}>
            <MobileMenu items={mainNav} />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
