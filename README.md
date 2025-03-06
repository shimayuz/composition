# Composition Website

このリポジトリは、合同会社コンポジションの公式ウェブサイトのソースコードです。

## 技術スタック

- **フレームワーク**: Next.js 14
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel

## 特徴

- モダンなデザイン
- レスポンシブデザイン
- サーバーサイドレンダリング（SSR）
- 画像最適化
- フォーム処理

## 開発ガイド

### 必要条件

- Node.js 18.17.0以上
- npm 9.6.0以上

### インストールと実行

```bash
# リポジトリのクローン
git clone https://github.com/your-username/composition-website.git
cd composition-website

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### ビルドとデプロイ

```bash
# 本番用ビルド
npm run build

# ビルドの確認
npm run start
```

## プロジェクト構造

```
composition-website/
├── public/           # 静的ファイル
│   └── images/       # 画像ファイル
├── src/              # ソースコード
│   ├── app/          # App Router
│   ├── components/   # コンポーネント
│   └── lib/          # ユーティリティ関数
└── ...               # 設定ファイル
```

## ライセンス

© 2025 Composition Inc. All rights reserved.