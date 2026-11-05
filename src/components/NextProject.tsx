import Link from "next/link";
import type { Project } from "@/content/projects";
import { ArrowRight } from "./icons";

/** Full-width "Next project" row between two 1px lines. The whole row is the link. */
export function NextProject({ project }: { project: Project }) {
  const [plain, italic] = project.title;
  return (
    <section className="container-site pb-[120px] pt-32">
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-wrap items-center justify-between gap-6 border-y border-line py-9 text-ink no-underline hover:text-ink"
      >
        <span>
          <span className="eyebrow block text-[13px]">Next project</span>
          <span className="mt-2.5 block text-[clamp(44px,6vw,88px)] font-bold leading-none tracking-[-0.05em]">
            {plain}
            <span className="serif-accent">{italic}</span>
          </span>
        </span>
        <span className="inline-flex size-[72px] items-center justify-center rounded-pill bg-ink">
          <ArrowRight size={24} strokeWidth={2.2} stroke="#FFFFFF" />
        </span>
      </Link>
    </section>
  );
}
