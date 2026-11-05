"use client";

import { useState } from "react";

type Chip = { id: string; label: string; count: number };

/**
 * Sticky filter chips for /work. One chip active at a time; it hides the
 * other groups. Sections are rendered on the server and passed in by id.
 */
export function WorkFilter({
  chips,
  sections,
}: {
  chips: Chip[];
  sections: { id: string; node: React.ReactNode }[];
}) {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="sticky top-[89px] z-[5] -mx-8 border-b border-line-faint bg-white/94 px-8 py-5 backdrop-blur-[10px] max-[480px]:-mx-4 max-[480px]:px-4">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap items-center gap-2">
          {chips.map((c) => {
            const on = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c.id)}
                className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-pill border-[1.5px] px-[18px] font-[inherit] text-[15px] transition-colors duration-200 ${
                  on
                    ? "border-ink bg-ink font-semibold text-paper"
                    : "border-line-strong bg-paper font-medium text-ink hover:border-ink"
                }`}
              >
                {c.label}{" "}
                <span className={`font-mono text-xs ${on ? "text-on-dark" : "text-text-3"}`}>
                  {c.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {sections.map((s) => (
        <div key={s.id} hidden={active !== "all" && active !== s.id}>
          {s.node}
        </div>
      ))}
    </>
  );
}
