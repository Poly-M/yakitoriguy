"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Mailer from "./Mailer";
import { LOGO } from "../content";

// The logo is the whole front door: tap it and a plain white box asks
// you to join the mailing list. Everything else on the site (the
// YakitoriGuy / YakiGang split, pop-ups, sauce, etc.) is shelved for
// now, not deleted — this is just the live front-of-house experience.
export default function MailingListGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="logo-enter group relative z-10 flex flex-col items-center px-8"
        aria-label="Join the YakiGang mailing list"
      >
        <Image
          src={LOGO}
          alt="YAKIGANG — charcoal-grilled yakitori"
          width={523}
          height={591}
          priority
          className="logo-shadow h-auto w-64 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:w-80 md:w-[26rem]"
        />
        <span className="mt-10 text-[0.65rem] uppercase tracking-[0.45em] text-ink/0 transition-colors duration-500 group-hover:text-ink/50">
          Join
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mailer-heading"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 px-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-sm border border-ink/10 bg-background p-8 shadow-[0_20px_60px_rgba(27,37,69,0.25)]">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-lg text-ink/40 transition-colors hover:text-ink"
            >
              &times;
            </button>
            <h2
              id="mailer-heading"
              className="text-xl font-light leading-snug tracking-tight text-ink"
            >
              Join the YakiGang
              <br />
              mailing list.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              Pop-up dates, sauce drops, and knife runs — straight to your
              inbox, first.
            </p>
            <div className="mt-6">
              <Mailer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
