import type { WorkGroup } from "./projects";

/** /work page copy and grouping (from work.html). */

export const workIntro =
  "Products, brands, illustration and motion — each one designed around the people who use it, and built to last after launch.";

export type WorkSection = {
  id: WorkGroup;
  /** Filter chip label */
  chip: string;
  /** Heading: plain part + italic serif part */
  title: [string, string];
  /** Optional mono eyebrow above the heading, as in the reference */
  eyebrow?: string;
  /** Project slugs in display order */
  slugs: string[];
};

export const workSections: WorkSection[] = [
  {
    id: "product",
    chip: "Product / UI UX",
    title: ["Product / ", "UI UX design"],
    slugs: ["happtag", "tenx", "plap", "bookdu", "swash", "prepmyskills", "nexa", "billd", "uax-stake"],
  },
  {
    id: "brand",
    chip: "Branding",
    title: ["Graphic design / ", "Branding"],
    slugs: ["arisunitern", "zave", "happtag-packaging"],
  },
  {
    id: "illus",
    chip: "Illustration",
    title: ["Illustration / ", "Sketching"],
    eyebrow: "(03)",
    slugs: ["illustration", "sketching"],
  },
  {
    id: "motion",
    chip: "Interaction",
    title: ["Interaction / ", "Animation"],
    eyebrow: "(04)",
    slugs: ["interaction"],
  },
];
