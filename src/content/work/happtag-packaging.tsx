import { Roboto } from "next/font/google";
import { Accent as A } from "@/components/SectionHeader";
import { Band, BandHeader, CaseSection, Frame, Gap, Grid, HeroFrame, Img, Split, Swatches } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

/** Roboto is the packaging typeface shown in the specimen below. */
const roboto = Roboto({ subsets: ["latin"], weight: "400", display: "swap" });

const I = "/images/packaging";

const mood = [
  { src: "dog-wearing-a-happtag-on-its-collar-2cb7b8", alt: "Dog wearing a HappTag on its collar", w: 209, h: 230, basis: 220, bg: "#F2F2F2" },
  { src: "happtag-resting-on-a-leather-wallet-a66a5b", alt: "HappTag resting on a leather wallet", w: 235, h: 254, basis: 220, bg: "#F2F2F2" },
  { src: "happtag-clipped-to-a-suitcase-handle-940584", alt: "HappTag clipped to a suitcase handle", w: 184, h: 340, basis: 160, bg: "#F2F2F2" },
  { src: "pencil-sketches-of-the-happtag-form-71f9fa", alt: "Pencil sketches of the HappTag form", w: 250, h: 380, basis: 200, bg: "#E9EDF2" },
  { src: "two-black-happtags-front-and-back-63c008", alt: "Two black HappTags, front and back", w: 280, h: 280, basis: 260, bg: "#9A9A9A" },
];

const icons = [
  { src: "secure-attachment-c4fef0", alt: "Secure attachment", w: 58, h: 67 },
  { src: "find-my-09b27d", alt: "Find My", w: 77, h: 77 },
  { src: "long-battery-life-548c7e", alt: "Long battery life", w: 70, h: 45 },
  { src: "water-resistant-daf031", alt: "Water resistant", w: 41, h: 63 },
  { src: "tag-ring-f983fd", alt: "Tag & ring", w: 67, h: 66 },
];

