'use client';

import { useEffect } from 'react';

export default function Error({
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
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
      <p className="mb-6 text-white/80">
        申し訳ありませんが、予期せぬエラーが発生しました。
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-accent/80 hover:bg-accent text-white rounded-xl transition-colors"
      >
        再試行する
      </button>
    </div>
  );
} 