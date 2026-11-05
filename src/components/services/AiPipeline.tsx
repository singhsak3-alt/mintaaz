"use client";

import { useEffect, useRef, useState } from "react";
import {
  pipelineStages,
  stageThresholds as T,
  type PipelineStage,
  type StageIcon,
} from "@/content/services";
import { Sparkle } from "../icons";

/**
 * Scroll-driven AI pipeline (Services #process).
 * p = (viewportHeight × 0.6 − timeline.top) / timeline.height, clamped 0–1,
 * updated on scroll with requestAnimationFrame. The spine fill and probe ride
 * at p × 100%; each stage is queued, running or signed off by threshold.
 * Styles: "AI pipeline" in globals.css.
 */

const stageIcons: Record<StageIcon, React.ReactNode> = {
  discover: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
      <path d="M8.5 9.5a3 3 0 0 1 2.5-1.6" />
    </>
  ),
  define: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </>
  ),
  build: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  launch: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
};

function stateClass(p: number, i: number) {
  if (p < T[i]) return "is-q";
  return p < T[i + 1] ? "is-run" : "is-done";
}

function StageCard({ stage, index }: { stage: PipelineStage; index: number }) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <article className="hw-card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow tracking-[0.08em]">Stage {n}</span>
        <span>
          <span className="hw-st hw-st-q">Queued</span>
          <span className="hw-st hw-st-r">
            <span className="hw-dot" />
            Agents running
          </span>
          <span className="hw-st hw-st-d">Signed off</span>
        </span>
      </div>
      <div className="flex items-center gap-[14px]">
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4338CA"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {stageIcons[stage.icon]}
        </svg>
        <h3 className="m-0 text-[clamp(32px,3.4vw,48px)] font-bold leading-none tracking-[-0.04em] text-accent">
          {stage.name}
        </h3>
      </div>
      <p className="m-0 text-[21px] font-semibold leading-[1.25] tracking-[-0.02em]">
        {stage.headline}
      </p>
      <p className="m-0 text-base leading-[1.6] text-text-3">{stage.text}</p>
      <ul className="hw-log" aria-label="Agent activity">
        {stage.log.map((line, i) => (
          <li key={line}>
            {line}
            {i === stage.log.length - 1 && <span className="hw-cur" />}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {stage.tools.map((t) => (
          <span
            key={t}
            className="rounded-pill border border-line-strong px-3 py-1.5 text-xs text-text-2"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-start gap-2.5 border-t border-line-soft pt-4 text-sm leading-[1.5] text-text-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="mt-0.5 flex-none"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
        </svg>
        <span>
          <strong className="font-semibold text-ink">Human call:</strong> {stage.humanCall}
        </span>
      </div>
    </article>
  );
}

export function AiPipeline() {
  const tl = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      raf = 0;
      const el = tl.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const next = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / Math.max(r.height, 1)));
      setP((prev) => (Math.abs(next - prev) > 0.002 ? next : prev));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  let cur = -1;
  T.slice(0, 4).forEach((t, i) => {
    if (p >= t) cur = i;
  });
  const done = p >= T[4];
  const fill = `${(p * 100).toFixed(1)}%`;
  const hudName = done
    ? "All stages signed off"
    : cur < 0
      ? "Scroll to start the agents"
      : `${pipelineStages[cur].name} — agents running`;

  return (
    <>
      <div className={`hw-hud ${cur >= 0 && !done ? "is-live" : ""}`} role="status" aria-live="polite">
        <span className="hw-dot text-accent" />
        <span>Stage {cur < 0 ? "00" : `0${cur + 1}`} / 04</span>
        <span className="text-ink">{hudName}</span>
        <span className="hw-bar" aria-hidden="true">
          <span style={{ width: fill }} />
        </span>
      </div>

      <div className="hw-tl" ref={tl}>
        <div className="hw-spine" aria-hidden="true">
          <div className="hw-fill" style={{ height: fill }} />
        </div>
        <div className="hw-probe" aria-hidden="true" style={{ top: fill }}>
          <Sparkle size={16} fill="#4338CA" />
        </div>
        <ol className="hw-rows">
          {pipelineStages.map((stage, i) => (
            <li key={stage.name} className={`hw-row ${i % 2 ? "hw-r" : "hw-l"} ${stateClass(p, i)}`}>
              <div className="hw-node" aria-hidden="true">
                <i />
              </div>
              <StageCard stage={stage} index={i} />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
