/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true, // สำคัญ ป้องกัน CSS/JS not found
};

module.exports = nextConfig;
