/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://45.76.10.9:3000',
        basePath: false
      }
    ];
  }
};

export default nextConfig; 