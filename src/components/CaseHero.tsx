import Link from "next/link";

/**
 * Case-study hero: "All work" breadcrumb, mono eyebrow, huge H1 with an
 * italic serif part, a tagline on the right, the hero media (children)
 * and the project-facts row.
 */

export type Fact = { label: string; value: React.ReactNode };

type Props = {
  name: string;
  title: [string, string];
  tags: string;
  tagline: React.ReactNode;
  taglineMaxWidth?: number;
  /** "xl" clamp(72px,13vw,200px) · "lg" clamp(64px,11vw,176px) */
  titleSize?: "xl" | "lg";
  facts?: Fact[];
  children?: React.ReactNode;
};

export function CaseHero({
  name,
  title,
  tags,
  tagline,
  taglineMaxWidth = 420,
  titleSize = "xl",
  facts,
  children,
}: Props) {
  const [plain, italic] = title;
  return (
    <section className="container-site pt-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-text-3">
        <Link href="/work" className="py-3 text-text-3 no-underline">
          All work
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink">{name}</span>
      </nav>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="eyebrow m-0 mb-[18px] text-[13px]">(Case study) — {tags}</p>
          <h1
            className={`m-0 font-extrabold tracking-[-0.065em] ${
              titleSize === "xl"
                ? "text-[clamp(72px,13vw,200px)] leading-[0.84]"
                : "text-[clamp(64px,11vw,176px)] leading-[0.86]"
            }`}
          >
            {plain}
            <span className="serif-accent tracking-[-0.03em]">{italic}</span>
          </h1>
        </div>
        <p
          className="m-0 mb-2.5 text-[clamp(22px,2.2vw,30px)] font-semibold leading-[1.2] tracking-[-0.02em]"
          style={{ maxWidth: taglineMaxWidth }}
        >
          {tagline}
        </p>
      </div>

      {children}

      {facts && facts.length > 0 && (
        <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] border-b border-line">
          {facts.map((f) => (
            <div key={f.label} className="py-7 pr-6">
              <dt className="eyebrow">{f.label}</dt>
              <dd className="m-0 mt-2 text-lg font-semibold leading-[1.4]">{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
