# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Astro + Tailwind CSS + TypeScript で構築された日本語の個人プロフィールサイト。ブログ、今期視聴アニメ、生息地（お気に入りの場所）ページを持つ静的サイト。

## コマンド

- `pnpm dev` — 開発サーバー起動（http://localhost:4321）
- `pnpm build` — 本番ビルド（`dist/` に出力）
- `pnpm preview` — 本番ビルドのプレビュー
- パッケージマネージャー: **pnpm**

リンター・フォーマッター・テストフレームワークは未設定。

## アーキテクチャ

### ルーティングとページ構造

Astro v5 のファイルベースルーティング。`src/pages/` が URL に直接対応する。

- `index.astro` — プロフィール写真・SNSリンク・ページリンクを表示するホームページ
- `blog.astro` / `blog/[slug].astro` — Content Collections によるブログ一覧・詳細
- `watch-anime.astro` — 今期視聴アニメ一覧（データはページ内に `Place[]` として定義）
- `habitats.astro` — よく行く場所一覧（データはページ内に `Place[]` として定義）

### レイアウトとコンポーネントの階層

```
Layout.astro（HTML シェル・テーマ初期化・Google Fonts・ThemeToggle）
└── ListPageLayout.astro（タイトル・戻るリンク・説明文の共通レイアウト）
    └── PlacesSection.astro（セクション見出し + リンクリスト。Place 型を export）
        └── ListSectionTitle.astro（見出しと区切り線）
```

ブログ以外のリストページ（アニメ・生息地）はすべて `ListPageLayout` → `PlacesSection` の構成。新しいリストページを追加する場合もこのパターンに従う。

### データ管理

- **ブログ記事**: `src/content/blog/` に Markdown。スキーマは `src/content/config.ts`（`title` 必須、`date` 任意、`draft` で非公開フィルタ）
- **アニメリスト**: `src/lib/anime-list.ts`（過去視聴分の `string[]`）。今期分は `watch-anime.astro` 内に `Place[]` で定義
- **生息地データ**: `habitats.astro` 内に `Place[]` で直接定義

### テーマシステム

- `<html data-theme="dark"|"light">` 属性で制御、localStorage に保存
- デフォルトはダークモード
- FOUC 防止のため `Layout.astro` の `<head>` 内にインラインスクリプトでテーマを即時適用
- Tailwind のダークモードは `tailwind.config.mjs` で `[data-theme="dark"]` セレクター戦略を使用
- CSS のダークモードスタイルは `src/styles/global.css` に記述

### Tailwind CSS

- **Tailwind v4** を使用（`@tailwindcss/vite` プラグイン経由）
- `global.css` で `@import "tailwindcss"` + `@config` でレガシー設定ファイルを参照
- カスタム: `font-semibold` を 700 にマッピング（Noto Sans JP に 600 ウェイトがないため）
- ブログ本文用の `.prose` スタイルは `global.css` に手書き（Tailwind Typography 未使用）

## 規約

- **コミットメッセージ**: 日本語で記述
- **TypeScript**: strict モード。コンポーネントは Props インターフェースを定義
- **Place 型**: `PlacesSection.astro` から export される `{ label: string; href?: string }` 型がリスト系ページ全体で共有される
