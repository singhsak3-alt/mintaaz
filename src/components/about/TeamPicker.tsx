"use client";

import { useId, useState } from "react";
import { team } from "@/content/about";

/** Four portrait cards; selecting one shows name, role, bio and skill tags. */
export function TeamPicker() {
  const [active, setActive] = useState(0);
  const id = useId();
  const who = team[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Team members"
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4"
      >
        {team.map((m, i) => {
          const on = i === active;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={`${id}-panel`}
              onClick={() => setActive(i)}
              className="group flex cursor-pointer flex-col gap-3 border-0 bg-transparent p-0 text-left font-[inherit] text-ink"
            >
              <span
                className={`box-border flex aspect-[3/4] w-full items-end rounded-[22px] bg-paper p-[14px] transition-colors duration-200 ${
                  on ? "border-2 border-ink" : "border-[1.5px] border-dashed border-line-dashed group-hover:border-ink"
                }`}
              >
                <span className="eyebrow text-[11px] tracking-[0.08em]">[Team photo]</span>
              </span>
              <span>
                <span className="block text-[19px] font-bold tracking-[-0.02em]">{m.name}</span>
                <span className="mt-1 block text-[15px] text-text-3">{m.role}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${id}-panel`}
        className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-14 gap-y-6 border-t border-line pt-8"
      >
        <div>
          <p className="m-0 text-[clamp(28px,2.8vw,40px)] font-bold leading-[1.08] tracking-[-0.035em]">
            {who.name}
          </p>
          <p className="eyebrow m-0 mt-3 tracking-[0.08em]">{who.role}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="m-0 text-[17px] leading-[1.6] text-text-2">{who.bio}</p>
          <div className="flex flex-wrap gap-1.5">
            {who.tags.map((t) => (
              <span key={t} className="rounded-pill border border-line-strong px-3 py-1.5 text-xs text-text-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
