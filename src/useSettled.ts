import { useEffect } from "react";

/*
  Safety net for entrance animations. If animation frames are not ticking
  (background tab, some embedded previews), the animated elements would stay
  invisible. After a short wait, if fewer than a handful of frames have run,
  mark the document settled so CSS forces those elements visible.
*/
export function useSettled() {
  useEffect(() => {
    let frames = 0;
    let raf = 0;
    const tick = () => { frames += 1; if (frames < 10) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    const timer = window.setTimeout(() => {
      if (frames < 10) document.documentElement.classList.add("is-settled");
    }, 1800);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, []);
}
