/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/overbackindex/api/:path*',
          destination: 'http://45.76.10.9:3000/api/:path*',
        },
        {
          source: '/overbackindex/widget',
          destination: 'http://45.76.10.9:3000/widget',
        },
      ],
    }
  },
  reactStrictMode: true,
  images: {
    domains: ['sobackitsover.xyz'],
  },
} 