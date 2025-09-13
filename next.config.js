/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/NK_battery_web',   // ชื่อ repo
  assetPrefix: '/NK_battery_web/', // บังคับให้โหลดไฟล์จาก path นี้
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
