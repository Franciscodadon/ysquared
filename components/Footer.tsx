import LogoLockup from "./LogoLockup";

const cols = [
  {
    heading: "Programs",
    links: [
      "The Writers Room",
      "Media Masters",
      "Y Squared Tech",
      "Homeschool Co-Op",
      "Kids in the Kitchen",
    ],
    href: "#programs",
  },
  {
    heading: "Organization",
    links: ["Mission & Vision", "The Academy", "Sponsorship", "Contact"],
    href: "#mission",
  },
];

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-deeper py-20 text-linen/60">
      <div className="wrap relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <LogoLockup tone="light" markSize={44} showTagline />
            <p className="mt-8 max-w-[40ch] text-[0.95rem] leading-relaxed text-linen/55">
              Y Squared Youth Services Inc. builds S.T.E.A.M. academies and
              creative programs for youth across Tampa Bay, Florida.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.heading}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-linen">
                {c.heading}
              </h4>
              <ul className="mt-5 space-y-1">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href={c.href}
                      className="inline-block py-1 text-[0.95rem] text-linen/55 transition-colors hover:text-linen"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="rule-metal mt-16" />
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-linen/40">
          <span>&copy; 2026 Y Squared Youth Services Inc.</span>
          <span>Today&rsquo;s youth, tomorrow&rsquo;s leaders</span>
        </div>
      </div>
    </footer>
  );
}
