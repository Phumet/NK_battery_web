/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // ใช้สำหรับ static export
  basePath: '/NK_battery_web',  // ชื่อ repo
  assetPrefix: '/NK_battery_web/',  // ใช้สำหรับ static assets
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
