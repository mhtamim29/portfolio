export interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export const contactLimits = {
  name: 120,
  email: 254,
  subject: 160,
  message: 5000,
};

export function validateContact(input: unknown): {
  data: ContactFields;
  errors: ContactErrors;
} {
  const source =
    input && typeof input === "object" && !Array.isArray(input)
      ? (input as Record<string, unknown>)
      : {};
  const data: ContactFields = { name: "", email: "", subject: "", message: "" };
  const errors: ContactErrors = {};

  for (const field of Object.keys(data) as (keyof ContactFields)[]) {
    const value = source[field];
    if (value !== undefined && typeof value !== "string") {
      errors[field] = "Please enter plain text.";
      continue;
    }
    data[field] = typeof value === "string" ? value.trim() : "";
    if (data[field].length > contactLimits[field]) {
      errors[field] = `Please use ${contactLimits[field]} characters or fewer.`;
    } else if (field !== "message" && /[\r\n]/.test(data[field])) {
      errors[field] = "Please use a single line.";
    }
  }

  if (!errors.name && !data.name) errors.name = "Full name is required.";
  if (!errors.email) {
    if (!data.email) errors.email = "Email address is required.";
    else if (!/^[^\s@<>"()]+@[^\s@<>"()]+\.[^\s@<>"()]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address.";
    }
  }
  if (!errors.message && !data.message) errors.message = "Message is required.";

  return { data, errors };
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character]!,
  );
}

export function buildContactEmail(data: ContactFields) {
  const topic = data.subject || "Project discussion";
  return {
    subject: `Portfolio enquiry: ${topic} — ${data.name}`,
    replyTo: data.email,
    text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${topic}\n\n${data.message}`,
    html: `
      <div style="background:#f4f2ee;padding:32px;font-family:Arial,sans-serif;color:#0a0a0a;max-width:600px">
        <p style="font-size:11px;letter-spacing:2px;color:#68645f">PORTFOLIO ENQUIRY</p>
        <h2 style="font-size:24px;line-height:1.4">${escapeHtml(topic)}</h2>
        <p><strong>From:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <div style="border-top:1px solid #d8d5cf;margin-top:24px;padding-top:24px;line-height:1.7;overflow-wrap:anywhere">${escapeHtml(data.message).replace(/\r?\n/g, "<br />")}</div>
      </div>`,
  };
}

// Process-local protection, matching the existing deployment's in-memory limiter.
export function createContactLimiter(windowMs = 60_000, maxEntries = 1000) {
  const entries = new Map<string, number>();
  return (key: string, now = Date.now()) => {
    for (const [ip, until] of entries) if (until <= now) entries.delete(ip);
    const until = entries.get(key);
    if (until && until > now) return Math.ceil((until - now) / 1000);
    if (entries.size >= maxEntries)
      entries.delete(entries.keys().next().value!);
    entries.set(key, now + windowMs);
    return 0;
  };
}
