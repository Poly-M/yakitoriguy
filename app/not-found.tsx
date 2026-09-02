import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Grain from "./components/Grain";
import { bebasNeue } from "./fonts";
import { LOGO } from "./content";

export const metadata: Metadata = {
  title: "404 — YAKIGANG",
  description: "This page isn't on the menu.",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center text-ink">
      <Grain />

      <span
        aria-hidden
        className={`${bebasNeue.className} pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-ink/[0.05]`}
        style={{ fontSize: "clamp(9rem,38vw,22rem)" }}
      >
        404
      </span>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Link href="/" aria-label="Back to the front door">
          <Image
            src={LOGO}
            alt="YAKIGANG"
            width={523}
            height={591}
            priority
            className="logo-shadow-sm h-14 w-auto"
          />
        </Link>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-light leading-snug sm:text-3xl">
            This skewer&apos;s gone cold.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            The page you&apos;re looking for isn&apos;t on the menu — it may
            have moved, or it was never here to begin with.
          </p>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-pill btn-pill-solid">
            Back to start
          </Link>
        </div>
      </div>
    </div>
  );
}
