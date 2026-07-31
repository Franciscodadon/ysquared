"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

type Variant = "solid" | "outline" | "light" | "outline-light";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "relative inline-flex items-center justify-center whitespace-nowrap font-mono uppercase " +
  "text-[12px] tracking-[0.16em] px-7 py-[15px] transition-colors duration-300 will-change-transform";

const styles: Record<Variant, string> = {
  solid:
    "bg-ink text-linen border border-ink hover:bg-transparent hover:text-ink",
  outline:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-linen",
  light:
    "bg-linen text-deep border border-linen hover:bg-transparent hover:text-linen",
  "outline-light":
    "bg-transparent text-linen border border-linen/45 hover:border-linen hover:bg-linen hover:text-deep",
};

/**
 * Magnetic CTA — the button eases toward the cursor on hover using motion
 * values (never React state), so it stays smooth on mobile and low-power.
 */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    x.set(relX * 0.28);
    y.set(relY * 0.32);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className ?? ""}`}
    >
      {children}
    </motion.a>
  );
}
