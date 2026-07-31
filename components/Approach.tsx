import Reveal from "./Reveal";

const principles = [
  {
    n: "01",
    title: "Built toward a career",
    body: "We're preparing kids for work, not hobbies. Every pillar leads somewhere real, and we develop students until they can do it at a level people pay for — so the thing they love becomes the thing they do.",
  },
  {
    n: "02",
    title: "Projects, not worksheets",
    body: "Nothing here is graded on a page. Students plan it, build it, break it, and fix it. Skills stick when they're attached to something a kid actually wanted to finish.",
  },
  {
    n: "03",
    title: "Trained on the real thing",
    body: "Students work with the same software, equipment, and AI a working professional opened this morning. When they walk into a job, a studio, or a kitchen, none of it is unfamiliar.",
  },
];

export default function Approach() {
  return (
    <section className="bg-paper-2 py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-steel">
            How we work
          </p>
          <h2 className="mt-5 max-w-[22ch] font-display text-[clamp(2rem,4.4vw,3.2rem)] font-normal leading-[1.1] text-ink">
            What every program has in <span className="italic">common.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="font-display text-[2.4rem] font-light leading-none text-steel/50">
                {p.n}
              </div>
              <div className="mt-6 h-[3px] w-14 foil-line" />
              <h3 className="mt-6 font-display text-[1.5rem] font-normal text-ink">
                {p.title}
              </h3>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink/62">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
