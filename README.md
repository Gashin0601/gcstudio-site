# 鈴木我信クリエイションズスタジオ - ウェブサイト

## 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [技術スタック](#技術スタック)
3. [プロジェクト構造](#プロジェクト構造)
4. [セットアップ手順](#セットアップ手順)
5. [開発ガイドライン](#開発ガイドライン)
6. [主要コンポーネント解説](#主要コンポーネント解説)
7. [ページ構成](#ページ構成)
8. [スタイリング](#スタイリング)
9. [デプロイメント](#デプロイメント)
10. [環境変数](#環境変数)
11. [トラブルシューティング](#トラブルシューティング)

## プロジェクト概要

このプロジェクトは、視覚障害を持つクリエイター鈴木我信のポートフォリオ兼情報発信サイトです。アクセシビリティを重視しつつ、美しいビジュアルと使いやすさを両立させることを目指しています。

### 主な機能

- レスポンシブデザイン
- ダークモード対応
- アクセシビリティ対応
- アニメーションエフェクト
- microCMS によるコンテンツ管理

## 技術スタック

- **フレームワーク**: Next.js 15.2.1
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **CMS**: microCMS
- **デプロイメント**: Vercel
- **その他の主要パッケージ**:
  - `@heroicons/react`: アイコン
  - `framer-motion`: アニメーション
  - `next-themes`: ダークモード管理

## プロジェクト構造

```
GashinCreationsStudio-Site/
├── src/
│   ├── app/                    # Next.js 13+ アプリケーションルート
│   │   ├── layout.tsx         # ルートレイアウト
│   │   ├── page.tsx          # トップページ
│   │   ├── profile/          # プロフィールページ
│   │   │   ├── layout.tsx    # プロフィール用レイアウト
│   │   │   └── page.tsx      # プロフィールページコンテンツ
│   │   └── services/         # サービスページ
│   ├── components/           # 共通コンポーネント
│   │   ├── Navigation.tsx    # ナビゲーションバー
│   │   ├── PageLayout.tsx    # 共通ページレイアウト
│   │   └── Footer.tsx        # フッター
│   ├── styles/              # スタイル関連ファイル
│   └── utils/               # ユーティリティ関数
├── public/                  # 静的ファイル
│   └── images/             # 画像ファイル
├── tailwind.config.js      # Tailwind CSS設定
├── next.config.js          # Next.js設定
└── package.json            # 依存関係管理
```

## セットアップ手順

1. リポジトリのクローン:

```bash
git clone [リポジトリURL]
cd GashinCreationsStudio-Site
```

2. 依存関係のインストール:

```bash
npm install
```

3. 環境変数の設定:
   `.env.local`ファイルを作成し、必要な環境変数を設定:

```
MICROCMS_SERVICE_DOMAIN=your_domain
MICROCMS_API_KEY=your_api_key
```

4. 開発サーバーの起動:

```bash
npm run dev
```

## 開発ガイドライン

### コンポーネント作成の原則

- コンポーネントは`src/components`ディレクトリに配置
- 各コンポーネントは単一責任の原則に従う
- TypeScript の型定義を適切に行う
- アクセシビリティに配慮したマークアップを使用

### コーディング規約

- ESLint と Prettier の設定に従う
- コンポーネントはアッパーキャメルケース
- ファイル名はコンポーネント名と一致させる
- 関数名は動詞で始める

## 主要コンポーネント解説

### PageLayout

共通レイアウトコンポーネント。全ページで使用される背景画像やレイアウト構造を提供します。

```typescript
interface PageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
```

### Navigation

ナビゲーションバーコンポーネント。レスポンシブ対応のヘッダーナビゲーションを提供します。

## ページ構成

### トップページ (`/`)

- サイトの概要
- 最新の活動情報
- サービス概要

### プロフィールページ (`/profile`)

- 経歴
- スキルと専門分野
- 創作への思い

### サービスページ (`/services`)

- 提供サービス一覧
- 料金プラン
- 実績紹介

## スタイリング

プロジェクトでは Tailwind CSS を使用し、以下のカスタマイズを行っています：

```javascript
// tailwind.config.js の主要な設定
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: "#00a0ff",
        "dark-blue": "#1a1a2e",
      },
    },
  },
};
```

## デプロイメント

Vercel を使用したデプロイメントを採用しています。

1. Vercel にプロジェクトを接続
2. 環境変数の設定
3. `main`ブランチへのプッシュで自動デプロイ

## 環境変数

必要な環境変数:

- `MICROCMS_SERVICE_DOMAIN`: microCMS のサービスドメイン
- `MICROCMS_API_KEY`: microCMS の API キー

## トラブルシューティング

### よくある問題と解決方法

1. ハイドレーションエラー

   - 原因: クライアントとサーバーのレンダリング結果の不一致
   - 解決: `suppressHydrationWarning`の使用または`useEffect`での初期化

2. ビルドエラー

   - 原因: TypeScript 型エラーや依存関係の問題
   - 解決: `npm run build`のエラーメッセージを確認し、該当箇所を修正

3. API エラー
   - 原因: 環境変数の未設定や不正な値
   - 解決: `.env.local`ファイルの確認と更新
