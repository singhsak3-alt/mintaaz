/** The four practices shown on the black "What we do" panel (Home + Services). */
export type ServiceIcon = "brand" | "web" | "growth" | "motion";

export type Service = {
  number: string;
  icon: ServiceIcon;
  title: string;
  text: string;
  tags: string[];
};

export const servicesIntro =
  "Four practices, one team. Hire us for one — or let them work together from strategy to launch.";

export const services: Service[] = [
  {
    number: "01",
    icon: "brand",
    title: "Brand identity",
    text: "Naming, strategy and visual systems that keep every touchpoint consistent and unmistakably yours.",
    tags: ["Logo", "Type", "Voice", "Guidelines"],
  },
  {
    number: "02",
    icon: "web",
    title: "Websites & apps",
    text: "Fast, accessible products designed with you and easy to run after launch.",
    tags: ["UI/UX", "Development", "Mobile", "CMS"],
  },
  {
    number: "03",
    icon: "growth",
    title: "Growth & campaigns",
    text: "Launches and content built around who you're actually talking to — and measured on what matters.",
    tags: ["Strategy", "SEO", "Social", "Email"],
  },
  {
    number: "04",
    icon: "motion",
    title: "3D & motion",
    text: "Renders, visuals and films that make ideas tangible before they exist.",
    tags: ["Products", "Architecture", "Interiors", "Films"],
  },
];

/* ---------------------------------------------------------------------------
   Services page (services.html)
   ------------------------------------------------------------------------ */

export const servicesHero = {
  lead: "Designers, developers and 3D artists under one roof — so the idea you approve is the one that ships.",
};

export const processIntro = {
  text: "Behind every project runs a crew of AI agents — researching, drafting, testing and watching the numbers.",
  strong: "Scroll to run the pipeline; our team signs off every stage.",
};

export type StageIcon = "discover" | "define" | "build" | "launch";

export type PipelineStage = {
  name: string;
  icon: StageIcon;
  headline: string;
  text: string;
  /** Agent log lines; the last one carries the blinking cursor while running */
  log: string[];
  tools: string[];
  humanCall: string;
};

/** Scroll progress at which each stage starts; the 5th value = all signed off. */
export const stageThresholds = [0.03, 0.28, 0.53, 0.78, 0.97];

export const pipelineStages: PipelineStage[] = [
  {
    name: "Discover",
    icon: "discover",
    headline: "Research agents read the room",
    text: "We brief a team of research agents on your market, then sit down with you to separate real signal from noise.",
    log: [
      "› research-agent · crawling competitors & reviews",
      "› synth-agent · clustering interview notes",
      "✓ insight map ready for review",
    ],
    tools: ["Market scan", "Review mining", "Insight clustering"],
    humanCall: "together we choose the problems worth solving.",
  },
  {
    name: "Define",
    icon: "define",
    headline: "Strategy, stress-tested by models",
    text: "Positioning, scope and a fixed plan — with AI simulating how your audience might react before anything is committed.",
    log: [
      "› persona-agent · drafting audience profiles",
      "› flow-agent · mapping journeys & sitemap options",
      "✓ scope and estimate locked",
    ],
    tools: ["Persona drafts", "Flow options", "Naming & voice"],
    humanCall: "every AI persona gets checked against real people.",
  },
  {
    name: "Design & build",
    icon: "build",
    headline: "Generate wide, then craft deep",
    text: "Generative tools open up far more directions than we could sketch by hand. Our designers and developers refine the right one and build it properly.",
    log: [
      "› concept-agent · rendering moodboards & variants",
      "› code-copilot · scaffolding components",
      "› qa-agent · testing every breakpoint",
    ],
    tools: ["Concept generation", "AI-assisted code", "Automated QA"],
    humanCall: "a review with you every week, on real working screens.",
  },
  {
    name: "Launch & grow",
    icon: "launch",
    headline: "Agents stay on watch after launch",
    text: "We ship and hand everything over. Monitoring agents keep checking speed, access and analytics, and flag what to improve next.",
    log: [
      "› audit-agent · accessibility & speed checks",
      "› insight-agent · weekly analytics digest",
      "✓ next experiments queued",
    ],
    tools: ["Perf audits", "Analytics digests", "A/B ideas"],
    humanCall: "a real person stays on call as you grow.",
  },
];

export const aboutBand = {
  title: ["Meet the people ", "behind the work."] as const,
  text: "Our story, what we believe and the team you'll work with.",
};
