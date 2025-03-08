# Gashin Creations Studio 公式ウェブサイト

このリポジトリは、Gashin Creations Studio の公式ウェブサイトのソースコードを管理しています。Next.js 15 と Tailwind CSS を使用して構築されています。

## 技術スタック

- [Next.js 15](https://nextjs.org/) - React フレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSS フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型付き JavaScript
- [MicroCMS](https://microcms.io/) - ヘッドレス CMS

## 開発環境のセットアップ

プロジェクトをクローンした後、以下の手順で開発環境をセットアップしてください。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは通常 http://localhost:3000 で起動します。

## 環境変数

このプロジェクトでは、MicroCMS への接続に環境変数が必要です。`.env.local`ファイルをプロジェクトのルートディレクトリに作成し、以下の変数を設定してください。

```
MICROCMS_API_KEY=あなたのAPIキー
MICROCMS_SERVICE_DOMAIN=あなたのサービスドメイン
```

## プロジェクト構造

```
/
├── public/           # 静的ファイル
│   └── images/       # 画像ファイル
├── src/
│   ├── app/          # Next.jsのアプリケーションディレクトリ
│   ├── components/   # Reactコンポーネント
│   └── lib/          # ユーティリティ関数とAPIクライアント
├── .env.local        # 環境変数（Gitで追跡されていません）
└── README.md         # このファイル
```

## デプロイ

このプロジェクトは、Vercel にデプロイすることをお勧めします。Vercel へのデプロイ方法については、[Vercel のドキュメント](https://vercel.com/docs)を参照してください。

## 連絡先

質問や提案がある場合は、Gashin Creations Studio までお問い合わせください。
