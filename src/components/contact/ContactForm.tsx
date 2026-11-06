"use client";

import { useId, useState } from "react";
import {
  budgets,
  formTabs,
  needs,
  replyNote,
  sentNote,
  type FormKind,
} from "@/content/contact";
import { site } from "@/content/site";
import { Button } from "../Button";
import { Check } from "../icons";

/**
 * Tabbed contact form: Start a project · Say hi.
 * Posts JSON to /api/contact. Chips are buttons with aria-pressed.
 */

const inputCls =
  "box-border w-full rounded-inner border border-line-strong bg-paper px-4 py-[14px] font-[inherit] text-[15px] font-normal text-ink outline-none transition-colors duration-200 placeholder:text-placeholder focus:border-ink";
const labelCls = "flex flex-col gap-2 text-sm font-semibold";
const row = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4";

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`inline-flex min-h-11 cursor-pointer items-center rounded-pill border px-[18px] font-[inherit] text-[15px] font-medium transition-colors duration-200 ${
        on ? "border-ink bg-ink text-paper" : "border-line-strong bg-paper text-ink hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ChipGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div role="group" aria-label={title}>
      <p className="m-0 mb-[14px] text-[22px] font-bold tracking-[-0.02em]">{title}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const id = useId();
  const [tab, setTab] = useState<FormKind>("project");
  const [picked, setPicked] = useState<Set<number>>(new Set([0, 1]));
  const [budget, setBudget] = useState(1);
  const [status, setStatus] = useState<Status>("idle");
  /** Submit stays disabled until the visitor types into any field. */
  const [started, setStarted] = useState(false);

  const current = formTabs.find((t) => t.id === tab)!;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const payload = {
      kind: tab,
      ...fields,
      ...(tab === "project" && {
        needs: [...picked].map((i) => needs[i]),
        budget: budgets[budget],
      }),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-w-0 flex-[999_1_600px] rounded-hero border border-line p-[clamp(24px,4vw,48px)]">
      <div
        role="tablist"
        aria-label="Reason for getting in touch"
        className="inline-flex flex-wrap gap-1 rounded-pill border border-line p-1"
      >
        {formTabs.map((t) => {
          const on = t.id === tab;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`${id}-tab-${t.id}`}
              aria-selected={on}
              aria-controls={`${id}-panel`}
              onClick={() => {
                setTab(t.id);
                setStatus("idle");
                setStarted(false);
              }}
              className={`inline-flex min-h-11 cursor-pointer items-center rounded-pill border-0 px-5 font-[inherit] text-[15px] font-semibold ${
                on ? "bg-ink text-paper" : "bg-transparent text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <form
        key={tab}
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${tab}`}
        onSubmit={onSubmit}
        onInput={(e) => {
          const filled = [...new FormData(e.currentTarget).entries()].some(
            ([k, v]) => k !== "website" && typeof v === "string" && v.trim() !== "",
          );
          setStarted(filled);
        }}
        className="mt-9 flex flex-col gap-7"
      >
        {/* Spam trap: hidden from people, filled by bots */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        {tab === "project" && (
          <>
            <ChipGroup title="What do you need?">
              {needs.map((n, i) => (
                <Chip
                  key={n}
                  on={picked.has(i)}
                  onClick={() =>
                    setPicked((s) => {
                      const next = new Set(s);
                      if (next.has(i)) next.delete(i);
                      else next.add(i);
                      return next;
                    })
                  }
                >
                  {n}
                </Chip>
              ))}
            </ChipGroup>
            <ChipGroup title="Rough budget">
              {budgets.map((b, i) => (
                <Chip key={b} on={budget === i} onClick={() => setBudget(i)}>
                  {b}
                </Chip>
              ))}
            </ChipGroup>
          </>
        )}

        <div className={row}>
          <label className={labelCls}>
            Your name
            <input className={inputCls} name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
          </label>
          <label className={labelCls}>
            Email
            <input
              className={inputCls}
              name="email"
              type="email"
              placeholder={tab === "project" ? "jane@company.com" : "jane@email.com"}
              autoComplete="email"
              required
            />
          </label>
          {tab === "project" && (
            <label className={labelCls}>
              Company
              <input className={inputCls} name="company" type="text" placeholder="Company or brand" autoComplete="organization" />
            </label>
          )}
        </div>

        {tab === "project" && (
          <div className={row}>
            <label className={labelCls}>
              Ideal launch date
              <input className={inputCls} name="launch" type="text" placeholder="e.g. March, or ‘flexible’" />
            </label>
          </div>
        )}

        <label className={labelCls}>
          {tab === "project" ? "Tell us about the project" : "Your message"}
          <textarea
            className={`${inputCls} min-h-[140px] resize-y`}
            name="message"
            rows={5}
            required
            placeholder={
              tab === "project" ? "Goals, audience, anything you already have…" : "Say hello, ask a question, share an idea…"
            }
          />
        </label>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
          <p className="m-0 text-sm text-text-3">{replyNote}</p>
          {status === "sent" ? (
            <p role="status" className="m-0 inline-flex items-center gap-2.5 text-base font-semibold">
              <Check size={18} />
              {sentNote}
            </p>
          ) : (
            <Button type="submit" disabled={!started || status === "sending"} solo>
              {current.submit}
            </Button>
          )}
        </div>
        {status === "error" && (
          <p role="alert" className="m-0 text-sm text-text-2">
            Sorry, that didn&apos;t send. Please email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </form>
    </div>
  );
}
