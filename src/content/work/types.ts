import type { Fact } from "@/components/CaseHero";

/**
 * One case study. The shell (breadcrumb, hero, facts, CTA band, Next project)
 * comes from the /work/[slug] template; `body` holds the project's own sections,
 * composed from components/case/primitives.
 */
export type CaseStudy = {
  slug: string;
  hero: {
    /** Overrides the project's title split, e.g. ["Motion ", "Design"] */
    title?: [string, string];
    tagline: React.ReactNode;
    taglineMaxWidth?: number;
    titleSize?: "xl" | "lg";
    /** Hero image / video block under the title */
    media: React.ReactNode;
  };
  facts: Fact[];
  body: React.ReactNode;
  /** Closing CTA heading ("Building an *AI product?*") */
  cta: React.ReactNode;
  /** Open Graph image (public path, with extension) */
  ogImage?: string;
};
