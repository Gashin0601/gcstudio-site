import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-wider">
          404 - ページが見つかりません
        </h2>
        <p className="mb-8 text-white/80 max-w-lg mx-auto">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-accent/80 hover:bg-accent text-white backdrop-blur-md rounded-2xl shadow-xl inline-block transition-all duration-300 hover:scale-105"
        >
          ホームに戻る
        </Link>
      </div>
      <Footer />
    </main>
  );
} 