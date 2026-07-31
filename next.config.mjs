/** @type {import('next').NextConfig} */

// GitHub Pages project site is served under /<repo>. When you later attach a
// custom domain (served at root), set GHP_BASE_PATH="" (or remove basePath).
const basePath = process.env.GHP_BASE_PATH ?? "/ysquared";

const nextConfig = {
  reactStrictMode: true,
  output: "export", // fully static ./out for GitHub Pages
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
