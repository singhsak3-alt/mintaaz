import { Poppins } from "next/font/google";
import { Accent as A } from "@/components/SectionHeader";
import { Body, CaseSection, Frame, Gap, Grid, HeroFrame, Img } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/zave";
const TEAL = "#1B7383";
/** Poppins is the Zave brand typeface shown in the specimen. */
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });
const POPPINS = poppins.className;

const palette = [
  { name: "Teal (blue-green)", hex: "#197383", fg: "#FFFFFF", text: "Sophistication, reliability and modernity — calm confidence for a fintech brand." },
  { name: "Golden yellow", hex: "#F0CB56", fg: "#0A0A0A", text: "Optimism, warmth and positivity — success, wealth and energy that motivate." },
  { name: "White", hex: "#FFFFFF", fg: "#0A0A0A", text: "Purity and clarity — space that lets the teal and gold breathe." },
];

const variations = [
  { bg: TEAL, src: "white-zave-logo-on-teal-2b771a", alt: "White Zave logo on teal", w: 645, h: 259, label: "On brand teal", labelColor: "#CDEAEE" },
  { bg: "#000000", src: "teal-zave-logo-on-black-08808d", alt: "Teal Zave logo on black", w: 644, h: 267, label: "On black", labelColor: "#A3A3A3" },
  { bg: "#FFFFFF", src: "teal-zave-logo-on-white-d117d7", alt: "Teal Zave logo on white", w: 624, h: 187, label: "On white" },
  { bg: "#F5F5F5", src: "grey-single-colour-zave-logo-eba8d8", alt: "Grey single-colour Zave logo", w: 547, h: 157, label: "Monochrome" },
];

