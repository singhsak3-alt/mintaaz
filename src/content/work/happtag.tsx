import { Accent as A } from "@/components/SectionHeader";
import {
  CaseSection,
  Frame,
  Grid,
  Img,
  SideHeading,
  Stat,
  Statement,
  Video,
} from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/happtag";

const palette = [
  { name: "BLACK", hex: "#000000", fg: "#FFFFFF", title: "Primary colour", text: "Rich in meaning across contexts and cultures.", textColor: "#D4D4D4" },
  { name: "BRIGHT CYAN", hex: "#1DA5DC", fg: "#0A0A0A", title: "Primary colour", text: "A vibrant, fresh blue for digital surfaces." },
  { name: "BLUE-PURPLE", hex: "#5F59A3", fg: "#FFFFFF", title: "Primary colour", text: "Carries the brand gradient across web and app.", textColor: "#F0F0F0" },
  { name: "LIGHT GREY", hex: "#F1F1F1", fg: "#0A0A0A", title: "Secondary colour", text: "Neutral and balanced, for calm backgrounds.", textColor: "#404040" },
];

const goals = [
  "Create a cost-effective, reliable tracker tailored for Indian users.",
  "Ensure seamless connectivity through the SMARTHAPPS Find My network.",
  "Deliver real-time tracking with simple, intuitive app controls.",
  "Put data security first with end-to-end encryption.",
  "Design a lightweight, durable, minimal form for everyday use.",
  "Build an ecosystem where hardware and software work together effortlessly.",
];

const insights = [
  { label: "Common pain points", dark: true, rotate: -3, text: "Most users misplace keys, wallets and bags during rushed mornings or while switching locations." },
  { label: "Current habits", dark: false, rotate: 2, text: "Many rely on memory, calling their phones or retracing steps; only a few had used smart trackers." },
  { label: "Expectations", dark: true, rotate: -2, text: "A simple setup, accurate location tracking, sound alerts and long battery life — without high costs." },
  { label: "Emotional reactions", dark: false, rotate: 3, text: "Losing items caused frustration and lost time, highlighting the need for quick recovery." },
];

const prototypeNotes = [
  { title: "Find by the beep", text: "Track objects within 132 ft. Tap the button and Happtag's 120 dB beep leads you right to it." },
  { title: "Track when out of sight", text: "Get an alert the moment you move out of your tag's Bluetooth range." },
  { title: "Track even when away", text: "Always know where you left it — the last known location updates automatically, even out of range." },
  { title: "Lost Mode never leaves you lost", text: "The SmartHapp network updates instantly when the tag comes near another user's device. Add a message so finders can reach you." },
];

const tile = "flex items-center justify-center rounded-tile border border-line bg-paper p-7";

