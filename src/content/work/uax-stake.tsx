import { Accent as A } from "@/components/SectionHeader";
import { Band, BandHeader, CaseSection, HeroFrame, Img, Steps } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/uax";

const pages = [
  { src: "uax-hero-with-3d-triangle-get-started-st-3ef08c", alt: "UAX hero with 3D triangle, Get Started, stake/build/utilise and network stat cards", h: 1336, caption: "Hero · Stake, build, utilise · Why UAX is a game changer" },
  { src: "what-is-uax-network-cards-wallet-coming--096dff", alt: "What is UAX.Network cards, wallet coming soon banner, and wallet, bridge, scan and NFT cards", h: 1884, caption: "What is UAX.Network · Wallet coming soon · Core offerings" },
  { src: "what-s-new-on-uax-feature-list-and-token-8c11fe", alt: "What’s new on UAX feature list and tokenomics radial chart with allocations", h: 1893, caption: "What’s new on UAX · Tokenomics at a glance" },
  { src: "four-phase-roadmap-ring-nft-showcase-joi-8b9393", alt: "Four-phase roadmap ring, NFT showcase, join community and subscribe form", h: 1805, caption: "Roadmap · NFTs on UAX · Join our community" },
];

export const uaxStake: CaseStudy = {
  slug: "uax-stake",
  hero: {
    tagline: (
      <>
        A primary blockchain <A>asset hub.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="radial-gradient(90% 90% at 75% 40%, #4A1A6E 0%, #1B1938 60%, #110F26 100%)"
        padding="clamp(32px, 5vw, 72px)"
        className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-8 text-paper"
      >
        <Img
          src={`${I}/image-e4164f`}
          alt=""
          full
          className="pointer-events-none absolute! inset-0 size-full! object-cover opacity-90"
        />
        <div className="relative flex flex-col gap-[22px]">
          <span className="eyebrow text-[#D6A5EC]">Overview</span>
          <p className="m-0 text-[clamp(26px,2.8vw,40px)] font-bold leading-[1.12] tracking-[-0.035em]">
            Fast, secure, scalable — <span className="serif-accent text-[#F07BDF]">blockchain for real-world value.</span>
          </p>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#DAD3EC]">
            UAX is a high-performance layer-1 blockchain for fast transactions, smart contracts and decentralised
            apps — powering innovation across finance, digital assets and enterprise.
          </p>
        </div>
        <div className="relative w-full max-w-[520px] justify-self-center">
          <Img
            src={`${I}/uax-3d-triangle-logo-mark-80fd7b`}
            alt="UAX 3D triangle logo mark"
            w={638}
            h={700}
            eager
            style={{ filter: "drop-shadow(0 30px 60px rgba(232,27,196,.35))" }}
          />
        </div>
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Project type", value: "Website landing page redesign" },
    { label: "Scope", value: "Visual design · UI" },
    { label: "Industry", value: "Blockchain · Web3" },
    { label: "Theme", value: "Dark mode" },
  ],
  cta: (
    <>
      Building in <A>Web3?</A>
    </>
  ),
  body: (
    <>
      <CaseSection
        title={
          <>
            Design <A>highlights</A>
          </>
        }
        lead="Redesigning the UAX landing page in a dark, neon-magenta language that feels native to Web3."
      >
        <Steps
          min={260}
          gap={32}
          items={[
            { label: "01", title: "Stake · Build · Utilize", text: "A hero that leads with the three things people come to UAX to do, backed by live network stats." },
            { label: "02", title: "Ecosystem at a glance", text: "Wallet, Bridge, Scan and NFT presented as four clear product cards with a single Explore action." },
            { label: "03", title: "Tokenomics made legible", text: "Total supply and every allocation laid out around one radial chart instead of a dense table." },
            { label: "04", title: "Roadmap & community", text: "A four-phase roadmap ring, an NFT showcase and a focused join / subscribe close." },
          ]}
        />
      </CaseSection>

      <Band bg="#F4F2FA" dark={false} gap={56}>
        <BandHeader
          dark={false}
          title={
            <>
              Landing page <A>redesign</A>
            </>
          }
          lead="The full page, top to bottom — from the hero and network stats to roadmap, NFTs and community."
        />
        {pages.map((p) => (
          <figure key={p.src} className="m-0 flex flex-col gap-[14px]">
            <div className="overflow-hidden rounded-card bg-[#1B1938] shadow-[0_30px_60px_-30px_rgba(27,25,56,.55)]">
              <Img src={`${I}/${p.src}`} alt={p.alt} w={1275} h={p.h} full />
            </div>
            <figcaption className="eyebrow">{p.caption}</figcaption>
          </figure>
        ))}
      </Band>
    </>
  ),
};
