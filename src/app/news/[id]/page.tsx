// このページを動的にレンダリングするための設定
export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getClient } from '@/lib/microcms';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const client = getClient();
    if (!client) {
      return {
        title: `ニュース詳細 - 鈴木我信クリエイションズスタジオ`,
        description: '鈴木我信クリエイションズスタジオのニュース詳細ページです。',
      };
    }

    const news = await client.get({
      endpoint: 'news',
      contentId: params.id,
    });

    return {
      title: `${news.title} - 鈴木我信クリエイションズスタジオ`,
      description: news.content.replace(/<[^>]*>/g, '').substring(0, 160),
    };
  } catch (error) {
    return {
      title: `ニュース詳細 - 鈴木我信クリエイションズスタジオ`,
      description: '鈴木我信クリエイションズスタジオのニュース詳細ページです。',
    };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  let news = null;
  let error = null;
  
  try {
    const client = getClient();
    if (!client) {
      error = 'MicroCMSクライアントが初期化できませんでした。';
    } else {
      news = await client.get({
        endpoint: 'news',
        contentId: params.id,
      });
    }
  } catch (err) {
    console.error('ニュースの取得に失敗しました:', err);
    if ((err as any).response?.status === 404) {
      notFound();
    }
    error = 'ニュースの取得に失敗しました。';
  }

  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  if (!news && !error) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        {error ? (
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-wider">
              エラー
            </h1>
            <div className="glass-morphism rounded-2xl p-8 mb-8">
              <p className="text-white/80">{error}</p>
            </div>
          </div>
        ) : news ? (
          <article>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wider text-center">
              {news.title}
            </h1>
            <div className="text-center text-accent mb-12">
              {formatDate(news.publishedAt)}
            </div>
            <div className="glass-morphism rounded-2xl p-8 mb-8">
              <div 
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            </div>
          </article>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-wider">
              ニュースが見つかりません
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
} 