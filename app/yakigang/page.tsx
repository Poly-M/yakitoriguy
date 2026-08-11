import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import Grain from "../components/Grain";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SectionHeading from "../components/SectionHeading";
import LikeButton from "../components/LikeButton";
import Mailer from "../components/Mailer";
import { SauceIcon, KnifeIcon, ChatIcon } from "../components/GangIcons";
import { PROJECTS, STOCKISTS } from "../content";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YakiGang — YAKIGANG",
  description:
    "The brand — the sauce, the knives, and the Discord where the gang hangs out.",
};

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

      {/* promo strip — page-specific, sits above the shared header */}
      <div className="bg-accent py-3 text-center text-[0.7rem] font-medium uppercase tracking-[0.08em] text-background">
        Small batch &middot; while it lasts
      </div>

      <SiteHeader current="/yakigang" />

      {/* sauce hero — navy as a contained block on the off-white page */}
      <div className="px-6 pb-12 pt-6 sm:px-14 sm:pb-20 sm:pt-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[20px] bg-ink text-background">
          <span
            aria-hidden
            className={`${bebasNeue.className} pointer-events-none absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-background/[0.045]`}
            style={{ fontSize: "clamp(5rem,20vw,10rem)" }}
          >
            TARE
          </span>
          <div className="relative grid gap-10 px-6 py-14 sm:grid-cols-[1fr_auto] sm:items-center sm:px-12 sm:py-20">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-background">
                Now bottled
              </span>
              <h1
                className={`${bebasNeue.className} mt-6 uppercase leading-[0.98] tracking-wide`}
                style={{ fontSize: "clamp(2.4rem,6.4vw,4rem)" }}
              >
                Sauce that earns its <span className="text-accent">spot</span>{" "}
                on the table.
              </h1>
              <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-background/70">
                The house tare from the pop-up line, bottled for the first
                time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Small batch", "Hand bottled", "Made in the Bay"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-background/35 px-4 py-2 text-[0.66rem] font-medium uppercase tracking-[0.08em]"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#sauce" className="btn-pill btn-pill-cream">
                  Shop the sauce
                </a>
                <a href="#discord" className="btn-pill btn-pill-outline">
                  Join the Discord
                </a>
              </div>
            </div>
            <div className="relative mx-auto flex aspect-[4/5] w-[min(300px,60vw)] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-background/40 bg-background/[0.035] p-6 text-center">
              <span className="text-[0.62rem] uppercase tracking-[0.1em] text-background/55">
                Product photo
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.1em] text-background/55">
                generate &amp; drop in
              </span>
              <span className="text-[0.58rem] text-background/35">
                &asymp; 1600&times;2000
              </span>
            </div>
          </div>
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
