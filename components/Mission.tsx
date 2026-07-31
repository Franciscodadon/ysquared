import Reveal from "./Reveal";

export default function Mission() {
  return (
    <section id="mission" className="bg-paper py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="max-w-[19ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-normal leading-[1.08] text-ink">
            A child&rsquo;s zip code should not decide what they get to{" "}
            <span className="italic">become.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-paper-2 md:grid-cols-2">
          {[
            {
              n: "01",
              label: "Mission",
              lead: "Y Squared multiplies the potential in young people across Tampa Bay.",
              body: "We teach kids to build and express themselves through science, technology, entrepreneurship, architecture, and media — and we mentor the next wave of innovators.",
            },
            {
              n: "02",
              label: "Vision",
              lead: "A Tampa Bay where every young person finds the thing they are obsessed with building.",
              body: "And the confidence to build it for a living, and for the community they came from.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 0.08}
              className="group relative bg-linen p-10 md:p-14"
            >
              {/* bracket corners */}
              <span className="pointer-events-none absolute left-6 top-6 h-9 w-9 border-l border-t border-steel/0 transition-all duration-700 group-hover:border-steel/50" />
              <span className="pointer-events-none absolute bottom-6 right-6 h-9 w-9 border-b border-r border-steel/0 transition-all duration-700 group-hover:border-steel/50" />

              <div className="flex items-center gap-4">
                <span className="font-mono text-[12px] tracking-[0.2em] text-steel">
                  {c.n}
                </span>
                <span className="h-px w-8 foil-line" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate">
                  {c.label}
                </span>
              </div>

              <p className="mt-7 font-display text-[1.55rem] font-light leading-[1.4] text-ink">
                {c.lead}
              </p>
              <p className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink/62">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
