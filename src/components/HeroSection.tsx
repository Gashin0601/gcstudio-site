'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <Image
            src="/images/hero-bg.jpg"
            alt="宇宙の星雲"
            fill
            className="object-cover"
            priority
            quality={90}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-blue via-accent/20 to-dark-blue/90"></div>
        )}
        <div className="absolute inset-0 bg-dark-blue/50 backdrop-blur-sm"></div>
      </div>
      
      {/* コンテンツ */}
      <div className="container relative z-10 px-4 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
        >
          鈴木我信<span className="hidden sm:inline">クリエイションズスタジオ</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.2,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
        >
          障害を乗り越え、<span className="text-white font-normal">宇宙・VR・テクノロジー</span>を探求する<br className="hidden md:block" />
          クリエイティブスタジオ
        </motion.p>

        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.4,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
        >
          <a 
            href="#about" 
            className="px-8 py-3 bg-accent/80 hover:bg-accent text-white backdrop-blur-md rounded-2xl shadow-xl inline-block transition-all duration-300 hover:scale-105"
          >
            詳細を見る
          </a>
        </motion.div>

        {/* スクロールダウンアニメーション */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
} 