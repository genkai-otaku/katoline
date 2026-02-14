# CLAUDE.md

このファイルは、このリポジトリのコードを扱う際の Claude Code (claude.ai/code) へのガイダンスです。

## プロジェクト概要

Astro、Tailwind CSS、TypeScript で構築された個人プロフィールサイト（日本語）。ブログ、アニメ視聴リスト、生息地（お気に入りの場所）ページを持つ静的サイト。

## コマンド

- `pnpm dev` — 開発サーバーを http://localhost:4321 で起動
- `pnpm build` — 本番ビルド（`dist/` に出力）
- `pnpm preview` — 本番ビルドをローカルでプレビュー
- パッケージマネージャー: **pnpm**

テストフレームワークは未設定。

## アーキテクチャ

- **Astro v5** 静的サイトジェネレーター（React コンポーネント用の React 統合あり）
- **ファイルベースルーティング**: `src/pages/` が URL パスに対応、動的ルートには `[slug].astro` を使用
- **コンテンツコレクション**: ブログ記事は `src/content/blog/` に Markdown 形式で配置、スキーマは `src/content/config.ts` で定義
- **レイアウト**: `src/layouts/Layout.astro` が唯一の HTML シェル（テーマの FOUC 防止スクリプトを含む）
- **共通コンポーネント**: `src/components/` — `ListPageLayout` がすべてのリスト形式ページをラップ
- **データ**: アニメリストは `src/lib/anime-list.ts` に型付き配列として定義

## 主要な規約

- **テーマシステム**: `<html>` に `data-theme="dark"|"light"` 属性を使用し、localStorage に保存。ダークモードの色は `tailwind.config.mjs` でセレクター戦略により設定。
- **Tailwind 設定**: カスタム semibold ウェイト = 700（Noto Sans JP 用）。ダークモードは `[data-theme="dark"]` セレクターを使用。
- **TypeScript**: strict モード（`astro/tsconfigs/strict`）。コンポーネントは型付き Props インターフェースを使用。
- **ブログ記事**: フロントマターには `title`、`date` が必須。オプションの `draft` フラグで未公開記事をフィルタリング。
- **コミットメッセージ**: 日本語で記述。
