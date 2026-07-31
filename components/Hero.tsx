"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import LogoMark from "./LogoMark";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  // gentle pointer parallax on the mark (motion values, not state)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 120, damping: 20, mass: 0.6 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 22);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 22);
  }
  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100dvh] items-center overflow-hidden bg-deep text-linen"
      onMouseMove={onMove}
      onMouseLeave={reset}
      ref={wrapRef}
    >
      {/* atmospheric depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 78% 18%, rgba(110,128,145,0.28), transparent 60%), radial-gradient(900px 700px at 10% 100%, rgba(28,61,90,0.55), transparent 55%)",
        }}
      />
      {/* faint architectural rule */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-linen/5 lg:block" />

      <div className="wrap relative grid w-full grid-cols-1 items-center gap-14 pt-28 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-16">
        {/* left — the promise */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-silver/70"
          >
            Y Squared Youth Services &nbsp;·&nbsp; Tampa Bay, Florida
          </motion.p>

          <h1 className="mt-7 font-display text-[clamp(2.9rem,7vw,5.6rem)] font-light leading-[1.02] tracking-[-0.02em]">
            <motion.span variants={item} className="block">
              Today&rsquo;s youth.
            </motion.span>
            <motion.span variants={item} className="block italic">
              Tomorrow&rsquo;s <span className="foil font-normal">leaders.</span>
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-[34rem] text-[1.15rem] font-light leading-relaxed text-linen/75"
          >
            We don&rsquo;t add to a young person. We multiply what&rsquo;s already
            there &mdash; through S.T.E.A.M. academies and creative programs, with
            mentors who stay long enough to matter.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#programs" variant="light">
              See the Programs
            </MagneticButton>
            <MagneticButton href="#involve" variant="outline-light">
              Partner With Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* right — the animated mark inside an architectural frame */}
        <div className="relative flex items-center justify-center">
          <motion.div
            style={{ x: sx, y: sy }}
            className="relative"
          >
            {/* frame corners */}
            <span className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 border-l border-t border-silver/40" />
            <span className="pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 border-b border-r border-silver/40" />
            {/* soft halo behind the mark */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(195,205,212,0.22), transparent 62%)",
              }}
            />
            <LogoMark
              size={360}
              tone="light"
              animate
              className="h-auto w-[min(64vw,360px)]"
            />
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver/50"
        >
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
