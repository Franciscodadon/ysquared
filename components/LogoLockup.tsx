import LogoMark from "./LogoMark";

type Props = {
  tone?: "ink" | "light";
  markSize?: number;
  showTagline?: boolean;
  className?: string;
};

/** Horizontal mark + wordmark lockup for header / footer (static). */
export default function LogoLockup({
  tone = "ink",
  markSize = 40,
  showTagline = false,
  className,
}: Props) {
  const word = tone === "light" ? "text-linen" : "text-ink";
  const tag = tone === "light" ? "text-silver/70" : "text-steel";

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark size={markSize} animate={false} tone={tone} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display ${word}`}
          style={{
            fontSize: markSize > 60 ? "1.9rem" : "1.15rem",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Youth Squared
        </span>
        {showTagline && (
          <span
            className={`font-mono ${tag}`}
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              marginTop: "0.5rem",
            }}
          >
            Today&rsquo;s youth · Tomorrow&rsquo;s leaders
          </span>
        )}
      </span>
    </span>
  );
}
