import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // One canonical host: www.bancualex.com/<path> -> bancualex.com/<path>.
      // permanent: true sends a 308, which search engines treat like a 301.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bancualex.com" }],
        destination: "https://bancualex.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
