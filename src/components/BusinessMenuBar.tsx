'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

// 各事業を定義
const businessItems = [
  { id: 'space-production', title: '宇宙映像制作', icon: '🪐' },
  { id: 'prot-news', title: 'Prot-News', icon: '📰' },
  { id: 'app-development', title: 'アプリ開発', icon: '📱' },
];

export default function BusinessMenuBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

  // Intersection Observerを使用して事業セクションの表示状態を検出
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10%表示されたら検出
    );

    const sectionElement = document.getElementById('services');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // スクロール位置の検出とアクティブな事業アイテムの設定
  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible) return;

      // スクロール進捗率の計算（0〜1）
      const sectionElement = document.getElementById('services');
      if (sectionElement) {
        const { top, height } = sectionElement.getBoundingClientRect();
        const progress = Math.min(Math.max(-top / (height - window.innerHeight), 0), 1);
        setScrollProgress(progress);

        // タイトルサイズの調整（スクロールに応じて小さくする）
        if (titleRef.current) {
          const scale = Math.max(1 - progress * 0.4, 0.6); // 最小で60%まで縮小
          titleRef.current.style.transform = `scale(${scale})`;
          titleRef.current.style.opacity = `${Math.max(1 - progress * 0.5, 0.5)}`; // 最小で50%の透明度
        }
      }

      // アクティブなセクションの検出
      const sections = document.querySelectorAll('.service-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveItem(id);
        }
      });
    };

    // スクロールイベントを最適化（スロットル処理）
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, [isVisible]);

  // メニューの表示制御
  useEffect(() => {
    if (isVisible) {
      controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.3, ease: 'easeOut' }
      });
    } else {
      controls.start({ 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.2, ease: 'easeIn' }
      });
    }
  }, [isVisible, controls]);

  // スムーズスクロール処理
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 固定メニューバー */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: -20 }}
        className="fixed top-20 left-0 right-0 z-40 pointer-events-none"
      >
        <div className="container mx-auto px-4">
          <div className="bg-dark-blue/80 backdrop-blur-md border-b border-accent/20 rounded-t-xl shadow-lg p-2 pointer-events-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* タイトル部分 - スクロールに応じてサイズ変更 */}
              <h2 
                ref={titleRef}
                className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-accent mb-4 md:mb-0 transition-transform duration-300"
              >
                事業への想い
              </h2>
              
              {/* メニュー項目 - 元のデザインに近いフラットなスタイル */}
              <div className="flex items-center justify-center w-full md:w-auto space-x-0">
                {businessItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      py-3 px-4 md:px-8 transition-all duration-300 relative
                      ${index === 0 ? 'rounded-l-lg' : ''}
                      ${index === businessItems.length - 1 ? 'rounded-r-lg' : ''}
                      ${activeItem === item.id
                        ? 'bg-dark-blue/50 text-accent'
                        : 'bg-transparent text-white/70 hover:text-white hover:bg-dark-blue/30'}
                    `}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <span className="text-xl md:text-base md:mr-2">{item.icon}</span>
                      <span className="text-sm md:text-base">{item.title}</span>
                    </div>
                    {/* アクティブな項目の下線 */}
                    {activeItem === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* プログレスバー - 事業セクション全体のスクロール進捗を示す */}
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 h-1 bg-accent/20 z-40">
          <div 
            className="h-full bg-accent transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      )}
    </>
  );
} 