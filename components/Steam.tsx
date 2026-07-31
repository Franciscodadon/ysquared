import Reveal from "./Reveal";

const pillars = [
  { letter: "S", word: "Science", desc: "Ask the question, run the test, read what actually happened." },
  { letter: "T", word: "Technology", desc: "Tools that are current, taught by people who use them daily." },
  { letter: "E", word: "Entrepreneurship", desc: "Spot a problem, price a solution, pitch it to a room." },
  { letter: "A", word: "Architecture", desc: "Design for people. Draw it, model it, defend the choices." },
  { letter: "M", word: "Media", desc: "Write it, film it, record it. Make something other people see." },
];

export default function Steam() {
  return (
    <section id="steam" className="grain relative overflow-hidden bg-deep py-28 text-linen md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 85% 0%, rgba(110,128,145,0.2), transparent 60%)",
        }}
      />
      <div className="wrap relative">
        <div className="max-w-[54ch]">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.1] text-linen">
              Five pillars. <span className="italic text-silver">One way of thinking.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[1.08rem] font-light leading-relaxed text-linen/72">
              Our S.T.E.A.M. isn&rsquo;t the standard one. We swapped in the two
              things young people ask for most and are handed least: ownership,
              and the ability to make something other people see.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal
              key={p.letter}
              delay={i * 0.09}
              className="relative border-t border-linen/12 py-9 lg:border-l lg:border-t-0 lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <div
                className="font-display text-[3.6rem] font-semibold leading-none foil"
                aria-hidden
              >
                {p.letter}
              </div>
              <div className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-linen">
                {p.word}
              </div>
              <p className="mt-3 max-w-[26ch] text-[0.95rem] font-light leading-relaxed text-linen/60">
                {p.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
