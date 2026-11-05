import { Accent as A } from "@/components/SectionHeader";
import { HeroFrame, Img } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/prep";

/** Long-form showcase boards exported from Figma (2880px wide). */
type Board = { id: string; code: string; h: number };
const alt = {
  A: "PREP web dashboard on a laptop, two phone screens of the PREP home and the Start → End design process",
  B: "Meaningful findings, personas, empathy maps, user journey, sitemap, user flow and PREP app screens",
  C: "Visual design: typography, colour palette, grid, UI kit, icons and components",
  D: "Research & Analyst: problems identified and the matching solutions",
};
const path = (kind: keyof typeof alt, id: string) =>
  `${I}/${
    {
      A: "prep-web-dashboard-on-a-laptop-two-phone",
      B: "meaningful-findings-personas-empathy-map",
      C: "visual-design-typography-colour-palette-",
      D: "research-analyst-problems-identified-and",
    }[kind]
  }-${id}`;

const boardsA: Board[] = [
  { id: "54c315", code: "A00", h: 1722 },
  { id: "3268f6", code: "A01", h: 2030 },
];
const boardsD: Board[] = [
  { id: "54a9aa", code: "D00", h: 1900 },
  { id: "ff4b21", code: "D01", h: 1778 },
];
const boardsB: Board[] = [
  { id: "9887b4", code: "B00", h: 1900 },
  { id: "05d2ac", code: "B01", h: 2293 },
  { id: "dc8816", code: "B02", h: 1900 },
  { id: "519aca", code: "B03", h: 2001 },
  { id: "06272d", code: "B04", h: 1900 },
  { id: "d7de56", code: "B05", h: 2112 },
  { id: "376524", code: "B06", h: 1666 },
  { id: "3e9915", code: "B07", h: 2022 },
  { id: "652e1c", code: "B08", h: 1897 },
  { id: "8fa8a8", code: "B09", h: 1900 },
  { id: "bc2a5d", code: "B10", h: 1900 },
  { id: "dfb7c4", code: "B11", h: 1900 },
  { id: "8d3e3d", code: "B12", h: 2283 },
  { id: "6a3ec6", code: "B13", h: 1496 },
  { id: "21148f", code: "B14", h: 1320 },
];
const boardsC: Board[] = [
  { id: "4387e5", code: "C00", h: 1900 },
  { id: "1dc49a", code: "C01", h: 1908 },
  { id: "b308d7", code: "C02", h: 1900 },
  { id: "236742", code: "C03", h: 1910 },
  { id: "955d6d", code: "C04", h: 1900 },
  { id: "7753a6", code: "C05", h: 1762 },
  { id: "b28f0a", code: "C06", h: 2183 },
  { id: "ba8231", code: "C07", h: 1900 },
  { id: "26c28b", code: "C08", h: 1900 },
  { id: "7e09f3", code: "C09", h: 1937 },
  { id: "108e53", code: "C10", h: 2320 },
];

function Boards({ kind, items, first }: { kind: keyof typeof alt; items: Board[]; first?: boolean }) {
  return (
    <>
      {items.map((b, i) => (
        <Img
          key={b.id}
          src={path(kind, b.id)}
          alt={`${alt[kind]} (${b.code})`}
          w={2880}
          h={b.h}
          full
          eager={first && i === 0}
        />
      ))}
    </>
  );
}

const roles = [
  {
    title: "UX Design",
    text: "Designed the end-to-end UX for PediAssess, a mobile-first self-assessment app for pediatricians. Conducted user research, created user flows, wireframes and prototypes, and designed an intuitive interface for assessments, case-based learning and performance tracking, with a focus on usability and clinical efficiency.",
  },
  {
    title: "UI Design",
    text: "Designed a clean, intuitive and mobile-first UI for PediAssess, creating visually consistent interfaces that simplify assessments, case-based learning and performance tracking while enhancing usability and accessibility.",
  },
];

export const plap: CaseStudy = {
  slug: "plap",
  hero: {
    tagline: "Paediatric Learning and Assessment Programme",
    taglineMaxWidth: 400,
    media: (
      <HeroFrame mt={48} radius={28} bg="#3D6EF6">
        <Img
          src={`${I}/plap-paediatric-learning-and-assessment--9ce0a3`}
          alt="PLAP – Paediatric Learning and Assessment Programme logo with the app splash and home screens on two phones"
          w={2882}
          h={1950}
          full
          eager
        />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Client", value: "Paediatric Learning and Assessment Programme" },
    { label: "Role", value: "UI/UX Design" },
    { label: "Timeline", value: "March 2025 – October 2025" },
    {
      label: "Tools",
      value: (
        <Img
          src={`${I}/figma-chatgpt-adobe-illustrator-and-lab-9380ef`}
          alt="Figma, ChatGPT, Adobe Illustrator and Lab"
          w={904}
          h={140}
          className="mx-0! mt-0.5 w-[180px]!"
        />
      ),
    },
  ],
  cta: (
    <>
      Building for <A>busy experts?</A>
    </>
  ),
  body: (
    <>
      <section className="container-site pt-24">
        <h2 className="m-0 text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em]">
          Roles &amp; <A>Responsibilities</A>
        </h2>
        <p className="m-0 mt-6 max-w-[900px] text-lg leading-[1.65] text-text-2">
          I designed PediAssess, a mobile-first self-assessment and clinical readiness app for pediatricians.
          The app helps doctors periodically evaluate their knowledge, diagnostic accuracy and adherence to
          updated pediatric guidelines through structured assessments, case-based questions and performance
          insights.
        </p>
        <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-16 gap-y-10">
          {roles.map((r) => (
            <div key={r.title} className="border-l border-line pl-6">
              <p className="m-0 text-xl font-semibold">{r.title}</p>
              <p className="m-0 mt-3 text-[17px] leading-[1.65] text-text-2">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-label="PREP showcase" className="pt-12">
        <div className="mx-auto max-w-[1440px]">
          <Boards kind="A" items={boardsA} />
        </div>
        <div className="bg-black">
          <div className="mx-auto max-w-[1440px]">
            <Boards kind="D" items={boardsD} />
          </div>
        </div>
        <div className="mx-auto max-w-[1440px]">
          <Boards kind="B" items={boardsB} />
        </div>
        <div className="mx-auto max-w-[1440px] pt-24">
          <Boards kind="C" items={boardsC} />
        </div>
      </section>
    </>
  ),
};
