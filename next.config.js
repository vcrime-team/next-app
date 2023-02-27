const withTM = require('next-transpile-modules')(['unify-react-desktop', 'unify-token', 'unify-icons']);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
