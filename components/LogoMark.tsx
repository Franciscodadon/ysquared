type Props = {
  size?: number;
  tone?: "ink" | "light";
  className?: string;
  title?: string;
};

/**
 * The Y² mark as vector: a bracketed square (top + bottom bars with corner
 * stubs, open mid-sides) framing a serif "Y" with a superscript "2".
 */
export default function LogoMark({
  size = 40,
  tone = "ink",
  className,
  title = "Y Squared",
}: Props) {
  const color = tone === "light" ? "#F7F9FA" : "#1C3D5A";
  const serif = { fontFamily: "var(--font-spectral), Georgia, 'Times New Roman', serif" } as const;

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
      <path d="M45 78 L45 48 L155 48 L155 78" fill="none" stroke={color} strokeWidth={4.5} />
      <path d="M45 122 L45 152 L155 152 L155 122" fill="none" stroke={color} strokeWidth={4.5} />
      <text x="100" y="150" textAnchor="middle" fill={color} style={{ ...serif, fontWeight: 600, fontSize: "116px", letterSpacing: "-0.01em" }}>
        Y
      </text>
      <text x="133" y="86" textAnchor="middle" fill={color} style={{ ...serif, fontWeight: 600, fontSize: "38px" }}>
        2
      </text>
    </svg>
  );
}
