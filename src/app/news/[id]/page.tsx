import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `ニュース詳細 - ${params.id} - 鈴木我信クリエイションズスタジオ`,
    description: '鈴木我信クリエイションズスタジオのニュース詳細ページです。',
  };
}

export default function NewsDetailPage({ params }: Props) {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-wider text-center">
          ニュース詳細
        </h1>
        <p className="text-center text-white/80 mb-4">
          ID: {params.id}
        </p>
        <p className="text-center text-white/80 mb-16">
          このページは準備中です。詳細は近日公開予定です。
        </p>
      </div>
      <Footer />
    </main>
  );
} 