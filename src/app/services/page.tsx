import type { Metadata } from "next";
import { ServicesPanel } from "@/components/ServicesPanel";
import { ButtonLink } from "@/components/Button";
import { DotCluster } from "@/components/DotCluster";
import { Accent } from "@/components/SectionHeader";
import { AiPipeline } from "@/components/services/AiPipeline";
import { aboutBand, processIntro, servicesHero } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: servicesHero.lead,
};

/** Small indigo dots scattered behind the pipeline (decorative). */
const BG_DOTS: [number, number, number][] = [
  [62, 40, 1.6], [930, 22, 1.4], [720, 120, 1.2], [180, 210, 1.2], [860, 330, 1.6],
  [40, 420, 1.2], [610, 470, 1.4], [300, 560, 1.2], [960, 640, 1.4], [130, 720, 1.6],
  [760, 800, 1.2], [420, 880, 1.4], [900, 950, 1.2], [70, 970, 1.4],
];

function Hero() {
  return (
    <section className="container-site pt-18">
      <div className="flex flex-wrap items-center justify-between gap-12">
        <div className="relative flex-[1_1_520px]">
          <h1 className="m-0 text-[clamp(64px,9vw,140px)] font-extrabold leading-[0.88] tracking-[-0.065em]">
            Small team.
            <br />
            <span className="serif-accent tracking-[-0.03em]">Serious craft.</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-end gap-10">
            <p className="m-0 max-w-[480px] text-[19px] leading-[1.6] text-text-2">
              {servicesHero.lead}
            </p>
            <DotCluster size={80} />
          </div>
        </div>
        {/* Placeholder for the 3D studio render */}
        <div className="relative flex aspect-square w-full flex-[0_1_380px] items-center justify-center overflow-hidden rounded-hero bg-ink">
          <svg width="62%" viewBox="0 0 200 200" aria-hidden="true">
            <g className="origin-center animate-spin-slow [transform-box:fill-box]">
              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="#525252"
                strokeWidth="1"
                strokeDasharray="3 7"
              />
            </g>
            <circle cx="100" cy="100" r="74" fill="#FFFFFF" />
            <circle cx="100" cy="100" r="28" fill="#0A0A0A" className="animate-float" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="pt-32">
      <div className="relative mx-auto max-w-[var(--container-site)] overflow-clip bg-paper px-8 pb-12 text-ink max-[480px]:px-4">
        <svg
          className="mz-dots pointer-events-none absolute inset-0"
          width="100%"
          height="100%"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {BG_DOTS.map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} fill="#A5B4FC" />
          ))}
        </svg>
        <div className="relative mb-12 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <h2 className="m-0 text-[clamp(48px,7vw,104px)] font-bold leading-[0.92] tracking-[-0.05em]">
            How we <Accent>work</Accent>
          </h2>
          <p className="m-0 mb-2 max-w-[440px] text-[17px] leading-[1.6] text-text-2">
            {processIntro.text}{" "}
            <span className="font-semibold text-ink">{processIntro.strong}</span>
          </p>
        </div>
        <AiPipeline />
      </div>
    </section>
  );
}

function AboutBand() {
  return (
    <section className="container-site pt-32">
      <div className="flex flex-wrap items-center justify-between gap-6 rounded-card-lg border border-line p-[clamp(28px,4vw,48px)]">
        <div>
          <p className="m-0 text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.05] tracking-[-0.035em]">
            {aboutBand.title[0]}
            <Accent>{aboutBand.title[1]}</Accent>
          </p>
          <p className="m-0 mt-3 text-base text-text-3">{aboutBand.text}</p>
        </div>
        <ButtonLink href="/about" size="sm" icon="right">
          About us
        </ButtonLink>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <ServicesPanel
        showNumbers
        className="pt-24"
        action={
          <ButtonLink href="/contact" className="mt-6">
            Start a project
          </ButtonLink>
        }
      />
      <Process />
      <AboutBand />
    </main>
  );
}
