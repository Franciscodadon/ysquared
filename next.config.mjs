/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out for GitHub Pages
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
