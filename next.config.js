const withTM = require('next-transpile-modules')(['unify-react-desktop', 'unify-token']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
