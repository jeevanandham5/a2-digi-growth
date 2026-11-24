import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import { caseStudies, links, site } from "../site";
import { ArrowIcon } from "./Icons";

const headline = "Your business, found by the people searching for it.";

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });
  const rotX = useTransform(sy, [-1, 1], [8, -8]);
  const rotY = useTransform(sx, [-1, 1], [-10, 10]);
  const backX = useTransform(sx, [-1, 1], [-14, 14]);
  const backY = useTransform(sy, [-1, 1], [-10, 10]);
  const frontX = useTransform(sx, [-1, 1], [22, -22]);
  const frontY = useTransform(sy, [-1, 1], [16, -16]);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const words = headline.split(" ");
  const [anu, kmc] = caseStudies;

  return (
    <section className="relative overflow-hidden" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Aurora */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-aurora absolute -left-[10%] -top-[30%] h-[70vmax] w-[70vmax] rounded-full bg-teal/25 blur-[120px]" />
        <div className="animate-aurora absolute -right-[20%] top-[10%] h-[60vmax] w-[60vmax] rounded-full bg-marigold/20 blur-[140px] [animation-delay:-9s]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,theme(colors.night))]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-site grid min-h-[calc(100vh-88px)] items-center gap-12 pb-16 pt-10 lg:grid-cols-[7fr_6fr] lg:gap-16">
        <div className="max-w-[36rem]">
          <motion.p data-entrance=""
            className="eyebrow-line"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {site.brand}
          </motion.p>

          <h1 className="mt-6 text-[clamp(2.7rem,6.6vw,5.4rem)] font-bold" aria-label={headline}>
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.08em] pr-[0.22em] align-bottom">
                <motion.span data-entrance=""
                  className={`inline-block ${i >= 6 ? "gradient-text" : ""}`}
                  initial={reduce ? false : { y: "110%", rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p data-entrance=""
            className="mt-7 max-w-[32rem] text-[1.2rem] text-fog"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Websites, Shopify stores, posters, SEO and ads for shops and brands that want more customers walking in and more orders coming in. Built in {site.city}, working with businesses anywhere in India.
          </motion.p>

          <motion.div data-entrance=""
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            <a href={links.whatsapp} className="button">Start a project on WhatsApp</a>
            <a href="#work" className="button-ghost">See live stores <ArrowIcon /></a>
          </motion.div>

          <motion.ul data-entrance=""
            className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem] text-mist"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <li>Fixed quotes, in writing</li>
            <li>Same-day replies</li>
            <li>Tamil and English</li>
          </motion.ul>
        </div>

        <div className="relative mx-auto aspect-[1/0.92] w-full max-w-[560px] [perspective:1400px] lg:max-w-none">
          <motion.figure data-entrance=""
            className="absolute right-0 top-0 m-0 w-[78%] overflow-hidden rounded-2xl bg-night-2 shadow-window"
            style={{ x: backX, y: backY, rotateX: rotX, rotateY: rotY, rotateZ: 2 }}
            initial={reduce ? false : { opacity: 0, y: 40, rotateZ: 6 }}
            animate={{ opacity: 1, y: 0, rotateZ: 2 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="window-bar"><i /><i /><i /><em>{kmc.host}</em></div>
            <img src={kmc.shot} alt={`${kmc.name} store homepage`} width={1280} height={889} className="aspect-[1280/889] w-full object-cover object-top" />
          </motion.figure>

          <motion.figure data-entrance=""
            className="absolute bottom-0 left-0 m-0 w-[78%] overflow-hidden rounded-2xl bg-night-2 shadow-window"
            style={{ x: frontX, y: frontY, rotateX: rotX, rotateY: rotY, rotateZ: -3 }}
            initial={reduce ? false : { opacity: 0, y: 60, rotateZ: -8 }}
            animate={{ opacity: 1, y: 0, rotateZ: -3 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="window-bar"><i /><i /><i /><em>{anu.host}</em></div>
            <img src={anu.shot} alt={`${anu.name} gold collection page`} width={1280} height={889} className="aspect-[1280/889] w-full object-cover object-top" />
            <figcaption className="absolute left-0 top-12 flex items-center gap-2 rounded-r-full bg-marigold py-1.5 pl-4 pr-4 font-display text-sm font-bold text-night shadow-lg">
              <span className="animate-pulse-dot block h-2 w-2 rounded-full bg-wa" />
              Live now
            </figcaption>
          </motion.figure>

          <motion.div data-entrance=""
            className="glass absolute -bottom-6 right-2 flex items-center gap-3 px-4 py-3 text-sm md:right-6"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-teal/20 text-teal">
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M14 7h7v7" /></svg>
            </span>
            <span><strong className="block font-display">Built to sell</strong><span className="text-mist">Live stores, real orders</span></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