export const happtagPackaging: CaseStudy = {
  slug: "happtag-packaging",
  hero: {
    title: ["Happtag ", "Box"],
    titleSize: "lg",
    tagline: (
      <>
        Product packaging design <A>for a smart tracker.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="radial-gradient(90% 100% at 60% 30%, #F7F7F7 0%, #E6E6E6 60%, #D6D6D6 100%)"
        padding="clamp(32px, 5vw, 72px)"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-6"
      >
        <div className="self-end">
          <Img
            src={`${I}/happtag-box-side-view-with-find-my-certi-98918d`}
            alt="HappTag box side view with Find My, certifications and QR code"
            w={677}
            h={187}
            eager
            style={{ filter: "drop-shadow(0 30px 30px rgba(0,0,0,.25))" }}
          />
        </div>
        <Img
          src={`${I}/happtag-box-front-smart-bluetooth-tracke-a562ae`}
          alt="HappTag box front: smart Bluetooth tracker"
          w={558}
          h={504}
          eager
          style={{ filter: "drop-shadow(0 40px 40px rgba(0,0,0,.3))" }}
        />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Client", value: "Smarthapps · HappTag" },
    { label: "Scope", value: "Packaging & dieline design" },
    { label: "Product", value: "Bluetooth tracker (Find My)" },
    { label: "Deliverables", value: "Dieline, box art, mockups" },
  ],
  cta: (
    <>
      Need packaging <A>that sells?</A>
    </>
  ),
  body: (
    <>
      <Split
        eyebrow="Project concept"
        title={
          <>
            Track it. <A>Ring it. Find it.</A>
          </>
        }
      >
        <p className="m-0">
          HappTag is a compact, Bluetooth-enabled tracker that helps people locate and secure keys, bags, wallets
          and other essentials. Built on the SMARTHAPPS Find My network, it lets users track, ring and manage items
          in real time from the companion app.
        </p>
      </Split>

      <CaseSection
        title={
          <>
            Product <A>moodboard</A>
          </>
        }
        lead="Everyday moments the tag lives in — collars, wallets, luggage — plus the first sketches."
      >
        <div className="flex flex-wrap items-stretch gap-4">
          {mood.map((m) => (
            <div
              key={m.src}
              className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-card p-4"
              style={{ flex: `1 1 ${m.basis}px`, background: m.bg }}
            >
              <Img src={`${I}/${m.src}`} alt={m.alt} w={m.w} h={m.h} className="w-auto! max-h-[340px]" />
            </div>
          ))}
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Traces become <A>a language</A>
          </>
        }
        lead="Every fold, cut and panel follows the dieline, so structure and graphics speak as one. Deep black, refined type, product imagery and purposeful icons carry HappTag’s premium tech identity — giving imperfection a structure."
      />

      <CaseSection
        title={
          <>
            Box <A>dieline</A>
          </>
        }
        lead="Tuck-end box: 107 × 89 mm panels, 16 mm depth, 10 mm tuck flaps and a 20 mm glue strip."
      >
        <Frame>
          <Img src={`${I}/dieline-with-dimensions-106-107-68-mm-wi-d4d7c5`} alt="Dieline with dimensions: 106, 107, 68 mm widths and 88, 89, 65 mm heights" w={1063} h={547} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Colour <A>palette</A>
          </>
        }
        lead="A near-monochrome system — rich black, graphite and white — that lets the product glow."
      >
        <Swatches
          minHeight={200}
          items={[
            { name: "Rich black", hex: "#050704" },
            { name: "Graphite", hex: "#444444" },
            { name: "Black", hex: "#000000" },
            { name: "White", hex: "#FFFFFF", dark: true, border: true },
          ]}
        />
      </CaseSection>

      <CaseSection
        title={
          <>
            Type <A>system</A>
          </>
        }
        lead="Roboto — a clean sans-serif in one regular weight for every panel, from headline to fine print."
      >
        <Grid min={420}>
          <div className="flex flex-col gap-4 rounded-card-lg border border-line p-[clamp(24px,4vw,56px)]">
            <span className="eyebrow">Font family · Regular · 1 style</span>
            <p className={`m-0 ${roboto.className} text-[clamp(96px,12vw,180px)] font-normal leading-[0.9] tracking-[-0.03em]`}>roboto</p>
          </div>
          <div className={`flex flex-col justify-center gap-[14px] rounded-card-lg bg-[#050704] p-[clamp(24px,4vw,56px)] text-paper ${roboto.className}`}>
            <span className="text-[32px] tracking-[0.04em]">
              SMART
              <br />
              BLUETOOTH
              <br />
              TRACKER
            </span>
            <span className="break-all text-lg text-line-dashed">
              1234567890
              <br />
              abcdefghijklmnopqrstuvwxyz
            </span>
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Icon <A>system</A>
          </>
        }
        lead="Minimal line icons turn dense specs into quick visual markers."
      >
        <Grid min={160} gap={12}>
          {icons.map((ic) => (
            <div key={ic.src} className="flex flex-col items-center gap-4 rounded-tile border border-line px-4 py-7">
              <div className="flex h-16 items-center">
                <Img src={`${I}/${ic.src}`} alt={ic.alt} w={ic.w} h={ic.h} className="h-14! w-auto!" maxWidth={999} />
              </div>
              <span className="text-center text-sm text-text-2">{ic.alt}</span>
            </div>
          ))}
        </Grid>
      </CaseSection>

      <Band bg="var(--color-ink)" gap={24}>
        <BandHeader
          title={
            <>
              Packaging <A>system</A>
            </>
          }
          lead="From identity to packaging: a sleek, futuristic system where specs become clear markers — functional and precise, yet tactile and personal."
        />
        <div className="rounded-card-lg bg-paper p-[clamp(24px,4vw,56px)]">
          <Img src={`${I}/flat-packaging-artwork-back-panel-with-s-abb0f4`} alt="Flat packaging artwork: back panel with specs and Find My badge, front panel with product" w={998} h={516} />
        </div>
        <div className="rounded-card-lg bg-paper p-[clamp(24px,4vw,56px)]">
          <Img src={`${I}/assembled-box-laid-flat-back-spine-and-f-cf5793`} alt="Assembled box laid flat: back, spine and front" w={905} h={365} />
        </div>
      </Band>

      <CaseSection
        title={
          <>
            In the <A>real world</A>
          </>
        }
        lead="Unboxed, gifted and on the shelf."
      >
        <Grid min={480}>
          <Frame variant="bleed">
            <Img src={`${I}/hands-holding-the-happtag-box-9ff300`} alt="Hands holding the HappTag box" w={636} h={358} full />
          </Frame>
          <Frame variant="bleed">
            <Img src={`${I}/happtag-box-inside-a-premium-gift-case-w-d5c8c3`} alt="HappTag box inside a premium gift case with ribbon" w={615} h={354} full />
          </Frame>
        </Grid>
        <Gap />
        <Frame variant="bleed">
          <Img src={`${I}/several-happtag-boxes-arranged-on-a-whit-ed6df1`} alt="Several HappTag boxes arranged on a white surface" w={1275} h={717} full />
        </Frame>
      </CaseSection>
    </>
  ),
};
