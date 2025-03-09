import { createClient } from 'microcms-js-sdk';

// Next.js App Routerでサーバーコンポーネントからと、クライアントコンポーネントから両方使えるように実装
// シングルトンパターンでクライアントを作成
let cachedClient: ReturnType<typeof createMicroCMSClient> | null = null;

const createMicroCMSClient = () => {
  // サーバーサイドではプロセス環境変数を直接使用
  // クライアントサイドでは NEXT_PUBLIC_ プレフィックス付きの環境変数を使用
  const serviceDomain = 
    typeof window === 'undefined' 
      ? process.env.MICROCMS_SERVICE_DOMAIN || process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN
      : process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
  
  const apiKey = 
    typeof window === 'undefined'
      ? process.env.MICROCMS_API_KEY || process.env.NEXT_PUBLIC_MICROCMS_API_KEY
      : process.env.NEXT_PUBLIC_MICROCMS_API_KEY;
  
  console.log('MicroCMS環境変数確認: ', {
    環境: typeof window === 'undefined' ? 'サーバーサイド' : 'クライアントサイド',
    serviceドメイン名: serviceDomain ? '設定済み' : '未設定',
    APIキー: apiKey ? '設定済み' : '未設定',
  });
  
  if (!serviceDomain || !apiKey) {
    console.warn('MicroCMS credentials are not set properly');
    return null;
  }
  
  return createClient({
    serviceDomain,
    apiKey,
  });
};

// シングルトンパターンでクライアントを取得
export const getClient = () => {
  if (cachedClient) return cachedClient;
  
  cachedClient = createMicroCMSClient();
  return cachedClient;
};

// 下位互換性のために従来のクライアントもエクスポート
export const client = getClient() || {
  get: async () => ({ contents: [], totalCount: 0, offset: 0, limit: 10 }),
};

export type News = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  revisedAt: string;
  updatedAt: string;
};

export type NewsResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
}; 