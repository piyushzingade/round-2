import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "wfyi.ai",
      },
      {
        protocol: "https",
        hostname: "fylflix.wfyi.ai",
      },
    ],
  },
};

export default nextConfig;
