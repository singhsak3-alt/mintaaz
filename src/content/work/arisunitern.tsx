import { Accent as A } from "@/components/SectionHeader";
import { CaseSection, Frame, Gap, Grid, HeroFrame, Img, Split, Swatches } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/aris";

function Bleed({ src, alt, w, h, bg }: { src: string; alt: string; w: number; h: number; bg?: string }) {
  return (
    <Frame variant="bleed" radius={24} bg={bg}>
      <Img src={`${I}/${src}`} alt={alt} w={w} h={h} full />
    </Frame>
  );
}

export const arisunitern: CaseStudy = {
  slug: "arisunitern",
  hero: {
    titleSize: "lg",
    tagline: (
      <>
        Building India’s largest <A>infratech platform.</A>
      </>
    ),
    media: (
      <HeroFrame bg="#FFFFFF" border>
        <Img src={`${I}/arisunitern-logo-over-a-soft-city-skylin-8e194b`} alt="ArisUnitern logo over a soft city skyline" w={1420} h={790} full eager />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Client", value: "Arisinfra · ArisUnitern" },
    { label: "Role", value: "Graphic designer" },
    { label: "Scope", value: "Logo, stationery, print, motion" },
    { label: "Industry", value: "Construction · Infratech" },
  ],
  cta: (
    <>
      Ready for a <A>rebrand?</A>
    </>
  ),
  body: (
    <>
      <Split
        eyebrow="Overview"
        title={
          <>
            Simplifying <A>construction.</A>
          </>
        }
      >
        <p className="m-0">
          As graphic designer I helped rebrand Arisinfra — a company simplifying construction through the sale of
          building materials and machinery. The work covered a refreshed identity: a new logo, complete
          stationery, print collateral, motion graphics and animation.
        </p>
      </Split>

      <CaseSection
        title={
          <>
            Brand <A>colours</A>
          </>
        }
        lead="Amber for energy and construction, rust and ocean blue for the rising bars, charcoal for grounding."
      >
        <Swatches
          min={200}
          minHeight={150}
          items={[
            { name: "Amber", hex: "#F4AA2E", dark: true },
            { name: "Rust", hex: "#C25B2B" },
            { name: "Ocean blue", hex: "#1E8AC6" },
            { name: "Charcoal", hex: "#2F3236" },
          ]}
        />
      </CaseSection>

      <CaseSection
        title={
          <>
            Exhibition <A>booth</A>
          </>
        }
        lead="Stall E16 at the NAREDCO Hamethon property expo — standees, signage and screen loops."
      >
        <Bleed src="aris-infra-exhibition-booth-with-standee-384660" alt="Aris Infra exhibition booth with standees and a screen" w={1228} h={690} />
      </CaseSection>

      <CaseSection
        title={
          <>
            Brochure <A>design</A>
          </>
        }
        lead="A bold amber-and-charcoal brochure: “Simplifying real estate” — money, material, management."
      >
        <Grid min={480}>
          <Bleed src="brochure-front-and-back-covers-on-stone-1a6705" alt="Brochure front and back covers on stone" w={614} h={406} />
          <Bleed src="brochure-inner-spread-business-offerings-851046" alt="Brochure inner spread: business offerings and the 5D approach" w={617} h={406} />
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Event <A>posters</A>
          </>
        }
        lead="Proud-sponsor posters announcing the expo, the stall and how to reach the team."
      >
        <Grid min={480}>
          <Bleed src="foil-finish-event-poster-taped-to-a-wall-2ba552" alt="Foil-finish event poster taped to a wall" w={631} h={800} />
          <Bleed src="event-poster-pinned-on-a-street-wall-eb2185" alt="Event poster pinned on a street wall" w={600} h={798} />
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Magazine <A>ad</A>
          </>
        }
        lead="A full-page spread for “100+ years of deep industry experience”."
      >
        <Bleed src="open-magazine-showing-the-arisinfra-spre-312526" alt="Open magazine showing the Arisinfra spread" w={1049} h={782} />
      </CaseSection>

      <CaseSection
        title={
          <>
            Stationery <A>system</A>
          </>
        }
        lead="Envelopes and business cards built on the amber block and the rising-bar mark."
      >
        <Bleed src="amber-envelope-window-envelope-and-busin-316554" alt="Amber envelope, window envelope and business cards" w={1276} h={957} />
      </CaseSection>
      <section className="container-site pt-4">
        <Bleed src="two-standees-our-process-and-our-product-21e816" alt="Two standees: Our Process and Our Products" w={1282} h={1051} bg="#000000" />
      </section>

      <CaseSection
        eyebrow="07 · Merchandise"
        title={
          <>
            Brand <A>merchandise</A>
          </>
        }
        lead="The mark on everyday touchpoints — tape, carry bags, cups and team tees."
      >
        <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] items-stretch gap-4 max-[860px]:grid-cols-1">
          <Img src={`${I}/arisunitern-branded-packing-tape-f8517a`} alt="ArisUnitern branded packing tape" w={613} h={366} full cover />
          <Img src={`${I}/arisunitern-carry-bag-on-blue-abe971`} alt="ArisUnitern carry bag on blue" w={293} h={364} full cover />
          <Img src={`${I}/arisunitern-coffee-cup-7f262e`} alt="ArisUnitern coffee cup" w={272} h={364} full cover />
        </div>
        <Gap />
        <Frame variant="bleed" radius={24} border bg="#FFFFFF">
          <Img src={`${I}/arisunitern-team-t-shirt-on-a-hanger-3fdf67`} alt="ArisUnitern team t-shirt on a hanger" w={1248} h={957} full />
        </Frame>
      </CaseSection>
    </>
  ),
};
