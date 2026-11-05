/**
 * Building blocks for case-study bodies (src/content/work/<slug>.tsx).
 * Every value is copied from the reference case-study pages. Compose these;
 * don't style case studies by hand. Client brand colours are passed in as
 * props (bg / fg) and used only inside the project's own image areas and swatches.
 */
import { MediaImage, MediaVideo } from "../Media";
import { SectionHeader } from "../SectionHeader";

type Children = { children?: React.ReactNode };

/* ---------------------------------------------------------------------------
   Layout
   ------------------------------------------------------------------------ */

/** Standard case-study section: 1320 container, 128px top, case-size header. */
export function CaseSection({
  eyebrow,
  title,
  lead,
  pt = "pt-32",
  id,
  children,
}: Children & {
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: React.ReactNode;
  /** Top padding class; the reference uses 128px for most sections */
  pt?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`container-site ${pt}`}>
      {title && <SectionHeader size="case" eyebrow={eyebrow} title={title} lead={lead} />}
      {children}
    </section>
  );
}

/** Full-bleed coloured band (dark or tinted) with its own section headers inside. */
export function Band({
  bg,
  dark = true,
  gap = 16,
  children,
}: Children & { bg: string; dark?: boolean; gap?: number }) {
  return (
    <section className={`mt-32 pb-[120px] pt-28 ${dark ? "text-paper" : ""}`} style={{ background: bg }}>
      <div className="container-site flex flex-col" style={{ gap }}>
        {children}
      </div>
    </section>
  );
}

/** Section header used inside a Band (white 1.5px divider on dark). */
export function BandHeader({
  eyebrow,
  title,
  lead,
  dark = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <SectionHeader size="case" tone={dark ? "dark" : "light"} eyebrow={eyebrow} title={title} lead={lead} />
  );
}

/** Overview: eyebrow + large H2 on the left, paragraph on the right. */
export function Split({
  eyebrow,
  title,
  titleColor,
  children,
  pt = "pt-32",
}: Children & { eyebrow?: string; title: React.ReactNode; titleColor?: string; pt?: string }) {
  return (
    <section className={`container-site ${pt}`}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(32px,5vw,80px)]">
        <div>
          {eyebrow && <span className="eyebrow mb-4 block">{eyebrow}</span>}
          <h2
            className="m-0 text-[clamp(36px,4.4vw,64px)] font-bold leading-none tracking-[-0.045em]"
            style={{ color: titleColor }}
          >
            {title}
          </h2>
        </div>
        <div className="m-0 text-[clamp(18px,1.6vw,21px)] leading-[1.6] text-text-1">{children}</div>
      </div>
    </section>
  );
}

/** Narrow-left / wide-right text section (Happtag, TenX). */
export function SideHeading({
  title,
  aside,
  children,
  pt = "pt-32",
  align,
}: Children & { title: React.ReactNode; aside?: React.ReactNode; pt?: string; align?: "start" }) {
  return (
    <section className={`container-site flex flex-wrap gap-12 ${pt} ${align === "start" ? "items-start" : ""}`}>
      <div className="max-w-[340px] flex-[1_1_260px]">
        <h2 className="m-0 text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em]">{title}</h2>
        {aside && <p className="m-0 mt-5 text-[17px] leading-[1.6] text-text-2">{aside}</p>}
      </div>
      <div className="min-w-0 flex-[2_1_560px]">{children}</div>
    </section>
  );
}

