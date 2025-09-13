/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // บังคับ static export
  images: {
    unoptimized: true, // ถ้าใช้ <Image> ให้ disable optimization
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
