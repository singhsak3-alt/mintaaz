import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServicesPanel } from "@/components/ServicesPanel";
import { ProjectCard } from "@/components/ProjectCard";
import { ButtonLink } from "@/components/Button";
import { SectionHeader, Accent } from "@/components/SectionHeader";
import { Sparkle } from "@/components/icons";
import { FitToggle } from "@/components/home/FitToggle";
import { homeCta, homeHero, homeMarquee, selectedWork, selectedWorkLead } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Mintaaz — Digital design studio" },
  description: homeHero.lead,
};

function ServiceStrip() {
  const line = (
    <span className="pr-10">
      {homeMarquee.map((item) => (
        <span key={item}>
          {item} <span className="serif-accent">✦</span>{" "}
        </span>
      ))}
    </span>
  );
  return (
    <div aria-hidden="true" className="mz-band mt-2 overflow-hidden py-[22px] text-paper">
      <div className="flex w-max animate-[mz-marquee_28s_linear_infinite] whitespace-nowrap text-[40px] font-semibold tracking-[-0.03em]">
        {line}
        {line}
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="container-site pb-28 pt-12">
      <SectionHeader
        size="section"
        marginClass="mb-12"
        leadBelow
        title={
          <>
            Selected <Accent>work</Accent>
          </>
        }
        lead={selectedWorkLead}
        aside={
          <ButtonLink href="/work" variant="secondary" icon="up-right">
            All projects
          </ButtonLink>
        }
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,480px),1fr))] gap-x-7 gap-y-14">
        {selectedWork.map((card) => (
          <ProjectCard
            key={card.slug}
            variant="feature"
            href={`/work/${card.slug}`}
            title={card.title}
            cover={card.cover}
            badge={card.badge}
            badgeTone={card.badgeTone}
            tags={card.tags}
            year={card.year}
            bordered={card.bordered}
          />
        ))}
      </div>
    </section>
  );
}

function HomeCta() {
  return (
    <section id="contact" className="px-4 pt-24">
      <div className="relative mx-auto max-w-[var(--container-wide)] overflow-hidden rounded-panel bg-paper px-[clamp(24px,4vw,64px)] py-[clamp(64px,8vw,128px)] text-center text-ink">
        <h2 className="relative mx-auto my-0 max-w-[1080px] text-[clamp(44px,6.4vw,96px)] font-bold leading-[1.02] tracking-[-0.05em]">
          Wondering if we&apos;re{" "}
          <FitToggle />{" "}
          the right fit?{" "}
          <span
            aria-hidden="true"
            className="box-border inline-flex h-[0.72em] w-[1.1em] items-center justify-center rounded-pill border-2 border-ink align-[-0.05em]"
          >
            <Sparkle size={null} className="h-[0.4em] w-[0.4em]" fill="#0A0A0A" />
          </span>{" "}
          <span className="serif-accent">(Spoiler: we are.)</span>
        </h2>
        <p className="relative mx-auto mb-0 mt-8 max-w-[560px] text-lg leading-[1.6] text-text-2">
          {homeCta.text}
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/contact" size="lg">
            Book a free call
          </ButtonLink>
          <ButtonLink href="/work" size="lg" variant="secondary">
            See the work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ServiceStrip />
      <SelectedWork />
      <LogoMarquee label="Trusted by founders and teams at" className="pb-14 pt-16" />
      <ServicesPanel />
      <HomeCta />
    </main>
  );
}
