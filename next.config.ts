import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for static export on Netlify
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'desmonddigital.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // prevent warnings from failing Netlify builds
  },
  output: 'standalone',
};

export default nextConfig;
