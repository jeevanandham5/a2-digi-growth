import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { caseStudies, type CaseStudy } from "../site";
import { Reveal } from "./Reveal";
import { ArrowIcon } from "./Icons";
import { useSpot } from "./useSpot";

function CaseCard({ c, flip }: { c: CaseStudy; flip: boolean }) {
  const reduce = useReducedMotion();
  const viewport = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const spot = useSpot();

  const travel = () => Math.max(0, (img.current?.offsetHeight ?? 0) - (viewport.current?.clientHeight ?? 0));
  const start = () => {
    const d = travel();
    if (!img.current) return;
    img.current.style.transitionDuration = reduce ? "0ms" : `${Math.max(2000, d * 4)}ms`;
    img.current.style.transform = `translateY(-${d}px)`;
  };
  const stop = () => {
    if (!img.current) return;
    img.current.style.transitionDuration = reduce ? "0ms" : "900ms";
    img.current.style.transform = "translateY(0)";
  };

  return (
    <Reveal>
      <article className={`glass spot grid gap-8 p-5 md:p-7 lg:grid-cols-[3fr_2fr] lg:gap-12 ${flip ? "lg:[&>a]:order-2" : ""}`} onMouseMove={spot}>
        <a
          href={c.url}
          target="_blank"
          rel="noopener"
          aria-label={`Open ${c.host} in a new tab`}
          className="group relative block overflow-hidden rounded-2xl bg-night-2 shadow-window transition-transform duration-300 hover:-translate-y-1"
          onMouseEnter={start}
          onMouseLeave={stop}
          onFocus={start}
          onBlur={stop}
        >
          <div className="window-bar"><i /><i /><i /><em>{c.host}</em></div>
          <div ref={viewport} className="relative aspect-[16/11] overflow-hidden">
            <img ref={img} src={c.fullShot} alt={`Full length view of ${c.name}`} width={1040} height={2600} loading="lazy" className="w-full transition-transform ease-linear will-change-transform" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-night/70 to-transparent" />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-night/70 px-3 py-1 text-xs text-fog opacity-0 backdrop-blur transition group-hover:opacity-100">Scrolling the live page</span>
          </div>
        </a>
        <div className="grid content-start gap-4 pt-1">
          <p className="font-semibold text-teal">{c.kind}</p>
          <h3 className="-mt-2 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold">{c.name}</h3>
          <p className="text-fog">{c.summary}</p>
          <ul className="grid gap-2 pl-5 marker:text-marigold">
            {c.facts.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <a href={c.url} target="_blank" rel="noopener" className="link-plain mt-2 inline-flex items-center gap-2">
            Visit {c.host} <ArrowIcon />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="container-site section-pad">
      <Reveal className="mb-12 max-w-[60ch] md:mb-16">
        <p className="eyebrow-line">Recent work</p>
        <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold">Stores that are open right now</h2>
        <p className="mt-4 text-[1.1rem] text-fog">Hover a screenshot to scroll through the whole page, or click to open the live site.</p>
      </Reveal>
      <div className="grid gap-8">
        {caseStudies.map((c, i) => <CaseCard key={c.host} c={c} flip={i % 2 === 1} />)}
      </div>
    </section>
  );
}
