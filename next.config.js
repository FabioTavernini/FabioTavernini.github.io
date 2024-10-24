/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/Home',
          destination: '/',
          permanent: true, // Set to true for a 308 Permanent Redirect, false for a 307 Temporary Redirect
        }
      ];
    },
  };
  
  module.exports = nextConfig;