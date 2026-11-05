import { ButtonLink } from "./Button";

/**
 * Closing call-to-action on a black 36px panel.
 * align="center" for Work and case studies; align="left" for About.
 */

type Action = { label: string; href: string };

type Props = {
  title: React.ReactNode;
  text?: string;
  primary: Action;
  secondary?: Action;
  align?: "center" | "left";
  id?: string;
  className?: string;
};

export const DEFAULT_CTA_TEXT =
  "Tell us what you're building. We'll come back with ideas, a plan and an honest estimate.";

export function CtaBand({
  title,
  text,
  primary,
  secondary,
  align = "center",
  id = "contact",
  className = "",
}: Props) {
  const center = align === "center";
  return (
    <section id={id} className={`px-4 ${className}`}>
      <div
        className={`mx-auto max-w-[var(--container-wide)] rounded-panel bg-ink py-[clamp(56px,7vw,112px)] text-paper ${
          center ? "px-[clamp(24px,4vw,64px)] text-center" : "px-[clamp(24px,5vw,80px)]"
        }`}
      >
        <h2
          className={`m-0 max-w-[900px] text-[clamp(40px,5.6vw,84px)] font-bold leading-[1.02] tracking-[-0.05em] ${
            center ? "mx-auto" : ""
          }`}
        >
          {title}
        </h2>
        {text && (
          <p className="mx-auto mb-0 mt-6 max-w-[520px] text-lg leading-[1.6] text-on-dark">
            {text}
          </p>
        )}
        <div className={`mt-9 flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
          <ButtonLink href={primary.href} size="lg">
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} size="lg" variant="inverse">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  );
}
