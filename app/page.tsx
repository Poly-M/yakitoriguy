import Image from "next/image";
import Link from "next/link";
import Grain from "./components/Grain";
import { LOGO } from "./content";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <Grain />

      {/* loading overlay: navy line draws in, then the whole layer dissolves */}
      <div
        aria-hidden
        className="loader-overlay fixed inset-0 z-20 flex items-center justify-center bg-background"
      >
        <div className="loader-line h-px w-40 origin-center bg-ink" />
      </div>

      {/* logo, plain and center — the door into the site */}
      <Link
        href="/home"
        className="logo-enter group relative z-10 flex flex-col items-center px-8"
        aria-label="Enter YAKIGANG"
      >
        <Image
          src={LOGO}
          alt="YAKIGANG — charcoal-grilled yakitori"
          width={552}
          height={619}
          priority
          className="h-auto w-64 transition-transform duration-500 ease-out group-hover:scale-[1.03] sm:w-80 md:w-[26rem]"
        />
        <span className="mt-10 text-[0.65rem] uppercase tracking-[0.45em] text-ink/0 transition-colors duration-500 group-hover:text-ink/50">
          Enter
        </span>
      </Link>

      <p className="tagline-enter absolute bottom-10 z-10 text-[0.7rem] uppercase tracking-[0.45em] text-ink/60">
        Yakitori &middot; Tap the logo to enter
      </p>
    </main>
  );
}
