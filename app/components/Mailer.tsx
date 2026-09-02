"use client";

import { useId, useState } from "react";

// Signups POST straight to a Google Form (no backend needed) — Google
// appends each response as a row to its linked Sheet. The form submits
// into a hidden iframe so the page never navigates away; Google's
// response is cross-origin and unreadable, so success shows optimistically.
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScZN-g_Hr--AqmHE7RIIU9tn8U4GIg7aJymbPntnS85ZK7Iyg/formResponse";
const GOOGLE_FORM_EMAIL_FIELD = "entry.252354871";

export default function Mailer({
  variant = "line",
  dark = false,
}: {
  variant?: "line" | "pill";
  dark?: boolean;
}) {
  const [done, setDone] = useState(false);
  const iframeName = `mailer-target-${useId().replace(/:/g, "")}`;

  function submit() {
    // No preventDefault — the browser submits the form natively into
    // the hidden iframe below. We just reflect success optimistically.
    setDone(true);
  }

  if (variant === "pill") {
    return (
      <>
        <form
          action={GOOGLE_FORM_ACTION}
          method="POST"
          target={iframeName}
          onSubmit={submit}
          className="flex w-full max-w-md items-center gap-3"
        >
          <input
            name={GOOGLE_FORM_EMAIL_FIELD}
            type="email"
            required
            placeholder="you@email.com"
            className={`w-full rounded-full border px-5 py-3 text-sm transition-colors focus:outline-none ${
              dark
                ? "border-background/30 bg-transparent text-background placeholder:text-background/50 focus:border-background"
                : "border-ink/20 bg-transparent text-ink placeholder:text-ink/35 focus:border-ink"
            }`}
          />
          <button
            type="submit"
            className={`btn-pill shrink-0 ${dark ? "btn-pill-cream" : "btn-pill-solid"}`}
          >
            {done ? "✓" : "Join"}
          </button>
        </form>
        <iframe name={iframeName} className="hidden" title="Mailing list signup" />
      </>
    );
  }

  return (
    <>
      <form
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target={iframeName}
        onSubmit={submit}
        className="flex w-full max-w-md items-end gap-4"
      >
        <input
          name={GOOGLE_FORM_EMAIL_FIELD}
          type="email"
          required
          placeholder="you@email.com"
          className="w-full border-b border-ink/20 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 border border-ink px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-ink hover:text-background"
        >
          {done ? "✓" : "Join"}
        </button>
      </form>
      <iframe name={iframeName} className="hidden" title="Mailing list signup" />
    </>
  );
}
