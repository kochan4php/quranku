/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    largePageDataBytes: 128 * 1000000,
  },
};

module.exports = nextConfig;
