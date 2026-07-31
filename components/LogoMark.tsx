type Props = {
  size?: number;
  tone?: "ink" | "light";
  className?: string;
  title?: string;
};

/**
 * The Y² mark, rebuilt to match the Y Squared logo exactly: a near-complete
 * square frame (open at the top-left corner), a serif "Y", and a superscript
 * "2" seated inside the upper-right of the frame. One solid color — no recolor.
 */
export default function LogoMark({
  size = 200,
  tone = "ink",
  className,
  title = "Y Squared",
}: Props) {
  const color = tone === "light" ? "#F7F9FA" : "#1C3D5A";
  const serif = {
    fontFamily: "var(--font-spectral), Georgia, 'Times New Roman', serif",
  } as const;

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>
      <path d="M70 52 H156 V150 H52 V74" fill="none" stroke={color} strokeWidth={4.5} />
      <text
        x="100"
        y="148"
        textAnchor="middle"
        fill={color}
        style={{ ...serif, fontWeight: 500, fontSize: "110px", letterSpacing: "-0.01em" }}
      >
        Y
      </text>
      <text
        x="132"
        y="88"
        textAnchor="middle"
        fill={color}
        style={{ ...serif, fontWeight: 600, fontSize: "36px" }}
      >
        2
      </text>
    </svg>
  );
}
