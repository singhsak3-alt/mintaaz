import { Accent as A } from "@/components/SectionHeader";
import { CaseSection, Frame, Gap, Grid, HeroFrame, Img, Split } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/sketching";

type Sketch = { src: string; w: number; h: number };

const vehicles: Sketch[] = [
  { src: "vehicle-sketch-1-c9db39", w: 308, h: 206 },
  { src: "vehicle-sketch-2-e77f5c", w: 178, h: 206 },
  { src: "vehicle-sketch-3-4617a4", w: 240, h: 180 },
  { src: "vehicle-sketch-4-f87703", w: 253, h: 206 },
  { src: "vehicle-sketch-5-21c8ff", w: 240, h: 136 },
  { src: "vehicle-sketch-6-b25716", w: 230, h: 206 },
  { src: "vehicle-sketch-7-28e65e", w: 308, h: 284 },
  { src: "vehicle-sketch-8-504b63", w: 240, h: 196 },
  { src: "vehicle-sketch-9-fc04a9", w: 176, h: 206 },
  { src: "vehicle-sketch-10-6490c6", w: 372, h: 165 },
  { src: "vehicle-sketch-11-a976e1", w: 308, h: 167 },
  { src: "vehicle-sketch-12-ba56a1", w: 219, h: 234 },
  { src: "vehicle-sketch-13-c26084", w: 326, h: 221 },
  { src: "vehicle-sketch-14-5c2fa6", w: 220, h: 120 },
  { src: "vehicle-sketch-15-2372e0", w: 326, h: 191 },
  { src: "vehicle-sketch-16-5324fe", w: 326, h: 254 },
  { src: "vehicle-sketch-17-0640ce", w: 244, h: 253 },
];

const characters: Sketch[] = [
  { src: "character-sketch-1-1baff0", w: 597, h: 433 },
  { src: "character-sketch-2-15ef0d", w: 253, h: 468 },
  { src: "character-sketch-3-1925e0", w: 625, h: 630 },
  { src: "character-sketch-4-13088f", w: 611, h: 611 },
  { src: "character-sketch-5-17f62f", w: 609, h: 523 },
  { src: "character-sketch-6-7ce120", w: 347, h: 438 },
  { src: "character-sketch-7-10d405", w: 394, h: 286 },
  { src: "character-sketch-8-1c95b5", w: 333, h: 406 },
  { src: "character-sketch-9-089991", w: 268, h: 462 },
  { src: "character-sketch-10-2d5e97", w: 594, h: 634 },
  { src: "character-sketch-11-bec079", w: 611, h: 619 },
];

const quick: Sketch[] = [
  { src: "quick-study-sketch-1e2953", w: 278, h: 221 },
  { src: "quick-study-sketch-a0f168", w: 173, h: 213 },
  { src: "quick-study-sketch-246783", w: 117, h: 216 },
  { src: "quick-study-sketch-e3708f", w: 232, h: 234 },
];

/** Three-column masonry; one column on phones. */
function Masonry({ items, label }: { items: Sketch[]; label: (i: number) => string }) {
  return (
    <div className="columns-3 gap-4 max-[760px]:columns-1">
      {items.map((s, i) => (
        <figure key={s.src} className="m-0 mb-4 break-inside-avoid overflow-hidden rounded-tile border border-line bg-paper">
          <Img src={`${I}/${s.src}`} alt={label(i)} w={s.w} h={s.h} full />
        </figure>
      ))}
    </div>
  );
}

export const sketching: CaseStudy = {
  slug: "sketching",
  hero: {
    tagline: (
      <>
        Every great idea <A>starts on paper.</A>
      </>
    ),
    media: (
      <HeroFrame bg="radial-gradient(90% 100% at 50% 40%, #1E1E1E 0%, #000000 70%)" padding="clamp(32px, 5vw, 72px)">
        <Img src={`${I}/white-line-sketch-of-a-motorbike-on-blac-792483`} alt="White line sketch of a motorbike on black" w={658} h={474} maxWidth={760} eager />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Discipline", value: "Sketching · Concept art" },
    { label: "Mediums", value: "Pencil, ink, marker, digital" },
    { label: "Subjects", value: "Vehicles, bikes, characters" },
    { label: "Use", value: "Ideation for product & illustration" },
  ],
  cta: (
    <>
      Got an idea <A>to sketch out?</A>
    </>
  ),
  body: (
    <>
      <Split
        eyebrow="Approach"
        title={
          <>
            Think with <A>the hand.</A>
          </>
        }
      >
        <p className="m-0">
          Hand sketches and concept drawings are how ideas are explored quickly — from early product thinking to
          vehicle forms, character design and composition studies. Loose lines first, then structure, then a
          direction worth taking to the screen.
        </p>
      </Split>

      <CaseSection
        title={
          <>
            Early <A>ideas</A>
          </>
        }
        lead="Quick studies of people, products and moments — the first pass before any pixels."
      >
        <Frame>
          <Img src={`${I}/sketches-of-people-using-vr-headsets-and-487d1b`} alt="Sketches of people using VR headsets and tablets" w={1238} h={471} />
        </Frame>
        <Gap />
        <Grid min={420}>
          <Frame variant="bleed" radius={24} bg="#F2F2F2">
            <Img src={`${I}/ink-portrait-sketch-on-grid-paper-37b501`} alt="Ink portrait sketch on grid paper" w={521} h={640} full />
          </Frame>
          <div className="grid grid-cols-2 gap-4">
            {quick.map((q) => (
              <div key={q.src} className="flex items-center overflow-hidden rounded-tile border border-line bg-paper p-3">
                <Img src={`${I}/${q.src}`} alt="Quick study sketch" w={q.w} h={q.h} />
              </div>
            ))}
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Vehicles &amp; <A>motorbikes</A>
          </>
        }
        lead="Cars, bikes and concept machines — perspective, proportion and stance in pen, pencil and marker."
      >
        <Masonry items={vehicles} label={(i) => `Vehicle sketch ${i + 1}`} />
      </CaseSection>

      <CaseSection
        title={
          <>
            Character <A>design</A>
          </>
        }
        lead="Silhouettes, gesture and expression — from shape blocking to finished line."
      >
        <Masonry items={characters} label={(i) => `Character sketch ${i + 1}`} />
      </CaseSection>
    </>
  ),
};
