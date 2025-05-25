import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
    images: {
    unoptimized: true, // ← disables image optimization
  },
};

export default nextConfig;
