import type { Cover } from "./projects";

/** Home page copy (from home.html). */

export const homeHero = {
  /** H1 split into plain / italic / plain parts */
  title: ["Imagination, ", "Innovation,", " Distinction."] as const,
  lead: "Brands, websites and motion for teams who want to be remembered.",
  art: {
    src: "/images/home/pencil-rock-hero",
    alt: "A pencil that is half carved wood and half raw black stone, with wood shavings and stone chips around it",
  },
};

/** Indigo strip under the hero */
export const homeMarquee = [
  "Brand identity",
  "Websites & apps",
  "Growth campaigns",
  "3D & motion",
  "Design systems",
];

export const selectedWorkLead =
  "Brands, products and launches we've shaped for ambitious teams.";

export type FeatureCard = {
  slug: string;
  title: string;
  badge: string;
  badgeTone: "light" | "dark";
  tags: string;
  year: string;
  bordered?: boolean;
  cover: Cover;
};

export const selectedWork: FeatureCard[] = [
  {
    slug: "happtag",
    title: "Smarthapps",
    badge: "Product design",
    badgeTone: "light",
    tags: "Product render · 3D · Motion",
    year: "2025",
    cover: {
      kind: "video",
      src: "/images/shared/black-happtag-tracker-rotating-front-and-7dbd2e",
      poster: "/images/shared/black-happtag-tracker-rotating-front-and-bd851e",
      alt: "Black Happtag smart tracker rotating",
    },
  },
  {
    slug: "tenx",
    title: "TenX",
    badge: "Mobile app",
    badgeTone: "dark",
    tags: "Fintech · UI/UX · Mobile app",
    year: "2026",
    bordered: true,
    cover: {
      kind: "image",
      src: "/images/shared/tenx-money-transfer-app-showing-an-aud-t-61a63a",
      alt: "TenX money-transfer app showing an AUD to INR transfer screen on a phone",
    },
  },
  {
    slug: "illustration",
    title: "Illustrations",
    badge: "Print & publishing",
    badgeTone: "dark",
    tags: "Book cover · Illustration · Print",
    year: "2025",
    cover: {
      kind: "image",
      src: "/images/shared/life-prep-stories-and-poems-for-li-l-one-382c65",
      alt: "Life Prep ‘Stories and poems for li’l ones’ book cover for Prepmyskills",
    },
  },
  {
    slug: "plap",
    title: "PLAP",
    badge: "Mobile & web app",
    badgeTone: "light",
    tags: "EdTech · Dashboard · UI/UX",
    year: "2025",
    cover: {
      kind: "image",
      src: "/images/shared/plap-app-splash-and-home-screens-on-two--a183b2",
      alt: "PLAP app splash and home screens on two floating phones",
    },
  },
];

export const homeCta = {
  text: "Tell us where you are and where you want to be. We'll come back within 2 working days with ideas, a plan and an honest estimate.",
};
