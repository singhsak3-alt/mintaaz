import { services, servicesIntro, type Service, type ServiceIcon } from "@/content/services";
import { SectionHeader, Accent } from "./SectionHeader";

/**
 * Black "What we do" panel with four ServiceCards (Home + Services).
 * Card hover: indigo fill and border, lift 4px, all text white.
 */

const icons: Record<ServiceIcon, React.ReactNode> = {
  brand: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M3 9h18" />
    </>
  ),
  growth: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </>
  ),
  motion: (
    <>
      <path d="M12 2l9 5v10l-9 5-9-5V7z" />
      <path d="M12 22V12M21 7l-9 5-9-5" />
    </>
  ),
};

export function ServiceCard({ service, showNumber }: { service: Service; showNumber: boolean }) {
  return (
    <div className="group flex min-h-[340px] flex-col gap-[18px] rounded-card border border-white/18 p-7 transition-[background-color,border-color,transform] duration-[250ms] hover:-translate-y-1 hover:border-accent hover:bg-accent">
      <div className="flex items-center justify-between">
        {showNumber ? (
          <span className="font-mono text-[13px] text-text-4 group-hover:text-paper">
            {service.number}
          </span>
        ) : (
          <span />
        )}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {icons[service.icon]}
        </svg>
      </div>
      <h3 className="m-0 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em]">
        {service.title}
      </h3>
      <p className="m-0 grow text-[15px] leading-[1.6] text-on-dark group-hover:text-paper">
        {service.text}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {service.tags.map((t) => (
          <span
            key={t}
            className="rounded-pill border border-white/30 px-3 py-1.5 text-xs group-hover:border-white/55"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

type Props = {
  /** Services page shows the 01–04 numbers; Home does not. */
  showNumbers?: boolean;
  /** Optional action under the intro (Services: "Start a project"). */
  action?: React.ReactNode;
  className?: string;
};

export function ServicesPanel({ showNumbers = false, action, className = "" }: Props) {
  return (
    <section id="services" className={`px-4 ${className}`}>
      <div className="mx-auto max-w-[var(--container-wide)] rounded-panel bg-ink px-[clamp(24px,4vw,64px)] py-[clamp(40px,6vw,96px)] text-paper">
        <SectionHeader
          size="section"
          tone="dark"
          title={
            <>
              What we <Accent>do</Accent>
            </>
          }
          lead={servicesIntro}
          aside={action}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {services.map((s) => (
            <ServiceCard key={s.number} service={s} showNumber={showNumbers} />
          ))}
        </div>
      </div>
    </section>
  );
}
