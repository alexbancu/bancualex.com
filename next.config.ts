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
      // blog.bancualex.com used to be the Substack custom domain. Its posts are
      // still indexed, so send every old URL to the same path on Substack.
      // Substack dropped /authors; its closest page is /about.
      {
        source: "/authors",
        has: [{ type: "host", value: "blog.bancualex.com" }],
        destination: "https://alexbancu.substack.com/about",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "blog.bancualex.com" }],
        destination: "https://alexbancu.substack.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
