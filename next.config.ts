import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "vault-vogue-server.vercel.app",
      },
      {
        protocol: "https",
        hostname: "www.neuratech.co",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ['192.168.6.153'],
};

export default nextConfig;
