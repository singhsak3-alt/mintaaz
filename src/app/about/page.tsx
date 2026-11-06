import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { DotCluster } from "@/components/DotCluster";
import { MediaImage } from "@/components/Media";
import { Accent } from "@/components/SectionHeader";
import { aboutHero, mission, partner, story, values } from "@/content/about";
import { clients } from "@/content/clients";

export const metadata: Metadata = {
  title: "About us",
  description: aboutHero.intro.join(" "),
};

/**
 * Team-portrait tile composition (positions from about.html).
 * PLACEHOLDER: project covers stand in until team portraits and a studio photo are supplied.
 */
const W = "/images/work";
const TEAM_PHOTO = `${W}/billd-billing-website-on-a-desktop-monit-41a9b2`;
const TILES: { left: string; top: string; size: number; src: string }[] = [
  { left: "4%", top: "8%", size: 62, src: `${W}/zave-business-cards-2d60a2` },
  { left: "30%", top: "2%", size: 44, src: `${W}/uax-stake-3d-coin-visual-on-purple-3b31a3` },
  { left: "82%", top: "4%", size: 68, src: `${W}/arisunitern-logo-over-a-city-skyline-686ac2` },
  { left: "86%", top: "52%", size: 52, src: `${W}/bookdu-reading-app-on-a-phone-9a041d` },
  { left: "0%", top: "62%", size: 72, src: `${W}/nexa-ai-platform-shown-on-two-tablets-f68cca` },
  { left: "26%", top: "88%", size: 40, src: `${W}/collage-of-character-and-vehicle-sketche-307c2e` },
  { left: "76%", top: "86%", size: 46, src: `${W}/swash-breathing-quality-dashboard-on-a-d-7b31d3` },
];

function PortraitTiles() {
  return (
    <div className="pb-10">
      <div aria-hidden="true" className="relative mx-auto aspect-[1/0.92] w-full max-w-[460px]">
        {TILES.map((t) => (
          <div
            key={t.src}
            className="absolute overflow-hidden rounded-inner bg-ink"
            style={{ left: t.left, top: t.top, width: t.size, height: t.size }}
          >
            <MediaImage src={t.src} alt="" fill sizes="72px" className="object-cover" />
          </div>
        ))}
        <div className="absolute left-[13%] top-[32%] grid grid-cols-[repeat(3,6px)] gap-[9px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="size-1.5 rounded-full bg-ink" />
          ))}
        </div>
        <div className="absolute left-[33%] top-[22%] h-[54%] w-[42%] overflow-hidden rounded-tile bg-ink">
          <MediaImage src={TEAM_PHOTO} alt="" fill sizes="200px" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="container-site relative pt-18">
          <div className="absolute right-8 top-10 max-[480px]:right-4">
            <DotCluster />
          </div>
          <h1 className="m-0 max-w-[1000px] text-[clamp(52px,7.4vw,112px)] font-extrabold leading-[0.92] tracking-[-0.06em]">
            {aboutHero.title[0]}
            <span className="serif-accent tracking-[-0.03em]">{aboutHero.title[1]}</span>
          </h1>
          <p className="m-0 mt-8 max-w-[820px] text-[19px] leading-[1.6] text-text-2">
            {aboutHero.intro[0]}
            <br className="max-[480px]:hidden" /> {aboutHero.intro[1]}
          </p>
        </section>

        {/* Partner block */}
        <section className="container-site pt-24">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-14">
            <div>
              <p className="m-0 text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.12] tracking-[-0.03em]">
                {partner.title[0]}
                <Accent>{partner.title[1]}</Accent>
              </p>
            </div>
            <PortraitTiles />
            <div>
              {partner.facts.map((f) => (
                <div key={f.title} className="border-t border-line py-[22px]">
                  <p className="m-0 text-[19px] font-bold tracking-[-0.02em]">{f.title}</p>
                  <p className="m-0 mt-2 text-[15px] leading-[1.6] text-text-3">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section id="story" className="container-site pt-36">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-[72px] gap-y-12 border-t border-line pt-7">
            <h2 className="m-0 text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.045em]">
              {story.title[0]}
              <Accent>{story.title[1]}</Accent>
            </h2>
            <div className="flex flex-col gap-5 text-lg leading-[1.65] text-text-2">
              {story.paragraphs.map((p) => (
                <p key={p} className="m-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & vision */}
        <section id="mission" className="container-site pt-32">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-4">
            <div className="rounded-hero bg-accent p-[clamp(32px,4vw,56px)] text-paper transition-transform duration-[250ms] hover:-translate-y-1">
              <p className="eyebrow m-0 mb-[22px] tracking-[0.08em] text-accent-tint">Our mission</p>
              <p className="m-0 text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.08] tracking-[-0.035em]">
                {mission.mission.title[0]}
                <Accent>{mission.mission.title[1]}</Accent>
              </p>
              <p className="m-0 mt-[22px] text-base leading-[1.6] text-on-dark">{mission.mission.text}</p>
            </div>
            <div className="rounded-hero border-[1.5px] border-ink p-[clamp(32px,4vw,56px)] transition-transform duration-[250ms] hover:-translate-y-1">
              <p className="eyebrow m-0 mb-[22px] tracking-[0.08em]">Our vision</p>
              <p className="m-0 text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.08] tracking-[-0.035em]">
                {mission.vision.title[0]}
                <Accent>{mission.vision.title[1]}</Accent>
              </p>
              <p className="m-0 mt-[22px] text-base leading-[1.6] text-text-3">{mission.vision.text}</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="mt-36 bg-ink text-paper">
          <div className="container-site py-32">
            <p className="eyebrow m-0 mb-[18px] tracking-[0.08em] text-text-4">03 — What we believe</p>
            <h2 className="m-0 text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.045em]">
              Our <Accent>values</Accent>
            </h2>
            <ol className="m-0 mt-16 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-8 gap-y-10 p-0">
              {values.map((v, i) => (
                <li key={v.title} className="border-t border-text-3 pt-6">
                  <span className="eyebrow tracking-[0.08em] text-text-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="m-0 mt-[18px] text-2xl font-bold leading-[1.15] tracking-[-0.025em]">{v.title}</p>
                  <p className="m-0 mt-[14px] text-[15px] leading-[1.6] text-on-dark">{v.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Brands */}
        <section aria-label="Brands we've worked with" className="container-site pt-32">
          <p className="eyebrow m-0 mb-8 text-center text-[13px]">Brands we&apos;ve worked with</p>
          <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] items-center justify-items-center gap-x-8 gap-y-12 p-0">
            {clients.map((c) => (
              <li key={c.name}>
                <MediaImage
                  src={c.src}
                  alt={c.name}
                  width={c.w}
                  height={c.h}
                  className="block opacity-85"
                  style={{ height: c.height, width: "auto" }}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <CtaBand
        className="pt-32"
        align="left"
        id="cta"
        title={
          <>
            Like what you&apos;ve read? <Accent>Let&apos;s work together.</Accent>
          </>
        }
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our work", href: "/work" }}
      />
    </>
  );
}
