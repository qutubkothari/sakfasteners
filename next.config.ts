import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sakfasteners.com',
      },
    ],
    localPatterns: [
      {
        pathname: '/hero/products.gif',
        search: '',
      },
    ],
  },
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
