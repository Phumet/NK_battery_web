/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/NK_battery_web',
  assetPrefix: '/NK_battery_web/',
  images: {
    unoptimized: true, // ถ้าใช้ <Image> ให้ disable optimization
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
