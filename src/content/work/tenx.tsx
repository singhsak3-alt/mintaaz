import { Inter } from "next/font/google";
import { Accent as A } from "@/components/SectionHeader";
import { CaseSection, Grid, HeroFrame, Img, SideHeading, Stat, Swatches } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

/** Inter is the product typeface shown in the specimen. */
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const I = "/images/tenx";
const DARK = "#222222"; // TenX image-area background

function DarkTile({ src, alt, max, pad = "24px 0" }: { src: string; alt: string; max: number; pad?: string }) {
  return (
    <div className="flex justify-center overflow-hidden rounded-card-lg" style={{ background: DARK, padding: pad }}>
      <Img src={`${I}/${src}`} alt={alt} maxWidth={max} />
    </div>
  );
}

const flowRows = [
  { src: "send-money-screen-with-aud-to-inr-amount-71b447", alt: "Send money screen with AUD to INR amounts", title: "Transfer", text: "A clean transfer screen showing live exchange rates, amounts, fees and delivery estimates for a secure, transparent remittance." },
  { src: "home-screen-with-current-rate-and-recent-a22df6", alt: "Home screen with current rate and recent recipients", title: "Recipients at a glance", text: "Once KYC is complete, users see their recent recipients and can start a transfer at live exchange rates." },
  { src: "select-recipient-bank-screen-with-search-c42ac3", alt: "Select recipient bank screen with search", title: "Bank selection", text: "A searchable list of supported banks simplifies adding a recipient and helps users transfer with confidence." },
  { src: "select-a-recipient-screen-86a010", alt: "Select a recipient screen", title: "Choose a recipient", text: "Find existing beneficiaries or add a new one from a searchable list, streamlining every transfer." },
  { src: "card-payment-screen-90f59e", alt: "Card payment screen", title: "Secure checkout", text: "Enter card details, choose to save the card and confirm through an encrypted checkout." },
  { src: "payment-successful-confirmation-screen-4da86e", alt: "Payment successful confirmation screen", title: "Confirmation", text: "Immediate reassurance of a successful transfer, with transaction records and receipt sharing for future reference." },
];

const stateShot = "rounded-[16px] shadow-[0_0_0_1px_#E5E5E5]";

