/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://45.76.10.9:3000',
        basePath: true
      }
    ];
  }
};

export default nextConfig; 