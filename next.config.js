/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // เพื่อ build เป็น static HTML
  basePath: '',       // ไม่ต้องมี basePath สำหรับ Netlify
  assetPrefix: '',    // ไม่ต้องมี assetPrefix สำหรับ Netlify
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // ช่วยเวลา deploy
};

module.exports = nextConfig;
