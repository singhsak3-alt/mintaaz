import { Accent as A } from "@/components/SectionHeader";
import { CaseSection, Frame, Gap, Grid, HeroFrame, Img } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/illustration";

/** Bordered white card with an image and an optional centred caption. */
function Art({
  src,
  alt,
  w,
  h,
  radius,
  caption,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  radius?: number;
  caption?: string;
}) {
  return (
    <Frame caption={caption} captionPos="bottom" captionAlign="center">
      <Img src={`${I}/${src}`} alt={alt} w={w} h={h} radius={radius} />
    </Frame>
  );
}

export const illustration: CaseStudy = {
  slug: "illustration",
  hero: {
    titleSize: "lg",
    tagline: (
      <>
        From the PrepMySkills storybook to <A>logos, heroes &amp; characters.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="radial-gradient(120% 90% at 50% 0%, #6B2D59 0%, #461D3A 55%, #2A0F22 100%)"
        padding="clamp(32px, 5vw, 72px)"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(24px,4vw,56px)]"
      >
        <Img
          src={`${I}/prepmyskills-storybook-cover-e050f6`}
          alt="PrepMySkills storybook cover"
          w={514}
          h={584}
          eager
          style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,.45))" }}
        />
        <div className="flex flex-col gap-[22px] text-paper">
          <span className="eyebrow text-[#E9C6DD]">PrepMySkills · Children’s storybook</span>
          <p className="m-0 text-[clamp(28px,3vw,44px)] font-bold leading-[1.08] tracking-[-0.035em]">
            Stories that help kids <A>name their feelings.</A>
          </p>
          <p className="m-0 max-w-[460px] text-[17px] leading-[1.6] text-[#EBD9E5]">
            An illustrated storybook built for PrepMySkills — characters, covers and spreads designed to make
            emotional learning warm, playful and easy to follow.
          </p>
          <dl className="m-0 mt-2 grid grid-cols-3 gap-4 border-t border-white/25 pt-5">
            {[
              ["Role", "Illustrator"],
              ["Medium", "Pencil → digital"],
              ["Scope", "12 projects"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-[#D9B3CC]">{k}</dt>
                <dd className="m-0 mt-1.5 text-[15px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </HeroFrame>
    ),
  },
  facts: [],
  cta: (
    <>
      Need a story <A>told in pictures?</A>
    </>
  ),
  body: (
    <>
      <CaseSection
        title={
          <>
            It starts with a <A>sketch</A>
          </>
        }
        lead="Every great project begins on paper. Loose pencil studies let ideas, poses and personalities take shape before anything goes digital."
      >
        <Art src="pencil-character-sketches-for-the-storyb-29305c" alt="Pencil character sketches for the storybook" w={720} h={274} caption="Early character sketches — pencil on paper" />
      </CaseSection>

      <CaseSection
        title={
          <>
            Children’s <A>storybook</A>
          </>
        }
        lead="I designed and illustrated a storybook for PrepMySkills — from character development to covers and full spreads that help children explore their feelings."
      >
        <Grid min={420}>
          <Art src="storybook-cover-alternate-45068b" alt="Storybook cover, alternate" w={500} h={568} radius={12} />
          <Frame bg="var(--color-ink)" style={{ border: 0 }}>
            <Img src={`${I}/three-main-characters-in-red-and-black-995b06`} alt="Three main characters in red and black" w={966} h={530} radius={30} />
          </Frame>
        </Grid>
        <Gap />
        <Grid min={520}>
          <Art src="zoo-of-feelings-open-book-spread-5bd189" alt="Zoo of Feelings open book spread" w={613} h={438} />
          <Art src="second-open-book-spread-19e541" alt="Second open book spread" w={631} h={438} />
        </Grid>
        <Gap />
        <Grid min={420}>
          <Art src="experience-card-illustration-f7f86f" alt="Experience card illustration" w={507} h={368} caption="Experience" />
          <Art src="earn-card-illustration-6774cd" alt="Earn card illustration" w={888} h={567} caption="Earn" />
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Travel <A>hero banner</A>
          </>
        }
        lead="A hero banner for a travel platform — starting with rough sketches, then refined into a vibrant illustration of globe, visa and flight."
      >
        <div className="flex flex-wrap items-stretch gap-4">
          <div className="flex flex-[1_1_300px] [&>*]:flex-1">
            <Art src="pencil-sketch-of-the-travel-banner-9de578" alt="Pencil sketch of the travel banner" w={280} h={346} radius={10} caption="Sketch" />
          </div>
          <div className="flex flex-[2_1_560px] [&>*]:flex-1">
            <Art src="final-travel-hero-illustration-747e2f" alt="Final travel hero illustration" w={897} h={695} caption="Final illustration" />
          </div>
        </div>
      </CaseSection>

      <CaseSection
        title={
          <>
            Destuo <A>identity</A>
          </>
        }
        lead="Logo and visual identity for an online custom fashion design platform — modern, expressive and easy to recognise."
      >
        <Art src="destuo-logo-and-identity-de1753" alt="Destuo logo and identity" w={501} h={626} />
      </CaseSection>

      <CaseSection
        title={
          <>
            Payment <A>solution</A>
          </>
        }
        lead="Spot illustrations for a gift-voucher and payments product: faster time-to-market, sandbox testing, scalable APIs and 100% secure brand options."
      >
        <Grid min={380}>
          <Art src="payment-solution-illustration-82da2f" alt="Payment solution illustration" w={441} h={529} />
          <Art src="egv-distribution-dashboard-illustration-42ef27" alt="EGV distribution dashboard illustration" w={509} h={545} />
        </Grid>
        <Gap />
        <Art src="api-and-distribution-flow-illustration-1374d9" alt="API and distribution flow illustration" w={1152} h={630} />
      </CaseSection>

      <CaseSection
        title={
          <>
            Billd <A>hero banner</A>
          </>
        }
        lead="A hero banner for Billd, a cloud-based restaurant billing and payment platform — bold type wrapped around a receipt-printing terminal."
      >
        <Art src="billd-billing-solution-hero-banner-9f8337" alt="Billd billing solution hero banner" w={1084} h={528} />
      </CaseSection>

      <CaseSection
        eyebrow="06 · Abstract"
        title={
          <>
            Abstract <A>illustration</A>
          </>
        }
        lead="Line-based abstract artwork expressing simple, secure and seamless journeys."
      >
        <Img src={`${I}/simple-secure-seamless-abstract-line-ill-75bc89`} alt="Simple, secure, seamless abstract line illustration" w={1294} h={443} radius={28} />
      </CaseSection>

      <CaseSection
        eyebrow="07 · Icon system"
        title={
          <>
            Icons &amp; <A>illustrations</A>
          </>
        }
        lead="A cohesive set of custom icons for banking, security and regulatory compliance — consistent stroke, colour-coded by topic."
      >
        <Art src="labour-law-privacy-corporate-law-and-ip--7943ae" alt="Labour law, privacy, corporate law and IP valuation icon tiles" w={1353} h={244} />
      </CaseSection>

      <CaseSection
        eyebrow="08 · Delivery"
        title={
          <>
            Delivery <A>illustrations</A>
          </>
        }
        lead="Friendly, energetic scenes for a delivery service: trackable delivery, speed delivery and sign-up."
      >
        <Img src={`${I}/delivery-rider-hero-banner-0fbbdb`} alt="Delivery rider hero banner" w={1295} h={449} radius={28} />
        <Gap />
        <Grid min={280}>
          <Art src="trackable-delivery-93e8ba" alt="Trackable delivery" w={355} h={416} caption="Trackable delivery" />
          <Art src="speed-delivery-e69824" alt="Speed delivery" w={355} h={419} caption="Speed delivery" />
          <Art src="sign-up-now-80a9d3" alt="Sign up now" w={417} h={441} caption="Sign up now" />
        </Grid>
      </CaseSection>

      <CaseSection
        eyebrow="09 · Spots"
        title={
          <>
            Reading &amp; <A>AI spots</A>
          </>
        }
        lead="Monochrome spot illustrations with soft gradient halos for a books and learning platform."
      >
        <Art src="reader-bookshelf-and-ai-head-spot-illust-439634" alt="Reader, bookshelf and AI head spot illustrations" w={1316} h={524} />
      </CaseSection>

      <CaseSection
        eyebrow="10 · Logo"
        title={
          <>
            Zippo partner <A>logo</A>
          </>
        }
        lead="A distinctive mascot logo for an authorised Zippo partner in India — evolved from pencil sketch to monochrome to the final full-colour mark."
      >
        <Grid min={240}>
          <Art src="pencil-sketch-of-the-dragon-mascot-0df3f6" alt="Pencil sketch of the dragon mascot" w={267} h={214} radius={10} caption="Sketch" />
          <Art src="monochrome-dragon-mascot-f1bffe" alt="Monochrome dragon mascot" w={259} h={204} caption="Monochrome" />
          <Art src="full-colour-dragon-mascot-57ae2c" alt="Full-colour dragon mascot" w={263} h={206} caption="Colour" />
        </Grid>
        <Gap />
        <Art src="yo-dragon-final-logo-lock-up-55f2de" alt="Yo! Dragon final logo lock-up" w={1122} h={386} />
      </CaseSection>

      <CaseSection
        eyebrow="11 · Character"
        title={
          <>
            Character <A>illustration</A>
          </>
        }
        lead="Pankaj — a 50-year-old married man, warm and grounded, sitting comfortably between introversion and extroversion."
      >
        <Grid min={420}>
          <Art src="portrait-illustration-of-pankaj-26a5c2" alt="Portrait illustration of Pankaj" w={777} h={845} radius={20} />
          <div className="flex flex-col justify-between gap-8 rounded-card-lg bg-ink p-[clamp(24px,4vw,56px)] text-paper">
            <span className="eyebrow text-text-4">Persona</span>
            <p className="m-0 text-[clamp(36px,4vw,60px)] font-bold leading-none tracking-[-0.04em]">
              Pankaj, <A>50.</A>
            </p>
            <ul className="m-0 flex list-none flex-col gap-[14px] p-0 text-[17px] leading-[1.5] text-on-dark">
              {[
                "Married, family-first and dependable",
                "Balances introversion and extroversion",
                "Traditional kurta with hand-drawn embroidery detail",
              ].map((t) => (
                <li key={t} className="border-t border-text-1 pt-[14px]">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </CaseSection>

      <CaseSection
        eyebrow="12 · Product"
        title={
          <>
            Surge <A>Send</A>
          </>
        }
        lead="Illustrations for a file storage and sharing platform, using the paper airplane as a visual metaphor for fast, effortless sending."
      >
        <Img src={`${I}/surge-send-paper-airplane-and-team-illus-3f9171`} alt="Surge Send paper-airplane and team illustrations" w={1440} h={1643} radius={28} />
      </CaseSection>
    </>
  ),
};
