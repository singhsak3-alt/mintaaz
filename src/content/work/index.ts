import type { CaseStudy } from "./types";
import { happtag } from "./happtag";
import { tenx } from "./tenx";
import { plap } from "./plap";
import { illustration } from "./illustration";
import { bookdu } from "./bookdu";
import { swash } from "./swash";
import { nexa } from "./nexa";
import { prepmyskills } from "./prepmyskills";
import { zave } from "./zave";
import { billd } from "./billd";
import { uaxStake } from "./uax-stake";
import { happtagPackaging } from "./happtag-packaging";
import { arisunitern } from "./arisunitern";
import { sketching } from "./sketching";
import { interaction } from "./interaction";

/** Every case study by slug. Add new ones here and in content/projects.ts. */
export const caseStudies: Record<string, CaseStudy> = Object.fromEntries(
  [
    happtag, tenx, plap, illustration, bookdu, swash, nexa, prepmyskills,
    zave, billd, uaxStake, happtagPackaging, arisunitern, sketching, interaction,
  ].map((c) => [c.slug, c]),
);
