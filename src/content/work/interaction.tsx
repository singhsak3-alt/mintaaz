import { Accent as A } from "@/components/SectionHeader";
import { CaseSection, FeatureRow, Grid, HeroFrame, Split } from "@/components/case/primitives";
import { ZoomVideo } from "@/components/case/ZoomVideo";
import type { CaseStudy } from "./types";

const I = "/images/interaction";
const CARD_BG = "#FAFBFD";

const explainers = [
  {
    src: "animated-browser-showing-gift-cards-a-vo-4d6b70",
    poster: "animated-browser-showing-gift-cards-a-vo-a98e28",
    label: "Animated browser showing gift cards, a voucher and a drifting hot-air balloon",
    w: 1892,
    h: 964,
    max: "max-w-[946px]",
    eyebrow: "Product offerings",
    title: "Rewards in the browser",
    text: "The complete range of product offerings in an engaging browser interface — gift cards fan out, a voucher tears, the hot-air balloon drifts — creating a clear, visually compelling experience.",
  },
  {
    src: "animated-ecosystem-linking-web-mobile-de-6cfc5b",
    poster: "animated-ecosystem-linking-web-mobile-de-fd587f",
    label: "Animated ecosystem linking web, mobile, desktop and messaging apps",
    w: 2610,
    h: 1152,
    max: "max-w-[1305px]",
    eyebrow: "Connected ecosystem",
    title: "Web, mobile & messaging",
    text: "An animated, connected product ecosystem: transitions between web and mobile, cloud technology and messaging tools, with moving connection lines and floating interface elements showing how users explore, interact and stay connected.",
  },
  {
    src: "animated-gifting-journey-from-platform-t-b0931f",
    poster: "animated-gifting-journey-from-platform-t-c46383",
    label: "Animated gifting journey from platform to recipients",
    w: 2670,
    h: 780,
    max: "max-w-[1335px]",
    eyebrow: "Digital gifting",
    title: "From platform to person",
    text: "A digital gifting and rewards journey — gift cards and rewards delivered seamlessly through a connected platform, from processing to personalised gifting and customer engagement.",
  },
];

const valueProps = [
  { src: "animated-icon-largest-global-catalog-265557", poster: "animated-icon-largest-global-catalog-2aa39c", label: "Animated icon: Largest global catalog", w: 546, h: 618, title: "Largest global catalog", text: "1500+ brands in over 120 countries" },
  { src: "animated-icon-turnaround-time-58e107", poster: "animated-icon-turnaround-time-bc5359", label: "Animated icon: Turnaround time", w: 522, h: 466, title: "Turnaround time", text: "Fast, reliable delivery worldwide" },
  { src: "animated-icon-best-margins-ba82d5", poster: "animated-icon-best-margins-efa72b", label: "Animated icon: Best margins", w: 584, h: 484, title: "Best margins", text: "Lowest operating cost" },
  { src: "animated-icon-global-payments-6236df", poster: "animated-icon-global-payments-d76077", label: "Animated icon: Global payments", w: 536, h: 698, title: "Global payments", text: "One solution, every currency" },
];

const hover =
  "transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_-24px_rgba(67,56,202,.45)]";

export const interaction: CaseStudy = {
  slug: "interaction",
  hero: {
    title: ["Motion ", "Design"],
    titleSize: "lg",
    tagline: (
      <>
        Illustrations built <A>to move.</A>
      </>
    ),
    media: (
      <HeroFrame bg="#EEF4FB" padding="clamp(24px, 4vw, 56px)">
        <ZoomVideo
          src={`${I}/animated-codematrix-service-hub-mobile-m-e6e60f`}
          poster={`${I}/animated-codematrix-service-hub-mobile-m-05663b`}
          label="Animated Codematrix service hub: mobile, microservices, web, UI/UX, DevOps, e-commerce and AI/ML around a central core"
          w={1714}
          h={1318}
          frameBg="#EEF4FB"
          videoClass="mx-auto block h-auto w-full max-w-[900px]"
        />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Discipline", value: "Motion & interaction design" },
    { label: "Clients", value: "Codematrix · Vananam Rewards" },
    { label: "Deliverables", value: "Animated illustrations, explainers" },
    { label: "Use", value: "Websites, product pages, pitch" },
  ],
  cta: (
    <>
      Want your product <A>to move?</A>
    </>
  ),
  body: (
    <>
      <Split
        eyebrow="Codematrix"
        title={
          <>
            One core, <A>every capability.</A>
          </>
        }
      >
        <p className="m-0">
          Codematrix provides end-to-end digital technology solutions — UI/UX design, web and mobile development,
          e-commerce, microservices, DevOps and AI/ML. The hub animation brings these capabilities together around
          a single spinning core, showing how they combine into scalable, user-focused products.
        </p>
      </Split>

      <CaseSection
        title={
          <>
            Animated <A>explainers</A>
          </>
        }
        lead="Three illustrations for Vananam Rewards, each designed to animate on the product site."
      >
        <div className="flex flex-col gap-[72px]">
          {explainers.map((e, i) => (
            <FeatureRow
              key={e.title}
              reverse={i % 2 === 1}
              eyebrow={e.eyebrow}
              title={e.title}
              text={e.text}
              media={
                <div className={`flex items-center overflow-hidden rounded-card-lg border border-line p-[clamp(24px,4vw,56px)] ${hover}`} style={{ background: CARD_BG }}>
                  <ZoomVideo
                    src={`${I}/${e.src}`}
                    poster={`${I}/${e.poster}`}
                    label={e.label}
                    w={e.w}
                    h={e.h}
                    frameBg={CARD_BG}
                    videoClass={`mx-auto block h-auto w-full ${e.max}`}
                  />
                </div>
              }
            />
          ))}
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Value <A>props</A>
          </>
        }
        lead="Four spot animations that explain the platform at a glance."
      >
        <Grid min={240}>
          {valueProps.map((v) => (
            <div key={v.title} className={`flex flex-col items-center gap-[18px] rounded-card border border-line bg-paper p-7 text-center ${hover}`}>
              <div className="flex h-[170px] items-center">
                <ZoomVideo
                  src={`${I}/${v.src}`}
                  poster={`${I}/${v.poster}`}
                  label={v.label}
                  w={v.w}
                  h={v.h}
                  inline
                  videoClass="block h-40 w-auto max-w-full"
                />
              </div>
              <div>
                <p className="m-0 text-[19px] font-semibold tracking-[-0.02em]">{v.title}</p>
                <p className="m-0 mt-1.5 text-sm text-text-3">{v.text}</p>
              </div>
            </div>
          ))}
        </Grid>
      </CaseSection>
    </>
  ),
};
