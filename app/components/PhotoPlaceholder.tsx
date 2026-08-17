// Empty stand-in for real product photography — swap for a generated or
// shot image once one exists. No illustration here on purpose.
export default function PhotoPlaceholder({
  label = "Product photo",
  note = "generate & drop in",
  dims,
  dark = false,
  className = "",
}: {
  label?: string;
  note?: string;
  dims?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center ${
        dark
          ? "border-background/40 bg-background/[0.035] text-background/55"
          : "border-ink/25 bg-ink/[0.03] text-ink/45"
      } ${className}`}
    >
      <span className="text-[0.62rem] uppercase tracking-[0.1em]">{label}</span>
      <span className="text-[0.62rem] uppercase tracking-[0.1em]">{note}</span>
      {dims && <span className="text-[0.58rem] opacity-70">{dims}</span>}
    </div>
  );
}
