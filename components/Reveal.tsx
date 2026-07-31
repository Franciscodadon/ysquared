"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

/** Scroll-into-view reveal. Refined lift + fade, respects reduced-motion. */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  style,
  id,
}: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style} id={id}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      id={id}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
