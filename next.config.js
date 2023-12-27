/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.ts
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: '/src/app/api/:path*', // Adjust the path accordingly
        },
      ];
    },
  };
  
  