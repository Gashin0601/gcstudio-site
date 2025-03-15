'use client';

import PageLayout from '@/components/PageLayout';

export default function ProfilePage() {
  return (
    <PageLayout
      title="鈴木我信について"
      description="視覚障害を持ちながらもテクノロジーの力を借りて創造的な活動を続けている
      クリエイターとしての詳しい経歴やスキル、思いについてご紹介します。"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-accent pl-4">
            経歴
          </h2>
          <div className="space-y-8">
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                <span className="text-accent">2018</span> - クリエイター活動開始
              </h3>
              <p className="text-white/80">
                視覚障害を抱えながらも、テクノロジーを活用した創作活動を開始。
                特に宇宙をテーマにした映像制作に強い関心を持ち、独自の表現方法を模索し始める。
              </p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                <span className="text-accent">2020</span> - 鈴木我信クリエイションズスタジオ設立
              </h3>
              <p className="text-white/80">
                個人の活動からスタジオとしての活動へと発展。宇宙映像制作を中心に、
                障害者支援アプリの開発も開始。バリアフリーな創造環境の構築を目指す。
              </p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">
                <span className="text-accent">2022</span> - メディア活動開始
              </h3>
              <p className="text-white/80">
                障害者のためのテクノロジー活用方法や創造的な表現方法についての
                情報発信を開始。講演活動やワークショップなども実施。
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-accent pl-4">
            スキルと専門分野
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">映像制作</h3>
              <p className="text-white/80 mb-4">
                宇宙をテーマにした映像作品の企画・制作。視覚障害に対応した
                制作ワークフローの確立と実践。
              </p>
              <div className="w-full bg-dark-blue/50 h-2 rounded-full">
                <div className="bg-accent h-full rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">アプリ開発</h3>
              <p className="text-white/80 mb-4">
                アクセシビリティに配慮したモバイルアプリ開発。
                特に視覚障害者のための支援ツール設計と実装。
              </p>
              <div className="w-full bg-dark-blue/50 h-2 rounded-full">
                <div className="bg-accent h-full rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">音声デザイン</h3>
              <p className="text-white/80 mb-4">
                視覚情報を音声で表現するための設計とデザイン。
                宇宙の神秘を音で表現する独自の手法開発。
              </p>
              <div className="w-full bg-dark-blue/50 h-2 rounded-full">
                <div className="bg-accent h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent">教育・指導</h3>
              <p className="text-white/80 mb-4">
                障害を持つクリエイターのための技術指導とメンタリング。
                創造性を引き出すワークショップのデザインと実施。
              </p>
              <div className="w-full bg-dark-blue/50 h-2 rounded-full">
                <div className="bg-accent h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-accent pl-4">
            創作への思い
          </h2>
          <div className="glass-morphism rounded-xl p-8">
            <blockquote className="text-xl text-white/90 italic font-serif leading-relaxed">
              "私の視覚障害は、世界を見る新しい方法を教えてくれました。制限があるからこそ、
              創造性はより強く、より深く育まれます。テクノロジーは単なる道具ではなく、
              私たちの可能性を拡張し、新しい表現の扉を開くための鍵です。
              <br /><br />
              私は自分の作品を通じて、障害の有無に関わらず、すべての人々が宇宙の神秘と
              美しさを体験できる世界を創造したいと考えています。それは視覚だけでなく、
              すべての感覚で感じることのできる、新しい体験の形です。"
            </blockquote>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 