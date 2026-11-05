import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand, DEFAULT_CTA_TEXT } from "@/components/CtaBand";
import { Accent } from "@/components/SectionHeader";
import { WorkFilter } from "@/components/work/WorkFilter";
import { getProject, projects, type Project } from "@/content/projects";
import { workIntro, workSections, type WorkSection } from "@/content/workPage";

export const metadata: Metadata = {
  title: "All work",
  description: workIntro,
};

function GroupSection({ section, items }: { section: WorkSection; items: Project[] }) {
  const headingId = `h-${section.id}`;
  const count = `${String(items.length).padStart(2, "0")} ${items.length === 1 ? "project" : "projects"}`;
  return (
    <section aria-labelledby={headingId} className="mt-22">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-5">
        <div>
          {section.eyebrow && (
            <p className="eyebrow m-0 mb-3 text-[13px]">{section.eyebrow}</p>
          )}
          <h2
            id={headingId}
            className="m-0 text-[clamp(34px,4.4vw,60px)] font-bold leading-none tracking-[-0.045em]"
          >
            {section.title[0]}
            <Accent>{section.title[1]}</Accent>
          </h2>
        </div>
        <p className="eyebrow m-0 text-[13px]">{count}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] gap-x-7 gap-y-14">
        {items.map((p) => (
          <ProjectCard
            key={p.slug}
            variant="grid"
            href={`/work/${p.slug}`}
            title={p.name}
            cover={p.cover}
            summary={p.summary}
            disciplines={p.disciplines}
          />
        ))}
      </div>
    </section>
  );
}

export default function WorkPage() {
  const groups = workSections.map((s) => ({
    section: s,
    items: s.slugs.map((slug) => getProject(slug)).filter((p): p is Project => !!p),
  }));

  const chips = [
    { id: "all", label: "All work", count: projects.length },
    ...groups.map((g) => ({ id: g.section.id, label: g.section.chip, count: g.items.length })),
  ];

  return (
    <>
      <main className="container-site pb-[120px] pt-18">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <h1 className="m-0 text-[clamp(72px,12vw,184px)] font-extrabold leading-[0.86] tracking-[-0.065em]">
            All <span className="serif-accent tracking-[-0.03em]">work</span>
          </h1>
          <p className="m-0 max-w-[420px] text-lg leading-[1.55] text-text-2">{workIntro}</p>
        </div>

        <div className="mt-14 border-t border-line" />

        <WorkFilter
          chips={chips}
          sections={groups.map((g) => ({
            id: g.section.id,
            node: <GroupSection section={g.section} items={g.items} />,
          }))}
        />
      </main>

      <CtaBand
        title={
          <>
            Your project could be <Accent>next.</Accent>
          </>
        }
        text={DEFAULT_CTA_TEXT}
        primary={{ label: "Let's talk", href: "/contact" }}
        secondary={{ label: "Back to home", href: "/" }}
      />
    </>
  );
}
