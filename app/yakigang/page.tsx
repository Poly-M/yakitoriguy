import type { Metadata } from "next";
import Grain from "../components/Grain";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SectionHeading from "../components/SectionHeading";
import LikeButton from "../components/LikeButton";
import Mailer from "../components/Mailer";
import { SauceIcon, KnifeIcon, ChatIcon } from "../components/GangIcons";
import { PROJECTS, STOCKISTS } from "../content";

export const metadata: Metadata = {
  title: "YakiGang — YAKIGANG",
  description:
    "The brand — the sauce, the knives, and the Discord where the gang hangs out.",
};

const VALUES = ["Small Batch", "Brewed In The Bay", "Numbered Runs", "Made By Hand"];

const TILES = [
  {
    Icon: SauceIcon,
    title: "The Sauce",
    blurb: "The house tare, bottled.",
    cta: "Shop Now",
    href: "#sauce",
    dark: true,
  },
  {
    Icon: KnifeIcon,
    title: "The Knives",
    blurb: "Ground for chicken work.",
    cta: "Explore",
    href: "#knives",
    dark: false,
  },
  {
    Icon: ChatIcon,
    title: "The Discord",
    blurb: "Where the gang hangs out.",
    cta: "Join Now",
    href: "#discord",
    dark: true,
  },
];

export default function YakiGangPage() {
  return (
    <div className="relative min-h-screen bg-background text-ink">
      <Grain />
      <SiteHeader current="/yakigang" />

      {/* hero band — bold, full-bleed navy */}
      <section className="relative overflow-hidden bg-ink text-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-accent">
            The goods &amp; the gang
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-light uppercase leading-[1.15] tracking-tight sm:text-5xl">
            Sauce, steel, and the{" "}
            <span className="sm:whitespace-nowrap">gang that shows up.</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-background/70">
            Small-batch tare, chef-ground knives, and the Discord where new
            recipes get tested before anyone else sees them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#sauce" className="btn-pill btn-pill-cream">
              Shop the Sauce
            </a>
            <a href="#discord" className="btn-pill btn-pill-outline">
              Join the Discord
            </a>
          </div>
        </div>
      </section>

      {/* values strip */}
      <div className="border-b border-ink/10 bg-background">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6">
          {VALUES.map((v) => (
            <span
              key={v}
              className="text-[0.62rem] uppercase tracking-[0.25em] text-ink/50"
            >
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* category tiles */}
      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-3">
          {TILES.map(({ Icon, title, blurb, cta, href, dark }) => (
            <a
              key={title}
              href={href}
              className={`tile-card flex flex-col items-start gap-5 p-7 ${
                dark ? "bg-ink text-background" : "border border-ink/15 bg-background text-ink"
              }`}
            >
              <Icon className="h-9 w-9" />
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em]">{title}</h3>
                <p
                  className={`mt-1.5 text-xs leading-relaxed ${
                    dark ? "text-background/65" : "text-ink/55"
                  }`}
                >
                  {blurb}
                </p>
              </div>
              <span
                className={`btn-pill mt-auto ${
                  dark ? "btn-pill-cream" : "btn-pill-solid"
                }`}
              >
                {cta}
              </span>
            </a>
          ))}
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-6">
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
              <span className="btn-pill btn-pill-outline text-ink/50">
                Online store opening soon
              </span>
              <p className="text-sm leading-relaxed text-ink/70">
                Want first crack at the batch? Leave your email:
              </p>
              <Mailer variant="pill" />
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
                <LikeButton id={p.id} seed={p.seed} variant="pill" />
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* 04 — discord / join band */}
      <section id="discord" className="scroll-mt-24 bg-ink text-background">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-6 py-16">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-accent">
            04 &middot; The Discord
          </span>
          <h2 className="max-w-lg text-2xl font-light leading-snug sm:text-3xl">
            Join the gang. Cook-alongs, gear talk, and first word on drops.
          </h2>
          <a href="#" className="btn-pill btn-pill-cream mt-2">
            Join the Discord
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
