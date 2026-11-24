import type { MouseEvent } from "react";

/* Writes the pointer position into --mx / --my so .spot can glow under the cursor. */
export function useSpot() {
  return (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
}
