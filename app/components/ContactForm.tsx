"use client";

import { useState } from "react";

// Opens the visitor's mail client with the message pre-filled.
// Swap for a form backend (Formspree / Resend) when ready.
const CONTACT_EMAIL = "hello@yakigang.com";

const field =
  "w-full border-b border-ink/20 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none transition-colors";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Consulting / inquiry — ${fd.get("name")}`;
    const body = `${fd.get("message")}\n\n— ${fd.get("name")}\n${fd.get("email")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="flex w-full flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <input name="name" required placeholder="Name" className={field} />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={field}
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="What are you working on? Pop-up, menu R&D, staff training…"
        className={`${field} resize-none`}
      />
      <div className="flex items-center gap-5">
        <button
          type="submit"
          className="border border-ink px-8 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
        >
          Send
        </button>
        {sent && (
          <p className="text-xs text-ink/50">
            Your mail app should have opened — send from there.
          </p>
        )}
      </div>
    </form>
  );
}
