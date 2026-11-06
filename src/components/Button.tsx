import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./icons";

/**
 * Pill buttons from the design system.
 *
 * variant
 * - primary   indigo fill, white text. Hover: #3730A3 and lift 1px. Every CTA uses this.
 * - secondary 1.5px ink border. Hover: border and text indigo.
 * - inverse   1.5px white border, white text (on dark panels).
 *
 * size (copied from the reference)
 * - sm  15px · 13×22  header, small cards
 * - md  16px · 15×26  section actions, form submit
 * - lg  17px · 18×30  closing CTAs
 *
 * Disabled <Button>s fade to 40% and ignore hover/clicks.
 */

type Variant = "primary" | "secondary" | "inverse";
type Size = "sm" | "md" | "lg";
type Icon = "up-right" | "right" | "none";

const base =
  "inline-flex items-center justify-center rounded-pill font-semibold no-underline cursor-pointer transition-[background-color,color,border-color,transform,opacity] duration-200 ease-[ease] max-[480px]:data-[solo]:w-full disabled:pointer-events-none disabled:opacity-40";

const sizes: Record<Size, string> = {
  sm: "text-[15px] gap-2 px-[22px] py-[13px]",
  md: "text-[16px] gap-2.5 px-[26px] py-[15px]",
  lg: "text-[17px] gap-2.5 px-[30px] py-[18px]",
};

/* Bordered variants lose 1.5px of vertical padding so heights match primary. */
const borderedSizes: Record<Size, string> = {
  sm: "text-[15px] gap-2 px-[22px] py-[11.5px]",
  md: "text-[16px] gap-2.5 px-[24px] py-[14px]",
  lg: "text-[17px] gap-2.5 px-[30px] py-[17px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-paper border-0 hover:bg-accent-hover hover:text-paper hover:-translate-y-px",
  secondary:
    "bg-transparent text-ink border-[1.5px] border-ink hover:border-accent hover:text-accent",
  inverse:
    "bg-transparent text-paper border-[1.5px] border-paper hover:border-accent-tint hover:text-accent-tint",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  const s = variant === "primary" ? sizes[size] : borderedSizes[size];
  return `${base} ${s} ${variants[variant]} ${extra}`;
}

function ButtonIcon({ icon, size }: { icon: Icon; size: Size }) {
  if (icon === "none") return null;
  return icon === "right" ? (
    <ArrowRight size={size === "lg" ? 14 : 16} strokeWidth={2.2} />
  ) : (
    <ArrowUpRight size={14} />
  );
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: Icon;
  /** Full width on phones (≤480px) when the button sits alone. */
  solo?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** Link styled as a button. Internal hrefs use next/link; mailto/http use <a>. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon,
  solo,
  className,
  children,
}: CommonProps & { href: string }) {
  const resolvedIcon = icon ?? (variant === "primary" ? "up-right" : "none");
  const cls = buttonClass(variant, size, className);
  const content = (
    <>
      {children}
      <ButtonIcon icon={resolvedIcon} size={size} />
    </>
  );
  const isInternal = href.startsWith("/") || href.startsWith("#");
  return isInternal ? (
    <Link href={href} className={cls} data-solo={solo || undefined}>
      {content}
    </Link>
  ) : (
    <a
      href={href}
      className={cls}
      data-solo={solo || undefined}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
    >
      {content}
    </a>
  );
}

/** Real <button> for actions (submit, toggles). */
export function Button({
  variant = "primary",
  size = "md",
  icon,
  solo,
  className,
  children,
  ...rest
}: CommonProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">) {
  const resolvedIcon = icon ?? (variant === "primary" ? "right" : "none");
  return (
    <button
      type="button"
      {...rest}
      className={`${buttonClass(variant, size, className)} font-[inherit]`}
      data-solo={solo || undefined}
    >
      {children}
      <ButtonIcon icon={resolvedIcon} size={size} />
    </button>
  );
}