export const zave: CaseStudy = {
  slug: "zave",
  hero: {
    tagline: (
      <>
        Logo design &amp; <A>brand identity.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="radial-gradient(110% 100% at 70% 20%, #2A8C9C 0%, #1B7383 55%, #0F4C57 100%)"
        padding="clamp(32px, 6vw, 96px) clamp(16px, 4vw, 64px)"
      >
        <Img
          src={`${I}/zave-business-cards-stacked-ee5205`}
          alt="Zave business cards stacked"
          w={839}
          h={520}
          eager
          style={{ filter: "drop-shadow(0 40px 50px rgba(0,30,40,.45))" }}
        />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Client", value: "Zave — fintech app" },
    { label: "Industry", value: "Investments · Mutual funds" },
    { label: "Scope", value: "Logo design & brand identity" },
    { label: "Deliverables", value: "Logo system, colour, type, cards, stationery, signage" },
  ],
  cta: (
    <>
      Need a brand <A>people trust?</A>
    </>
  ),
  body: (
    <>
      <section className="container-site pt-32">
        <Grid min={420} gap="clamp(32px, 5vw, 80px)" align="center">
          <Img src={`${I}/zave-logo-in-teal-with-a-golden-triangle-1e9abb`} alt="Zave logo in teal with a golden triangle" w={916} h={274} />
          <div className="flex flex-col gap-[18px]">
            <span className="eyebrow">Introduction</span>
            <p className="m-0 text-[clamp(20px,1.8vw,24px)] leading-[1.5] text-text-1">
              Zave is a fintech app that lets people redeem points and invest in mutual funds seamlessly — manage
              investments, track a portfolio, and withdraw anytime straight to a personal account. Investing and
              accessing returns made simple for beginners and seasoned investors alike.
            </p>
          </div>
        </Grid>
      </section>

      <CaseSection
        title={
          <>
            Logo <A>concept</A>
          </>
        }
        lead="From “100%” to a Z: the slash of the percent sign became the Z, and a dash turned it into a mark of growth."
      >
        <Grid min={380}>
          <Frame>
            <Img src={`${I}/pencil-sketch-100-evolving-into-the-z-ma-590019`} alt="Pencil sketch: 100% evolving into the Z mark" w={624} h={599} radius={12} />
          </Frame>
          <Frame>
            <Img src={`${I}/z-monogram-z-on-gold-and-the-gold-triang-53c90e`} alt="Z monogram, Z on gold, and the gold triangle mark" w={970} h={210} />
            <Body>
              A clean sans-serif wordmark with a geometric Z. Teal evokes harmony and professionalism — ideal for
              fintech, where trust and clarity matter — while the gold triangle adds optimism and ambition.
            </Body>
          </Frame>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Logo <A>construction</A>
          </>
        }
        lead="Every angle sits on a 45° grid, so the symbol and wordmark share one geometry."
      >
        <Frame>
          <Img src={`${I}/construction-grid-for-the-z-symbol-e41b2a`} alt="Construction grid for the Z symbol" w={920} h={872} />
        </Frame>
        <Gap />
        <Frame>
          <Img src={`${I}/construction-grid-across-the-full-zave-w-ac390a`} alt="Construction grid across the full Zave wordmark" w={1435} h={502} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Colour <A>palette</A>
          </>
        }
        lead="Teal for trust, gold for optimism, white for clarity."
      >
        <Grid min={280}>
          {palette.map((c) => (
            <div key={c.hex} className="flex flex-col overflow-hidden rounded-card border border-line">
              <div className="flex min-h-[200px] items-end justify-between p-6" style={{ background: c.hex, color: c.fg }}>
                <span className="text-[22px] font-semibold">{c.name}</span>
                <span className="font-mono text-sm">{c.hex}</span>
              </div>
              <p className="m-0 px-6 py-[22px] text-[15px] leading-[1.6] text-text-2">{c.text}</p>
            </div>
          ))}
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Logo <A>variations</A>
          </>
        }
        lead="The mark holds up on dark, brand and light backgrounds and in single colour."
      >
        <Grid min={560}>
          {variations.map((v) => (
            <div
              key={v.src}
              className="flex min-h-[300px] flex-col justify-between gap-5 rounded-card-lg border border-line p-[clamp(24px,4vw,56px)]"
              style={{ background: v.bg }}
            >
              <div className="flex flex-1 items-center">
                <Img src={`${I}/${v.src}`} alt={v.alt} w={v.w} h={v.h} maxWidth={420} />
              </div>
              <p className="eyebrow m-0" style={{ color: v.labelColor }}>
                {v.label}
              </p>
            </div>
          ))}
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Typography <A>&amp; font</A>
          </>
        }
        lead="Poppins — geometric, clean and tech-savvy, balancing readability with a modern edge."
      >
        <Grid min={420}>
          <div className="flex flex-col gap-5 rounded-card-lg border border-line p-[clamp(24px,4vw,56px)]">
            <span className="eyebrow">Font family · Sans-serif</span>
            <p className={`m-0 ${POPPINS} text-[clamp(80px,10vw,150px)] font-semibold leading-[0.9] tracking-[-0.03em]`} style={{ color: TEAL }}>
              Aa
            </p>
            <p className={`m-0 ${POPPINS} text-4xl font-semibold tracking-[0.04em]`}>POPPINS</p>
            <p className={`m-0 ${POPPINS} break-all text-lg leading-[1.6] text-text-1`}>
              0123456789
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
            </p>
          </div>
          <div className="flex flex-col justify-center gap-[18px] rounded-card-lg p-[clamp(24px,4vw,56px)] text-paper" style={{ background: TEAL }}>
            <p className="m-0 text-[17px] leading-[1.6] text-[#E1F2F4]">
              Poppins follows a geometric style — letterforms built from circles, triangles and rectangles — giving
              a clean, symmetrical, structured look.
            </p>
            <p className="m-0 text-[17px] leading-[1.6] text-[#E1F2F4]">
              Its contemporary, tech-savvy feel suits fintech: a versatile, modern font that balances readability
              with style.
            </p>
            <div className={`flex flex-col gap-1.5 border-t border-white/25 pt-[18px] ${POPPINS}`}>
              <span className="text-xl font-normal">Regular — Invest simply</span>
              <span className="text-xl font-semibold">SemiBold — Track your portfolio</span>
              <span className="text-xl font-bold">Bold — Withdraw anytime</span>
            </div>
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Debit <A>card</A>
          </>
        }
        lead="The brand carried onto a contactless Visa debit card — front and back."
      >
        <Frame>
          <Img src={`${I}/zave-visa-debit-card-front-and-back-9ed602`} alt="Zave Visa debit card front and back" w={1249} h={394} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Digital <A>presence</A>
          </>
        }
        lead="The identity on screen — web and the app splash."
      >
        <Grid min={420}>
          <Frame variant="bleed" bg="#111111">
            <Img src={`${I}/zave-website-on-a-macbook-b723e9`} alt="Zave website on a MacBook" w={612} h={461} full />
          </Frame>
          <Frame variant="bleed" bg="#111111">
            <Img src={`${I}/zave-app-splash-screen-on-an-iphone-cfef9e`} alt="Zave app splash screen on an iPhone" w={619} h={462} full />
          </Frame>
        </Grid>
      </CaseSection>

      <CaseSection
        eyebrow="08 · Merchandise"
        title={
          <>
            Brand <A>apparel</A>
          </>
        }
        lead="Teal and white tees with the wordmark and the standalone gold mark."
      >
        <Frame>
          <Img src={`${I}/four-zave-t-shirts-in-teal-and-white-06470d`} alt="Four Zave t-shirts in teal and white" w={1279} h={647} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="09 · Print"
        title={
          <>
            Stationery <A>design</A>
          </>
        }
        lead="Letterhead and envelope — quiet, confident and on-brand."
      >
        <Grid min={420}>
          <Frame variant="bleed">
            <Img src={`${I}/zave-letterhead-and-envelope-d28e91`} alt="Zave letterhead and envelope" w={1302} h={1302} full />
          </Frame>
          <Frame>
            <Img src={`${I}/zave-letterhead-with-a-watermark-triangl-6f82c8`} alt="Zave letterhead with a watermark triangle" w={1432} h={767} />
          </Frame>
        </Grid>
      </CaseSection>

      <CaseSection
        eyebrow="10 · Signage"
        title={
          <>
            Hoarding <A>design</A>
          </>
        }
        lead="Out-of-home: a bold gold diagonal and the wordmark on a metro platform."
      >
        <Frame variant="bleed">
          <Img src={`${I}/zave-poster-on-a-metro-platform-hoarding-966799`} alt="Zave poster on a metro platform hoarding" w={1274} h={990} full />
        </Frame>
      </CaseSection>
    </>
  ),
};
