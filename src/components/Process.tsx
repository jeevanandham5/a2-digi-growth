import { motion, useReducedMotion } from "framer-motion";
import { steps } from "../site";
import { Reveal } from "./Reveal";

export function Process() {
  const reduce = useReducedMotion();
  return (
    <section id="process" className="container-site section-pad">
      <Reveal className="mb-12 max-w-[60ch] md:mb-16">
        <p className="eyebrow-line">Process</p>
        <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold">How a project goes</h2>
      </Reveal>
      <div className="relative">
        <motion.div data-entrance=""
          aria-hidden="true"
          className="absolute left-0 top-6 hidden h-px w-full origin-left bg-gradient-to-r from-teal via-marigold to-teal lg:block"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
        />
        <ol className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <li className="grid content-start gap-4">
                <span className="relative grid h-12 w-12 place-items-center rounded-full border border-marigold bg-night font-display text-xl font-bold text-marigold">
                  {i + 1}
                </span>
                <h3 className="text-[1.4rem] font-semibold">{s.title}</h3>
                <p className="text-fog">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
