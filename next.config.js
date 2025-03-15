/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 画像の最適化を無効にする
    domains: ['localhost'], // 必要に応じてドメインを追加
  },
  // suppressHydrationWarning を有効にする
  compiler: {
    styledComponents: true
  },
  // 実験的な機能は削除
};

module.exports = nextConfig; 