import Reveal from "./Reveal";

type Program = {
  title: string;
  discipline: string;
  tagline: string;
  body: string;
  tiers: { name: string; range: string }[];
};

const featured: Program = {
  title: "Homeschool Co-Op",
  discipline: "All five pillars · Weekly",
  tagline: "Science. Technology. Entrepreneurship. Art. Media.",
  body: "All five pillars in one weekly schedule. Homeschooling gives your child freedom — what it can't always give them is a lab partner, a build team, or a teacher who specializes in the thing they're obsessed with. Two dedicated instructors, specialty teachers, and regular field trips.",
  tiers: [
    { name: "Explorers", range: "K–5" },
    { name: "Builders", range: "6–8" },
    { name: "Innovators", range: "9–12" },
  ],
};

const programs: Program[] = [
  {
    title: "The Writers Room",
    discipline: "Media · Creative writing",
    tagline: "Write it. Speak it. Own it.",
    body: "Every young person has something to say — most were never taught how to say it well. Students learn the craft behind lyrical expression: cadence, wordplay, metaphor, structure, and revise until the line lands.",
    tiers: [
      { name: "Rookies", range: "7–10" },
      { name: "Session", range: "11–14" },
      { name: "Studio", range: "15–18" },
    ],
  },
  {
    title: "Media Masters",
    discipline: "Media · Visual arts & AI filmmaking",
    tagline: "Visual arts in the age of AI filmmaking.",
    body: "Kids don't want to draw a bowl of fruit — they want to make something people watch. Students direct their own short films, learning the real craft: composition, color, lighting, character design, and story.",
    tiers: [
      { name: "Storyboard", range: "7–10" },
      { name: "Director's Chair", range: "11–14" },
      { name: "Studio", range: "15–18" },
    ],
  },
  {
    title: "Y Squared Tech",
    discipline: "Technology · AI fluency",
    tagline: "Use it. Question it. Build with it.",
    body: "AI is already in their homework, their feeds, and the jobs waiting for them. Y Squared Tech teaches students to work with it and think past it — how it decides, where it gets things wrong, and how to build something no one else could.",
    tiers: [
      { name: "Ask", range: "7–10" },
      { name: "Build", range: "11–14" },
      { name: "Deploy", range: "15–18" },
    ],
  },
  {
    title: "Kids in the Kitchen",
    discipline: "Science · Culinary arts",
    tagline: "Culinary arts for kids.",
    body: "Kids learn to cook. They start with knife safety, measuring, and following a recipe, then work up to full meals they make on their own. Every session ends with everyone sitting down and eating what they made.",
    tiers: [
      { name: "Prep", range: "7–10" },
      { name: "Line", range: "11–14" },
      { name: "Service", range: "15–18" },
    ],
  },
];

function Tiers({ tiers }: { tiers: Program["tiers"] }) {
  return (
    <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper-2 pt-5">
      {tiers.map((t, i) => (
        <li key={t.name} className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate">
          <span className="text-steel">{String(i + 1).padStart(2, "0")}</span>{" "}
          <span className="text-ink">{t.name}</span> · {t.range}
        </li>
      ))}
    </ul>
  );
}

function Discipline({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel">
      {children}
    </span>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="bg-paper py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-normal leading-[1.08] text-ink">
            Find the thing they can&rsquo;t <span className="italic">put down.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[62ch] text-[1.08rem] leading-relaxed text-ink/62">
            Each program teaches a pillar through work students actually want to
            finish. The Homeschool Co-Op isn&rsquo;t a fifth program — it&rsquo;s
            all five pillars delivered in one weekly schedule. Ages 7 to 18, with
            the ceiling raised as they grow.
          </p>
        </Reveal>

        {/* featured — the co-op, clean white card */}
        <Reveal delay={0.05} className="mt-16">
          <article className="border border-paper-2 border-l-2 border-l-steel bg-linen p-10 md:p-14">
            <Discipline>{featured.discipline}</Discipline>
            <div className="mt-5 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              <div>
                <h3 className="font-display text-[2.1rem] font-normal leading-tight text-ink">
                  {featured.title}
                </h3>
                <p className="mt-3 font-display text-[1.05rem] italic text-slate">
                  {featured.tagline}
                </p>
              </div>
              <div>
                <p className="max-w-[52ch] text-[1.02rem] leading-relaxed text-ink/62">
                  {featured.body}
                </p>
                <Tiers tiers={featured.tiers} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* the four programs — clean white cards, no plates */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 0.08}
              className="group flex flex-col border border-paper-2 bg-linen p-9 transition-shadow duration-500 hover:shadow-[0_28px_60px_-34px_rgba(14,33,54,0.5)] md:p-11"
            >
              <Discipline>{p.discipline}</Discipline>
              <h3 className="mt-5 font-display text-[1.7rem] font-normal leading-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-2 font-display text-[1rem] italic text-slate">
                {p.tagline}
              </p>
              <p className="mt-5 max-w-[50ch] flex-1 text-[0.98rem] leading-relaxed text-ink/62">
                {p.body}
              </p>
              <Tiers tiers={p.tiers} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
