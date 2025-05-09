/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = {
  reactStrictMode: true,
  // Other options if needed...
};

module.exports = withTM(nextConfig);
