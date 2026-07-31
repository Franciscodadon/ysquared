"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 20, mass: 0.6 });
  const sy = useSpring(py, { stiffness: 120, damping: 20, mass: 0.6 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    px.set(((e.clientX - r.left) / r.width - 0.5) * 20);
    py.set(((e.clientY - r.top) / r.height - 0.5) * 20);
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 620px at 78% 18%, rgba(110,128,145,0.28), transparent 60%), radial-gradient(900px 700px at 10% 100%, rgba(28,61,90,0.55), transparent 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-linen/5 lg:block" />

      <div className="wrap relative grid w-full grid-cols-1 items-center gap-14 pt-28 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24 lg:pb-16">
        {/* left — the promise */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-[11px] uppercase tracking-[0.28em] text-silver/70">
            Y Squared Youth Services &nbsp;&middot;&nbsp; Tampa Bay, Florida
          </motion.p>

          <h1 className="mt-7 font-display text-[clamp(2.9rem,7vw,5.6rem)] font-light leading-[1.02] tracking-[-0.02em]">
            <motion.span variants={item} className="block">Today&rsquo;s youth.</motion.span>
            <motion.span variants={item} className="block italic">
              Tomorrow&rsquo;s <span className="foil font-normal">leaders.</span>
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-8 max-w-[34rem] text-[1.15rem] font-light leading-relaxed text-linen/75">
            We don&rsquo;t add to a young person. We multiply what&rsquo;s already
            there &mdash; through S.T.E.A.M. academies and creative programs, with
            mentors who stay long enough to matter.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#programs" variant="light">See the Programs</MagneticButton>
            <MagneticButton href="#involve" variant="outline-light">Partner With Us</MagneticButton>
          </motion.div>
        </motion.div>

        {/* right — the mark, with its bracket frame drawing on, then the wordmark */}
        <div className="relative flex items-center justify-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-[46px]"
            style={{ background: "radial-gradient(circle at 50% 42%, rgba(195,205,212,0.20), transparent 60%)" }}
          />
          <motion.div style={{ x: sx, y: sy }} className="relative">
            <motion.div
              className="flex flex-col items-center"
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            >
              <svg
                viewBox="0 0 200 200"
                fill="none"
                role="img"
                aria-label="Y Squared"
                className="h-auto w-[min(58vw,300px)]"
              >
                {/* top + bottom bracket lines draw on together */}
                {[
                  "M45 78 L45 48 L155 48 L155 78",
                  "M45 122 L45 152 L155 152 L155 122",
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="#F7F9FA"
                    strokeWidth={4.5}
                    fill="none"
                    pathLength={1}
                    initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                    animate={reduce ? false : { pathLength: 1, opacity: 1 }}
                    transition={{ pathLength: { duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: 0.25 }, opacity: { duration: 0.2, delay: 0.25 } }}
                  />
                ))}
                {/* Y and exponent fade in as the frame lands */}
                <motion.text
                  x="100" y="150" textAnchor="middle" fill="#F7F9FA"
                  style={{ fontFamily: "var(--font-spectral), Georgia, serif", fontWeight: 600, fontSize: "116px", letterSpacing: "-0.01em", transformBox: "fill-box", transformOrigin: "center" }}
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  animate={reduce ? false : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
                >
                  Y
                </motion.text>
                <motion.text
                  x="133" y="86" textAnchor="middle" fill="#F7F9FA"
                  style={{ fontFamily: "var(--font-spectral), Georgia, serif", fontWeight: 600, fontSize: "38px", transformBox: "fill-box", transformOrigin: "center" }}
                  initial={reduce ? false : { opacity: 0, scale: 0.6 }}
                  animate={reduce ? false : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 1.25 }}
                >
                  2
                </motion.text>
              </svg>

              <motion.img
                src="/logo-word-white.png"
                alt="Youth Squared — Today's youth, tomorrow's leaders"
                className="mt-6 h-auto w-[min(64vw,320px)]"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={reduce ? false : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.45 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

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
