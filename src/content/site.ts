/**
 * Site-wide settings: navigation, contact details and social links.
 * Update links here; every page reads from this file.
 */

export const site = {
  name: "Mintaaz",
  url: "https://mintaaz.com", // TODO: confirm production domain
  email: "sarah@mintaaz.com",
  /** Shown as plain text "Mob: …" (not a tap-to-call link). */
  phone: "+91 8951494141",
  tagline: ["Imagination", "Innovation", "Distinction"],
  description:
    "An independent digital design studio crafting brands, websites and motion for teams who want to be remembered.",
  copyright: "© 2026 Mintaaz Studio. All rights reserved.",
} as const;

export type NavItem = { label: string; href: string };

/** Header menu */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Social profiles. Placeholders point to "#top" until real URLs are supplied.
 * Any http(s) URL opens in a new tab automatically.
 */
export const socialLinks: NavItem[] = [
  { label: "LinkedIn", href: "#top" },
  { label: "Instagram", href: "#top" },
  { label: "Behance", href: "#top" },
  { label: "Dribbble", href: "#top" },
];

/** Legal pages. Placeholders until the pages exist. */
export const legalLinks: NavItem[] = [
  { label: "Privacy", href: "#top" },
  { label: "Terms", href: "#top" },
];

/** Shared logo files (public/images) */
export const logos = {
  header: { src: "/images/logo-header.png", alt: "Mintaaz", width: 888, height: 266 },
  footer: { src: "/images/logo-footer.png", alt: "Mintaaz", width: 888, height: 266 },
} as const;
