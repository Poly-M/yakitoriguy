"use client";

import { useState } from "react";

// Mailer signup is a mailto stub until a list provider (Mailchimp /
// Buttondown / Resend) is wired up.
const MAILER_EMAIL = "hello@yakigang.com";

export default function Mailer({
  variant = "line",
  dark = false,
}: {
  variant?: "line" | "pill";
  dark?: boolean;
}) {
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    window.location.href = `mailto:${MAILER_EMAIL}?subject=${encodeURIComponent(
      "Add me to the YAKIGANG mailer"
    )}&body=${encodeURIComponent(`Please add ${email} to the list.`)}`;
    setDone(true);
  }

  if (variant === "pill") {
    return (
      <form onSubmit={submit} className="flex w-full max-w-md items-center gap-3">
        <input
          name="email"
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
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md items-end gap-4">
      <input
        name="email"
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
  );
}
