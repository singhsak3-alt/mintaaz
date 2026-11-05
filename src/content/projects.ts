/**
 * The project list used by Home (selected work), Work (grid) and the
 * case-study "Next project" loop. Order in this array = Next project order.
 * Add a project here and a matching file in content/work/<slug>.ts.
 */

export type WorkGroup = "product" | "brand" | "illus" | "motion";

export type Cover =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; poster: string; alt: string };

export type Project = {
  slug: string;
  /** Display name on cards */
  name: string;
  /** Name split for the "Next project" title: plain part + italic serif part */
  title: [string, string];
  /** Case-study eyebrow tags, e.g. "Fintech · UI/UX · Mobile app" */
  tags: string;
  group: WorkGroup;
  /** One paragraph shown on the Work grid */
  summary: string;
  /** Discipline pills on the Work grid */
  disciplines: string[];
  cover: Cover;
};

const happtagVideo = {
  src: "/images/shared/black-happtag-tracker-rotating-front-and-7dbd2e",
  poster: "/images/shared/black-happtag-tracker-rotating-front-and-bd851e",
};

export const projects: Project[] = [
  {
    slug: "happtag",
    name: "Happtag",
    title: ["Happ", "tag"],
    tags: "Product · UI/UX · Branding",
    group: "product",
    summary:
      "Tag it and stop forgetting. A mobile app that helps people keep track of the things they use every day, with a friendly, simple interface and a fresh brand identity.",
    disciplines: ["UI/UX design", "App design", "Branding"],
    cover: { kind: "video", ...happtagVideo, alt: "Black Happtag smart tracker rotating" },
  },
  {
    slug: "tenx",
    name: "TenX",
    title: ["Ten", "X"],
    tags: "Fintech · UI/UX · Mobile app",
    group: "product",
    summary:
      "A money exchange platform that makes sending and converting money feel simple, transparent and secure, with a clear flow that guides every step of a transfer.",
    disciplines: ["UI/UX design", "App design", "Branding"],
    cover: {
      kind: "image",
      src: "/images/shared/tenx-money-transfer-app-showing-an-aud-t-61a63a",
      alt: "TenX app showing an AUD to INR transfer on a phone",
    },
  },
  {
    slug: "plap",
    name: "PLAP",
    title: ["PL", "AP"],
    tags: "EdTech · UI/UX · Mobile & web app",
    group: "product",
    summary:
      "App and desktop experience for the American Academy of Pediatrics, helping pediatric professionals learn, practise and keep up with their field through an easy-to-navigate interface.",
    disciplines: ["UI/UX design", "App design", "Desktop app"],
    cover: {
      kind: "image",
      src: "/images/shared/plap-app-splash-and-home-screens-on-two--a183b2",
      alt: "PLAP app splash and home screens on two floating phones",
    },
  },
  {
    slug: "illustration",
    name: "Illustration",
    title: ["Illus", "tration"],
    tags: "Illustration · Storybook · Brand art",
    group: "illus",
    summary:
      "Digital illustrations exploring colour, character and storytelling, created for brands, products and publishing.",
    disciplines: ["Illustration"],
    cover: {
      kind: "image",
      src: "/images/shared/life-prep-stories-and-poems-for-li-l-one-382c65",
      alt: "Illustrated children’s book cover, Stories and poems for li’l ones",
    },
  },
  {
    slug: "bookdu",
    name: "BOOKDU",
    title: ["BOOK", "du"],
    tags: "SaaS · UI/UX · Mobile app",
    group: "product",
    summary:
      "A SaaS platform for discovering, reading and tracking digital books, pairing a clean reading experience with smart tools that help readers build and keep their habits.",
    disciplines: ["UI/UX design", "App design", "Branding"],
    cover: { kind: "image", src: "/images/work/bookdu-reading-app-on-a-phone-9a041d", alt: "BOOKDU reading app on a phone" },
  },
  {
    slug: "swash",
    name: "Swash",
    title: ["Sw", "ash"],
    tags: "HealthTech · Product design · Desktop app",
    group: "product",
    summary:
      "A desktop application for monitoring breathing quality. The design turns complex health data into calm, clear dashboards that users and clinical teams understand at a glance.",
    disciplines: ["Product design", "UI/UX design", "Desktop app"],
    cover: {
      kind: "image",
      src: "/images/work/swash-breathing-quality-dashboard-on-a-d-7b31d3",
      alt: "Swash breathing-quality dashboard on a desktop screen",
    },
  },
  {
    slug: "nexa",
    name: "NEXA",
    title: ["NE", "xa"],
    tags: "AI platform · SaaS · Web app",
    group: "product",
    summary:
      "An AI platform where teams research, write and create with multiple AI models in one place, with complex capabilities simplified into a clean, conversation-first interface.",
    disciplines: ["Product design", "UI/UX design", "Desktop app"],
    cover: { kind: "image", src: "/images/work/nexa-ai-platform-shown-on-two-tablets-f68cca", alt: "NEXA AI platform shown on two tablets" },
  },
  {
    slug: "prepmyskills",
    name: "PrepMySkills",
    title: ["PrepMy", "Skills"],
    tags: "EdTech for kids · UI/UX · Tablet app",
    group: "product",
    summary:
      "An app where kids get to know and explore the world. Playful visuals and simple interactions keep learning engaging for children and easy for parents and teachers.",
    disciplines: ["UI/UX design", "Tablet app"],
    cover: {
      kind: "image",
      src: "/images/work/prepmyskills-kids-learning-app-on-a-tabl-5026ba",
      alt: "PrepMySkills kids learning app on a tablet with a stylus",
    },
  },
  {
    slug: "zave",
    name: "Zave",
    title: ["Za", "ve"],
    tags: "Branding · Logo · Fintech",
    group: "brand",
    summary:
      "Brand identity and stationery for Zave, including the logo, colour palette and business cards that carry the brand into print.",
    disciplines: ["Graphic design", "Branding"],
    cover: { kind: "image", src: "/images/work/zave-business-cards-2d60a2", alt: "Zave business cards" },
  },
  {
    slug: "billd",
    name: "BILLD",
    title: ["BIL", "ld"],
    tags: "Website landing page · Visual design",
    group: "product",
    summary:
      "Product and UI/UX design for the BILLD billing platform: a clear structure, a consistent visual language and an interface that makes everyday tasks quick and straightforward.",
    disciplines: ["Product design", "UI/UX design"],
    cover: {
      kind: "image",
      src: "/images/work/billd-billing-website-on-a-desktop-monit-41a9b2",
      alt: "BILLD billing website on a desktop monitor",
    },
  },
  {
    slug: "uax-stake",
    name: "UAX Stake",
    title: ["UAX ", "Stake"],
    tags: "Web3 · Website landing page · Visual design",
    group: "product",
    summary:
      "Product and UI/UX design for the UAX staking platform, making staking easy to understand with clear information, confident visuals and a simple path to a first stake.",
    disciplines: ["Product design", "UI/UX design"],
    cover: { kind: "image", src: "/images/work/uax-stake-3d-coin-visual-on-purple-3b31a3", alt: "UAX Stake 3D coin visual on purple" },
  },
  {
    slug: "happtag-packaging",
    name: "Happtag Packaging",
    title: ["Happtag ", "Packaging"],
    tags: "Packaging · Graphic design · Print",
    group: "brand",
    summary:
      "Packaging that turns a product into a shelf-ready experience, combining brand identity, clear information and a distinctive look that stands out in store.",
    disciplines: ["Packaging", "Graphic design"],
    cover: {
      kind: "image",
      src: "/images/work/black-happtag-smart-bluetooth-tracker-bo-327f7e",
      alt: "Black Happtag smart Bluetooth tracker box",
    },
  },
  {
    slug: "arisunitern",
    name: "ArisUnitern",
    title: ["Aris", "Unitern"],
    tags: "Rebrand · Graphic design · Print",
    group: "brand",
    summary:
      "Logo and brand identity for ArisUnitern: a confident, modern mark and a visual system that works across digital and print touchpoints.",
    disciplines: ["Graphic design", "Branding"],
    cover: {
      kind: "image",
      src: "/images/work/arisunitern-logo-over-a-city-skyline-686ac2",
      alt: "ArisUnitern logo over a city skyline",
    },
  },
  {
    slug: "sketching",
    name: "Sketching",
    title: ["Sketch", "ing"],
    tags: "Sketching · Concept art",
    group: "illus",
    summary:
      "Hand sketches and concept drawings used to explore ideas quickly, from early product thinking to character and composition studies.",
    disciplines: ["Sketching"],
    cover: {
      kind: "image",
      src: "/images/work/collage-of-character-and-vehicle-sketche-307c2e",
      alt: "Collage of character and vehicle sketches",
    },
  },
  {
    slug: "interaction",
    name: "Interaction",
    title: ["Inter", "action"],
    tags: "Motion design · Interaction · Animation",
    group: "motion",
    summary:
      "Interaction design and animation that brings interfaces to life with purposeful motion, smooth transitions and small details that make products feel polished.",
    disciplines: ["Interaction design", "Animation"],
    cover: {
      kind: "video",
      src: "/images/work/animated-gift-cards-fanning-out-above-a--ce7636",
      poster: "/images/work/animated-gift-cards-fanning-out-above-a--0c3cbc",
      alt: "Animated gift cards fanning out above a globe",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Next project in the loop (last wraps to first). */
export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
