import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — there's an unrelated
  // package-lock.json in the home directory that Turbopack would
  // otherwise infer as the root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
