import type { Metadata } from 'next';
import './globals.css';
import CursorEffect from '@/components/CursorEffect';

export const metadata: Metadata = {
  title: 'GC Studio | 宇宙・VR・メディア',
  description: '障害を持つクリエイター 鈴木我信のクリエイションスタジオ。宇宙映像制作、障害者支援アプリ開発、テクノロジーメディア運営など、多岐に渡る創造活動を展開しています。',
  keywords: '鈴木我信, 宇宙映像, VisionSim, VisionAssist ALT, Prot-News, 視覚障害, クリエイター',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        <CursorEffect />
        {children}
      </body>
    </html>
  );
} 