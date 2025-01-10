/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://45.76.10.9:3000/:path*',
        basePath: false
      }
    ];
  }
};

export default nextConfig; 