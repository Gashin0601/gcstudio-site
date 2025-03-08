'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* 背景テクスチャ */}
      <div className="absolute inset-0 noise-bg opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 tracking-wider">
              お問い合わせ・SNS
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="glass-morphism rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">
                X（Twitter）でフォロー
              </h3>
              <p className="text-white/80 mb-6">
                最新情報や日々の活動、思考などをXで発信しています。
                フォローして、クリエイティブな旅に参加しませんか？
              </p>
              <a 
                href="https://twitter.com/GshinSuzuki" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-white rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                @GshinSuzuki をフォロー
              </a>
            </motion.div>
            
            <motion.div 
              className="glass-morphism rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-serif font-bold mb-6 tracking-wide">
                お問い合わせ
              </h3>
              <p className="text-white/80 mb-6">
                お仕事のご依頼、コラボレーションのご提案、
                その他ご質問などがございましたら、
                下記のフォームからお気軽にお問い合わせください。
              </p>
              <a 
                href="https://forms.gle/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-accent/80 hover:bg-accent text-white rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                お問い合わせフォームへ
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-white/70 italic">
              "テクノロジーと創造性の融合で、新しい可能性を共に探求しましょう"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 