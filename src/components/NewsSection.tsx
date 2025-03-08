'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { client, type News } from '@/lib/microcms';

export default function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        // APIキーが設定されていない場合はエラーを表示
        if (!process.env.MICROCMS_API_KEY) {
          setError('MicroCMS APIキーが設定されていません。');
          setIsLoading(false);
          return;
        }
        
        const response = await client.get({
          endpoint: 'news',
          queries: { limit: 4 }
        });
        setNews(response.contents);
      } catch (err) {
        console.error('ニュースの取得に失敗しました:', err);
        setError('ニュースの取得に失敗しました。しばらくしてからお試しください。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

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
    <section id="news" className="py-20 relative overflow-hidden bg-dark-blue/30">
      {/* 背景テクスチャ */}
      <div className="absolute inset-0 noise-bg opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wider">
            最新ニュース
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 glass-morphism rounded-2xl">
            <p className="text-white/80">{error}</p>
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-8 glass-morphism rounded-2xl">
            <p className="text-white/80">現在、表示できるニュースはありません。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <motion.div 
                key={item.id}
                className="glass-morphism rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
              </motion.div>
            ))}
          </div>
        )}
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            href="/news"
            className="px-8 py-3 bg-accent/80 hover:bg-accent text-white backdrop-blur-md rounded-2xl shadow-xl inline-block transition-all duration-300 hover:scale-105"
          >
            すべてのニュースを見る
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 