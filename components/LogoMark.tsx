type Props = {
  size?: number;
  tone?: "ink" | "light";
  className?: string;
  title?: string;
};

/**
 * The Y² mark, matched to the Y Squared logo: a bracketed square (full top and
 * bottom bars, each turning in with short corner stubs, open along the mid-sides)
 * framing a serif "Y", with a serif superscript "2" in the upper-right. One color.
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
      {/* top bracket: left stub · top bar · right stub */}
      <path d="M45 78 L45 48 L155 48 L155 78" fill="none" stroke={color} strokeWidth={4.5} />
      {/* bottom bracket: left stub · bottom bar · right stub */}
      <path d="M45 122 L45 152 L155 152 L155 122" fill="none" stroke={color} strokeWidth={4.5} />
      <text
        x="100"
        y="150"
        textAnchor="middle"
        fill={color}
        style={{ ...serif, fontWeight: 600, fontSize: "116px", letterSpacing: "-0.01em" }}
      >
        Y
      </text>
      <text
        x="133"
        y="86"
        textAnchor="middle"
        fill={color}
        style={{ ...serif, fontWeight: 600, fontSize: "38px" }}
      >
        2
      </text>
    </svg>
  );
}
