/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 画像の最適化を無効にする
    domains: ['localhost'], // 必要に応じてドメインを追加
  },
};

module.exports = nextConfig; 