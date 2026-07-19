import type { Metadata } from "next";
import Grain from "../components/Grain";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SectionHeading from "../components/SectionHeading";
import LikeButton from "../components/LikeButton";
import Mailer from "../components/Mailer";
import { PROJECTS, STOCKISTS } from "../content";

export const metadata: Metadata = {
  title: "YakiGang — YAKIGANG",
  description:
    "The brand — the sauce, the knives, and the Discord where the gang hangs out.",
};

export default function YakiGangPage() {
  return (
    <div className="relative min-h-screen bg-background text-ink">
      <Grain />
      <SiteHeader current="/yakigang" />

      <main className="relative z-10 mx-auto max-w-4xl px-6">
        <section className="py-16 sm:py-24">
          <h1 className="max-w-2xl text-3xl font-light leading-snug tracking-tight sm:text-4xl">
            YakiGang.
            <br />
            <span className="text-ink/60">
              The brand — sauce, steel, and the clubhouse.
            </span>
          </h1>
        </section>

        {/* 01 — the sauce */}
        <section id="sauce" className="scroll-mt-24 py-14">
          <SectionHeading
            no="01"
            title="The Sauce"
            sub="The house tare, bottled — soy, mirin, chicken bones, and years of pot-keeping."
          />
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col items-start gap-5">
              <p className="text-sm leading-relaxed text-ink/80">
                Tare is the sauce pot that lives next to every yakitori grill —
                it gets richer with every skewer dipped into it. This is that
                pot, brewed in small batches and bottled. Use it as a glaze on
                the grill, a finish for rice bowls, or the backbone of a
                marinade.
              </p>
              <span className="border border-ink/30 px-8 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] text-ink/50">
                Online store opening soon
              </span>
              <p className="text-sm leading-relaxed text-ink/70">
                Want first crack at the batch? Leave your email:
              </p>
              <Mailer />
            </div>
            <div>
              <h3 className="mb-4 text-[0.65rem] uppercase tracking-[0.25em] text-ink/50">
                Where to buy
              </h3>
              <ul className="flex flex-col">
                {STOCKISTS.map((s) => (
                  <li
                    key={s}
                    className="border-b border-ink/10 py-3 text-sm text-ink/80"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 02 — knives */}
        <section id="knives" className="scroll-mt-24 py-14">
          <SectionHeading
            no="02"
            title="The Knives"
            sub="Honesuki and petty knives ground for chicken work, made with a small forge run."
          />
          <p className="max-w-md text-sm leading-relaxed text-ink/80">
            Each blade is numbered, and each run is small enough to keep the
            grind honest. New runs are announced on the mailer and in the
            Discord first.
          </p>
        </section>

        {/* 03 — projects */}
        <section id="projects" className="scroll-mt-24 py-14">
          <SectionHeading
            no="03"
            title="On the Bench"
            sub="Things the gang is building. Tap the heart on whatever you want to exist — it tells us where to point the fire."
          />
          <ul className="grid gap-6 sm:grid-cols-3">
            {PROJECTS.map((p) => (
              <li
                key={p.id}
                className="flex flex-col justify-between gap-6 border border-ink/10 p-6"
              >
                <div>
                  <h3 className="mb-2 text-sm tracking-wide">{p.name}</h3>
                  <p className="text-xs leading-relaxed text-ink/60">
                    {p.blurb}
                  </p>
                </div>
                <LikeButton id={p.id} seed={p.seed} />
              </li>
            ))}
          </ul>
        </section>

        {/* 04 — discord */}
        <section id="discord" className="scroll-mt-24 py-14 pb-20">
          <SectionHeading
            no="04"
            title="The Discord"
            sub="Where the gang hangs out — cook-alongs, gear talk, and first word on drops."
          />
          <a
            href="#"
            className="inline-block border border-ink px-8 py-2.5 text-[0.7rem] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-ink hover:text-background"
          >
            Join the Discord
          </a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
