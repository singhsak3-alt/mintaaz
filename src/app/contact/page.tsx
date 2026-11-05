import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { DotCluster } from "@/components/DotCluster";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Accent } from "@/components/SectionHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { Greeting } from "@/components/contact/Greeting";
import { contactIntro, faqs, studio } from "@/content/contact";
import { site, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactIntro,
};

function SidePanel() {
  return (
    <aside className="flex flex-[1_1_300px] flex-col gap-4">
      <div className="rounded-card-lg bg-ink p-8 text-paper">
        <p className="m-0 text-[28px] font-bold leading-[1.05] tracking-[-0.03em]">
          {studio.callTitle[0]}
          <Accent>{studio.callTitle[1]}</Accent>
        </p>
        <p className="m-0 mt-[14px] text-[15px] leading-[1.6] text-on-dark">{studio.callText}</p>
        <ButtonLink href={studio.callHref} size="sm" className="mt-[22px]">
          Book a meeting
        </ButtonLink>
      </div>
      <div className="flex flex-col gap-6 rounded-card-lg border border-line p-8">
        <div>
          <p className="eyebrow m-0 mb-2 text-[11px] tracking-[0.08em]">New business</p>
          <a href={`mailto:${site.email}`} className="text-[17px] underline-offset-4">
            {site.email}
          </a>
        </div>
        <div>
          <p className="eyebrow m-0 mb-2 text-[11px] tracking-[0.08em]">Studio</p>
          <p className="m-0 text-[17px] leading-[1.5]">
            {studio.address[0]}
            <br />
            {studio.address[1]}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {socialLinks.slice(0, 3).map((s) => (
          <a
            key={s.label}
            href={s.href}
            {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
            className="inline-flex min-h-11 items-center rounded-pill border border-line-strong px-[18px] text-[15px] no-underline transition-colors duration-200 hover:border-ink"
          >
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="container-site relative pt-18">
        <div className="absolute right-8 top-14 max-[480px]:right-4">
          <DotCluster />
        </div>
        <h1 className="m-0 max-w-[1040px] text-[clamp(52px,7.4vw,112px)] font-extrabold leading-[0.92] tracking-[-0.06em]">
          <Greeting />
          <span className="serif-accent tracking-[-0.03em]">What are we making?</span>
        </h1>
        <p className="m-0 mt-7 max-w-[560px] text-[19px] leading-[1.6] text-text-2">{contactIntro}</p>
      </section>

      <section className="container-site pt-14">
        <div className="flex flex-wrap items-start gap-5">
          <ContactForm />
          <SidePanel />
        </div>
      </section>

      <section id="faq" className="mx-auto box-border max-w-[880px] px-8 pt-40 max-[480px]:px-4">
        <div className="text-center">
          <h2 className="m-0 text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.045em]">
            Frequently asked <Accent>questions</Accent>
          </h2>
          <p className="m-0 mt-[18px] text-[17px] text-text-3">Quick answers before you get in touch.</p>
        </div>
        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>
      </section>
      <div className="h-8" />
    </main>
  );
}
