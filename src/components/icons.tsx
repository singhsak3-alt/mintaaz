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
