/**
 * Section headings.
 *
 * size="section"  Home / Services / Work H2: clamp(48px, 7vw, 104px), lead right-aligned.
 * size="case"     Case-study H2: clamp(32px, 3.4vw, 48px) over a 1px line (20px below, 32px margin).
 *
 * Put the one or two italic words in <Accent>.
 */

export function Accent({ children }: { children: React.ReactNode }) {
  return <span className="serif-accent">{children}</span>;
}

type Props = {
  title: React.ReactNode;
  eyebrow?: string;
  lead?: React.ReactNode;
  size?: "section" | "case";
  /** On dark panels: white text, white 1.5px divider (case size). */
  tone?: "light" | "dark";
  as?: "h2" | "h3";
  id?: string;
  /** Extra content beside the lead (e.g. a button). */
  aside?: React.ReactNode;
  leadMaxWidth?: number;
  /** section size only: put the lead under the title instead of beside it. */
  leadBelow?: boolean;
  /** Bottom margin class (section size). Default mb-16 (64px). */
  marginClass?: string;
  className?: string;
};

export function SectionHeader({
  title,
  eyebrow,
  lead,
  size = "case",
  tone = "light",
  as: Tag = "h2",
  id,
  aside,
  leadMaxWidth,
  leadBelow,
  marginClass = "mb-16",
  className = "",
}: Props) {
  const dark = tone === "dark";

  if (size === "section") {
    return (
      <div className={`${marginClass} flex flex-wrap items-end justify-between gap-8 ${className}`}>
        <div>
          {eyebrow && <p className="eyebrow m-0 mb-[18px] text-[13px]">{eyebrow}</p>}
          <Tag
            id={id}
            className="m-0 text-[clamp(48px,7vw,104px)] font-bold leading-[0.92] tracking-[-0.05em]"
          >
            {title}
          </Tag>
          {leadBelow && lead && (
            <p className={`m-0 mt-[18px] text-lg ${dark ? "text-on-dark" : "text-text-2"}`}>
              {lead}
            </p>
          )}
        </div>
        {leadBelow ? aside : (lead || aside) && (
          <div style={{ maxWidth: leadMaxWidth ?? 380 }}>
            {lead && (
              <p
                className={`m-0 text-lg leading-[1.55] ${dark ? "text-on-dark" : "text-text-2"}`}
              >
                {lead}
              </p>
            )}
            {aside}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`mb-8 flex flex-wrap items-end justify-between gap-6 pb-5 ${
        dark ? "border-b-[1.5px] border-paper" : "border-b border-line"
      } ${className}`}
    >
      <div>
        {eyebrow && (
          <span className={`eyebrow mb-[14px] block ${dark ? "text-text-4" : ""}`}>
            {eyebrow}
          </span>
        )}
        <Tag
          id={id}
          className="m-0 text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em]"
        >
          {title}
        </Tag>
      </div>
      {lead && (
        <p
          className={`m-0 text-base leading-[1.6] ${dark ? "text-on-dark" : "text-text-2"}`}
          style={{ maxWidth: leadMaxWidth ?? 500 }}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
