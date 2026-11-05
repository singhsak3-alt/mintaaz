"use client";

import { useId, useState } from "react";
import { story } from "@/content/about";

/** Milestone year tabs that switch the text below (About #story). */
export function Milestones() {
  const [active, setActive] = useState(0);
  const id = useId();
  const cur = story.milestones[active];

  const onKey = (e: React.KeyboardEvent) => {
    const n = story.milestones.length;
    if (e.key === "ArrowRight") setActive((a) => (a + 1) % n);
    if (e.key === "ArrowLeft") setActive((a) => (a - 1 + n) % n);
  };

  return (
    <div className="mt-16">
      <div
        role="tablist"
        aria-label="Studio milestones"
        onKeyDown={onKey}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] border-t-2 border-line"
      >
        {story.milestones.map((m, i) => {
          const on = i === active;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={on}
              aria-controls={`${id}-panel`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`-mt-0.5 box-border cursor-pointer border-0 border-t-[3px] bg-transparent py-[22px] pl-0 pr-4 text-left font-[inherit] transition-colors duration-200 ${
                on ? "border-ink text-ink" : "border-transparent text-text-4 hover:text-text-3"
              }`}
            >
              <span className="block font-mono text-[13px] tracking-[0.06em]">{m.year}</span>
              <span className="mt-1.5 block text-lg font-semibold tracking-[-0.02em]">{m.label}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${active}`}
        className="pt-6"
      >
        <p className="m-0 max-w-[720px] text-lg leading-[1.65] text-text-2">{cur.text}</p>
      </div>
    </div>
  );
}
