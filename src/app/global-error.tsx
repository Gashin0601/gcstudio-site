'use client';

import { useEffect } from 'react';
import './globals.css';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ja">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center bg-dark-blue">
          <h2 className="text-2xl font-bold mb-4 text-white">グローバルエラーが発生しました</h2>
          <p className="mb-6 text-white/80">
            申し訳ありませんが、致命的なエラーが発生しました。
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-accent/80 hover:bg-accent text-white rounded-xl transition-colors"
          >
            再試行する
          </button>
        </div>
      </body>
    </html>
  );
} 