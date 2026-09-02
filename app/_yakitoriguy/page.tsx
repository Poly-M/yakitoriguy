import type { Metadata } from "next";
import Grain from "../components/Grain";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import Mailer from "../components/Mailer";
import { POPUPS, GUIDES } from "../content";

export const metadata: Metadata = {
  title: "YakitoriGuy — YAKIGANG",
  description:
    "The chef — pop-up dates, free YouTube guides, the mailer, and consulting.",
};

const CHEF_LINKS = [
  { label: "YouTube ↗", href: "https://www.youtube.com/@yakitoriguy" },
  { label: "Instagram ↗", href: "https://www.instagram.com/yakitoriguy" },
];

export default function YakitoriGuyPage() {
  return (
    <div className="relative min-h-screen bg-background text-ink">
      <Grain />
      <SiteHeader current="/yakitoriguy" />

      <main className="relative z-10 mx-auto max-w-4xl px-6">
        <section className="py-16 sm:py-24">
          <h1 className="max-w-2xl text-3xl font-light leading-snug tracking-tight sm:text-4xl">
            YakitoriGuy.
            <br />
            <span className="text-ink/60">
              Chicken, charcoal, and not much else — live at the pop-ups,
              free on YouTube.
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
            {CHEF_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-ink/30 pb-1 text-[0.7rem] uppercase tracking-[0.25em] text-ink/80 transition-colors hover:border-ink hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>

        {/* 01 — pop-ups */}
        <section id="popups" className="scroll-mt-24 py-14">
          <SectionHeading
            no="01"
            title="Upcoming Pop-ups"
            sub="Small rooms, short menus, real binchotan. Dates drop here and on the mailer first."
          />
          <ul>
            {POPUPS.map((p) => (
              <li
                key={p.date}
                className="grid grid-cols-2 items-baseline gap-2 border-b border-ink/10 py-5 sm:grid-cols-[8rem_1fr_1fr_auto] sm:gap-6"
              >
                <span className="font-mono text-xs text-ink/60">{p.date}</span>
                <span className="text-sm">{p.city}</span>
                <span className="text-sm text-ink/60">{p.venue}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-accent">
                  {p.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 02 — guides */}
        <section id="guides" className="scroll-mt-24 py-14">
          <SectionHeading
            no="02"
            title="YouTube Guides"
            sub="Everything's on YouTube, free. Start here."
          />
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {GUIDES.map((g) => (
              <li key={g.title} className="bg-background">
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-baseline justify-between gap-4 p-6 transition-colors hover:bg-ink hover:text-background"
                >
                  <span className="text-sm leading-relaxed">{g.title}</span>
                  <span className="font-mono text-xs text-ink/40 transition-colors group-hover:text-background/60">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 03 — mailer */}
        <section id="mailer" className="scroll-mt-24 py-14">
          <SectionHeading
            no="03"
            title="The Mailer"
            sub="Pop-up dates, sauce drops, and knife runs land in your inbox first."
          />
          <Mailer />
        </section>

        {/* 04 — consulting & contact */}
        <section id="contact" className="scroll-mt-24 py-14 pb-20">
          <SectionHeading
            no="04"
            title="Consulting & Contact"
            sub="Menu R&D, yakitori programs, charcoal setups, staff training — or just say hi."
          />
          <div className="max-w-xl">
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
