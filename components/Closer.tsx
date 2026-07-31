"use client";

import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

export default function Closer() {
  return (
    <section
      className="relative overflow-hidden py-32 text-ink"
      style={{
        background:
          "linear-gradient(140deg,#ffffff 0%,#e7ecef 46%,#a9b5be 100%)",
      }}
    >
      <div className="wrap relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[20ch] font-display text-[clamp(2.2rem,5.4vw,4rem)] font-normal leading-[1.06]"
        >
          Every kid walks in with something. We{" "}
          <span className="italic">multiply</span> it.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-[52ch] text-[1.08rem] leading-relaxed text-ink/62"
        >
          Back a student this term, or bring Y Squared to your school, church, or
          community center.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton href="#involve" variant="solid">
            Support a Student
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
