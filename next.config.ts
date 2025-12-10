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
  // Ensure proper static file handling
  output: 'standalone',
};

export default nextConfig;
