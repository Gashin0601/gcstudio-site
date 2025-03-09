'use client';

import { motion } from 'framer-motion';
import DetailButton from './common/DetailButton';

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 relative overflow-hidden bg-dark-blue/50">
      {/* 背景テクスチャ */}
      <div className="absolute inset-0 noise-bg opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wider">
            自身の障害から描く未来
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* 装飾的なライン */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
            
            <div className="space-y-12 pl-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-accent/30 border border-accent/50 backdrop-blur-sm"></div>
                <h3 className="text-2xl font-serif font-bold mb-4 tracking-wide">
                  障害を超えるテクノロジー
                </h3>
                <p className="text-white/80">
                  私自身の視覚障害の経験から、テクノロジーが持つ可能性を強く信じています。
                  適切な技術とツールがあれば、障害は創造性や表現力の妨げにはなりません。
                  むしろ、新しい視点や独自の表現方法を生み出す源泉となります。
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-accent/30 border border-accent/50 backdrop-blur-sm"></div>
                <h3 className="text-2xl font-serif font-bold mb-4 tracking-wide">
                  インクルーシブなデザイン
                </h3>
                <p className="text-white/80">
                  すべての人が使いやすく、楽しめるデザインを追求しています。
                  障害の有無に関わらず、誰もが直感的に理解でき、
                  心地よく使えるプロダクトやコンテンツを制作することで、
                  より多くの人々に創造と表現の喜びを届けたいと考えています。
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-accent/30 border border-accent/50 backdrop-blur-sm"></div>
                <h3 className="text-2xl font-serif font-bold mb-4 tracking-wide">
                  創造性の民主化
                </h3>
                <p className="text-white/80">
                  テクノロジーの進化により、創造的な表現はより多くの人々に開かれたものになっています。
                  私のスタジオでは、障害者や技術的なハードルを感じている人々が
                  自分自身の創造性を発見し、表現できるよう支援するツールや
                  コンテンツの開発に取り組んでいます。
                </p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-xl text-white/90 italic font-serif">
              "障害は制限ではなく、新たな可能性の入り口である"
            </p>
          </motion.div>
          
          {/* 詳しく見るボタン */}
          <DetailButton href="/future-vision" />
        </div>
      </div>
    </section>
  );
} 