/**
 * Line icons used across the site. Paths are copied from the design
 * reference. Every icon is decorative (aria-hidden); text labels carry the meaning.
 */

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
  stroke?: string;
};

function Svg({
  size = 14,
  strokeWidth = 2.4,
  className,
  stroke = "currentColor",
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

/** ↗ used on primary buttons and external-feeling links */
export const ArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Svg>
);

/** → used on "Next project", form submit and "About us" */
export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

/** ↓ into a tray: file downloads */
export const Download = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Svg>
);

/** ☰ mobile menu toggle */
export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
);

/** ✕ close the mobile menu */
export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

/** ▶ / ❚❚ video play and pause (filled) */
export const Play = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 4.5v15l12-7.5z" fill="currentColor" />
  </Svg>
);

export const Pause = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8 5v14M16 5v14" />
  </Svg>
);

/** ⤢ enter / exit fullscreen */
export const Expand = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" />
  </Svg>
);

export const Shrink = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 4v5H4M20 9h-5V4M15 20v-5h5M4 15h5v5" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12l5 5L20 7" />
  </Svg>
);

/** Four-point sparkle (filled). Pass size={null} to size it with CSS. */
export const Sparkle = ({
  size = 16,
  fill = "currentColor",
  className,
}: {
  size?: number | null;
  fill?: string;
  className?: string;
}) => (
  <svg
    width={size ?? undefined}
    height={size ?? undefined}
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M12 0C12.6 6.6 17.4 11.4 24 12C17.4 12.6 12.6 17.4 12 24C11.4 17.4 6.6 12.6 0 12C6.6 11.4 11.4 6.6 12 0Z"
      fill={fill}
    />
  </svg>
);
