import Grain from "./components/Grain";
import MailingListGate from "./components/MailingListGate";

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

      {/* logo, plain and center — tap it to join the mailing list */}
      <MailingListGate />

      <p className="tagline-enter absolute inset-x-0 bottom-10 z-10 px-6 text-center text-[0.7rem] uppercase tracking-[0.45em] text-ink/60">
        Yakitori &middot; Tap the logo to join the list
      </p>
    </main>
  );
}
