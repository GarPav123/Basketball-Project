// next.config.ts
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Change this back to the original path
      },
    ];
  },
};
