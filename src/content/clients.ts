/**
 * Client logos (Home marquee + About grid).
 * `height` is the display height from the reference; `w`/`h` are the file's pixel size.
 */
export type ClientLogo = { name: string; src: string; height: number; w: number; h: number };

export const clients: ClientLogo[] = [
  { name: "Ibhaan", src: "/images/shared/ibhaan-119aa9", height: 36, w: 372, h: 68 },
  { name: "Curaleaf", src: "/images/shared/curaleaf-892ea4", height: 52, w: 228, h: 96 },
  { name: "Tata Consultancy Services", src: "/images/shared/tata-consultancy-services-ee6040", height: 44, w: 342, h: 94 },
  { name: "Antlia", src: "/images/shared/antlia-d7b00e", height: 44, w: 358, h: 99 },
  { name: "Philips", src: "/images/shared/philips-bd6db2", height: 36, w: 292, h: 63 },
  { name: "Codematrix", src: "/images/shared/codematrix-2bb9bd", height: 36, w: 473, h: 82 },
  { name: "HappLabs", src: "/images/shared/happlabs-9a0596", height: 64, w: 113, h: 114 },
  { name: "Scale Business", src: "/images/shared/scale-business-c6612c", height: 44, w: 297, h: 97 },
  { name: "Bhavitha Tech", src: "/images/shared/bhavitha-tech-11cd94", height: 36, w: 424, h: 90 },
  { name: "iCaltech Innovations", src: "/images/shared/icaltech-innovations-059038", height: 52, w: 295, h: 122 },
  { name: "Vananam", src: "/images/shared/vananam-3076ee", height: 44, w: 316, h: 110 },
  { name: "Spice Route Legal", src: "/images/shared/spice-route-legal-724d59", height: 52, w: 224, h: 144 },
  { name: "ArisUnitern", src: "/images/shared/arisunitern-3430ce", height: 64, w: 154, h: 166 },
  { name: "Destuo", src: "/images/shared/destuo-303db0", height: 64, w: 138, h: 169 },
];
