/** About page copy (about.html). Text in [brackets] is placeholder until supplied. */

export const aboutHero = {
  title: ["We're makers who believe good design is ", "good business."] as const,
  /** Two lines; the break is removed on phones */
  intro: [
    "Mintaaz is an independent design studio in Bengaluru,",
    "helping founders and teams build brands people trust and products people love.",
  ] as const,
};

export const partner = {
  title: ["Your trusted design partner, from first idea ", "to launch."] as const,
  facts: [
    { title: "What we do", text: "Brands, websites, apps and campaigns, made by one team." },
    { title: "Who we work with", text: "Founders, start-ups and growing teams [in India and beyond]." },
    { title: "How we work", text: "Clarity, collaboration and craft — every single week." },
  ],
};

export const story = {
  title: ["Started with one laptop and a ", "stubborn idea."] as const,
  paragraphs: [
    "[How Mintaaz began — who founded it, when, and the gap you saw in how agencies worked with clients.]",
    "[How the studio grew — the first big project, the people who joined, and what you learned along the way.]",
    "[Where you are today — the kinds of clients you work with and what makes working with you different.]",
  ],
};

export const mission = {
  mission: {
    title: ["Help ambitious teams look as good ", "as they are."] as const,
    text: "[One or two sentences on what you do every day and for whom.]",
  },
  vision: {
    title: ["A world where great ideas never lose to ", "bad design."] as const,
    text: "[One or two sentences on the long-term change you want to make.]",
  },
};

export const values = [
  { title: "Clarity over cleverness", text: "If a customer can’t get it in five seconds, we keep going." },
  { title: "Design with, not for", text: "You’re in the room every week. No big-reveal surprises." },
  { title: "Built to last", text: "Systems your team can run long after we hand over the keys." },
  { title: "Curious, always", text: "We ask the extra question. It’s usually where the idea is." },
];
