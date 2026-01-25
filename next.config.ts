import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://www.sakfasteners.com>; rel="canonical"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
