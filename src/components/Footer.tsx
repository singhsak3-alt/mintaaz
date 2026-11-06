import { Suspense } from "react";
import Link from "next/link";
import { site, studioNav, socialLinks, legalLinks, logos, type NavItem } from "@/content/site";
import { MediaImage } from "./Media";
import { ArrowUpRight } from "./icons";
import { FooterEyebrow } from "./FooterEyebrow";

function SmartLink({ item, className }: { item: NavItem; className?: string }) {
  if (item.href.startsWith("http")) {
    return (
      <a href={item.href} target="_blank" rel="noopener" className={className}>
        {item.label}
      </a>
    );
  }
  if (item.href.startsWith("mailto:") || item.href.startsWith("#")) {
    return (
      <a href={item.href} className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

function Column({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div role="group" aria-label={label} className="flex flex-col gap-1.5">
      {items.map((item) => (
        <SmartLink
          key={item.label}
          item={item}
          className="py-1.5 text-[17px] no-underline"
        />
      ))}
    </div>
  );
}

export function Footer() {
  const mailto = `mailto:${site.email}`;
  return (
    <footer className="container-site pb-8 pt-24">
      {/* Contact statement */}
      <div className="flex flex-wrap items-end justify-between gap-8 border-b border-line pb-12">
        <div>
          <Suspense fallback={null}>
            <FooterEyebrow />
          </Suspense>
          <p className="m-0 text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.045em]">
            Have a project <span className="serif-accent">in mind?</span>
          </p>
        </div>
        <a
          href={mailto}
          className="inline-flex items-center gap-4 border-b-[1.5px] border-ink py-2 font-serif text-[clamp(30px,3vw,44px)] italic leading-none no-underline"
        >
          {site.email}
          <ArrowUpRight size={22} strokeWidth={2} />
        </a>
      </div>

      {/* Brand + link columns */}
      <div className="flex flex-wrap gap-x-16 gap-y-12 pt-12">
        <div className="flex max-w-[460px] flex-[2_1_380px] flex-col gap-7">
          <div className="flex w-full max-w-[360px] flex-col gap-0.5">
            <Link href="/" aria-label="Mintaaz home" className="block no-underline">
              <MediaImage
                src={logos.footer.src}
                alt={logos.footer.alt}
                width={logos.footer.width}
                height={logos.footer.height}
                className="block h-auto w-full"
              />
            </Link>
            <p className="m-0 -mt-5 ml-12 flex justify-between gap-1.5 whitespace-nowrap text-[clamp(9px,1vw,12px)] font-bold uppercase tracking-[0.1em] text-ink">
              <span>{site.tagline[0]}</span>
              <span aria-hidden="true">×</span>
              <span>{site.tagline[1]}</span>
              <span aria-hidden="true">×</span>
              <span>{site.tagline[2]}</span>
            </p>
          </div>
          <p className="m-0 max-w-[340px] text-base leading-[1.6] text-text-3">
            {site.description}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid flex-[3_1_480px] grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] items-start gap-x-8 gap-y-12"
        >
          <Column label="Studio" items={studioNav} />
          <Column label="Follow" items={socialLinks} />
          <Column
            label="Get in touch"
            items={[
              { label: site.email, href: mailto },
              { label: "Start a project ↗", href: "/contact" },
              { label: "FAQ", href: "/contact#faq" },
            ]}
          />
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line pt-7 text-sm text-text-3">
        <span>{site.copyright}</span>
        <span className="flex gap-5">
          {legalLinks.map((l) => (
            <SmartLink key={l.label} item={l} className="text-text-3" />
          ))}
        </span>
        <a href="#top" className="text-text-3 no-underline">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
