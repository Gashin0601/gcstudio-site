import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-wider text-center">
          鈴木我信について
        </h1>
        <p className="text-center text-white/80 mb-16">
          このページは準備中です。詳細は近日公開予定です。
        </p>
      </div>
      <Footer />
    </main>
  );
} 