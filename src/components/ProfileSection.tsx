'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProfileSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            鈴木我信について
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative h-[500px] w-full md:w-[400px] mx-auto">
              {!imageError ? (
                <Image
                  src="/images/gashin-profile.png"
                  alt="鈴木我信"
                  fill
                  className="object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-64 h-64 rounded-full bg-accent/20 flex items-center justify-center text-6xl font-serif absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  鈴木
                </div>
              )}
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">
              障害を持つクリエイターとして
            </h3>
            <div className="space-y-4 text-white/90">
              <p>
                私は視覚障害を持ちながらも、テクノロジーの力で創造的な活動を続けています。
                幼い頃から宇宙に魅了され、その美しさと神秘を多くの人に伝えたいという思いから、
                宇宙映像制作を始めました。
              </p>
              <p>
                障害は時に制限となりますが、それを乗り越えるための技術開発や
                新しい表現方法の模索が、私のクリエイティブな原動力となっています。
              </p>
              <p>
                現在は宇宙映像制作、障害者支援アプリ開発、テクノロジーメディア運営など、
                多岐にわたる活動を通じて、障害の有無に関わらず誰もが創造性を発揮できる
                社会の実現を目指しています。
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="glass-morphism rounded-2xl px-4 py-3 text-center">
                <span className="block text-xl font-bold text-white mb-1">10+</span>
                <span className="text-white/70 text-sm">宇宙映像作品</span>
              </div>
              <div className="glass-morphism rounded-2xl px-4 py-3 text-center">
                <span className="block text-xl font-bold text-white mb-1">3+</span>
                <span className="text-white/70 text-sm">開発アプリ</span>
              </div>
              <div className="glass-morphism rounded-2xl px-4 py-3 text-center">
                <span className="block text-xl font-bold text-white mb-1">5+</span>
                <span className="text-white/70 text-sm">活動年数</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 