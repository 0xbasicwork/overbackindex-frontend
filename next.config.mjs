/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig; 