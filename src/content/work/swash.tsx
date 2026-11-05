import { Accent as A } from "@/components/SectionHeader";
import { Band, BandHeader, CaseSection, Frame, Gap, Grid, HeroFrame, Img, Swatches } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/swash";

const process = [
  { title: "Understanding requirements", text: "Gathered requirements from stakeholders to understand the objectives, user needs and features the dashboard had to support." },
  { title: "Wireframing", text: "Low-fidelity blueprints of layout, content placement and navigation to validate ideas and align the team before visual design." },
  { title: "Visual design", text: "Colour, typography, icons and spacing — a look and feel that improves usability and carries the brand." },
  { title: "Prototyping", text: "Interactive models of key flows to test early, gather feedback and refine the experience before development." },
];

export const swash: CaseStudy = {
  slug: "swash",
  hero: {
    tagline: (
      <>
        Desktop application design <A>for monitoring breathing quality.</A>
      </>
    ),
    media: (
      <HeroFrame
        bg="#272A4A"
        padding="clamp(32px, 5vw, 64px) clamp(16px, 4vw, 64px) 0"
        className="flex flex-col items-center gap-8 text-center text-paper"
      >
        <p className="m-0 max-w-[760px] text-[clamp(18px,1.6vw,22px)] leading-[1.5] text-[#D9DBF2]">
          Swash is installed on a doctor’s computer, connects to a pulmonary device, collects patient
          demographics and vitals, and stores them securely in the cloud.
        </p>
        <p className="eyebrow m-0 text-[#A9ADE0]">Product design &nbsp;·&nbsp; Icon &amp; illustration &nbsp;·&nbsp; UI/UX design</p>
        <Img src={`${I}/swash-dashboard-on-a-tilted-desktop-scre-f13581`} alt="Swash dashboard on a tilted desktop screen" w={1254} h={530} eager />
      </HeroFrame>
    ),
  },
  facts: [
    { label: "Client", value: "Swash — pulmonary function device" },
    { label: "Role", value: "Product design, UI/UX, icons & illustration" },
    { label: "Platform", value: "Desktop application" },
    { label: "Users", value: "Doctors & technicians" },
  ],
  cta: (
    <>
      Designing for <A>complex data?</A>
    </>
  ),
  body: (
    <>
      <section className="container-site pt-32">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-[clamp(32px,6vw,96px)]">
          <div className="sticky top-[120px] max-[860px]:static">
            <span className="eyebrow mb-[14px] block">Approach</span>
            <h2 className="m-0 text-[clamp(48px,6vw,88px)] font-bold leading-[0.95] tracking-[-0.05em]">
              Design <A>process</A>
            </h2>
          </div>
          <ol className="m-0 list-none border-b border-line p-0">
            {process.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[96px_1fr] gap-6 border-t border-line py-7">
                <span className="text-[56px] font-light leading-none tracking-[-0.04em] text-line-dashed">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col gap-2">
                  <span className="text-[22px] font-semibold tracking-[-0.02em]">{s.title}</span>
                  <span className="text-base leading-[1.6] text-text-3">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CaseSection
        title={
          <>
            Project <A>introduction</A>
          </>
        }
        lead="Connect easily, manage seamlessly — the desktop app talks to the Swash device, and an Android app pulls the same reports for doctors to review, comment on and save as PDF."
      >
        <Frame variant="bleed" border bg="#FFFFFF">
          <Img src={`${I}/swash-dashboard-on-a-lavender-desktop-co-f2623b`} alt="Swash dashboard on a lavender desktop computer with keyboard and mouse" w={1262} h={1398} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="02 · Information architecture"
        title={
          <>
            Clarity &amp; efficiency <A>flows</A>
          </>
        }
        lead="Two roles, two journeys: doctors run tests and read reports; technicians set up hospitals, staff and device calibration."
      >
        <Frame caption="Doctor flow">
          <Img src={`${I}/doctor-flow-login-dashboard-patient-info-0a8142`} alt="Doctor flow: login, dashboard, patient info, verification and system" w={1179} h={647} />
        </Frame>
        <Gap />
        <Frame caption="Technician flow">
          <Img src={`${I}/technician-flow-dashboard-hospital-info--0b599d`} alt="Technician flow: dashboard, hospital info, staff, cut-off values, calibration and system" w={1007} h={743} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Precision design <A>with grid</A>
          </>
        }
        lead="A 12-column desktop grid with a fixed sidebar keeps dense medical data aligned and readable."
      >
        <Frame>
          <Img src={`${I}/12-column-grid-wireframe-with-sidebar-a3b278`} alt="12-column grid wireframe with sidebar" w={1431} h={730} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Branding <A>guide</A>
          </>
        }
        lead="Clear-space rules for the full Swash wordmark and the compact symbol."
      >
        <Grid min={420}>
          <Frame>
            <span className="eyebrow">Brand personality</span>
            <p className="m-0 text-lg leading-[1.6] text-text-1">
              Keywords that describe the brand’s character — the words Swash wants to be associated with:{" "}
              <strong>caring, precise, calm, trustworthy.</strong>
            </p>
          </Frame>
          <Frame>
            <Img src={`${I}/logo-clear-space-grid-for-the-wordmark-a-fb0979`} alt="Logo clear-space grid for the wordmark and symbol" w={911} h={326} />
          </Frame>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Typography <A>&amp; font</A>
          </>
        }
        lead="Hiragino, in medium and bold, for a clean, clinical and friendly voice."
      >
        <Grid min={420}>
          <Frame>
            <Img src={`${I}/in-our-swash-design-we-incorporate-the-h-df75bf`} alt="In our Swash design, we incorporate the Hiragino font family" w={794} h={379} />
          </Frame>
          <Frame>
            <Img src={`${I}/hiragino-specimen-aa-alphabet-and-weight-d90305`} alt="Hiragino specimen: Aa, alphabet and weights" w={1413} h={208} />
          </Frame>
        </Grid>
      </CaseSection>

      <CaseSection
        title={
          <>
            Colour <A>palette</A>
          </>
        }
        lead="Orange for motivation, blue for calm productivity and mint for freshness — balanced with charcoal and grey."
      >
        <Swatches
          min={200}
          items={[
            { name: "Orange", hex: "#EF5928", note: "Humility, health, joy, motivation" },
            { name: "Blue", hex: "#0066FF", note: "Calm and productive" },
            { name: "Mint green", hex: "#62D3C3", note: "Freshness and energy", dark: true },
            { name: "Charcoal", hex: "#333333", note: "Text & UI" },
            { name: "Grey", hex: "#DADADA", note: "Surfaces", dark: true },
          ]}
        />
        <Gap />
        <Frame>
          <Img src={`${I}/colour-mood-cards-with-tints-for-orange--2f8765`} alt="Colour mood cards with tints for orange, blue and mint green" w={1439} h={1009} />
        </Frame>
      </CaseSection>

      <Band bg="#272A4A">
        <BandHeader
          eyebrow="07 · UI kit"
          title={
            <>
              Design <A>system</A>
            </>
          }
          lead="The Swash UI kit — toasts, controls, outline and dual-tone icons, uploads and stat cards for a cohesive, striking interface."
        />
        <Img src={`${I}/swash-ui-kit-toasts-record-controls-icon-7694dd`} alt="Swash UI kit: toasts, record controls, icon sets, buttons, upload cards and stat cards" w={1235} h={1112} radius={28} />
      </Band>

      <CaseSection
        eyebrow="08 · Visual design"
        title={
          <>
            Final <A>screens</A>
          </>
        }
        lead="From login and device connection to appointments, patient lists and conducting a test."
      >
        <Frame variant="bleed" border bg="#FFFFFF">
          <Img src={`${I}/appointments-list-on-a-laptop-with-a-con-aeb2d2`} alt="Appointments list on a laptop with a conduct-test modal" w={1439} h={1142} />
        </Frame>
        <Gap />
        <Frame caption="Login → connect device → verify">
          <Img src={`${I}/flow-from-login-and-device-connection-to-2dacea`} alt="Flow from login and device connection to the dashboard and verification" w={1402} h={3514} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="09 · Core flow"
        title={
          <>
            Conducting <A>test</A>
          </>
        }
        lead="Select test type, run the timed test with live volume and mouth-pressure graphs, then review and save the report."
      >
        <Frame>
          <Img src={`${I}/conducting-a-test-select-test-type-live--2c173b`} alt="Conducting a test: select test type, live graphs, countdown, test completed and saved report" w={1248} h={2413} />
        </Frame>
      </CaseSection>

      <section className="container-site pt-32">
        <Frame variant="bleed" radius={32}>
          <Img src={`${I}/two-doctors-reviewing-results-on-a-lapto-b95875`} alt="Two doctors reviewing results on a laptop" w={1439} h={975} full />
        </Frame>
      </section>
    </>
  ),
};
