type Props = {
  size?: number;
  tone?: "ink" | "light";
  className?: string;
  title?: string;
};

/**
 * The Y² mark — the real Y Squared artwork (transparent PNG).
 * `light` swaps to the white-recolored variant for dark backgrounds.
 */
export default function LogoMark({
  size = 40,
  tone = "ink",
  className,
  title = "Y Squared",
}: Props) {
  const src = tone === "light" ? "/logo-mark-white.png" : "/logo-mark.png";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={title}
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: "auto" }}
    />
  );
}
