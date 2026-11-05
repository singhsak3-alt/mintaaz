import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseHero } from "@/components/CaseHero";
import { CtaBand, DEFAULT_CTA_TEXT } from "@/components/CtaBand";
import { NextProject } from "@/components/NextProject";
import { getNextProject, getProject, projects } from "@/content/projects";
import { caseStudies } from "@/content/work";
import { resolveImage } from "@/lib/media";

/** All 15 case studies are prerendered; any other slug returns 404 via notFound(). */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const cover = project.cover.kind === "image" ? project.cover.src : project.cover.poster;
  const og = caseStudies[slug]?.ogImage ?? resolveImage(cover);
  return {
    title: `${project.name} case study`,
    description: `${project.name} — ${project.tags}. ${project.summary}`,
    openGraph: og ? { images: [og] } : undefined,
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = caseStudies[slug];
  if (!project || !study) notFound();

  const { hero } = study;
  return (
    <>
      <main>
        <CaseHero
          name={project.name}
          title={hero.title ?? project.title}
          tags={project.tags}
          tagline={hero.tagline}
          taglineMaxWidth={hero.taglineMaxWidth}
          titleSize={hero.titleSize}
          facts={study.facts}
        >
          {hero.media}
        </CaseHero>
        {study.body}
        <NextProject project={getNextProject(slug)} />
      </main>
      <CtaBand
        title={study.cta}
        text={DEFAULT_CTA_TEXT}
        primary={{ label: "Let's talk", href: "/contact" }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </>
  );
}
