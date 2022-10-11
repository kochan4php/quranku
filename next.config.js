/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    largePageDataBytes: 128 * 10000000,
  },
};

module.exports = nextConfig;
