/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://45.76.10.9:3000/',
        basePath: false
      }
    ];
  }
};

export default nextConfig; 