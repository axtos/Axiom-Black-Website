"use server";

export type ContactState = { status: "idle" | "sent" | "error"; message?: string };

const MAX = { name: 100, email: 200, org: 200, role: 200, message: 5000 };

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const field = (data: FormData, key: string, max: number) =>
  String(data.get(key) ?? "").trim().slice(0, max);

/** Sends the contact form to CONTACT_TO_EMAIL through Resend (see .env.example). */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (field(data, "website", 200)) return { status: "sent" };

  const firstName = field(data, "firstName", MAX.name);
  const lastName = field(data, "lastName", MAX.name);
  const email = field(data, "email", MAX.email);
  const organization = field(data, "organization", MAX.org);
  const role = field(data, "role", MAX.role);
  const message = field(data, "message", MAX.message);

  if (!firstName || !lastName || !organization || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please fill in your name, organization and a valid work email." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return { status: "error", message: "We couldn't send your message right now." };
  }

  const fullName = `${firstName} ${lastName}`;
  const rows: [string, string][] = [
    ["Name", fullName],
    ["Email", email],
    ["Organization", organization],
    ["Role", role || "—"],
  ];
  const html =
    `<table>${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table>` +
    `<p style="white-space:pre-wrap">${escapeHtml(message || "(no message)")}</p>`;
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message || "(no message)"}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Axiom Black Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? "hello@axiomblack.com"],
        reply_to: email,
        subject: `Website enquiry from ${fullName}, ${organization}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend responded", res.status, await res.text());
      return { status: "error", message: "We couldn't send your message right now." };
    }
  } catch (err) {
    console.error("Contact form: send failed", err);
    return { status: "error", message: "We couldn't send your message right now." };
  }

  return { status: "sent" };
}
