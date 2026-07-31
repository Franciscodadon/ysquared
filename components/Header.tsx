"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import LogoLockup from "./LogoLockup";
import MagneticButton from "./MagneticButton";

const nav = [
  { label: "Mission", href: "#mission" },
  { label: "The Academy", href: "#steam" },
  { label: "Programs", href: "#programs" },
  { label: "Get Involved", href: "#involve" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(238,241,243,0.82)" : "rgba(238,241,243,0)",
        backdropFilter: scrolled ? "blur(14px) saturate(1.2)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(110,128,145,0.22)"
          : "1px solid rgba(110,128,145,0)",
      }}
    >
      <div className="wrap flex items-center justify-between gap-6" style={{ height: scrolled ? 68 : 82 }}>
        <a href="#top" aria-label="Y Squared — home" className="shrink-0 transition-transform hover:scale-[1.02]">
          <LogoLockup markSize={38} />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="group relative py-1 text-[14px] font-medium text-ink/85 transition-colors hover:text-ink"
            >
              {n.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-steel transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <MagneticButton href="#involve" variant="solid">
            Support a Student
          </MagneticButton>
        </div>
      </div>
    </motion.header>
  );
}
