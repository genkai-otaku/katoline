# katoline

Astro + TailwindCSS で構築されたシンプルでモダンなプロフィールサイトです。

## ✨ 特徴

- 🎨 **ライト/ダークモード対応** - テーマ切り替え機能付き
- 📱 **レスポンシブデザイン** - モバイル・タブレット・デスクトップに対応
- ⚡ **高速なパフォーマンス** - Astro の静的サイト生成による最適化
- 🎯 **シンプルな構成** - 必要最小限の機能で軽量

## 🚀 セットアップ

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動（デフォルト: http://localhost:4321）
pnpm dev
```

### ビルド

```bash
# 本番用ビルド
pnpm build

# ビルド結果のプレビュー
pnpm preview
```

## 📁 プロジェクト構造

```
/
├── public/              # 静的ファイル（画像、アイコンなど）
│   └── icon-head.webp
├── src/
│   ├── components/     # Astroコンポーネント
│   │   ├── pages-link.astro
│   │   ├── sns-link.astro
│   │   └── ThemeToggle.astro
│   ├── layouts/        # レイアウトコンポーネント
│   │   └── Layout.astro
│   ├── pages/         # ページファイル
│   │   └── index.astro
│   └── styles/        # グローバルスタイル
│       └── global.css
├── astro.config.mjs   # Astro設定ファイル
├── tailwind.config.mjs # TailwindCSS設定ファイル
└── package.json
```

## 🛠️ 使用技術

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- [TailwindCSS](https://tailwindcss.com/) - ユーティリティファーストの CSS フレームワーク
