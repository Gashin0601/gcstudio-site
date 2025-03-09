# Gashin Creations Studio 公式ウェブサイト

このリポジトリは、Gashin Creations Studio の公式ウェブサイトのソースコードを管理しています。Next.js 15 と Tailwind CSS を使用して構築された、モダンでアクセシブルなウェブサイトです。

## 目次

1. [概要](#概要)
2. [技術スタック](#技術スタック)
3. [機能](#機能)
4. [開発環境のセットアップ](#開発環境のセットアップ)
5. [環境変数の設定](#環境変数の設定)
6. [プロジェクト構造](#プロジェクト構造)
7. [開発ガイドライン](#開発ガイドライン)
8. [デプロイ](#デプロイ)
9. [アクセシビリティ](#アクセシビリティ)
10. [連絡先](#連絡先)

## 概要

Gashin Creations Studio の公式ウェブサイトは、クリエイティブな活動と技術革新を融合させ、誰もが創作活動に参加できる未来を目指すプラットフォームです。視覚障害を持つクリエイター鈴木我信の経験と視点を活かし、アクセシビリティを重視したデザインと実装を特徴としています。

## 技術スタック

- [Next.js 15](https://nextjs.org/) - React ベースのフレームワーク
  - App Router によるファイルベースのルーティング
  - サーバーサイドレンダリング（SSR）とスタティックサイト生成（SSG）
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファースト CSS フレームワーク
  - カスタムカラーとアニメーション
  - レスポンシブデザイン
- [TypeScript](https://www.typescriptlang.org/) - 静的型付け JavaScript
- [MicroCMS](https://microcms.io/) - API ベースのヘッドレス CMS
  - ニュース記事の管理
  - コンテンツの動的更新
- [Framer Motion](https://www.framer.com/motion/) - アニメーションライブラリ

## 機能

- 🏠 レスポンシブなホームページ

  - ヒーローセクション
  - プロフィール紹介
  - サービス一覧
  - ニュースセクション
  - ビジョンと未来像
  - お問い合わせフォーム

- 📰 ニュース機能

  - MicroCMS と連携した記事管理
  - カテゴリー別表示
  - 詳細ページ

- 👤 プロフィールページ

  - 経歴紹介
  - スキルセット
  - 活動実績

- 🎯 ビジョンページ
  - 未来構想の詳細
  - プロジェクト計画
  - 社会貢献への思い

## 開発環境のセットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは通常 http://localhost:3000 で起動します。
ポート 3000 が使用中の場合、自動的に別のポート（3001, 3002, ...）が使用されます。

## 環境変数の設定

1. プロジェクトのルートディレクトリに`.env.local`ファイルを作成
2. 以下の環境変数を設定：

```
MICROCMS_API_KEY=あなたのAPIキー
MICROCMS_SERVICE_DOMAIN=あなたのサービスドメイン
```

## プロジェクト構造

```
/
├── public/           # 静的ファイル
│   ├── images/      # 画像ファイル
│   └── fonts/       # フォントファイル
├── src/
│   ├── app/         # Next.jsのアプリケーションディレクトリ
│   │   ├── page.tsx        # ホームページ
│   │   ├── layout.tsx      # ルートレイアウト
│   │   ├── about/         # プロフィールページ
│   │   ├── news/          # ニュースページ
│   │   ├── services/      # サービスページ
│   │   ├── future-vision/ # 未来ビジョンページ
│   │   └── contact/       # お問い合わせページ
│   ├── components/  # Reactコンポーネント
│   │   ├── common/        # 共通コンポーネント
│   │   └── sections/      # セクションコンポーネント
│   └── lib/         # ユーティリティ関数とAPIクライアント
├── styles/          # グローバルスタイル
├── types/           # TypeScript型定義
└── README.md        # このファイル
```

## 開発ガイドライン

- コンポーネントは機能単位で分割し、再利用可能な形で実装
- TypeScript の型定義を適切に行い、型安全性を確保
- アクセシビリティガイドラインに従った実装
- レスポンシブデザインの考慮
- パフォーマンス最適化

## デプロイ

このプロジェクトは[Vercel](https://vercel.com)へのデプロイを推奨します。

1. Vercel アカウントを作成
2. GitHub リポジトリと連携
3. 環境変数を設定
4. デプロイを実行

## アクセシビリティ

このウェブサイトは、以下のアクセシビリティ機能を実装しています：

- WAI-ARIA ガイドラインに準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応
- 十分なコントラスト比の確保
- 代替テキストの提供
- フォーカス可視化

## 連絡先

- 📧 メール: contact@example.com
- 🌐 ウェブサイト: https://example.com
- 📱 Twitter: @example

ご質問やご提案がございましたら、お気軽にお問い合わせください。
