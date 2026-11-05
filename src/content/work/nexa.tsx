import { Inter } from "next/font/google";
import { Accent as A } from "@/components/SectionHeader";
import { Body, Card, CaseSection, Frame, Gap, Grid, HeroFrame, Img, List, Steps, Swatches } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

/** Inter is the product typeface shown in the specimen. */
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const I = "/images/nexa";
const VIOLET = "#7B00FF";
const MAGENTA = "#FB21FF";

const features: { title: string; text: string; icon: React.ReactNode }[] = [
  {
    title: "Courses",
    text: "Create engaging, structured, personalised courses from a topic, objectives or source material — modules, lessons, activities and assessments, ready to review and refine.",
    icon: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </>
    ),
  },
  {
    title: "Teaching resources & guides",
    text: "Generate lesson plans, study guides, discussion material, worksheets and assessments that match each teaching style and learner need.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
      </>
    ),
  },
  {
    title: "Content analyzer",
    text: "Check learning content for clarity, accuracy and alignment with objectives — spotting gaps, inconsistencies and readability issues with actionable fixes.",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
  },
  {
    title: "Translations",
    text: "Translate courses and resources into many languages while keeping meaning, tone, terminology and cultural context intact.",
    icon: (
      <>
        <path d="M4 5h8M8 3v2M5 9c1.5 3 4 5 7 6M11 5c-1 4-4 7-7 8" />
        <path d="m13 21 4-9 4 9M14.5 18h5" />
      </>
    ),
  },
];

const steps = [
  { n: 1, name: "Project info", src: "course-creation-step-1-project-info-69c525", w: 630, h: 409 },
  { n: 2, name: "Guidelines", src: "course-creation-step-2-guidelines-b7c272", w: 631, h: 409 },
  { n: 3, name: "Knowledge base", src: "course-creation-step-3-knowledge-base-fbdbfa", w: 630, h: 409 },
  { n: 4, name: "Learning objective", src: "course-creation-step-4-learning-objectiv-412c72", w: 628, h: 408 },
  { n: 5, name: "Course structure", src: "course-creation-step-5-course-structure-eaf4ba", w: 634, h: 412 },
  { n: 6, name: "Content", src: "course-creation-step-6-content-712c98", w: 629, h: 409 },
];

const typeScale = [
  { sample: "Aa", size: 80, weight: 700, spec: "Bold — 80 px" },
  { sample: "Aa", size: 60, weight: 700, spec: "Bold — 60 px" },
  { sample: "Create learning", size: 24, weight: 500, spec: "Medium — 24 px" },
  { sample: "Amplify knowledge with AI", size: 16, weight: 400, spec: "Regular — 16 px" },
];

const Badge = ({ children, bg, fg }: { children: React.ReactNode; bg: string; fg?: string }) => (
  <span className="inline-block self-start rounded-pill px-[14px] py-1.5 text-sm font-semibold" style={{ background: bg, color: fg }}>
    {children}
  </span>
);

