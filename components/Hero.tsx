"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parallax = useRef(0);
  const mouse = useRef({ x: -9999, y: -9999 });

  /* generative living field — always drifting */
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0,
      DPR = 1,
      raf = 0;
    type P = { x: number; y: number; bvx: number; bvy: number; ix: number; iy: number };
    let parts: P[] = [];

    const resize = () => {
      DPR = Math.min(2, window.devicePixelRatio || 1);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = W * DPR;
      cv.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    const seed = () => {
      const n = Math.round(Math.min(96, (W * H) / 16000));
      parts = [];
      for (let i = 0; i < n; i++) {
        const a = Math.random() * 6.2832;
        const s = 0.18 + Math.random() * 0.22;
        parts.push({ x: Math.random() * W, y: Math.random() * H, bvx: Math.cos(a) * s, bvy: Math.sin(a) * s, ix: 0, iy: 0 });
      }
    };
    const draw = () => {
      const py = parallax.current;
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(0, -py);
      for (const p of parts) {
        const dx = p.x - mouse.current.x;
        const dy = p.y - (mouse.current.y + py);
        const d2 = dx * dx + dy * dy;
        if (d2 < 20000) {
          const f = (20000 - d2) / 20000;
          const d = Math.sqrt(d2) || 1;
          p.ix += (dx / d) * f * 0.7;
          p.iy += (dy / d) * f * 0.7;
        }
        p.ix *= 0.9;
        p.iy *= 0.9;
        p.x += p.bvx + p.ix;
        p.y += p.bvy + p.iy;
        if (p.x < -20) p.x += W + 40;
        if (p.x > W + 20) p.x -= W + 40;
        if (p.y < -20) p.y += H + 40;
        if (p.y > H + 20) p.y -= H + 40;
      }
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i],
            b = parts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const dd = dx * dx + dy * dy;
          if (dd < 16000) {
            ctx.strokeStyle = `rgba(195,205,212,${(1 - dd / 16000) * 0.45})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of parts) {
        ctx.fillStyle = "rgba(222,230,235,.7)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, 6.2832);
        ctx.fill();
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    if (reduce) {
      draw(); // one static frame
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  /* scroll glide — drift through the square */
  useEffect(() => {
    if (reduce) return;
    const onScroll = () => {
      const sec = sectionRef.current;
      const sq = squareRef.current;
      if (!sec || !sq) return;
      const total = sec.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -sec.getBoundingClientRect().top / total));
      sq.style.transform = `scale(${1 + p * 0.55}) translateY(${-p * 40}px)`;
      sq.style.opacity = String(1 - Math.min(1, Math.max(0, (p - 0.05) / 0.6)));
      if (cueRef.current) cueRef.current.style.opacity = String(Math.max(0, 1 - p * 4));
      parallax.current = p * 40;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduce]);

  const bar = { hidden: { scaleX: 0 }, show: { scaleX: 1 } } as const;
  const stub = { hidden: { scaleY: 0 }, show: { scaleY: 1 } } as const;
  const t = { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section ref={sectionRef} id="top" className="relative bg-deep text-linen" style={{ height: "165vh" }}>
      <div
        ref={stickyRef}
        className="grain sticky top-0 flex h-[100dvh] items-center justify-center overflow-hidden"
        onMouseMove={(e) => {
          const r = canvasRef.current?.getBoundingClientRect();
          if (r) mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        }}
        onMouseLeave={() => (mouse.current = { x: -9999, y: -9999 })}
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(1000px 620px at 50% 42%, rgba(110,128,145,0.24), transparent 62%), radial-gradient(900px 700px at 12% 100%, rgba(28,61,90,0.45), transparent 55%)",
          }}
        />

        {/* the square (from the mark), wrapping the content so the eyebrow stays inside */}
        <motion.div
          ref={squareRef}
          initial={reduce ? false : "hidden"}
          animate={reduce ? false : "show"}
          className="relative z-[2] flex flex-col items-center px-[clamp(2.5rem,8vw,6rem)] py-[clamp(3rem,8vw,5.5rem)] text-center"
        >
          {/* bracketed frame */}
          <motion.span variants={bar} transition={t} className="metal-bar absolute left-0 right-0 top-0 h-[2px] origin-center" />
          <motion.span variants={bar} transition={{ ...t, delay: 0.1 }} className="metal-bar absolute bottom-0 left-0 right-0 h-[2px] origin-center" />
          <motion.span variants={stub} transition={{ ...t, delay: 0.15 }} className="metal-stub absolute left-0 top-0 h-9 w-[2px] origin-top" />
          <motion.span variants={stub} transition={{ ...t, delay: 0.2 }} className="metal-stub absolute right-0 top-0 h-9 w-[2px] origin-top" />
          <motion.span variants={stub} transition={{ ...t, delay: 0.25 }} className="metal-stub absolute bottom-0 left-0 h-9 w-[2px] origin-bottom" />
          <motion.span variants={stub} transition={{ ...t, delay: 0.3 }} className="metal-stub absolute bottom-0 right-0 h-9 w-[2px] origin-bottom" />

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-silver/70"
          >
            Y Squared Youth Services &nbsp;&middot;&nbsp; Tampa Bay, Florida
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? false : { opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="gilded mt-6 font-display text-[clamp(3.4rem,12vw,9rem)] font-normal leading-[0.92] tracking-[-0.03em]"
          >
            Y<sup className="ml-[0.04em] align-super text-[0.44em] font-semibold">2</sup>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-6 font-display text-[clamp(1rem,2vw,1.35rem)] font-medium uppercase tracking-[0.24em]"
          >
            Youth Squared
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-3 font-display text-[0.72rem] uppercase italic tracking-[0.16em] text-silver"
          >
            Today&rsquo;s Youth &middot; Tomorrow&rsquo;s Leaders
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <MagneticButton href="#programs" variant="light">
              See the Programs
            </MagneticButton>
            <MagneticButton href="#involve" variant="outline-light">
              Partner With Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          ref={cueRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="pointer-events-none absolute bottom-7 left-1/2 z-[3] -translate-x-1/2"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver/50"
          >
            Scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
