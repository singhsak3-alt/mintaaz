import { clients } from "@/content/clients";
import { MediaImage } from "./Media";

/**
 * One row of client logos scrolling left forever. The list is duplicated once
 * for a seamless loop; the copy is aria-hidden with empty alt text.
 * Pauses on hover; static under reduced motion.
 */
export function LogoMarquee({ label, className = "" }: { label: string; className?: string }) {
  const row = (copy: boolean) => (
    <div
      aria-hidden={copy || undefined}
      className="flex items-center gap-[72px] pr-[72px]"
    >
      {clients.map((c) => (
        <MediaImage
          key={c.name}
          src={c.src}
          alt={copy ? "" : c.name}
          width={c.w}
          height={c.h}
          className="block flex-none opacity-85"
          style={{ height: c.height, width: "auto" }}
        />
      ))}
    </div>
  );

  return (
    <section aria-label="Clients" className={`container-site ${className}`}>
      <p className="eyebrow m-0 mb-8 text-center text-[13px]">{label}</p>
      <div
        className="mz-logos overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="mz-logos-track flex w-max animate-marquee items-center">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
