// このページを動的にレンダリングするための設定
export const dynamic = 'force-dynamic';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getClient } from '@/lib/microcms';
import Link from 'next/link';

export default async function NewsPage() {
  // サーバーサイドでニュースを取得
  let news = [];
  let error = null;

  try {
    const client = getClient();
    if (client) {
      const response = await client.get({
        endpoint: 'news',
      });
      news = response.contents;
    } else {
      error = 'MicroCMSクライアントが初期化できませんでした。';
    }
  } catch (err) {
    console.error('ニュースの取得に失敗しました:', err);
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

  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-wider text-center">
          ニュース
        </h1>
        
        {error ? (
          <div className="text-center py-8 glass-morphism rounded-2xl">
            <p className="text-white/80">{error}</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-8 glass-morphism rounded-2xl">
            <p className="text-white/80">現在、表示できるニュースはありません。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item: any) => (
              <div 
                key={item.id}
                className="glass-morphism rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="p-6">
                  <div className="text-accent text-sm mb-2">
                    {formatDate(item.publishedAt)}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <div className="text-white/80 line-clamp-3 mb-4">
                    {item.content.replace(/<[^>]*>/g, '')}
                  </div>
                  <Link 
                    href={`/news/${item.id}`}
                    className="inline-flex items-center text-white hover:text-accent transition-colors duration-300"
                  >
                    続きを読む
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
} 