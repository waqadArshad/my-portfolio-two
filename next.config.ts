import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfolio', // leave empty for user page, or '/repo-name' for project page
  assetPrefix: '/portfolio/', // ensures portfolio files load correctly
  images: {
    unoptimized: true, // optional: disables next/image optimization for GH Pages
  },
};

export default nextConfig;
