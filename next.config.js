/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://45.76.10.9:3000/:path*'
      }
    ];
  }
};

module.exports = nextConfig; 