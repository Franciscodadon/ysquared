import Reveal from "./Reveal";

type Program = {
  title: string;
  discipline: string;
  tagline: string;
  body: string;
  tiers: { name: string; range: string }[];
  plate: string; // gradient for the image plate
  glyph: string; // decorative ghost letter
};

const featured: Program = {
  title: "Homeschool Co-Op",
  discipline: "All five pillars · Weekly",
  tagline: "Science. Technology. Entrepreneurship. Architecture. Media.",
  body: "All five pillars in one weekly schedule. Homeschooling gives your child freedom — what it can't always give them is a lab partner, a build team, or a teacher who specializes in the thing they're obsessed with. Two dedicated instructors, specialty teachers, and regular field trips.",
  tiers: [
    { name: "Explorers", range: "K–5" },
    { name: "Builders", range: "6–8" },
    { name: "Innovators", range: "9–12" },
  ],
  plate: "linear-gradient(135deg,#1c3d5a 0%,#0e2136 60%,#081726 100%)",
  glyph: "∑",
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
    plate: "linear-gradient(140deg,#24455f 0%,#12283d 100%)",
    glyph: "¶",
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
    plate: "linear-gradient(140deg,#1f3e57 0%,#0e2136 100%)",
    glyph: "▷",
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
    plate: "linear-gradient(140deg,#26485f 0%,#102a3e 100%)",
    glyph: "⌘",
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
    plate: "linear-gradient(140deg,#213f56 0%,#0d2338 100%)",
    glyph: "✦",
  },
];

function Plate({ program, tall }: { program: Program; tall?: boolean }) {
  return (
    // TODO(photography): replace this brand plate with real program photography.
    // Suggested shot per program in the shot list handed to the client.
    <div
      className={`relative overflow-hidden ${tall ? "h-full min-h-[260px]" : "aspect-[16/10]"}`}
      style={{ background: program.plate }}
    >
      <div className="grain absolute inset-0 opacity-40" />
      <span className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-linen/25" />
      <span className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-linen/25" />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-2 select-none font-display text-[9rem] leading-none text-linen/[0.06]"
      >
        {program.glyph}
      </span>
      <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.2em] text-silver/80">
        {program.discipline}
      </span>
    </div>
  );
}

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

export default function Programs() {
  return (
    <section id="programs" className="bg-paper py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.6vw,3.4rem)] font-normal leading-[1.08] text-ink">
            Four doors into the pillars. One way in for{" "}
            <span className="italic">homeschool families.</span>
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

        {/* featured — the co-op */}
        <Reveal delay={0.05} className="mt-16">
          <article className="group grid grid-cols-1 overflow-hidden border border-paper-2 bg-linen lg:grid-cols-[1.05fr_1fr]">
            <Plate program={featured} tall />
            <div className="p-10 md:p-14">
              <h3 className="font-display text-[2.1rem] font-normal leading-tight text-ink">
                {featured.title}
              </h3>
              <p className="mt-2 font-display text-[1.05rem] italic text-slate">
                {featured.tagline}
              </p>
              <p className="mt-6 max-w-[52ch] text-[1.02rem] leading-relaxed text-ink/62">
                {featured.body}
              </p>
              <Tiers tiers={featured.tiers} />
            </div>
          </article>
        </Reveal>

        {/* the four programs */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 0.08}
              className="group flex flex-col overflow-hidden border border-paper-2 bg-linen transition-shadow duration-500 hover:shadow-[0_28px_60px_-34px_rgba(14,33,54,0.55)]"
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                  <Plate program={p} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-9 md:p-11">
                <h3 className="font-display text-[1.7rem] font-normal leading-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 font-display text-[1rem] italic text-slate">
                  {p.tagline}
                </p>
                <p className="mt-5 max-w-[50ch] flex-1 text-[0.98rem] leading-relaxed text-ink/62">
                  {p.body}
                </p>
                <Tiers tiers={p.tiers} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
