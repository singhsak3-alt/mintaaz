import { Accent as A } from "@/components/SectionHeader";
import {
  Band,
  BandHeader,
  Body,
  Card,
  CardTitle,
  CaseSection,
  Frame,
  Gap,
  Grid,
  HeroFrame,
  Img,
  List,
  Statement,
  Steps,
  Swatches,
} from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/bookdu";
const PURPLE = "#422978"; // Bookdu primary

const Badge = ({ children, bg, fg }: { children: React.ReactNode; bg: string; fg: string }) => (
  <span className="inline-block rounded-pill px-[14px] py-1.5 text-sm font-semibold" style={{ background: bg, color: fg }}>
    {children}
  </span>
);

const competitive = [
  {
    screen: "Landing screen",
    good: ["Easy-to-identify language change", "Priority given to the search bar", "Promotional banner on display", "Two cards with minimal text look good"],
    bad: ["No main navigation bar at the top or bottom", "Products aren’t visible at a glance and need scrolling", "Too much unhelpful content on screen"],
  },
  {
    screen: "Product detail",
    good: ["Complete information fits on the screen", "Clear price range", "Strong emphasis on the call to action", "“How it works” video for assistance"],
    bad: ["Feels like a web page, not an app", "Can’t go back to the previous screen", "No similar-product recommendations"],
  },
  {
    screen: "Add to cart",
    good: ["Shows the number of products added", "Subscription method can be changed from a dropdown"],
    bad: ["Can’t remove a product from the cart", "Can’t go back to the previous screen"],
  },
  { screen: "Checkout", good: ["Gathers complete information"], bad: ["Long, 5-step checkout", "Not all payment methods are available"] },
  { screen: "History", good: ["—"], bad: ["Can’t track purchase history"] },
];

const journeyStages = ["Sign up / Sign in", "Home", "Product details", "Reading experience"];
const journey: [string, string[]][] = [
  ["Doing", [
    "B2B users sign in with an institute ID; B2C users sign up with personal email.",
    "B2B: only assigned books. B2C: a huge rack to choose from.",
    "B2B: assigned books can be downloaded. B2C: can purchase.",
    "The reader tool helps both users read.",
  ]],
  ["Touch points", ["Bookshelf, Inkitt", "Bookshelf, R Discovery, Inkitt", "Bookshelf, R Discovery, Inkitt", "Bookshelf, R Discovery, Inkitt"]],
  ["Thinking", [
    "Should be easy and smooth — invest more in sign-up.",
    "Only a few books shown; finding the right one should be faster.",
    "Pages feel thin; should allow reading the synopsis.",
    "Should tag readings and offer a highlighter.",
  ]],
  ["Feeling", [
    "Boring sign-up process.",
    "Screens lack UX; actions unclear; accessibility issues.",
    "Weak branding; too many unhelpful features.",
    "Wants colour correction and a choice of fonts.",
  ]],
  ["Opportunities", [
    "Capture user interests during sign-up.",
    "Categories, filters, advanced search, recommendations, promotions.",
    "List maximum details on the details page.",
    "Take inspiration from the Kindle reader.",
  ]],
];

const questions = [
  "What’s your age?", "What’s your gender?", "What do you do for a living?", "Do you read books or listen to audiobooks?",
  "What type of books do you read?", "How often do you read or listen to a book?", "Do you prefer reading online or offline?",
  "How often do you buy a book or journal?", "Where do you like to buy books or journals?", "How do you feel about reading books online?",
  "How do you feel about current apps, features and UI?",
];
const answers = [
  "18 to 64", "Both", "Students, professors, doctors, nurses, technicians, researchers", "Depends on the book",
  "Education, research, knowledge, novels, self-learning", "Daily, twice a week, monthly", "Mostly online; the library for offline reading",
  "Monthly, every six months; articles every day", "Online stores, apps, yearly publisher subscriptions",
  "Online books are easier to access and ready to read", "Few apps have the needed features — each format needs a different app",
];

