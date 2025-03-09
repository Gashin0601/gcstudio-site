'use client';

import { motion } from 'framer-motion';
import DetailButton from './common/DetailButton';

export default function FutureVisionSection() {
  return (
    <section id="future-vision" className="py-20 relative overflow-hidden bg-gradient-to-b from-dark-blue/20 to-dark-blue/40">
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
            どんな未来を創るか
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-stars-animation w-full h-full"></div>
            </div>
            <div className="absolute -z-10 inset-0 bg-accent/20 rounded-2xl blur-3xl transform scale-90"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">
              テクノロジーと創造性の融合で描く未来
            </h3>
            <div className="space-y-4 text-white/90">
              <p>
                私が目指すのは、テクノロジーと人間の創造性が調和した社会です。
                障害を持つ人々も、技術的な知識が少ない人々も、自分の創造性を
                十分に発揮できる環境を作りたいと考えています。
              </p>
              <p>
                特に宇宙をテーマにした表現活動では、視覚障害者でも楽しめる
                新しい体験の形を模索し続けています。音や触覚、時には香りなども
                活用した多感覚的な宇宙体験を創造し、宇宙の神秘と美しさを
                より多くの人々に届けたいと願っています。
              </p>
            </div>
            
            {/* 詳しく見るボタン */}
            <DetailButton href="/future-vision" text="ビジョンの詳細を見る" />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 