/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // ใช้สำหรับ static export
  basePath: '/NK_battery_web',  // ชื่อ repo
  assetPrefix: '/NK_battery_web/out/',  // เพิ่ม out/ เพื่อให้ตรงกับ GitHub Pages
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
