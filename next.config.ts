import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '', // leave empty for user page, or '/repo-name' for project page
  // assetPrefix: '/_next/', // ensures _next files load correctly
  images: {
    unoptimized: true, // optional: disables next/image optimization for GH Pages
  },
};

export default nextConfig;
