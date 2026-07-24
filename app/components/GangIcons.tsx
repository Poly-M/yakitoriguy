// Simple line-art icons, drawn to match the logo's brush-stroke feel —
// no photography needed for the category tiles.

export function SauceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M27 6h10v8l4 4v6H23v-6l4-4V6z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M23 24h18l3 8v20a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V32l3-8z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M20 40h24"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function KnifeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M10 44 40 14a6 6 0 0 1 8.5 8.5L18 53z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M18 53 10 44l4-4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M36 18 45 27"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M10 18a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H27l-9 8v-8h-2a6 6 0 0 1-6-6z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="26" r="2" fill="currentColor" />
      <circle cx="32" cy="26" r="2" fill="currentColor" />
      <circle cx="42" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}