/** Responsive auto-fit grid. `cols` overrides with a fixed template. */
export function Grid({
  min = 420,
  gap = 16,
  align = "stretch",
  cols,
  fill,
  className = "",
  children,
}: Children & {
  min?: number;
  gap?: number | string;
  align?: "stretch" | "center" | "start";
  cols?: string;
  /** auto-fill instead of auto-fit */
  fill?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: cols ?? `repeat(${fill ? "auto-fill" : "auto-fit"}, minmax(min(100%, ${min}px), 1fr))`,
        gap,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
}

/** 16px vertical gap between stacked blocks. */
export const Gap = ({ size = 16 }: { size?: number }) => <div style={{ height: size }} />;

/* ---------------------------------------------------------------------------
   Media
   ------------------------------------------------------------------------ */

export type ImgSpec = {
  src: string;
  alt: string;
  w?: number;
  h?: number;
};

/** Image at its natural width, centred, never wider than its file. */
export function Img({
  src,
  alt,
  w,
  h,
  radius = 0,
  full,
  cover,
  eager,
  maxWidth,
  className = "",
  style,
}: ImgSpec & {
  radius?: number;
  /** Stretch to the frame width (reference: max-width: none) */
  full?: boolean;
  /** Fill the parent height (object-fit: cover) */
  cover?: boolean;
  eager?: boolean;
  maxWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <MediaImage
      src={src}
      alt={alt}
      width={w}
      height={h}
      preload={eager}
      sizes="(max-width: 1320px) 100vw, 1320px"
      className={`mx-auto block h-auto w-full ${className}`}
      style={{
        borderRadius: radius,
        maxWidth: full ? "none" : (maxWidth ?? w),
        ...(cover ? { height: "100%", objectFit: "cover" } : {}),
        ...style,
      }}
    />
  );
}

/**
 * Framed media.
 * card  1px border, 28px radius, white, padded (clamp 24–56px)
 * bleed 28px radius, overflow hidden, optional background, no padding
 */
export function Frame({
  variant = "card",
  bg,
  radius,
  border,
  caption,
  captionPos = "top",
  captionAlign,
  padding,
  className = "",
  style,
  children,
}: Children & {
  variant?: "card" | "bleed";
  bg?: string;
  radius?: number;
  border?: boolean;
  caption?: string;
  captionPos?: "top" | "bottom";
  captionAlign?: "center";
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const card = variant === "card";
  const cap = caption && (
    <p className={`eyebrow m-0 ${captionAlign === "center" ? "text-center" : ""}`}>{caption}</p>
  );
  return (
    <div
      className={`overflow-hidden ${card || border ? "border border-line" : ""} ${
        card ? "flex flex-col justify-center gap-[18px]" : ""
      } ${className}`}
      style={{
        borderRadius: radius ?? 28,
        background: bg ?? (card ? "#FFFFFF" : undefined),
        padding: padding ?? (card ? "clamp(24px, 4vw, 56px)" : undefined),
        ...style,
      }}
    >
      {captionPos === "top" && cap}
      {children}
      {captionPos === "bottom" && cap}
    </div>
  );
}

/** Muted looping video inside a frame. */
export function Video({
  src,
  poster,
  label,
  className = "",
  style,
}: {
  src: string;
  poster?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return <MediaVideo src={src} poster={poster} label={label} className={className} style={style} />;
}

/* ---------------------------------------------------------------------------
   Text
   ------------------------------------------------------------------------ */

export function Pills({
  items,
  dark,
  size = "sm",
}: {
  items: string[];
  dark?: boolean;
  size?: "sm" | "md";
}) {
  return (
    <span className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className={`rounded-pill border ${
            size === "md" ? "px-[18px] py-2.5 text-[15px]" : "px-[14px] py-2 text-sm"
          } ${dark ? "border-white/30 text-paper" : "border-line-strong"}`}
        >
          {t}
        </span>
      ))}
    </span>
  );
}

export function List({
  items,
  ordered,
  color,
  size = 15,
  gap = 8,
}: {
  items: React.ReactNode[];
  ordered?: boolean;
  color?: string;
  size?: number;
  gap?: number;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={`m-0 flex flex-col ${ordered ? "pl-5" : "pl-[18px]"}`}
      style={{ gap, fontSize: size, lineHeight: 1.55, color: color ?? "var(--color-text-1)" }}
    >
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </Tag>
  );
}

/**
 * Text card. tone="light" bordered white · tone="dark" ink · or pass bg/fg
 * for a client-coloured card.
 */
