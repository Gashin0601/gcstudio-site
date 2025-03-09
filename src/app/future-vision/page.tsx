import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'どんな未来を創るか - 鈴木我信クリエイションズスタジオ',
  description: '鈴木我信の描く未来ビジョンとテクノロジーを通じた社会貢献の方向性について詳しく紹介します。',
};

export default function FutureVisionPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-28 relative overflow-hidden">
        {/* 背景テクスチャ */}
        <div className="absolute inset-0 noise-bg opacity-20"></div>
        <div className="absolute inset-0 bg-stars-animation opacity-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-wider">
              どんな未来を創るか
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              テクノロジーと人間の創造性が調和した社会を目指して、
              私たちが描く未来のビジョンと具体的な取り組みをご紹介します。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-accent pl-4">
                2030年に向けたビジョン
              </h2>
              <div className="glass-morphism rounded-xl p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-accent">
                    全ての人が創造者になれる社会
                  </h3>
                  <p className="text-white/90">
                    2030年までに、障害の有無や専門知識の有無に関わらず、
                    誰もが自分のアイデアを形にできる創造的な環境を構築します。
                    支援技術の開発と普及、教育プログラムの提供を通じて、
                    創造の民主化を推進します。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-accent">
                    多感覚的な宇宙体験の実現
                  </h3>
                  <p className="text-white/90">
                    視覚だけに頼らない、音や触覚、場合によっては香りなども
                    活用した宇宙体験のデザインを確立します。これにより、
                    様々な感覚特性を持つ人々が宇宙の神秘を体感できる
                    新しいエンターテインメントの形を創造します。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-accent">
                    創造的コミュニティの形成
                  </h3>
                  <p className="text-white/90">
                    障害を持つクリエイターと様々な分野の専門家が
                    協働するコミュニティを形成し、革新的なアイデアと
                    ソリューションを生み出す土壌を作ります。
                    多様性が新しい創造を生み出す環境づくりを目指します。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-accent pl-4">
                具体的なプロジェクト構想
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-morphism rounded-xl p-6 relative overflow-hidden h-full">
                  <div className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-accent/20 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">
                    触れる宇宙・聴く宇宙
                  </h3>
                  <p className="text-white/80 relative z-10">
                    宇宙の天体や現象を触覚と音声で体験できるインタラクティブな
                    展示コンテンツを開発。美術館や科学館と連携し、新しい
                    宇宙体験を多くの人々に提供します。
                  </p>
                </div>
                
                <div className="glass-morphism rounded-xl p-6 relative overflow-hidden h-full">
                  <div className="absolute -left-12 -bottom-12 w-24 h-24 rounded-full bg-accent/20 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">
                    バリアフリー創作ツール
                  </h3>
                  <p className="text-white/80 relative z-10">
                    障害のある人でも直感的に使える映像制作・音楽制作
                    ツールの開発と公開。AIを活用したアシスタント機能で
                    創作のハードルを大幅に下げます。
                  </p>
                </div>
                
                <div className="glass-morphism rounded-xl p-6 relative overflow-hidden h-full">
                  <div className="absolute -right-12 -bottom-12 w-24 h-24 rounded-full bg-accent/20 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">
                    クリエイター育成プログラム
                  </h3>
                  <p className="text-white/80 relative z-10">
                    障害のある若者を対象とした創作活動支援と技術指導の
                    教育プログラムを展開。オンラインとオフラインを
                    組み合わせた継続的な学びの場を提供します。
                  </p>
                </div>
                
                <div className="glass-morphism rounded-xl p-6 relative overflow-hidden h-full">
                  <div className="absolute -left-12 -top-12 w-24 h-24 rounded-full bg-accent/20 blur-2xl"></div>
                  <h3 className="text-xl font-bold mb-4 relative z-10">
                    宇宙アクセシビリティ研究所
                  </h3>
                  <p className="text-white/80 relative z-10">
                    宇宙科学の知識や体験をどのようにすれば
                    あらゆる人々にアクセシブルにできるかを研究する
                    専門チームを設立。研究成果を広く社会に還元します。
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-accent pl-4">
                社会変革への思い
              </h2>
              <div className="glass-morphism rounded-xl p-8">
                <blockquote className="text-xl text-white/90 italic font-serif leading-relaxed">
                  "私たちが目指すのは、テクノロジーを通じて人々の潜在能力を解放し、
                  すべての人が創造的な自己表現を楽しめる社会です。障害は個人の問題ではなく、
                  社会のデザインの問題です。適切なツールと環境があれば、誰もが創造者に
                  なることができます。
                  <br /><br />
                  特に宇宙という、人類共通の夢と好奇心の対象をテーマに、
                  様々な感覚特性を持つ人々が共有できる新しい体験を創造することで、
                  より包括的で創造的な社会の実現に貢献していきたいと考えています。"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 