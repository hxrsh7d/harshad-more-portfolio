/**
 * Builds a safely-encoded mailto: URL from a contact form's fields.
 * No backend involved — this is the only way the contact form "sends"
 * a message, which keeps the site fully static and GitHub Pages compatible.
 */
export function buildMailtoUrl({ to, name, email, subject, message }) {
  const finalSubject = subject?.trim() ? subject.trim() : `Portfolio contact from ${name}`;
  const bodyLines = [
    message?.trim() || "",
    "",
    "---",
    `From: ${name}`,
    `Reply-to: ${email}`,
  ];

  const params = new URLSearchParams({
    subject: finalSubject,
    body: bodyLines.join("\n"),
  });

  // URLSearchParams encodes spaces as "+", but mailto bodies read more
  // reliably with %20 — swap it back after encoding.
  const query = params.toString().replace(/\+/g, "%20");

  return `mailto:${to}?${query}`;
}

export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
