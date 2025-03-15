import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '鈴木我信について - 詳細プロフィール',
  description: '視覚障害を持つクリエイター鈴木我信の詳細プロフィール。経歴、スキル、活動実績について詳しく紹介します。',
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 