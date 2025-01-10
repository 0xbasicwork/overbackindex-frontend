/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/overbackindex',
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://45.76.10.9:3000/:path*'
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }
        ],
      },
    ];
  }
};

export default nextConfig; 