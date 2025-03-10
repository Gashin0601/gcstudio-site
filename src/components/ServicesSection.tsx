'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'space-production',
    title: '宇宙映像制作',
    description: '宇宙の神秘と美しさを伝える映像コンテンツを制作。科学的正確さと芸術性を兼ね備えた作品で、宇宙への興味と理解を深めるきっかけを提供します。',
    image: '/images/space-production.jpg',
    color: 'neon-blue',
  },
  {
    id: 'visionsim',
    title: 'VisionSim',
    description: '様々な視覚障害の見え方をシミュレートするアプリ。健常者が視覚障害者の見え方を体験することで、相互理解とアクセシビリティの重要性を伝えます。',
    image: '/images/visionsimvisionsim.jpg',
    color: 'neon-green',
  },
  {
    id: 'visionassist',
    title: 'VisionAssist ALT',
    description: '視覚障害者向けの日常生活支援アプリ。AIを活用した画像認識と音声ガイダンスで、周囲の状況把握や情報アクセスをサポートします。',
    image: '/images/visionassist-alt.jpg',
    color: 'neon-pink',
  },
  {
    id: 'prot-news',
    title: 'Prot-News',
    description: 'テクノロジーとクリエイティブの融合を伝えるメディア。最新技術のトレンドや創造的な活用事例を、わかりやすく魅力的に発信しています。',
    image: '/images/prot-news.jpg',
    color: 'neon-blue',
  },
];

export default function ServicesSection() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const getColorClass = (color: string) => {
    switch(color) {
      case 'neon-blue': return 'text-accent';
      case 'neon-green': return 'text-neon-green';
      case 'neon-pink': return 'text-neon-pink';
      default: return 'text-accent';
    }
  };

  const getGlowClass = (color: string) => {
    switch(color) {
      case 'neon-blue': return 'shadow-glow-blue';
      case 'neon-green': return 'shadow-glow-green';
      case 'neon-pink': return 'shadow-glow-pink';
      default: return 'shadow-glow-blue';
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-dark">
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wider neon-text-blue">
            事業への想い
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="card rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-60 w-full bg-dark-bg/80">
                {!imageError[service.id] ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={() => setImageError(prev => ({ ...prev, [service.id]: true }))}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-lg">
                    {service.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/90 to-transparent"></div>
              </div>
              
              <div className="p-6 relative">
                {/* 装飾的なライン */}
                <div className="absolute top-0 left-6 right-6 h-px bg-accent/20"></div>
                
                <h3 className={`text-2xl font-serif font-bold mb-4 tracking-wide ${getColorClass(service.color)}`}>
                  {service.title}
                </h3>
                <p className="text-text-primary">
                  {service.description}
                </p>
                
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={`#${service.id}`} 
                    className={`inline-flex items-center ${getColorClass(service.color)} hover:${getGlowClass(service.color)} transition-all duration-300`}
                  >
                    詳細を見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 