export const happtag: CaseStudy = {
  slug: "happtag",
  hero: {
    tagline: (
      <>
        Tag it &amp; <A>forget forgetting.</A>
      </>
    ),
    taglineMaxWidth: 360,
    media: (
      <Video
        src="/images/shared/black-happtag-tracker-rotating-front-and-7dbd2e"
        poster="/images/shared/black-happtag-tracker-rotating-front-and-bd851e"
        label="Black Happtag tracker rotating, front and back"
        className="mt-12 block aspect-video w-full rounded-card-lg bg-[#1A1A1A] object-cover"
      />
    ),
  },
  facts: [
    { label: "Client", value: "HappLab" },
    { label: "Year", value: "2025" },
    { label: "Category", value: "Product" },
    { label: "Services", value: "Product design, UI/UX, Visual design" },
  ],
  cta: (
    <>
      Want a product people <A>never lose?</A>
    </>
  ),
  body: (
    <>
      <SideHeading title="Overview" pt="pt-28">
        <p className="m-0 text-[clamp(22px,2.2vw,32px)] font-medium leading-[1.3] tracking-[-0.02em]">
          Introduced in April 2025, Happtag is a compact, Bluetooth-enabled tracker built in India. It works
          securely with the SMARTHAPPS Find My network — with Precision Finding, Lost Mode and end-to-end
          encryption — so people can easily and privately locate keys, wallets and bags.
        </p>
        <p className="m-0 mt-6 max-w-[620px] text-[17px] leading-[1.6] text-text-2">
          It also keeps little ones&apos; adventures safe: a tiny device making big strides in child and pet
          safety, because every journey matters.
        </p>
      </SideHeading>
      <section className="container-site pt-14">
        <Grid min={420} gap={24}>
          <div className="box-border flex aspect-square items-center justify-center rounded-card bg-paper p-10">
            <Img src={`${I}/puppy-wearing-a-happtag-on-its-collar-wi-fd3d62`} alt="Puppy wearing a Happtag on its collar, with the line Safety is always first" maxWidth={440} />
          </div>
          <div className="box-border flex aspect-square items-center justify-center rounded-card bg-paper p-10">
            <Img src={`${I}/smarthapps-website-on-a-laptop-tag-it-an-bcaba1`} alt="Smarthapps website on a laptop: Tag it and forget forgetting" full />
          </div>
        </Grid>
      </section>

      <SideHeading
        title={
          <>
            Field research &amp; <A>discovery</A>
          </>
        }
      >
        <p className="m-0 text-lg leading-[1.6] text-text-1">
          To understand user needs and market expectations, a study was run across urban and semi-urban regions
          of India between January and March 2025. It explored behaviour, pain points and preferences around
          item-tracking devices and everyday personal item management.
        </p>
      </SideHeading>
      <section aria-label="Research findings" className="container-site pt-14">
        <Grid min={200} gap={14}>
          <Stat tone="dark" label="Item misplacement" value="72%" text="misplace items frequently" />
          <Stat label="Price sensitivity" value="68%" text="preferred a budget-friendly tracker" />
          <Stat tone="outline" label="Data privacy" value="83%" text="stressed encryption and location privacy" />
          <Stat label="Design preference" minHeight={200}>
            <p className="m-0 text-xl font-medium leading-[1.35] tracking-[-0.01em]">
              A lightweight, minimal and durable plastic body suited to everyday use.
            </p>
          </Stat>
          <Stat label="Feature demand" minHeight={200}>
            <p className="m-0 text-xl font-medium leading-[1.35] tracking-[-0.01em]">
              Real-time tracking, sound alerts and app-based location history topped the list.
            </p>
          </Stat>
        </Grid>
      </section>

      <Statement wide bg="var(--color-ink)" fg="#FFFFFF" eyebrow="Define" size="clamp(26px, 3.2vw, 46px)" weight={500}>
        <strong className="font-bold">Happtag</strong> is a compact Bluetooth tracker that helps people locate and
        secure their keys, bags and wallets. Integrated with the SMARTHAPPS Find My network, it lets users{" "}
        <A>track, ring and manage</A> their items in real time from the companion app.
      </Statement>

      <section className="container-site pt-28">
        <Grid min={440} gap={24}>
          <div className="border-t border-line pt-7">
            <h3 className="m-0 mb-[18px] text-[28px] font-semibold tracking-[-0.03em]">Problem statement</h3>
            <p className="m-0 text-[17px] leading-[1.65] text-text-2">
              People often misplace essentials like keys, wallets and bags in their daily routines, causing
              stress, wasted time and inconvenience. Existing trackers are often expensive, hard to find, or not
              built for local needs such as affordability, durability and data privacy.
            </p>
          </div>
          <div className="border-t border-line pt-7">
            <h3 className="m-0 mb-[18px] text-[28px] font-semibold tracking-[-0.03em]">Goals</h3>
            <ol className="m-0 flex list-none flex-col gap-3 p-0 text-[17px] leading-[1.5] text-text-1">
              {goals.map((g, i) => (
                <li key={g} className="flex gap-[14px]">
                  <span className="pt-[3px] font-mono text-[13px] text-text-3">{String(i + 1).padStart(2, "0")}</span>
                  {g}
                </li>
              ))}
            </ol>
          </div>
        </Grid>
      </section>

      <section aria-label="User insights" className="container-site pt-24">
        <Grid min={260} gap="32px 24px" align="start">
          {insights.map((it) => (
            <div key={it.label}>
              <span
                className={`inline-block text-[15px] font-semibold ${
                  it.dark ? "bg-ink px-4 py-2 text-paper" : "border-[1.5px] border-ink bg-paper px-[15px] py-[7px]"
                }`}
                style={{ transform: `rotate(${it.rotate}deg)` }}
              >
                {it.label}
              </span>
              <p className="m-0 mt-[22px] text-base leading-[1.6] text-text-2">{it.text}</p>
            </div>
          ))}
        </Grid>
      </section>

      <section className="container-site pt-24">
        <div className="rounded-pill border-2 border-ink px-[clamp(28px,8vw,140px)] py-[clamp(32px,4vw,56px)] text-center">
          <p className="eyebrow m-0 mb-[14px] text-[13px]">Conclusion</p>
          <p className="mx-auto my-0 max-w-[820px] text-[clamp(17px,1.6vw,21px)] leading-[1.55]">
            People misplace essentials because of busy routines and a lack of reliable solutions. They want a
            simple, affordable and secure way to track their belongings — and Happtag answers with a compact
            design, strong privacy and seamless SMARTHAPPS integration.
          </p>
        </div>
      </section>

      <section className="container-site pt-28">
        <div className="rounded-card-lg bg-paper p-[clamp(24px,5vw,72px)]">
          <Img src={`${I}/three-campaign-cards-a-puppy-a-suitcase--bdf16f`} alt="Three campaign cards: a puppy, a suitcase and a wallet, each with a Happtag" full />
        </div>
      </section>

      <SideHeading
        title={
          <>
            Ideation &amp; <A>concept</A>
          </>
        }
        aside="Brainstorming and sketching sessions shaped both the device and the app interaction — then moved into CAD, renders and colourways."
      >
        <div className="grid grid-cols-2 gap-4">
          {[
            { src: "pencil-sketch-of-the-tag-outline-fdf6c5", alt: "Pencil sketch of the tag outline", ratio: "2 / 1" },
            { src: "pencil-sketch-exploring-the-tag-button-057640", alt: "Pencil sketch exploring the tag button", ratio: "2 / 1" },
            { src: "cad-drawing-with-dimensions-and-cross-se-5d4bba", alt: "CAD drawing with dimensions and cross-section", ratio: "1 / 1", border: true },
            { src: "early-orange-shell-render-dfe2d5", alt: "Early orange shell render", ratio: "1 / 1" },
            { src: "final-black-happtag-render-dd2eba", alt: "Final black Happtag render", ratio: "1 / 1", span: true },
            { src: "happtag-in-a-stone-colourway-acdc60", alt: "Happtag in a stone colourway", ratio: "1 / 1" },
            { src: "happtag-in-a-slate-blue-colourway-1328a0", alt: "Happtag in a slate-blue colourway", ratio: "1 / 1" },
          ].map((im) => (
            <div
              key={im.src}
              className={`relative box-border overflow-hidden rounded-tile ${im.border ? "border border-line" : ""} ${im.span ? "col-span-2" : ""}`}
              style={{ aspectRatio: im.ratio }}
            >
              <Img src={`${I}/${im.src}`} alt={im.alt} full cover className="absolute inset-0" />
            </div>
          ))}
        </div>
      </SideHeading>

      <SideHeading
        title={
          <>
            Visual design &amp; <A>branding</A>
          </>
        }
      >
        <p className="m-0 text-lg leading-[1.6] text-text-1">
          The logo pairs a gradient-filled rounded shape — moving from purple to blue for trust and reliability —
          with a wireless-signal mark for connectivity. Clean and minimal, it positions Happtag as a
          forward-thinking, friendly tech brand.
        </p>
      </SideHeading>
      <section className="container-site pt-12">
        <Frame padding="clamp(24px, 5vw, 72px)">
          <Img src={`${I}/happtag-logo-construction-lines-836c8e`} alt="Happtag logo construction lines" maxWidth={820} />
        </Frame>
      </section>
      <section aria-label="Colour palette" className="container-site pt-6">
        <Grid min={260} gap={16}>
          {palette.map((c) => (
            <div
              key={c.hex}
              className="flex min-h-[220px] flex-col justify-between rounded-card p-6"
              style={{ background: c.hex, color: c.fg }}
            >
              <div className="flex justify-between font-mono text-[13px]">
                <span>{c.name}</span>
                <span>{c.hex}</span>
              </div>
              <div>
                <p className="m-0 text-xl font-semibold">{c.title}</p>
                <p className="m-0 mt-1.5 text-sm leading-[1.5]" style={{ color: c.textColor }}>
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </Grid>
      </section>
      <section className="container-site pt-6">
        <Grid min={440} gap={16}>
          <div className="flex flex-col gap-6 rounded-card border border-line p-8">
            <span className="eyebrow">Typeface</span>
            <Img src={`${I}/oneday-typeface-specimen-0d19a5`} alt="ONEDAY typeface specimen" radius={12} full />
            <p className="m-0 text-[15px] leading-[1.6] text-text-2">
              ONEDAY brings clean lines and geometric shapes for a sleek, modern feel — readable, versatile and
              memorable in a crowded market.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-card border border-line p-8">
            <Img src={`${I}/oneday-glyphs-numerals-and-uppercase-alp-a20259`} alt="ONEDAY glyphs: numerals and uppercase alphabet" full />
            <div className="flex flex-wrap gap-8 text-[15px]">
              {[
                ["Family", "ONEDAY"],
                ["Weight", "Regular"],
                ["Style", "Sans serif, 1 style"],
              ].map(([k, v]) => (
                <div key={k}>
                  <span className="text-text-3">{k}</span>
                  <p className="m-0 mt-1 font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </section>

      <CaseSection
        title={
          <>
            UI <A>system</A>
          </>
        }
        lead="App icon, controls and a friendly icon set for devices, pets and bags."
      >
        <Grid min={280} gap={16}>
          <div className="grid gap-4">
            <div className={tile}>
              <Img src={`${I}/happtag-app-icon-d2b784`} alt="Happtag app icon" maxWidth={160} className="w-1/2!" />
            </div>
            <div className={tile}>
              <Img src={`${I}/buttons-and-toggles-e24b2f`} alt="Buttons and toggles" full />
            </div>
          </div>
          <div className={tile}>
            <Img src={`${I}/icon-set-7a4ec8`} alt="Icon set" full />
          </div>
          <div className={tile}>
            <Img src={`${I}/home-screen-with-my-devices-03419a`} alt="Home screen with My Devices" maxWidth={300} radius={12} />
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Clear design <A>for safety</A>
          </>
        }
        lead="High-fidelity mobile mockups: device home, sign-in and the tag itself."
      >
        <Frame padding="clamp(24px, 5vw, 64px)">
          <Img src={`${I}/tag-render-home-screen-with-my-devices-a-1ffa8e`} alt="Tag render, home screen with My Devices, and the Welcome back sign-in screen" full />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Prototyping &amp; <A>animation</A>
          </>
        }
      >
        <Frame>
          <Img src={`${I}/four-prototype-screens-with-map-play-sou-bfdc21`} alt="Four prototype screens with map, play sound and lost mode controls" full />
        </Frame>
        <div className="mt-8">
          <Grid min={260} gap="32px 24px" align="start">
            {prototypeNotes.map((n) => (
              <div key={n.title}>
                <h3 className="m-0 mb-2.5 text-[21px] font-semibold tracking-[-0.02em]">{n.title}</h3>
                <p className="m-0 text-[15px] leading-[1.6] text-text-2">{n.text}</p>
              </div>
            ))}
          </Grid>
        </div>
      </CaseSection>

      <section className="container-site pt-24">
        <Grid min={440} gap={24} align="start">
          {[
            { src: "pressing-the-tag-rings-the-phone-f4c642", alt: "Pressing the tag rings the phone", max: 360, title: "Reverse find your phone", text: "Two-way tracking: press the tag's button to ring your phone, even on silent." },
            { src: "tag-falling-and-the-app-showing-a-fall-a-59395b", alt: "Tag falling and the app showing a fall alert", max: 320, title: "Fall detection mode", text: "The sensor verifies a hard fall and notifies paired phones, following CDC guidance and the STEADI algorithm for precise detection." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-5">
              <div className="flex justify-center rounded-card border border-line bg-paper p-8">
                <Img src={`${I}/${f.src}`} alt={f.alt} maxWidth={f.max} />
              </div>
              <div>
                <h3 className="m-0 mb-2 text-2xl font-semibold tracking-[-0.02em]">{f.title}</h3>
                <p className="m-0 text-base leading-[1.6] text-text-2">{f.text}</p>
              </div>
            </div>
          ))}
        </Grid>
      </section>

      <CaseSection
        title={
          <>
            Small tag, <A>big impact</A>
          </>
        }
      >
        <Grid min={280} gap={16}>
          <div className="relative min-h-[300px] overflow-hidden rounded-card bg-[#1A1A1A]">
            <Video src={`${I}/video-f2035f`} poster={`${I}/video-poster-65a368`} className="absolute inset-0 block size-full object-cover opacity-60" />
            <div className="absolute inset-x-6 bottom-6 text-paper">
              <p className="m-0 text-[22px] font-semibold">Snaps right in</p>
              <p className="m-0 mt-1.5 text-[15px] leading-[1.5] text-line">Sleek teardrop with a keyhole — clip, tag, forget (never lose!).</p>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-card bg-[#312044] text-paper">
            <Video
              src={`${I}/battery-icon-filling-up-4e60d3`}
              poster={`${I}/battery-icon-filling-up-6155f2`}
              label="Battery icon filling up"
              className="absolute left-0 top-0 block h-[72%] w-full object-cover"
            />
            <div className="absolute inset-x-6 bottom-6">
              <p className="m-0 text-[22px] font-semibold">Powerful inside</p>
              <p className="m-0 mt-1.5 text-[15px] leading-[1.5] text-line">Ready to track, with a longer battery life.</p>
            </div>
          </div>
          <div className="flex min-h-[300px] flex-col justify-between rounded-card border border-line p-6">
            <p className="m-0 text-[22px] font-semibold">Range</p>
            <p className="m-0 text-[120px] font-extrabold leading-[0.9] tracking-[-0.06em]">
              45<span className="text-[28px] font-semibold tracking-normal"> m</span>
            </p>
          </div>
          <div className="box-border flex min-h-[300px] flex-col justify-between rounded-card border-[1.5px] border-ink p-6">
            <p className="m-0 text-[22px] font-semibold">Connect</p>
            <div className="flex items-end justify-between">
              <svg width="56" height="80" viewBox="0 0 24 34" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9l16 15-8 8V2l8 8L3 25" />
              </svg>
              <span aria-hidden="true" className="relative inline-block h-9 w-16 rounded-pill bg-ink">
                <span className="absolute right-1 top-1 size-7 rounded-pill bg-paper" />
              </span>
            </div>
          </div>
        </Grid>
        <div className="mt-4">
          <Grid min={440} gap={16}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card">
              <Img src={`${I}/slate-blue-happtag-render-2a03ad`} alt="Slate-blue Happtag render" full cover className="absolute inset-0" />
            </div>
            <Video
              src={`${I}/exploded-view-of-the-happtag-components--ee4d78`}
              poster={`${I}/exploded-view-of-the-happtag-components--a01d92`}
              label="Exploded view of the Happtag components, animated"
              className="block aspect-[4/3] w-full rounded-card bg-[#1B2140] object-cover"
            />
          </Grid>
        </div>
      </CaseSection>

      <section className="container-site pt-28">
        <Img
          src={`${I}/wallet-with-a-happtag-next-to-a-phone-sh-bb1ea6`}
          alt="Wallet with a Happtag next to a phone showing the app: Make lost wallet stories a thing of the past"
          radius={28}
          full
        />
      </section>

      <SideHeading title={<A>Packaging</A>} aside="A gift-ready box that carries the brand from shelf to unboxing." align="start">
        <Img
          src={`${I}/hands-holding-a-happtag-gift-box-engage--222ff3`}
          alt="Hands holding a Happtag gift box: Engage, motivate and inspire with a future-ready gift"
          radius={24}
          full
        />
      </SideHeading>
    </>
  ),
};
