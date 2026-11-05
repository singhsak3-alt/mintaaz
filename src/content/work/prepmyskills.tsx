import { Accent as A } from "@/components/SectionHeader";
import { CaseSection, Frame, Gap, Grid, HeroFrame, Img, Swatches } from "@/components/case/primitives";
import type { CaseStudy } from "./types";

const I = "/images/pms";

export const prepmyskills: CaseStudy = {
  slug: "prepmyskills",
  hero: {
    titleSize: "lg",
    tagline: (
      <>
        Where bright kids make <A>brilliant choices.</A>
      </>
    ),
    media: (
      <HeroFrame bg="#70BA84">
        <Img src={`${I}/prepmyskills-login-screen-on-a-tablet-wi-d63668`} alt="PrepMySkills login screen on a tablet with a stylus, on green" w={1440} h={843} full eager />
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
      Designing for <A>young learners?</A>
    </>
  ),
  body: (
    <>
      <section className="container-site pt-32">
        <div className="rounded-hero bg-[#FCF2E6] p-[clamp(24px,4vw,56px)]">
          <Img src={`${I}/where-bright-kids-make-brilliant-choices-016bea`} alt="Where bright kids make brilliant choices — headline with a butterfly and rocket" w={1248} h={530} />
        </div>
      </section>

      <section className="container-site pt-32">
        <Grid min={420} gap="clamp(24px, 4vw, 64px)" align="center">
          <div className="max-w-[560px]">
            <Img src={`${I}/about-the-project-in-a-dashed-cloud-180252`} alt="About the project, in a dashed cloud" w={710} h={546} />
          </div>
          <div className="flex flex-col gap-[18px]">
            <span className="eyebrow">About the project</span>
            <p className="m-0 text-[clamp(20px,1.8vw,24px)] leading-[1.5] text-text-1">
              Prep My Skills is a learning platform that nurtures young minds through engaging, skill-building
              activities. It turns essentials like spelling into an enjoyable experience by blending guided
              practice with creative exploration — then extends into interactive maths, language development and
              memory-boosting exercises, making learning effective and exciting.
            </p>
          </div>
        </Grid>
      </section>

      <section className="container-site pt-32">
        <Img src={`${I}/through-the-prepmyskills-app-kids-will-g-00dd73`} alt="Through the PrepMySkills app kids will get to know and explore the world" w={1434} h={336} />
      </section>

      <CaseSection
        title={
          <>
            Design <A>process</A>
          </>
        }
        lead="Design thinking is non-linear and iterative — the way teams come to understand their users."
      >
        <Img src={`${I}/design-process-map-empathise-define-idea-d23d6c`} alt="Design process map: Empathise, Define, Ideate, Prototype and Test" w={1440} h={1066} />
      </CaseSection>

      <CaseSection
        title={
          <>
            Project <A>timeline</A>
          </>
        }
        lead="Four weeks from idea to visual design."
      >
        <Frame>
          <Img src={`${I}/project-timeline-idea-strategy-ux-resear-1faf0e`} alt="Project timeline: idea strategy, UX research, empathy mapping, low-hi wireframes and visual design" w={1434} h={661} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            User <A>persona</A>
          </>
        }
        lead="Who we designed for: a curious, playful preschooler with a family that encourages learning."
      >
        <Frame variant="bleed" bg="#E8EAEC">
          <Img src={`${I}/user-persona-lily-davis-with-tags-pupil--440671`} alt="User persona Lily Davis with tags: pupil, 5 years, loves play, friendly" w={1433} h={1047} full />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Empathy <A>map</A>
          </>
        }
        lead="Understanding what young learners say, think, do and feel — to design a more child-centred experience."
      >
        <Frame variant="bleed" bg="#FCF2E6">
          <Img src={`${I}/empathy-map-says-thinks-do-and-feels-aro-ed6214`} alt="Empathy map: says, thinks, do and feels around a smiling boy" w={1440} h={853} />
        </Frame>
      </CaseSection>

      <CaseSection
        title={
          <>
            Style <A>guide</A>
          </>
        }
        lead="A bright, friendly palette and the Ubuntu typeface — geometric, warm and easy to read for young eyes."
      >
        <Swatches
          minHeight={150}
          items={[
            { name: "Orange", hex: "#EF8F35", note: "Primary · headings & energy" },
            { name: "Sky blue", hex: "#3395FF", note: "Actions & CTAs" },
            { name: "Red", hex: "#F5CCC4", note: "Soft accents", dark: true },
            { name: "Green", hex: "#AFDBC4", note: "Calm surfaces", dark: true },
          ]}
        />
        <Gap />
        <Frame>
          <Img src={`${I}/colour-shapes-and-the-ubuntu-typeface-sp-d711e9`} alt="Colour shapes and the Ubuntu typeface specimen" w={1431} h={916} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="06 · UI kit"
        title={
          <>
            UI <A>components</A>
          </>
        }
        lead="Login, lesson cards, activity bubbles, buttons, audio settings and the progress squiggle."
      >
        <Frame>
          <Img src={`${I}/prepmyskills-components-login-card-lesso-1f15c1`} alt="PrepMySkills components: login card, lesson cards, activity icons, buttons and audio settings" w={1433} h={2252} />
        </Frame>
      </CaseSection>

      <CaseSection
        eyebrow="07 · Visual design"
        title={
          <>
            Interface <A>design</A>
          </>
        }
        lead="Login and the lesson library on tablet, designed to be tapped and drawn on with a stylus."
      >
        <Frame>
          <Img src={`${I}/login-and-lesson-library-screens-on-two--0f3ade`} alt="Login and lesson library screens on two tablets over a blue shape" w={1434} h={1097} />
        </Frame>
        <Gap />
        <Grid min={480}>
          <Frame>
            <Img src={`${I}/lesson-home-emotional-skills-resume-cour-d30ca2`} alt="Lesson home: Emotional Skills, resume course, concept, activity, YouTube, scenario, assessment and recap" w={1423} h={1025} />
          </Frame>
          <Frame>
            <Img src={`${I}/lesson-content-and-a-clean-or-unclean-ro-1e8273`} alt="Lesson content and a clean-or-unclean room activity on tablets" w={1415} h={1448} />
          </Frame>
        </Grid>
        <Gap />
        <Frame variant="bleed" border bg="#FFFFFF">
          <Img src={`${I}/audio-settings-and-welcome-to-wordsmithi-69f3dc`} alt="Audio settings and Welcome to Wordsmithing screens on tilted tablets" w={1440} h={2304} maxWidth={720} />
        </Frame>
      </CaseSection>
    </>
  ),
};