export function Card({
  tone = "light",
  bg,
  fg,
  eyebrow,
  eyebrowColor,
  title,
  radius = 28,
  padding = "clamp(24px, 4vw, 56px)",
  gap = 18,
  justify,
  className = "",
  children,
}: Children & {
  tone?: "light" | "dark";
  bg?: string;
  fg?: string;
  eyebrow?: React.ReactNode;
  eyebrowColor?: string;
  title?: React.ReactNode;
  radius?: number;
  padding?: string;
  gap?: number;
  justify?: "between" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex flex-col ${!bg && !dark ? "border border-line" : ""} ${
        justify === "between" ? "justify-between" : justify === "center" ? "justify-center" : ""
      } ${className}`}
      style={{
        borderRadius: radius,
        padding,
        gap,
        background: bg ?? (dark ? "var(--color-ink)" : "#FFFFFF"),
        color: fg ?? (dark ? "#FFFFFF" : undefined),
      }}
    >
      {eyebrow && (
        <span className="eyebrow" style={{ color: eyebrowColor ?? (dark ? "var(--color-text-4)" : undefined) }}>
          {eyebrow}
        </span>
      )}
      {title}
      {children}
    </div>
  );
}

export const CardTitle = ({ children, size = 22 }: Children & { size?: number }) => (
  <h3 className="m-0 font-semibold leading-[1.2] tracking-[-0.02em]" style={{ fontSize: size }}>
    {children}
  </h3>
);

export const Body = ({
  children,
  size = 16,
  color,
  max,
}: Children & { size?: number; color?: string; max?: number }) => (
  <p className="m-0 leading-[1.6]" style={{ fontSize: size, color: color ?? "var(--color-text-2)", maxWidth: max }}>
    {children}
  </p>
);

/** Colour palette tiles. */
export type Swatch = { name: string; hex: string; note?: string; dark?: boolean; border?: boolean };

export function Swatches({
  items,
  min = 220,
  minHeight = 160,
  inset,
}: {
  items: Swatch[];
  min?: number;
  minHeight?: number;
  /** Subtle inner outline (used on dark bands) */
  inset?: "light" | "dark";
}) {
  return (
    <Grid min={min} gap={12}>
      {items.map((s) => (
        <div
          key={s.hex + s.name}
          className={`box-border flex flex-col justify-between rounded-tile p-[22px] ${s.border ? "border border-line" : ""}`}
          style={{
            background: s.hex,
            color: s.dark ? "#0A0A0A" : "#FFFFFF",
            minHeight,
            boxShadow:
              inset === "light"
                ? "inset 0 0 0 1px rgba(255,255,255,.12)"
                : inset === "dark"
                  ? "inset 0 0 0 1px rgba(0,0,0,.06)"
                  : undefined,
          }}
        >
          <span className="text-base font-semibold">{s.name}</span>
          <span className="flex flex-col gap-1">
            <span className="font-mono text-[13px]">{s.hex}</span>
            {s.note && <span className="text-[13px] opacity-80">{s.note}</span>}
          </span>
        </div>
      ))}
    </Grid>
  );
}

/** Process steps with a 1px top line each (roadmaps, design process). */
export function Steps({
  items,
  min = 200,
  gap = 24,
}: {
  items: { label: string; title: string; text?: string; tags?: string[] }[];
  min?: number;
  gap?: number;
}) {
  return (
    <ol className="m-0 flex list-none flex-wrap p-0" style={{ gap }}>
      {items.map((s) => (
        <li
          key={s.label}
          className="flex flex-col border-t border-line pt-[18px]"
          style={{ flex: `1 1 ${min}px`, gap: s.tags ? 14 : 8 }}
        >
          <span className="eyebrow">{s.label}</span>
          <span className={`${s.tags ? "text-2xl" : "text-[22px]"} font-semibold tracking-[-0.02em]`}>{s.title}</span>
          {s.text && <span className="text-[15px] leading-[1.5] text-text-3">{s.text}</span>}
          {s.tags && <Pills items={s.tags} />}
        </li>
      ))}
    </ol>
  );
}

/** Alternating image / text rows (BILLD features, Interaction explainers). */
export function FeatureRow({
  media,
  eyebrow,
  title,
  text,
  reverse,
}: {
  media: React.ReactNode;
  eyebrow?: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  const copy = (
    <div className="flex flex-col gap-4">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h3 className="m-0 text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.05] tracking-[-0.035em]">{title}</h3>
      <p className="m-0 max-w-[520px] text-[17px] leading-[1.65] text-text-2">{text}</p>
    </div>
  );
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(24px,5vw,72px)]">
      {reverse ? (
        <>
          {copy}
          {media}
        </>
      ) : (
        <>
          {media}
          {copy}
        </>
      )}
    </div>
  );
}

/** Big statement panel (BOOKDU, Happtag "Define"). */
export function Statement({
  bg,
  fg,
  eyebrow,
  children,
  size = "clamp(32px, 4vw, 60px)",
  weight = 700,
  pt = "pt-32",
  wide,
}: Children & {
  bg: string;
  fg?: string;
  eyebrow?: string;
  size?: string;
  weight?: number;
  pt?: string;
  /** 1376px panel inside 16px gutters instead of the 1320 container */
  wide?: boolean;
}) {
  const inner = (
    <div
      className="text-center"
      style={{
        background: bg,
        color: fg,
        borderRadius: wide ? 36 : 32,
        padding: wide ? "clamp(56px, 7vw, 112px) clamp(24px, 6vw, 120px)" : "clamp(48px, 7vw, 112px) clamp(24px, 6vw, 96px)",
      }}
    >
      {eyebrow && <p className="eyebrow m-0 mb-6 text-[13px] text-text-4">{eyebrow}</p>}
      <p
        className="mx-auto my-0 max-w-[1040px] leading-[1.06] tracking-[-0.04em]"
        style={{ fontSize: size, fontWeight: weight }}
      >
        {children}
      </p>
    </div>
  );
  return wide ? (
    <section className={`px-4 ${pt}`}>
      <div className="mx-auto max-w-[var(--container-wide)]">{inner}</div>
    </section>
  ) : (
    <section className={`container-site ${pt}`}>{inner}</section>
  );
}

/** Hero media wrapper under the case-study title (32px radius, 40px above). */
export function HeroFrame({
  bg,
  mt = 40,
  radius = 32,
  border,
  padding,
  className = "",
  style,
  children,
}: Children & {
  bg?: string;
  mt?: number;
  radius?: number;
  border?: boolean;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`overflow-hidden ${border ? "border border-line" : ""} ${className}`}
      style={{ marginTop: mt, borderRadius: radius, background: bg, padding, ...style }}
    >
      {children}
    </div>
  );
}

/** Big number stat tile (Happtag research, TenX user research). */
export function Stat({
  label,
  value,
  text,
  tone = "light",
  minHeight = 260,
  valueSize = 64,
  children,
}: Children & {
  label: string;
  value?: string;
  text?: string;
  tone?: "light" | "dark" | "outline";
  minHeight?: number;
  valueSize?: number;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`box-border flex flex-col justify-between gap-6 rounded-card p-7 ${
        dark ? "bg-ink text-paper" : tone === "outline" ? "border-[1.5px] border-ink" : "border border-line"
      }`}
      style={{ minHeight }}
    >
      <span className={`eyebrow ${dark ? "text-text-4" : ""}`}>{label}</span>
      <div>
        {value && (
          <p className="m-0 font-bold leading-none tracking-[-0.05em]" style={{ fontSize: valueSize }}>
            {value}
          </p>
        )}
        {text && (
          <p className={`m-0 mt-2.5 text-[15px] leading-[1.5] ${dark ? "text-on-dark" : "text-text-2"}`}>{text}</p>
        )}
        {children}
      </div>
    </div>
  );
}
