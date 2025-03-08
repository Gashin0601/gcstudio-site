import { createClient } from 'microcms-js-sdk';

// 環境変数が設定されている場合のみクライアントを作成
const createMicroCMSClient = () => {
  const serviceDomain = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;
  
  if (!serviceDomain || !apiKey) {
    console.warn('MicroCMS credentials are not set properly');
    return null;
  }
  
  return createClient({
    serviceDomain,
    apiKey,
  });
};

export const client = createMicroCMSClient() || {
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