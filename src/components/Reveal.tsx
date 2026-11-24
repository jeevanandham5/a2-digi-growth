import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ delay?: number; className?: string; y?: number }>;

/* Fades and lifts children in once they scroll into view. */
export function Reveal({ children, delay = 0, className, y = 24 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div data-entrance=""
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