const findings = [
  "Users don’t care much about reading goals or personal stats.",
  "They care more about tracking the books they want to read.",
  "They’re interested in what friends and family are reading.",
  "New books are mostly discovered by seeing and hearing about them.",
  "Recommendations from people they trust matter most.",
  "Reviews from trusted sources beat reviews from strangers.",
  "Accurate recommendations help filter an overwhelming catalogue.",
];

type Persona = {
  photo: { src: string; alt: string; w: number; h: number };
  type: string;
  name: string;
  facts: [string, string][];
  bio: string;
  pains: string[];
  goals: string[];
};

const personaGoals = [
  "Track books easily in one place",
  "A clear, more delightful app experience",
  "Highlight passages for quick access later",
  "Relevant recommendations",
];

const personas: Persona[] = [
  {
    photo: { src: "portrait-of-persona-ohm-gupta-3f630e", alt: "Portrait of persona Ohm Gupta", w: 484, h: 490 },
    type: "B2B user",
    name: "Ohm Gupta",
    facts: [["Age", "35"], ["Location", "Bengaluru"], ["Occupation", "Software engineer"], ["Works at", "HCL, Bengaluru"], ["Device", "Samsung, iPhone 13"], ["Most-used apps", "Instagram, Amazon"]],
    bio: "A software engineer who constantly learns new topics for work. With so many books on the market he struggles to choose, and relies on peers to recommend titles for study and research papers.",
    pains: ["No way to highlight key parts while reading", "No time to buy hardcover books", "Subscriptions are expensive", "Inaccurate recommendations"],
    goals: personaGoals,
  },
  {
    photo: { src: "portrait-of-persona-ayush-agrawal-df8e08", alt: "Portrait of persona Ayush Agrawal", w: 499, h: 491 },
    type: "B2C user",
    name: "Ayush Agrawal",
    facts: [["Age", "38"], ["Location", "Bengaluru"], ["Occupation", "Accountant"], ["Works at", "Swiggy, Bengaluru"], ["Device", "Samsung"], ["Most-used apps", "Instagram, Swiggy, Amazon"]],
    bio: "An account manager who keeps exploring new topics in his field, reads a lot and applies what he learns to his research.",
    pains: ["No features to recall past readings", "No time to buy hardcover books", "Books are expensive", "Hard to identify the right book"],
    goals: personaGoals,
  },
];

function PersonaBlock({ p }: { p: Persona }) {
  return (
    <Grid min={420}>
      <Frame>
        <Img src={`${I}/${p.photo.src}`} alt={p.photo.alt} w={p.photo.w} h={p.photo.h} radius={20} />
      </Frame>
      <Card gap={22}>
        <div>
          <Badge bg="#E9E6FF" fg={PURPLE}>
            {p.type}
          </Badge>
          <p className="m-0 mt-[14px] text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em]">{p.name}</p>
        </div>
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-4">
          {p.facts.map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow">{k}</dt>
              <dd className="m-0 mt-1 text-[15px]">{v}</dd>
            </div>
          ))}
        </dl>
        <Body>{p.bio}</Body>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          <div className="flex flex-col gap-2.5 rounded-[18px] bg-[#FBEFF4] p-5">
            <span className="eyebrow">Pain points</span>
            <List items={p.pains} gap={6} color="var(--color-ink)" />
          </div>
          <div className="flex flex-col gap-2.5 rounded-[18px] bg-[#EEECFF] p-5">
            <span className="eyebrow">Goals</span>
            <List items={p.goals} gap={6} color="var(--color-ink)" />
          </div>
        </div>
      </Card>
    </Grid>
  );
}

const cell = "px-4 py-[18px] text-[15px] leading-[1.55] text-text-1";

