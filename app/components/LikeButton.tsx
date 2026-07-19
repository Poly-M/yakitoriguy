"use client";

import { useEffect, useState } from "react";

// Likes are stored locally for now (no backend yet) — each visitor's
// interest is remembered on their own device.
export default function LikeButton({ id, seed }: { id: string; seed: number }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(`yakigang:like:${id}`) === "1");
  }, [id]);

  function toggle() {
    const next = !liked;
    setLiked(next);
    localStorage.setItem(`yakigang:like:${id}`, next ? "1" : "0");
  }

  const count = seed + (liked ? 1 : 0);

  return (
    <button
      onClick={toggle}
      aria-pressed={liked}
      aria-label={liked ? "Remove your interest" : "Show interest"}
      className={`group/like flex items-center gap-2 border px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300 ${
        liked
          ? "border-ink bg-ink text-background"
          : "border-ink/25 text-ink/70 hover:border-ink hover:text-ink"
      }`}
    >
      <span
        className={`text-sm leading-none transition-transform duration-300 ${
          liked ? "scale-110 text-accent" : "group-hover/like:scale-110"
        }`}
      >
        {liked ? "♥" : "♡"}
      </span>
      {count}
    </button>
  );
}
