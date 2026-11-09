/**
 * Contact form endpoint. Validates the submission and emails it via Resend.
 *
 * Environment variables (set in Vercel / .env.local):
 *   RESEND_API_KEY   API key from resend.com
 *   CONTACT_TO       Inbox that receives submissions (e.g. sarah@mintaaz.com)
 *   CONTACT_FROM     Verified sender, e.g. "Mintaaz <website@mintaaz.com>"
 *
 * Without RESEND_API_KEY, submissions are logged in development and rejected
 * (503) in production, so nothing is silently lost.
 */

const KINDS = { project: "New project brief", hi: "Hello" } as const;
type Kind = keyof typeof KINDS;

const LIMITS: Record<string, number> = {
  name: 120,
  email: 200,
  company: 200,
  launch: 120,
  message: 5000,
  budget: 40,
};

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const kind = body.kind as Kind;
  if (!(kind in KINDS)) return Response.json({ error: "Invalid form" }, { status: 400 });

  const data = Object.fromEntries(
    Object.entries(LIMITS).map(([k, max]) => [k, clean(body[k], max)]),
  ) as Record<string, string>;
  const needs = Array.isArray(body.needs)
    ? body.needs.filter((n): n is string => typeof n === "string").slice(0, 10).join(", ")
    : "";

  if (!data.name || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ error: "Please fill in name, a valid email and a message." }, { status: 422 });
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Needs", needs],
    ["Budget", data.budget],
    ["Launch", data.launch],
    ["Message", data.message],
  ];
  const filled = rows.filter(([, v]) => v);
  const subject = `${KINDS[kind]} — ${data.name}`;
  const text = filled.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = filled
    .map(([k, v]) => `<p><strong>${k}:</strong><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`)
    .join("");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[contact] ${subject}\n${text}`);
      return Response.json({ ok: true, dev: true });
    }
    console.error("[contact] RESEND_API_KEY is not set; submission not delivered.");
    return Response.json({ error: "Form is not configured" }, { status: 503 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "Mintaaz website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? "sarah@mintaaz.com"],
      reply_to: data.email,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return Response.json({ error: "Could not send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
