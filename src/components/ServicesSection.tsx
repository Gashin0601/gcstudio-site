'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BusinessMenuBar from './BusinessMenuBar';

// 各事業カテゴリを定義
const services = [
  {
    id: 'space-production',
    title: '宇宙映像制作',
    description: '宇宙の神秘と美しさを伝える映像コンテンツを制作。科学的正確さと芸術性を兼ね備えた作品で、宇宙への興味と理解を深めるきっかけを提供します。',
    image: '/images/space-production.jpg',
    color: 'neon-blue',
    longDescription: '私たちの宇宙映像制作は、科学的な事実に基づきながらも、芸術的な表現を大切にしています。天文学の最新知見を取り入れつつ、視覚障害者も楽しめるよう音響設計にもこだわった作品づくりを行っています。宇宙の壮大さと神秘を、誰もが感じられる形で伝えることが私たちの使命です。',
    features: [
      '最新の天文学データに基づく科学的正確性',
      '視覚障害者向けの音響ナレーション設計',
      '美しい映像表現と感動的なストーリーテリング',
      '教育機関での活用を想定したコンテンツ開発'
    ]
  },
  {
    id: 'prot-news',
    title: 'Prot-News',
    description: 'テクノロジーとクリエイティブの融合を伝えるメディア。最新技術のトレンドや創造的な活用事例を、わかりやすく魅力的に発信しています。',
    image: '/images/prot-news.jpg',
    color: 'accent',
    longDescription: 'Prot-Newsは、最先端のテクノロジーとクリエイティブの融合を伝えるメディアプラットフォームです。特に障害者支援技術やアクセシビリティに関する情報を中心に、誰もが理解しやすい形で発信しています。技術の進化がいかに人々の生活を豊かにするか、その可能性を探求しています。',
    features: [
      'アクセシビリティ技術の最新トレンド',
      'クリエイターのためのテクノロジーガイド',
      '障害者とテクノロジーの関わりに関する事例紹介',
      'インクルーシブデザインの実践例'
    ]
  },
  {
    id: 'app-development',
    title: 'アプリ開発',
    description: '視覚障害者支援を中心としたアプリケーション開発。使いやすさと機能性を兼ね備えたソリューションで、日常生活における障壁を取り除きます。',
    image: '/images/placeholder.jpg',
    color: 'neon-green',
    hasChildren: true,
    children: [
      {
        id: 'visionsim-app',
        title: 'VisionSim',
        description: '様々な視覚障害の見え方をシミュレートするアプリ。健常者が視覚障害者の見え方を体験することで、相互理解とアクセシビリティの重要性を伝えます。',
        image: '/images/visionsim.webp',
        color: 'neon-green',
        longDescription: 'VisionSimは、様々な視覚障害の見え方をリアルタイムでシミュレートするアプリケーションです。緑内障、白内障、網膜色素変性症など、多様な視覚障害の状態を体験できます。特に開発者やデザイナーがアクセシブルな製品を作るための理解促進ツールとして活用されています。',
        features: [
          '10種類以上の視覚障害シミュレーション',
          'リアルタイムカメラフィード対応',
          '教育機関や企業研修向けのプレゼンテーションモード',
          'アクセシビリティガイドラインとの連携'
        ]
      },
      {
        id: 'visionassist-app',
        title: 'VisionAssist ALT',
        description: '視覚障害者向けの日常生活支援アプリ。AIを活用した画像認識と音声ガイダンスで、周囲の状況把握や情報アクセスをサポートします。',
        image: '/images/visionassist-alt.jpg',
        color: 'neon-pink',
        longDescription: 'VisionAssist ALTは、視覚障害者の日常生活をサポートするためのAI搭載アプリケーションです。カメラで捉えた画像をリアルタイムで分析し、周囲の状況や物体を音声で説明します。テキスト認識機能も備えており、書類や表示の読み上げも可能です。ユーザーの自立と情報アクセシビリティの向上を目指しています。',
        features: [
          'リアルタイム物体認識と音声フィードバック',
          'OCR機能によるテキスト読み上げ',
          'ナビゲーション支援と障害物検知',
          'カスタマイズ可能な音声設定と使いやすいインターフェース'
        ]
      }
    ]
  }
];