export const bookdu: CaseStudy = {
  slug: "bookdu",
  hero: {
    tagline: (
      <>
        One app to read, listen and watch — <A>for B2B and B2C readers.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="radial-gradient(120% 100% at 80% 0%, #4A4FD0 0%, #2E32A6 55%, #1F2280 100%)"
        padding="clamp(32px, 5vw, 72px)"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(32px,4vw,64px)] text-paper"
      >
        <div className="flex flex-col gap-6">
          <span className="eyebrow text-[#C7C9F5]">Overview</span>
          <p className="m-0 text-[clamp(26px,2.8vw,40px)] font-bold leading-[1.12] tracking-[-0.035em]">
            A SaaS platform to <A>learn, track and discover</A> digital content from authors.
          </p>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#E1E2FA]">
            Bookdu helps readers keep track of books they’ve bought, discover new ones, and read titles their
            institution assigns — eBooks, audio, video and journals in one place.
          </p>
        </div>
        <Img
          src={`${I}/bookdu-splash-screen-and-home-screen-on--2926c5`}
          alt="Bookdu splash screen and home screen on two phones"
          w={652}
          h={677}
          eager
          style={{ filter: "drop-shadow(0 30px 50px rgba(10,12,60,.45))" }}
        />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "My role", value: "UX & interaction design, visual design, user flows, rapid prototyping" },
    { label: "Deliverables", value: "Component libraries, user interviews, high-fidelity designs" },
    { label: "Team", value: "Marketers, product managers, web & mobile developers" },
    { label: "Year", value: "2024" },
  ],
  cta: (
    <>
      Building a product <A>people love to use?</A>
    </>
  ),
  body: (
    <>
      <CaseSection
        eyebrow="Context"
        title={
          <>
            The <A>challenge</A>
          </>
        }
        lead="Finding the right book shouldn’t mean juggling apps for reading, audio and video."
      >
        <Grid min={280}>
          {[
            { eyebrow: "Problem", title: "Too many apps, no single journey", text: "Professionals and students struggle to find the right book and end up using separate apps for reading, audio and video. They need one platform for B2B and B2C with a smooth journey." },
            { eyebrow: "Stakeholder brief", title: "From portal to mobile app", text: "The client had an End-User Portal managed by a tenant admin. To reach more clients they wanted a hybrid mobile End-User App with a user-centric set of features and flows." },
            { eyebrow: "Business goal", title: "One app for B2B and B2C", text: "Support books and the journals hierarchy, advanced search and several types of recommendations — in one app for both audiences." },
          ].map((c) => (
            <Card key={c.title} radius={24} padding="28px" gap={14} eyebrow={c.eyebrow} title={<CardTitle>{c.title}</CardTitle>}>
              <Body>{c.text}</Body>
            </Card>
          ))}
          <Card radius={24} padding="28px" gap={14} bg={PURPLE} fg="#FFFFFF" eyebrow="Solution" eyebrowColor="#C9BEEA" title={<CardTitle>A holistic knowledge platform</CardTitle>}>
            <Body color="#E4DDF5">
              A digital platform where every type of user can connect and explore eBooks, audiobooks, video and
              courses — with a reader built in.
            </Body>
          </Card>
        </Grid>
      </CaseSection>

      <Statement bg="#F3F1FF" fg={PURPLE}>
        Easy-to-use, holistic knowledge platform —{" "}
        <A>eBooks, an audio-video player, Reader as a Service and journals.</A>
      </Statement>

      <CaseSection
        eyebrow="Approach"
        title={
          <>
            Design <A>process</A>
          </>
        }
        lead="A five-step, user-centred process from research to tested high-fidelity screens."
      >
        <Steps
          items={[
            { label: "01", title: "Empathise", text: "User interviews · user research · competitive analysis" },
            { label: "02", title: "Define", text: "Affinity mapping · personas · empathy map · journey map" },
            { label: "03", title: "Ideate", text: "User flow · card sorting · information architecture" },
            { label: "04", title: "Design", text: "Low fidelity · high fidelity" },
            { label: "05", title: "Test", text: "Usability testing · implementing feedback" },
          ]}
        />
      </CaseSection>

      <CaseSection
        title={
          <>
            Empathise — <A>the product</A>
          </>
        }
        lead="Mapping who manages, publishes and reads before designing anything."
      >
        <Grid min={380}>
          <Frame variant="bleed" bg="linear-gradient(160deg,#DDE0FB,#F8E6F0)">
            <Img src={`${I}/bookdu-app-icon-and-book-covers-on-a-pho-628058`} alt="Bookdu app icon and book covers on a phone" w={472} h={1062} full cover />
          </Frame>
          <div className="flex flex-col gap-4">
            <Frame caption="Understanding the product">
              <Img src={`${I}/product-hierarchy-tenant-admin-instituti-1754d9`} alt="Product hierarchy: tenant admin, institution admin and end-user portal across website, mobile and desktop apps" w={623} h={548} />
            </Frame>
            <Frame caption="Users in the product hierarchy">
              <Img src={`${I}/user-hierarchy-publisher-b2b-and-b2c-mod-aaf661`} alt="User hierarchy: publisher, B2B and B2C models, institutions and end users" w={683} h={482} />
            </Frame>
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Competitive <A>analysis</A>
          </>
        }
        lead="A screen-by-screen review of VitalSource — what to keep and what to fix."
      >
        <div className="overflow-x-auto rounded-card-lg border border-line p-[clamp(24px,4vw,56px)]">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr>
                <th scope="col" className="eyebrow pb-4 pr-5 text-left font-normal">Screen</th>
                <th scope="col" className="px-5 pb-4 text-left">
                  <Badge bg="#E9E6FF" fg={PURPLE}>Strengths</Badge>
                </th>
                <th scope="col" className="pb-4 pl-5 text-left">
                  <Badge bg="#FBE4EE" fg="#9D1F55">Weaknesses</Badge>
                </th>
              </tr>
            </thead>
            <tbody>
              {competitive.map((r) => (
                <tr key={r.screen} className="border-t border-line align-top">
                  <th scope="row" className="whitespace-nowrap py-[22px] pr-5 text-left text-[17px] font-semibold">
                    {r.screen}
                  </th>
                  <td className="px-5 py-[22px]">
                    <List items={r.good} ordered />
                  </td>
                  <td className="py-[22px] pl-5">
                    <List items={r.bad} ordered />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            User <A>interviews</A>
          </>
        }
        lead="A qualitative questionnaire on the challenges people face with reading apps."
      >
        <Grid min={420}>
          <Frame caption="Questions">
            <List items={questions} ordered />
          </Frame>
          <Card bg={PURPLE} fg="#FFFFFF" eyebrow="Common answers" eyebrowColor="#C9BEEA">
            <List items={answers} ordered color="#EEEAFB" />
          </Card>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Survey &amp; <A>interview results</A>
          </>
        }
        lead="What readers actually value — and what they ignore."
      >
        <div className="grid grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)] items-center gap-8 max-[860px]:grid-cols-1">
          <Frame>
            <Img src={`${I}/survey-illustration-with-happy-and-unhap-6651d3`} alt="Survey illustration with happy and unhappy speech bubbles" w={207} h={207} />
          </Frame>
          <ul className="m-0 list-none p-0">
            {findings.map((f, i) => (
              <li key={f} className="flex gap-4 border-t border-line py-[14px]">
                <span className="eyebrow pt-[3px]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[17px] leading-[1.5]">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Define — <A>personas</A>
          </>
        }
        lead="Two primary users: an institution reader and an independent reader."
      >
        <PersonaBlock p={personas[0]} />
        <Gap />
        <PersonaBlock p={personas[1]} />
      </CaseSection>

      <CaseSection
        eyebrow="06 · Define"
        title={
          <>
            Empathy <A>maps</A>
          </>
        }
        lead="What each persona says, thinks, does and feels."
      >
        <Grid min={480}>
          <Frame>
            <Img src={`${I}/empathy-map-for-ohm-gupta-feel-think-doe-16e1cf`} alt="Empathy map for Ohm Gupta: feel, think, does and say" w={639} h={631} />
          </Frame>
          <Frame>
            <Img src={`${I}/empathy-map-for-ayush-agrawal-feel-think-306409`} alt="Empathy map for Ayush Agrawal: feel, think, does and say" w={635} h={631} />
          </Frame>
        </Grid>
      </CaseSection>

      <CaseSection
        eyebrow="07 · Define"
        title={
          <>
            Journey <A>map</A>
          </>
        }
        lead="Most readers have gone digital and want an app with a great reading experience and a smooth exit."
      >
        <div className="overflow-x-auto rounded-card-lg border border-line p-[clamp(24px,4vw,56px)]">
          <table className="w-full min-w-[900px] border-collapse">
            <thead>
              <tr>
                <th scope="col" className="pb-4 pr-4" />
                {journeyStages.map((s) => (
                  <th key={s} scope="col" className="px-4 pb-4 text-left">
                    <span className="inline-block whitespace-nowrap rounded-pill bg-[#422978] px-[14px] py-2 text-sm font-semibold text-paper">
                      {s}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {journey.map(([row, cells]) => (
                <tr key={row} className="border-t border-line align-top">
                  <th scope="row" className="eyebrow whitespace-nowrap py-[18px] pr-4 text-left font-normal">
                    {row}
                  </th>
                  {cells.map((c, i) => (
                    <td key={i} className={cell}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CaseSection>

      <CaseSection
        eyebrow="08 · Ideate"
        title={
          <>
            Site <A>map</A>
          </>
        }
        lead="Information architecture for sign-in, home, library, search, cart and profile."
      >
        <Frame>
          <Img src={`${I}/bookdu-site-map-1b0c77`} alt="Bookdu site map" w={1184} h={588} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="09 · Ideate"
        title={
          <>
            User <A>flows</A>
          </>
        }
        lead="How B2B and B2C readers move from sign-in to reading."
      >
        <Frame caption="User flow — B2B">
          <Img src={`${I}/b2b-user-flow-from-sign-in-to-reading-a--3f6611`} alt="B2B user flow from sign-in to reading a downloaded book" w={1196} h={298} />
        </Frame>
        <Gap />
        <Frame caption="User flow — B2C">
          <Img src={`${I}/b2c-user-flow-including-cart-payment-and-810b90`} alt="B2C user flow including cart, payment and reading" w={1164} h={349} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="10 · Design"
        title={
          <>
            Mid-fidelity <A>wireframes</A>
          </>
        }
        lead="Onboarding, login, library, dashboard, search, details and the reader — tested before visual design."
      >
        <Frame>
          <Img src={`${I}/wireframe-hero-hand-holding-a-phone-and--62c2ce`} alt="Wireframe hero: hand holding a phone, and login wireframes" w={1276} h={515} />
        </Frame>
        <Gap />
        <Frame>
          <div className="flex flex-col gap-8">
            <Img src={`${I}/onboarding-home-and-search-wireframes-c97341`} alt="Onboarding, home and search wireframes" w={1248} h={390} />
            <Img src={`${I}/library-list-grid-and-dashboard-wirefram-7e4dfb`} alt="Library, list, grid and dashboard wireframes" w={1248} h={390} />
            <Img src={`${I}/menu-profile-sort-favourites-and-filter--11a76c`} alt="Menu, profile, sort, favourites and filter wireframes" w={1248} h={390} />
            <Img src={`${I}/advanced-search-details-reader-audio-and-653591`} alt="Advanced search, details, reader, audio and video wireframes" w={1248} h={390} />
          </div>
        </Frame>
      </CaseSection>

      <Band bg="#252731">
        <BandHeader
          eyebrow="11 · Visual design"
          title={
            <>
              Visual <A>design</A>
            </>
          }
          lead="Aligning aesthetics with function for a calm, consistent reading experience."
        />
        <Grid min={440}>
          <Frame bg="#252731" style={{ borderColor: "#343744" }}>
            <Img src={`${I}/typography-and-colours-helvetica-neue-508e6a`} alt="Typography and colours — Helvetica Neue" w={1074} h={310} />
          </Frame>
          <Frame bg="#252731" style={{ borderColor: "#343744" }}>
            <Img src={`${I}/type-specimen-with-sizes-from-12-to-24pt-0db177`} alt="Type specimen with sizes from 12 to 24pt" w={797} h={338} />
          </Frame>
        </Grid>
        <Swatches
          min={200}
          minHeight={170}
          inset="light"
          items={[
            { name: "Deep purple", hex: "#422978", note: "Primary · CTAs & icons" },
            { name: "Deep greyish-blue", hex: "#3C444D", note: "Primary · text & outlines" },
            { name: "Light lavender", hex: "#E9E6FF", note: "Primary · surfaces", dark: true },
            { name: "Pastel lavender-pink", hex: "#EACBF7", note: "Tertiary", dark: true },
            { name: "Ultra-light grey", hex: "#F6F6F6", note: "Tertiary · backgrounds", dark: true },
          ]}
        />
        <p className="m-0 mt-2 max-w-[760px] text-base leading-[1.6] text-[#C9CBD6]">
          Deep purple drives CTAs and icons, a deep greyish-blue replaces pure black for text, and light lavender
          and grey keep surfaces soft. Tertiary tints add depth and smoother transitions.
        </p>
        <Gap size={48} />
        <BandHeader
          title={
            <>
              Icons &amp; <A>illustration</A>
            </>
          }
          lead="Informative, actionable and placeholder icons, plus monochrome spot illustrations."
        />
        <Frame bg="#252731" style={{ borderColor: "#343744" }}>
          <Img src={`${I}/informative-actionable-and-placeholder-i-02eb13`} alt="Informative, actionable and placeholder icon sets" w={1204} h={398} />
        </Frame>
        <Img src={`${I}/reader-bookshelf-and-ai-spot-illustratio-76f1a0`} alt="Reader, bookshelf and AI spot illustrations on a tilted white band" w={1274} h={520} radius={28} />
        <Gap size={48} />
        <BandHeader
          title={
            <>
              Design <A>system</A>
            </>
          }
          lead="Reusable navigation, buttons, toggles and profile components."
        />
        <Frame bg="#252731" style={{ borderColor: "#343744" }}>
          <Img src={`${I}/design-system-components-tab-bar-states--475893`} alt="Design system components: tab bar states, buttons, toggles and profile card" w={1248} h={589} />
        </Frame>
        <Gap size={48} />
        <BandHeader
          title={
            <>
              Brand <A>identity</A>
            </>
          }
          lead="The Bookdu mark across apparel, ID cards, app icon and social."
        />
        <Img src={`${I}/brand-identity-mockups-t-shirt-lanyard-i-869de9`} alt="Brand identity mockups: t-shirt, lanyard ID card, app icon, social profile and phone" w={1268} h={711} radius={28} />
        <Gap size={48} />
        <BandHeader
          title={
            <>
              Final <A>screens</A>
            </>
          }
          lead="Home, browsing, details, reader, library, audio, dashboard, menu, profile and login."
        />
        <Img src={`${I}/home-screen-on-a-phone-b78100`} alt="Home screen on a phone" w={1432} h={1024} radius={28} />
        <Img src={`${I}/flow-from-home-to-all-ebooks-book-detail-7a9031`} alt="Flow from home to all eBooks, book details and the reader" w={1209} h={2048} radius={28} />
        <Img src={`${I}/video-player-library-and-audio-player-sc-389b58`} alt="Video player, library and audio player screens" w={1268} h={1127} radius={28} />
        <Img src={`${I}/dashboard-calendar-menu-and-profile-scre-17d15a`} alt="Dashboard calendar, menu and profile screens" w={1277} h={907} radius={28} />
        <Img src={`${I}/search-advanced-search-login-and-onboard-e8208d`} alt="Search, advanced search, login and onboarding screens" w={1264} h={692} radius={28} />
        <Img src={`${I}/empty-states-filters-sort-create-shelf-a-0aceb1`} alt="Empty states, filters, sort, create shelf and library actions" w={1381} h={373} radius={28} />
      </Band>
    </>
  ),
};
