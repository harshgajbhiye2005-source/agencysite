import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static export so the site can be hosted on GitHub Pages.
  output: "export",
  // The Pages site lives at <user>.github.io/portfolio — assets must resolve
  // under that subpath. Remove basePath when moving to a custom domain.
  basePath,
  // next/image does not prefix basePath onto src, so components prepend
  // this themselves for files served from public/.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};

export default nextConfig;
