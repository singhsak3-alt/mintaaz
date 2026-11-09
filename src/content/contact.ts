import type { Faq } from "@/components/FaqAccordion";

/** Contact page copy (contact.html). Text in [brackets] is placeholder until supplied. */

export const contactIntro =
  "New project or just a hello — pick one and we'll take it from there.";

export const replyNote = "We reply within two working days.";
export const sentNote = "Thanks — we'll be in touch soon.";

export const formTabs = [
  { id: "project", label: "Start a project", submit: "Send project brief" },
  { id: "hi", label: "Say hi", submit: "Send message" },
] as const;

export type FormKind = (typeof formTabs)[number]["id"];

export const needs = ["Brand identity", "Website", "App / product", "Campaign", "3D & renders", "Motion"];
export const budgets = ["Under ₹5L", "₹5–15L", "₹15–40L", "₹40L+"];

/**
 * "Download company deck" section on the Contact page, under the form.
 * Drop the PDF at public/downloads/mintaaz-company-deck.pdf and the cover at
 * public/images/contact/company-deck-cover.(webp|png|jpg); until then the cover
 * shows a placeholder and the button shows "Deck coming soon".
 */
export const companyDeck = {
  title: ["Download company ", "deck"] as const,
  text: "Who we are, how we work and a look at selected projects, in one short PDF you can share with your team.",
  file: "/downloads/mintaaz-company-deck.pdf",
  fileName: "Mintaaz-company-deck.pdf",
  /** Thumbnail: a closed hardcover with this first deck page sliding out of it. */
  cover: { src: "/images/contact/company-deck-cover", alt: "Cover of the Mintaaz company deck" },
  /** Small foil line on the book cover */
  coverLabel: "Company deck · 2026",
};

export const studio = {
  callTitle: ["Rather talk it ", "through?"] as const,
  callText: "Grab a free 20-minute intro call with our founder.",
  // Swap for a Calendly / Cal.com link when available.
  callHref: "mailto:sarah@mintaaz.com?subject=Intro%20call",
  address: ["3rd Floor, 806, 27th Main Rd, 1st Sector, HSR Layout", "Bengaluru, Karnataka 560102"],
};

export const faqs: Faq[] = [
  {
    q: "What does a typical project cost?",
    a: "It depends on scope. We price per project after a short discovery call — [add your starting price or ranges here].",
  },
  {
    q: "How soon can you start?",
    a: "Usually within [X–Y] weeks of signing off the proposal. Tell us your launch date and we’ll say honestly if we can hit it.",
  },
  {
    q: "What happens after I send the form?",
    a: "We read every brief and reply within two working days to set up a short call. After that you get a clear proposal with scope, timeline and cost.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Happy to sign yours before you share details, or we can send our own.",
  },
  {
    q: "Can we work together remotely?",
    a: "Absolutely. We’re based in Bengaluru and work with teams across time zones over video calls and shared files.",
  },
];
