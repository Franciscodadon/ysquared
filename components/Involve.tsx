import Reveal from "./Reveal";

const ways = [
  {
    title: "Enroll a student",
    body: "Programs run year-round for ages 7 to 18, with the Homeschool Co-Op serving grades K through 12. Tell us about your child and we'll help you find the right fit.",
    cta: "Start enrollment",
  },
  {
    title: "Become a mentor",
    body: "Cook, write, build, film, code, or run a business? That's the whole qualification. Mentors work alongside students in the programs they know best, on a schedule that fits real life.",
    cta: "Volunteer with us",
  },
  {
    title: "Corporate sponsorship",
    body: "Sponsor a cohort, fund a studio build, or bring your team in to teach. Sponsors get named recognition and a direct line to the students they're backing.",
    cta: "Request the deck",
  },
];

export default function Involve() {
  return (
    <section id="involve" className="grain relative overflow-hidden bg-deep py-28 text-linen md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 500px at 15% 100%, rgba(28,61,90,0.6), transparent 55%)",
        }}
      />
      <div className="wrap relative">
        <div className="max-w-[46ch]">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.1] text-linen">
              It takes a room full of <span className="italic text-silver">adults.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[1.08rem] font-light leading-relaxed text-linen/72">
              Y Squared Youth Services Inc. is a Florida nonprofit serving youth
              across the Tampa Bay area.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-linen/10 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 0.09}
              className="group bg-deep p-9 transition-colors duration-500 hover:bg-[#12283d] md:p-11"
            >
              <span className="font-mono text-[12px] tracking-[0.2em] text-steel">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-[1.55rem] font-normal text-linen">
                {w.title}
              </h3>
              <p className="mt-4 text-[0.98rem] font-light leading-relaxed text-linen/68">
                {w.body}
              </p>
              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-silver transition-colors hover:text-linen"
              >
                {w.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
