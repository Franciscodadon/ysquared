"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = {
  /** pixel size of the square mark */
  size?: number;
  /** play the draw-on entrance (hero). false = render static (header/footer) */
  animate?: boolean;
  /** color theme of the mark */
  tone?: "ink" | "light";
  className?: string;
  title?: string;
};

/**
 * The Y² mark, rebuilt from the Y Squared logo as clean SVG so it can be
 * animated crisply at any size. Composition:
 *   - a broken architectural frame (two opposite L-brackets)
 *   - a serif "Y" set in the display face
 *   - a metallic superscript "2"
 *
 * Draw-on reveal: the frame strokes draw in (pathLength), the Y wipes up
 * behind a clip, and the exponent settles in last.
 */
export default function LogoMark({
  size = 200,
  animate = true,
  tone = "ink",
  className,
  title = "Y Squared",
}: Props) {
  const reduce = useReducedMotion();
  const play = animate && !reduce;

  const stroke = tone === "light" ? "#F7F9FA" : "#1C3D5A";
  const letter = tone === "light" ? "#F7F9FA" : "#1C3D5A";
  const foilId = tone === "light" ? "foilLight" : "foilInk";

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.15, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2 } },
    },
  } as const;

  return (
    <motion.svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label={title}
      className={className}
      initial={play ? "hidden" : false}
      animate={play ? "show" : false}
      whileHover="hover"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id="foilInk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E8091" />
          <stop offset="45%" stopColor="#1C3D5A" />
          <stop offset="100%" stopColor="#0E2136" />
        </linearGradient>
        <linearGradient id="foilLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#7E8C99" />
        </linearGradient>

        {/* upward wipe that reveals the Y */}
        <clipPath id="yWipe">
          <motion.rect
            x="0"
            width="200"
            initial={play ? { y: 172, height: 0 } : { y: 24, height: 148 }}
            animate={play ? { y: 24, height: 148 } : { y: 24, height: 148 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          />
        </clipPath>

        {/* sweeping sheen for hover */}
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* broken frame — two opposite L brackets */}
      <motion.path
        d="M 96 40 L 160 40 L 160 106"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="square"
        variants={draw}
      />
      <motion.path
        d="M 40 94 L 40 160 L 104 160"
        fill="none"
        stroke={stroke}
        strokeWidth="4"
        strokeLinecap="square"
        variants={draw}
        transition={{ delay: 0.15 }}
      />

      {/* the serif Y, revealed behind an upward wipe */}
      <g clipPath="url(#yWipe)">
        <text
          x="94"
          y="150"
          textAnchor="middle"
          fill={letter}
          style={{
            fontFamily: "var(--font-spectral), Georgia, serif",
            fontWeight: 500,
            fontSize: "150px",
            letterSpacing: "-0.02em",
          }}
        >
          Y
        </text>
      </g>

      {/* metallic exponent, settles in last */}
      <motion.text
        x="150"
        y="74"
        textAnchor="middle"
        fill={`url(#${foilId})`}
        style={{
          fontFamily: "var(--font-spectral), Georgia, serif",
          fontWeight: 600,
          fontSize: "58px",
        }}
        initial={play ? { opacity: 0, y: 84, scale: 0.7 } : false}
        animate={play ? { opacity: 1, y: 74, scale: 1 } : false}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
      >
        2
      </motion.text>

      {/* hover sheen sweep */}
      <motion.rect
        x="-60"
        y="0"
        width="60"
        height="200"
        fill="url(#sheen)"
        style={{ mixBlendMode: "overlay" }}
        variants={{
          hover: { x: 220, transition: { duration: 0.9, ease: "easeInOut" } },
        }}
        initial={{ x: -60 }}
      />
    </motion.svg>
  );
}