export const tenx: CaseStudy = {
  slug: "tenx",
  hero: {
    tagline: (
      <>
        Send money home. <A>Instantly.</A>
      </>
    ),
    taglineMaxWidth: 380,
    media: (
      <HeroFrame
        mt={48}
        radius={28}
        bg={DARK}
        padding="clamp(24px, 4vw, 56px)"
        className="flex flex-wrap items-center justify-center gap-x-6"
      >
        <Img src={`${I}/tenx-send-money-home-instantly-3821a1`} alt="TenX: send money home. Instantly." eager maxWidth={460} className="mx-0! min-w-0 flex-[1_1_300px]" />
        <Img src={`${I}/tenx-app-in-hand-showing-aud-to-inr-conv-6e57bc`} alt="TenX app in hand showing AUD to INR conversion" eager maxWidth={760} className="mx-0! min-w-0 flex-[1.6_1_420px]" />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Client", value: "TenX Money Exchange" },
    { label: "Category", value: "Finance mobile app" },
    { label: "Location", value: "Bengaluru, India" },
    { label: "Services", value: "UI/UX, App design, Branding" },
  ],
  cta: (
    <>
      Moving money <A>across borders?</A>
    </>
  ),
  body: (
    <>
      <section className="container-site flex flex-wrap items-stretch gap-12 pt-28">
        <div className="flex-[2_1_560px]">
          <h2 className="m-0 mb-6 text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em]">
            Client <A>request</A>
          </h2>
          <p className="m-0 text-[clamp(20px,2vw,28px)] font-medium leading-[1.35] tracking-[-0.015em]">
            The client needed a modern remittance platform that makes sending money from Australia to India
            simple, fast and trustworthy — with competitive exchange rates, lower transaction costs, full
            regulatory compliance and transfers completed within minutes.
          </p>
        </div>
        <div className="flex min-h-[260px] max-w-[320px] flex-[1_1_260px] flex-col justify-between gap-8 rounded-card bg-ink p-8 text-paper">
          <span className="eyebrow text-text-4">Outcome</span>
          <div>
            <p className="m-0 text-[88px] font-bold leading-none tracking-[-0.05em]">97%</p>
            <p className="m-0 mt-2.5 text-[17px] text-on-dark">Precise &amp; reliable results</p>
          </div>
        </div>
      </section>

      <SideHeading
        title={
          <>
            Project <A>overview</A>
          </>
        }
      >
        <p className="m-0 text-lg leading-[1.65] text-text-1">
          TenX is a digital cross-border remittance platform that lets people send money from Australia to India
          within minutes through IMPS, at real-time interbank exchange rates with no hidden markups and some of
          the lowest fees in the market.
        </p>
        <p className="m-0 mt-5 text-lg leading-[1.65] text-text-2">
          Built for speed, transparency and trust, it features streamlined onboarding, real-time transaction
          notifications and end-to-end encryption. As an AUSTRAC-registered platform, TenX offers a compliant and
          reliable way to support family back home.
        </p>
      </SideHeading>

      <CaseSection
        title={
          <>
            Design process &amp; <A>timeline</A>
          </>
        }
        lead="A structured approach: user research and problem definition, then wireframes, prototypes and visual design."
      >
        <Grid min={300} gap={16}>
          {[
            { step: "Step 01", title: "Research", text: "Observed user frustration with scattered financial tools, and identified a need for simplicity, visual balance and trust in finance design." },
            { step: "Step 02", title: "Wireframes", text: "Created a flow focused on speed and clarity, prioritising the most frequent actions: transfer and add funds." },
            { step: "Step 03", title: "UI design", text: "A focused interface with crimson accents for brand energy and visibility, and careful typography and spacing for readability.", dark: true },
          ].map((s) => (
            <div
              key={s.step}
              className={`flex flex-col gap-4 rounded-card p-8 ${s.dark ? "bg-ink text-paper" : "border border-line"}`}
            >
              <span className={`eyebrow ${s.dark ? "text-text-4" : ""}`}>{s.step}</span>
              <h3 className="m-0 text-[28px] font-semibold tracking-[-0.03em]">{s.title}</h3>
              <p className={`m-0 text-base leading-[1.6] ${s.dark ? "text-on-dark" : "text-text-2"}`}>{s.text}</p>
            </div>
          ))}
        </Grid>
        <p className="m-0 mt-10 max-w-[820px] text-lg leading-[1.65] text-text-1">
          Every decision prioritised speed, security and simplicity — from user research and streamlined
          wireframes to a modern, intuitive interface — to create a seamless, trustworthy money transfer
          experience.
        </p>
      </CaseSection>

      <section className="container-site pt-24">
        <Img src={`${I}/tenx-website-on-a-laptop-send-money-home-5a2a04`} alt="TenX website on a laptop: send money home. Instantly." radius={28} full />
      </section>

      <CaseSection
        title={
          <>
            Problem &amp; <A>solution</A>
          </>
        }
        lead="TenX is a fast, secure, user-friendly payment app that makes sending money, paying bills and buying online or in store smooth and effortless."
      >
        <Grid min={440} gap={16}>
          <div className="flex flex-col gap-[18px] rounded-card border border-line p-9">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3l10 18H2z" />
              <path d="M12 10v5M12 18h.01" />
            </svg>
            <h3 className="m-0 text-[28px] font-semibold tracking-[-0.03em]">Problem</h3>
            <p className="m-0 text-[17px] leading-[1.65] text-text-2">
              Users juggle many daily financial transactions. Traditional banking apps are often slow, overloaded
              with complex features and inconvenient for quick payments.
            </p>
          </div>
          <div className="flex flex-col gap-[18px] rounded-card bg-ink p-9 text-paper">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12.5l2.5 2.5L16 9.5" />
            </svg>
            <h3 className="m-0 text-[28px] font-semibold tracking-[-0.03em]">Solution</h3>
            <p className="m-0 text-[17px] leading-[1.65] text-on-dark">
              An all-in-one mobile payment app with speed, simplicity and security at your fingertips: instant
              transfers, seamless bill payments, QR-based offline payments and real-time expense tracking.
            </p>
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Logo <A>design</A>
          </>
        }
        lead="A sharp, forward-leaning X that signals speed and movement across borders."
      >
        <Grid min={300} gap={16}>
          <div className="relative min-h-[320px] overflow-hidden rounded-card-lg" style={{ background: DARK }}>
            <Img src={`${I}/tenx-x-mark-0a35c3`} alt="TenX X mark" full cover className="absolute inset-0" />
          </div>
          <div className="flex min-h-[320px] items-center justify-center overflow-hidden rounded-card-lg bg-[#B22651]">
            <Img src={`${I}/tenx-app-icon-558458`} alt="TenX app icon" maxWidth={200} radius={40} className="w-1/2!" />
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-card-lg" style={{ background: DARK }}>
            <Img src={`${I}/tenx-app-icon-on-a-phone-home-screen-7ba468`} alt="TenX app icon on a phone home screen" full cover className="absolute inset-0" />
          </div>
        </Grid>
        <div className="mt-4">
          <Img src={`${I}/tenx-brand-board-wordmark-app-icon-and-s-8d122d`} alt="TenX brand board: wordmark, app icon and screens" radius={28} full />
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Typography &amp; <A>colour</A>
          </>
        }
        lead="Inter, chosen for its clean, modern and highly readable forms, paired with a confident crimson."
      >
        <Grid min={440} gap={16}>
          <div className="flex flex-col justify-between gap-8 rounded-card border border-line p-9">
            <p className={`m-0 ${inter.className} text-[clamp(96px,12vw,168px)] font-semibold leading-[0.9] tracking-[-0.04em]`}>
              Inter
            </p>
            <p className="m-0 text-base leading-[1.6] text-text-2">
              Geometric forms and friendly curves keep financial information easy to scan at every size.
            </p>
          </div>
          <div className={`flex flex-col gap-[22px] rounded-card border border-line p-9 ${inter.className}`}>
            {[
              { sample: "Ten X", cls: "text-[39px] font-semibold tracking-[-0.02em]", spec: "Heading · 39px · Semi-bold" },
              { sample: "How accurate are the app's search tools?", cls: "max-w-[340px] text-2xl font-medium", spec: "Subheading · 24px · Medium" },
              { sample: "Real-time tracking keeps users informed and ensures dependable performance.", cls: "max-w-[340px] text-base text-text-1", spec: "Body · 16px · Regular" },
            ].map((r, i, all) => (
              <div
                key={r.spec}
                className={`flex items-baseline justify-between gap-4 ${i < all.length - 1 ? "border-b border-line pb-[18px]" : ""}`}
              >
                <span className={r.cls}>{r.sample}</span>
                <span className="eyebrow">{r.spec}</span>
              </div>
            ))}
          </div>
        </Grid>
        <div className="mt-4">
          <Swatches
            min={200}
            items={[
              { name: "Crimson", hex: "#B22651" },
              { name: "Deep green", hex: "#011E16" },
              { name: "Midnight", hex: "#061032" },
              { name: "Grey", hex: "#9C9C9C", dark: true },
              { name: "White", hex: "#FFFFFF", dark: true, border: true },
            ]}
          />
        </div>
        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] gap-4">
          <Img src={`${I}/woman-smiling-at-her-phone-84bfb3`} alt="Woman smiling at her phone" radius={24} full cover />
          <Img src={`${I}/hand-holding-the-tenx-send-money-screen-f021c0`} alt="Hand holding the TenX Send Money screen" radius={24} full cover />
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            User <A>research</A>
          </>
        }
        lead="From research to launch, we studied how people manage multiple currencies and digital wallets, aiming for a faster, clearer and more trustworthy experience."
      >
        <Grid min={260} gap={14}>
          <Stat tone="dark" label="User insight" value="66%" text="want a unified dashboard that connects all their accounts and simplifies daily finances." />
          <Stat label="Returning users" value="47%">
            <div aria-hidden="true" className="mt-4 h-2.5 overflow-hidden rounded-pill bg-line">
              <div className="h-full w-[47%] bg-ink" />
            </div>
            <div className="mt-1.5 flex justify-between text-xs text-text-3">
              <span>0</span>
              <span>100</span>
            </div>
          </Stat>
          <Stat label="Service timing issue" value="65%" text="struggled to compare live rates and time transactions across platforms." />
          <Stat label="Transaction barriers" value="80%" text="were frustrated by complex conversions, unclear fees and multi-step transfers." />
        </Grid>
        <div className="mt-4">
          <Img src={`${I}/light-and-dark-versions-of-the-tenx-home-999046`} alt="Light and dark versions of the TenX home screen" radius={28} full />
        </div>
        <div className="mt-4">
          <Grid min={440} gap={16}>
            <Img src={`${I}/monthly-spending-chart-highlighting-augu-523b2e`} alt="Monthly spending chart highlighting August" radius={24} full cover />
            <Img src={`${I}/send-earn-and-swap-actions-with-aud-and--a539b0`} alt="Send, Earn and Swap actions with AUD and INR balances" radius={24} full cover />
          </Grid>
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Social <A>media</A>
          </>
        }
        lead={`Out-of-home and social creative that carries the "send money home, instantly" message.`}
      >
        <Img src={`${I}/tenx-billboard-on-a-city-bridge-d29e6d`} alt="TenX billboard on a city bridge" radius={28} full />
        <div className="mt-4">
          <Grid min={260} gap={16}>
            <Img src={`${I}/instagram-story-man-checking-his-phone-fb5498`} alt="Instagram story: man checking his phone" radius={24} full />
            <Img src={`${I}/instagram-story-tenx-home-screen-25e332`} alt="Instagram story: TenX home screen" radius={24} full />
            <Img src={`${I}/instagram-post-tenx-app-on-a-phone-65febb`} alt="Instagram post: TenX app on a phone" radius={24} full />
          </Grid>
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Screen <A>design</A>
          </>
        }
        lead="The end-to-end flow, from first launch to a completed transfer."
      >
        <div className="mb-6">
          <Grid min={300} gap={16}>
            <DarkTile src="tenx-splash-screen-b7bfaa" alt="TenX splash screen" max={360} pad="16px 0" />
            <DarkTile src="tenx-home-screen-with-current-aud-to-inr-38b74e" alt="TenX home screen with current AUD to INR rate" max={340} pad="16px 0" />
          </Grid>
        </div>
        <p className="m-0 mb-24 max-w-[760px] text-[17px] leading-[1.65] text-text-2">
          A modern fintech interface that prioritises usability: review exchange rates, verify transfer amounts
          and start a transaction effortlessly.
        </p>
        <div className="flex flex-col gap-24">
          {[
            { src: "phone-verification-and-sign-in-options-cf8025", alt: "Phone verification and sign-in options", title: "Login & verification", text: "A secure, frictionless login: sign in quickly with OTP verification or trusted providers such as Google and Apple ID for fast, flexible onboarding." },
            { src: "kyc-identity-verification-screens-4b0c47", alt: "KYC identity verification screens", title: "Identity verification (KYC)", text: "A guided scanning process with clear instructions, progress tracking and easy recovery options — built for security and usability." },
          ].map((r) => (
            <div key={r.title} className="flex flex-col gap-7">
              <div className="overflow-hidden rounded-card-lg" style={{ background: DARK }}>
                <Img src={`${I}/${r.src}`} alt={r.alt} full />
              </div>
              <div className="max-w-[760px]">
                <h3 className="m-0 mb-3 text-[28px] font-semibold tracking-[-0.03em]">{r.title}</h3>
                <p className="m-0 text-[17px] leading-[1.65] text-text-2">{r.text}</p>
              </div>
            </div>
          ))}
          {flowRows.map((r, i) => (
            <div
              key={r.title}
              className={`flex flex-wrap items-center gap-x-14 gap-y-8 ${i % 2 ? "flex-row-reverse" : "flex-row"}`}
            >
              <div className="flex-[1_1_380px]">
                <DarkTile src={r.src} alt={r.alt} max={420} />
              </div>
              <div className="flex-[1_1_340px]">
                <h3 className="m-0 mb-[14px] text-[28px] font-semibold tracking-[-0.03em]">{r.title}</h3>
                <p className="m-0 text-[17px] leading-[1.65] text-text-2">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24">
          <Img src={`${I}/profile-and-settings-screens-1b4c29`} alt="Profile and settings screens" radius={28} full />
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Disputes &amp; <A>transaction states</A>
          </>
        }
        lead="Clear, calm flows for the moments that matter most — when something needs attention."
      >
        <div className="rounded-card-lg border border-line p-[clamp(20px,3vw,40px)]">
          <Grid min={220} gap={20} align="start">
            <Img src={`${I}/dispute-a-transaction-ledger-and-help-0cc441`} alt="Dispute a transaction: ledger and help" full className={stateShot} />
            <Img src={`${I}/dispute-step-choose-a-reason-47528e`} alt="Dispute step: choose a reason" full className={stateShot} />
            <Img src={`${I}/dispute-step-evidence-and-narrative-a6ef8f`} alt="Dispute step: evidence and narrative" full className={stateShot} />
            <Img src={`${I}/dispute-submitted-with-live-tracking-cf6f92`} alt="Dispute submitted with live tracking" full className={stateShot} />
          </Grid>
        </div>
        <div className="mt-4 rounded-card-lg border border-line p-[clamp(20px,3vw,40px)]">
          <Grid min={220} gap={20} align="start">
            <Img src={`${I}/transaction-completed-e4e764`} alt="Transaction completed" full className={stateShot} />
            <Img src={`${I}/transaction-failed-with-reason-689f22`} alt="Transaction failed with reason" full className={stateShot} />
            <Img src={`${I}/transaction-pending-with-progress-9d10fb`} alt="Transaction pending with progress" full className={stateShot} />
          </Grid>
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Final <A>screens</A>
          </>
        }
        lead="After rounds of user testing and feedback, the refined TenX: a faster, smarter and more intuitive way to manage global currencies."
      >
        <Img src={`${I}/tenx-website-and-app-shown-on-a-laptop-a-07949e`} alt="TenX website and app shown on a laptop and phone" radius={28} full />
        <div className="mt-4">
          <Grid min={380} gap={16}>
            <div className="flex min-h-[260px] flex-col justify-between gap-8 rounded-card bg-ink p-9 text-paper">
              <span className="eyebrow text-text-4">Frequent users</span>
              <div>
                <p className="m-0 text-[96px] font-bold leading-none tracking-[-0.05em]">2K+</p>
                <div aria-hidden="true" className="mt-[18px] h-2.5 overflow-hidden rounded-pill bg-[#333333]">
                  <div className="h-full w-[68%] bg-paper" />
                </div>
              </div>
            </div>
            <div className="flex min-h-[260px] items-center justify-between gap-6 rounded-card border border-line p-9">
              <div>
                <span className="eyebrow">Safety score</span>
                <p className="m-0 mt-[14px] max-w-[220px] text-[17px] leading-[1.5] text-text-2">
                  Users rated TenX highly for feeling safe sending money.
                </p>
              </div>
              <div
                role="img"
                aria-label="Safety score 80%"
                className="flex size-[170px] flex-none items-center justify-center rounded-pill"
                style={{ background: "conic-gradient(#0A0A0A 0 80%, #E5E5E5 80% 100%)" }}
              >
                <div className="flex size-[132px] items-center justify-center rounded-pill bg-paper text-[40px] font-bold tracking-[-0.04em]">
                  80%
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </CaseSection>
    </>
  ),
};
