"use client";

import { useState } from "react";

/**
 * Inline switch in the home CTA headline ("Wondering if we're [switch] the right fit?").
 * Sized in em so it scales with the headline. On = indigo with the knob right; off = grey.
 */
export function FitToggle() {
  const [on, setOn] = useState(true);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Are we the right fit?"
      onClick={() => setOn((v) => !v)}
      className={`relative inline-block h-[0.72em] w-[1.5em] cursor-pointer rounded-pill border-0 p-0 align-[-0.05em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        on ? "bg-accent" : "bg-line-strong"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute top-[0.08em] left-[0.08em] size-[0.56em] rounded-full bg-paper shadow-[0_2px_6px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-[cubic-bezier(0.3,1.4,0.5,1)] ${
          on ? "translate-x-[0.78em]" : "translate-x-0"
        }`}
      />
    </button>
  );
}
