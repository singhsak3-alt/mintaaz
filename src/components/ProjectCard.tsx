import Link from "next/link";
import type { Cover } from "@/content/projects";
import { MediaImage, MediaVideo } from "./Media";
import { ArrowUpRight } from "./icons";

/**
 * Project tile. The whole card is one link; the image lifts 4px on hover.
 *
 * variant="feature"  Home "Selected work": 24px radius, badge, 30px title, tags + [year]
 * variant="grid"     Work page: 20px radius, 26px title + arrow, summary, discipline pills
 */

type Base = { href: string; title: string; cover: Cover };

type FeatureProps = Base & {
  variant: "feature";
  badge: string;
  badgeTone?: "light" | "dark";
  tags: string;
  year: string;
  bordered?: boolean;
};

type GridProps = Base & {
  variant: "grid";
  summary: string;
  disciplines: string[];
};

function CoverMedia({ cover }: { cover: Cover }) {
  return cover.kind === "video" ? (
    <MediaVideo
      src={cover.src}
      poster={cover.poster}
      label={cover.alt}
      className="block h-full w-full object-cover"
    />
  ) : (
    <MediaImage
      src={cover.src}
      alt={cover.alt}
      fill
      sizes="(max-width: 860px) 100vw, 50vw"
      className="object-cover"
    />
  );
}

const lift =
  "transition-transform duration-[250ms] ease-[ease] group-hover:-translate-y-1";

export function ProjectCard(props: FeatureProps | GridProps) {
  if (props.variant === "feature") {
    const { href, title, cover, badge, badgeTone = "light", tags, year, bordered } = props;
    return (
      <Link href={href} className="group flex flex-col gap-5 text-ink no-underline hover:text-ink">
        <div
          className={`relative aspect-square overflow-hidden rounded-card ${lift} ${
            bordered ? "box-border border border-line bg-paper" : ""
          }`}
        >
          <CoverMedia cover={cover} />
          <span
            className={`absolute left-5 top-5 rounded-pill px-[14px] py-2 text-[13px] font-semibold ${
              badgeTone === "dark" ? "bg-ink text-paper" : "bg-paper text-ink"
            }`}
          >
            {badge}
          </span>
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="m-0 text-[30px] font-semibold tracking-[-0.03em]">{title}</h3>
            <p className="m-0 mt-1.5 text-[15px] text-text-3">{tags}</p>
          </div>
          <span className="pt-2.5 font-mono text-[13px] text-text-3">[{year}]</span>
        </div>
      </Link>
    );
  }

  const { href, title, cover, summary, disciplines } = props;
  return (
    <Link
      href={href}
      aria-label={`${title} case study`}
      className="group flex flex-col gap-4 text-ink no-underline hover:text-ink"
    >
      <div className={`relative aspect-square overflow-hidden rounded-tile bg-surface-2 ${lift}`}>
        <CoverMedia cover={cover} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <h3 className="m-0 text-[26px] font-semibold tracking-[-0.03em]">{title}</h3>
        <span className="box-border inline-flex size-10 flex-none items-center justify-center rounded-pill border-[1.5px] border-ink">
          <ArrowUpRight size={14} />
        </span>
      </div>
      <p className="m-0 text-[15px] leading-[1.6] text-text-3">{summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {disciplines.map((d) => (
          <span
            key={d}
            className="rounded-pill border border-line-strong px-3 py-1.5 text-xs text-text-1"
          >
            {d}
          </span>
        ))}
      </div>
    </Link>
  );
}