export default function ServicesSection() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [expandedApp, setExpandedApp] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // 色クラスの取得
  const getColorClass = (color: string) => {
    switch(color) {
      case 'neon-blue': return 'text-accent';
      case 'neon-green': return 'text-neon-green';
      case 'neon-pink': return 'text-neon-pink';
      case 'accent': return 'text-accent';
      default: return 'text-accent';
    }
  };

  // 背景色クラスの取得
  const getBgColorClass = (color: string) => {
    switch(color) {
      case 'neon-blue': return 'from-accent/20 to-dark-blue/70';
      case 'neon-green': return 'from-neon-green/20 to-dark-blue/70';
      case 'neon-pink': return 'from-neon-pink/20 to-dark-blue/70';
      case 'accent': return 'from-accent/20 to-dark-blue/70';
      default: return 'from-accent/20 to-dark-blue/70';
    }
  };

  // アプリ開発セクションの展開/折りたたみを切り替える
  const toggleAppExpansion = (appId: string) => {
    console.log('トグル操作:', appId); // デバッグ用
    if (expandedApp === appId) {
      console.log('閉じる:', appId);
      setExpandedApp(null);
    } else {
      console.log('開く:', appId);
      setExpandedApp(appId);
    }
  };

  // 現在表示されているアプリの取得
  const getCurrentAppData = (appId: string | null) => {
    if (!appId) return null;
    const appDevelopment = services.find(s => s.id === 'app-development');
    if (!appDevelopment || !appDevelopment.children) return null;
    return appDevelopment.children.find(app => app.id === appId);
  };

  // スクロールに応じたセクションのアクティブ化
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.service-section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="relative overflow-hidden bg-dark-bg" ref={ref}>
      {/* BusinessMenuBarコンポーネントを追加 */}
      <BusinessMenuBar />
      
      {/* ヘッダー部分 - 最初のみ表示、BusinessMenuBarに置き換え */}
      <div className="py-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wider neon-text-blue">
            事業への想い
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent to-accent/30 mx-auto rounded-full"></div>
        </motion.div>
      </div>
        
      {/* 各事業セクション - 縦に並ぶ */}
      <div className="mt-16">
          {services.map((service, index) => (
          <div 
            key={service.id}
            id={service.id}
            className={`service-section min-h-screen py-20 flex items-center relative overflow-hidden ${
              index % 2 === 0 ? 'bg-dark-bg' : 'bg-dark-bg-2'
            }`}
          >
            {/* 背景効果 */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getBgColorClass(service.color)} opacity-10`}></div>
            <div className="absolute inset-0 noise-bg opacity-20"></div>
            
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 ${service.hasChildren ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center`}>
                {/* 画像セクション */}
            <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {!imageError[service.id] ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    onError={() => setImageError(prev => ({ ...prev, [service.id]: true }))}
                  />
                ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-dark-blue/50 text-white/70 text-2xl">
                    {service.title}
                  </div>
                )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
              </div>
              
                  {/* 装飾エフェクト */}
                  <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-full blur-3xl bg-accent/20 -z-10"></div>
                  <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full blur-3xl bg-accent/10 -z-10"></div>
                </motion.div>
                
                {/* テキストセクション */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="relative z-10">
                    <h3 className={`text-4xl font-serif font-bold mb-6 tracking-wide ${getColorClass(service.color)}`}>
                  {service.title}
                      <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mt-3"></div>
                </h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                      {service.longDescription || service.description}
                    </p>
                    
                    {/* 特徴リスト */}
                    {service.features && (
                      <div className="mt-8 mb-8">
                        <h4 className="text-xl font-medium mb-4 text-white/90">特徴</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
                              viewport={{ once: true }}
                            >
                              <span className="text-accent mr-2 mt-1">●</span>
                              <span className="text-white/80">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {!service.hasChildren && (
                <motion.div 
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <a 
                          href={`/services/${service.id}`} 
                          className={`inline-flex items-center px-6 py-3 rounded-lg border border-accent/30 
                            bg-gradient-to-r ${getBgColorClass(service.color)} backdrop-blur-sm 
                            hover:shadow-lg transition-all duration-300`}
                        >
                          詳細を見る
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </motion.div>
                    )}
                    
                    {/* アプリ開発の場合は子コンポーネントを展開する */}
                    {service.hasChildren && service.children && (
                      <div className="mt-12">
                        <motion.h4 
                          className="text-2xl font-medium mb-6 text-white flex items-center"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          開発アプリケーション
                          <div className="ml-3 h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                        </motion.h4>
                        
                        {/* アプリリスト */}
                        <div className="space-y-8">
                          {service.children.map((app) => {
                            return (
                              <div key={app.id} className="app-section" id={`app-${app.id}`}>
                                {/* アプリヘッダー部分 */}
                                <div 
                                  className="bg-dark-blue/30 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-white/20"
                                  onClick={() => toggleAppExpansion(app.id)}
                                >
                                  <div className="p-6 cursor-pointer flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className={`w-10 h-10 rounded-lg ${app.id === 'visionsim-app' ? 'bg-neon-green/20' : 'bg-neon-pink/20'} flex items-center justify-center mr-4`}>
                                        <span className={app.id === 'visionsim-app' ? 'text-neon-green' : 'text-neon-pink'}>App</span>
                                      </div>
                                      <h5 className={`text-xl font-medium ${app.id === 'visionsim-app' ? 'text-neon-green' : 'text-neon-pink'}`}>
                                        {app.title}
                                      </h5>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="text-white/60 text-sm mr-2 hidden md:inline">
                                        {expandedApp === app.id ? '閉じる' : '詳細を表示'}
                                      </span>
                                      <svg 
                                        className={`w-6 h-6 text-white/70 transition-transform duration-300 ${expandedApp === app.id ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24" 
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* 展開時の詳細コンテンツ */}
                                {expandedApp === app.id && (
                                  <motion.div 
                                    className="mt-4 bg-dark-blue/20 rounded-xl overflow-hidden border border-white/10 p-6"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    transition={{ duration: 0.4 }}
                                  >
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                      <div className="lg:col-span-1">
                                        <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                                          <div className="w-full h-full relative">
                                            <Image
                                              src={app.image}
                                              alt={app.title}
                                              fill
                                              unoptimized={true}
                                              className="object-cover"
                                              onError={() => {
                                                console.log(`画像読み込みエラー: ${app.id}, パス: ${app.image}`);
                                                setImageError(prev => ({ ...prev, [app.id]: true }));
                                              }}
                                            />
                                            {imageError[app.id] && (
                                              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-blue text-white">
                                                {app.id === 'visionsim-app' ? (
                                                  <>
                                                    <div className="text-6xl mb-4">VS</div>
                                                    <div className="text-xl">VisionSim</div>
                                                  </>
                                                ) : (
                                                  <>
                                                    <svg viewBox="0 0 100 100" className="w-24 h-24 mb-2">
                                                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                                                      <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2" />
                                                      <line x1="50" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="2" />
                                                    </svg>
                                                    <div className="text-xl">VisionAssist</div>
                                                  </>
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                        
                                        {/* デバッグ情報 */}
                                        <div className="mt-2 text-xs text-white/40">
                                          アプリID: {app.id}<br />
                                          画像パス: {app.image}
                                        </div>
                                      </div>
                                      
                                      <div className="lg:col-span-2">
                                        <h6 className="text-xl font-medium mb-3 text-white">{app.title}について</h6>
                                        <p className="text-white/80 mb-6">{app.longDescription || app.description}</p>
                                        
                                        {app.features && (
                                          <div className="mt-4 mb-6">
                                            <h6 className="text-lg font-medium mb-3 text-white/90">主な機能</h6>
                                            <ul className="space-y-2">
                                              {app.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                  <span className={app.id === 'visionsim-app' ? 'text-neon-green mr-2 mt-1 text-sm' : 'text-neon-pink mr-2 mt-1 text-sm'}>◆</span>
                                                  <span className="text-white/80 text-sm">{feature}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                        
                                        <div className="mt-6">
                                          <a 
                                            href={`/services/${app.id}`} 
                                            className={`inline-flex items-center px-4 py-2 rounded-lg border ${
                                              app.id === 'visionsim-app' ? 'border-neon-green/30 bg-neon-green/10 hover:bg-neon-green/20' : 'border-neon-pink/30 bg-neon-pink/10 hover:bg-neon-pink/20'
                                            } transition-all duration-300`}
                  >
                    詳細を見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* 下スクロールインジケーター（最後のセクション以外で表示） */}
            {index < services.length - 1 && (
              <motion.div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white/70 mb-2">スクロール</span>
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </motion.div>
            )}
          </div>
          ))}
      </div>
    </section>
  );
} 