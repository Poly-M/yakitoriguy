import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Grain from "../components/Grain";
import { SOCIALS } from "../content";

export const metadata: Metadata = {
  title: "YAKIGANG — Choose your path",
  description:
    "Yakitori by Yakitoriguy. Here for the chef, or here for the brand?",
};

const PATHS = [
  {
    title: "YakitoriGuy",
    sub: "The chef — pop-ups, free YouTube guides, the mailer, and consulting.",
    href: "/yakitoriguy",
    cue: "The man behind the fire",
  },
  {
    title: "YakiGang",
    sub: "The brand — the sauce, the knives, and the Discord where the gang hangs out.",
    href: "/yakigang",
    cue: "The goods & the gang",
  },
] as const;

export default function Crossroads() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-ink">
      <Grain />

      {/* small logo, home to the front door */}
      <header className="relative z-10 flex justify-center pb-2 pt-10">
        <Link href="/" aria-label="Back to the front door">
          <Image
            src="/logo.png"
            alt="YAKIGANG"
            width={552}
            height={619}
            priority
            className="h-14 w-auto"
          />
        </Link>
      </header>

      {/* the fork */}
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col sm:flex-row">
        {PATHS.map((p, i) => (
          <Link
            key={p.href}
            href={p.href}
            className={`group flex flex-1 flex-col items-center justify-center gap-5 px-8 py-20 text-center transition-colors duration-500 hover:bg-ink sm:py-0 ${
              i > 0 ? "border-t border-ink/10 sm:border-l sm:border-t-0" : ""
            }`}
          >
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-accent transition-colors duration-500 group-hover:text-background/60">
              {p.cue}
            </span>
            <h2 className="text-3xl font-light uppercase tracking-[0.18em] transition-colors duration-500 group-hover:text-background sm:text-5xl">
              {p.title}
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-ink/70 transition-colors duration-500 group-hover:text-background/80">
              {p.sub}
            </p>
            <span className="mt-2 border-b border-ink/30 pb-1 text-[0.65rem] uppercase tracking-[0.3em] text-ink/70 transition-colors duration-500 group-hover:border-background/50 group-hover:text-background">
              Enter
            </span>
          </Link>
        ))}
      </main>

      {/* quiet social links */}
      <footer className="relative z-10 border-t border-ink/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/60 transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