export const nexa: CaseStudy = {
  slug: "nexa",
  hero: {
    tagline: (
      <>
        Create learning. <A>Amplify knowledge.</A>
      </>
    ),
    media: (
      <HeroFrame bg="#111111">
        <Img src={`${I}/nexa-home-and-login-screens-on-two-lapto-b7ae5e`} alt="NEXA home and login screens on two laptops" w={1440} h={755} full eager />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Project type", value: "Website design · UI/UX design" },
    { label: "Category", value: "AI platform · SaaS · Web app" },
    { label: "Tools", value: "Figma, Adobe Photoshop" },
    { label: "Location · Year", value: "Bengaluru, India · 2026" },
  ],
  cta: (
    <>
      Building an <A>AI product?</A>
    </>
  ),
  body: (
    <>
      <section className="container-site pt-32">
        <Grid min={420}>
          <Card bg="#0E0B1A" fg="#FFFFFF" eyebrow="Client requirement" eyebrowColor="#B9A6E8">
            <p className="m-0 text-[clamp(24px,2.4vw,34px)] font-semibold leading-[1.2] tracking-[-0.025em]">
              “We need an integrated AI platform that lets our team{" "}
              <span className="serif-accent" style={{ color: MAGENTA }}>
                research, write and generate content
              </span>{" "}
              without switching between tools.”
            </p>
          </Card>
          <Card eyebrow="About the project">
            <Body size={18} color="var(--color-text-1)">
              A modern landing and product concept for an AI platform that helps people research, write and create
              smarter with multiple AI models in one place. The goal: a clean, intuitive, conversion-focused
              interface that turns complex AI capability into an easy, engaging experience.
            </Body>
          </Card>
        </Grid>
        <Gap />
        <Frame>
          <Img src={`${I}/nexa-home-screen-on-an-imac-what-s-on-yo-99d1dd`} alt="NEXA home screen on an iMac: What’s on your mind today?" w={1033} h={845} />
        </Frame>
      </section>

      <CaseSection
        title={
          <>
            Road map &amp; <A>timeline</A>
          </>
        }
        lead="Three phases from research to a presentation-ready design system."
      >
        <Steps
          min={260}
          gap={32}
          items={[
            { label: "Phase 01", title: "Discovery & strategy", tags: ["Market analysis", "User mapping", "AI logic & strategy"] },
            { label: "Phase 02", title: "Architecture & design", tags: ["Information architecture", "Complex wireframing", "High-fidelity UI design"] },
            { label: "Phase 03", title: "Final presentation", tags: ["Design documentation", "3D assets & icons", "Case presentation"] },
          ]}
        />
      </CaseSection>

      <CaseSection
        title={
          <>
            Problems &amp; <A>solutions</A>
          </>
        }
        lead="From scattered tools to one focused workspace."
      >
        <Grid min={420}>
          <Card>
            <Badge bg="#FDE7FF" fg="#9B0FA0">
              Problem
            </Badge>
            <Body size={17} color="var(--color-text-1)">
              Many AI platforms have complex interfaces, scattered tools and a poor experience. Switching between
              tools for writing, research and content creation kills productivity.
            </Body>
            <List
              size={16}
              items={["Difficult navigation between AI tools", "No unified workspace", "Overwhelming interface design", "Inefficient content-creation workflow"]}
            />
          </Card>
          <Card bg={VIOLET} fg="#FFFFFF">
            <Badge bg="rgba(255,255,255,.18)">Solution</Badge>
            <Body size={17} color="#F1E6FF">
              A user-centred SaaS interface that simplifies workflows and puts every AI tool within easy reach —
              focused on clarity, accessibility and speed.
            </Body>
            <List
              size={16}
              color="#F1E6FF"
              items={[
                "Clean, modern SaaS interface",
                "Smart card-based feature layout",
                "Integrated AI tools in one platform",
                "Clear hierarchy and improved navigation",
                "Minimal design for better usability",
              ]}
            />
          </Card>
        </Grid>
        <Gap />
        <Frame variant="bleed">
          <Img src={`${I}/course-creation-screen-on-a-tablet-over--466c9d`} alt="Course creation screen on a tablet over violet" w={1332} h={1015} full />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Typography &amp; <A>colour</A>
          </>
        }
        lead="Inter’s modernist precision anchors an AI-centric product — complex data stays readable with a premium, forward-looking feel."
      >
        <Grid min={420}>
          <Card eyebrow="Primary typeface" gap={20}>
            <p
              className={`m-0 bg-clip-text ${inter.className} text-[clamp(96px,12vw,180px)] font-bold leading-[0.85] tracking-[-0.05em] text-transparent`}
              style={{ backgroundImage: `linear-gradient(90deg, ${VIOLET}, ${MAGENTA})` }}
            >
              Inter
            </p>
            <p className="m-0 text-[15px] leading-[1.6] text-text-3">0123456789 · Aa Bb Cc Dd Ee Ff Gg</p>
          </Card>
          <Card justify="center" gap={0}>
            {typeScale.map((t) => (
              <div key={t.spec} className="flex items-baseline justify-between gap-4 border-t border-line py-[14px]">
                <span
                  className={`${inter.className} leading-[1.05] tracking-[-0.02em]`}
                  style={{ fontSize: t.size, fontWeight: t.weight }}
                >
                  {t.sample}
                </span>
                <span className="eyebrow whitespace-nowrap">{t.spec}</span>
              </div>
            ))}
          </Card>
        </Grid>
        <Gap />
        <Swatches
          inset="dark"
          items={[
            { name: "Violet", hex: VIOLET, note: "Primary · CTAs" },
            { name: "Magenta", hex: MAGENTA, note: "Accent · highlights" },
            { name: "Ink", hex: "#383E4B", note: "Text & UI" },
            { name: "Mist", hex: "#F9FAFB", note: "Surfaces", dark: true },
          ]}
        />
      </CaseSection>

      <CaseSection
        title={
          <>
            Smarter features for <A>faster execution</A>
          </>
        }
        lead="Access the leading AI chat models in one place — compare answers, switch models instantly, chat with any PDF and translate with natural accuracy."
      >
        <Grid min={280}>
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-[14px] rounded-card border border-line bg-paper p-7 transition-[border-color,transform,box-shadow] duration-[250ms] hover:-translate-y-1 hover:border-[#7B00FF] hover:shadow-[0_18px_40px_-20px_rgba(123,0,255,.45)]"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-inner bg-[#F3E8FF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={VIOLET} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
              </span>
              <p className="m-0 text-[22px] font-semibold tracking-[-0.02em]">{f.title}</p>
              <p className="m-0 text-[15px] leading-[1.6] text-text-3">{f.text}</p>
            </div>
          ))}
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Course creation <A>flow</A>
          </>
        }
        lead="Six guided steps with an AI assistant alongside — from project info to a complete, previewable course."
      >
        <Grid min={520}>
          {steps.map((s) => (
            <figure key={s.n} className="m-0 flex flex-col overflow-hidden rounded-card border border-line bg-paper">
              <div className="flex items-center gap-2.5 border-b border-line-faint px-[18px] py-[14px]">
                <span className="inline-flex size-[26px] items-center justify-center rounded-pill text-[13px] font-semibold text-paper" style={{ background: VIOLET }}>
                  {s.n}
                </span>
                <figcaption className="text-[15px] font-semibold">{s.name}</figcaption>
              </div>
              <Img src={`${I}/${s.src}`} alt={`Course creation step ${s.n}: ${s.name}`} w={s.w} h={s.h} />
            </figure>
          ))}
        </Grid>
        <Gap />
        <Frame caption="Source content & course preview">
          <Img src={`${I}/source-content-and-course-preview-side-b-bb5c1b`} alt="Source content and course preview side by side" w={1266} h={822} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="06 · Showcase"
        title={
          <>
            Final <A>screens</A>
          </>
        }
        lead="Login and home on tablet — the NEXA brand and the AI workspace side by side."
      >
        <Frame>
          <Img src={`${I}/nexa-login-and-home-screens-on-two-ipads-f73c33`} alt="NEXA login and home screens on two iPads" w={1412} h={1080} />
        </Frame>
      </CaseSection>
    </>
  ),
};
