# 引き継ぎ書 — Sohei Tsukahara's Homepage

この文書は実装開始前の引き継ぎ用ドキュメント。
設計上の決定事項・未決事項・実装手順を記載する。

---

## プロジェクト概要

個人ホームページ。研究者・エンジニア・企業への情報発信を目的とする。
オーナー：塚原 壮平（Sohei Tsukahara）

- 理論物理学者（場の量子論・量子重力・超弦理論）、博士（九州大学 2025年3月修了）
- 現職：アイ・ビー・エム・デジタルサービス（2026/04〜）
- 肩書き：**Independent Scholar / Web Engineer**

---

## リポジトリ現状

```
Homepage/
├── docs/
│   ├── handover.md         ← 本ファイル
│   ├── ui-design.md        ← UIデザイン仕様（詳細）
│   └── drafts/
│       ├── homepage-plan.md  ← コンテンツ項目一覧
│       └── sample.html       ← デザイン確認用サンプル（実装の参考）
├── README.md               ← 画面構成・技術スタック・ディレクトリ構成
└── .gitignore
```

`src/` はまだ存在しない。Next.js プロジェクトの初期化から始める。

---

## 確定済み決定事項

### 技術スタック

| 領域 | 採用技術 |
|---|---|
| フレームワーク | Next.js（App Router） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| コンテンツ管理 | TypeScript 定数ファイル（`src/data/`） |
| ホスティング | Vercel |
| バージョン管理 | GitHub（既存リポジトリ） |
| DB | なし（全ページ静的生成） |

### 画面構成

| URL | ページ名 | 主な対象 |
|---|---|---|
| `/` | Home | 全対象 |
| `/research` | Research | 研究者 |
| `/works` | Works | 研究者 |
| `/projects` | Projects | エンジニア・企業 |
| `/activities` | Activities | 全対象 |
| `/cv` | CV（印刷対応） | 企業 |

### カラーパレット（`tailwind.config.ts` に定義）

| 名前 | コード | 用途 |
|---|---|---|
| `green` | `#00451E` | 天鵞絨色。アクセント全般 |
| `green-light` | `#E8F3ED` | hover 背景・タグ背景 |
| `green-border` | `#C8D9CC` | 区切り線・カード枠 |
| `surface` | `#EDE8DF` | Research サマリー背景 |
| `washi` | `#FAF7F2` | 和紙色。ページベース背景 |
| `text` | `#1A1A1A` | 本文 |
| `text-sub` | `#555555` | 日付・メタ情報 |

### タイポグラフィ（`next/font/google` で読み込み）

- 見出し：**Noto Serif JP**（`font-serif`）
- 本文・UI：**Inter + Noto Sans JP**（`font-sans`）

### デザインコンセプト

「和モダン × 数理物理」。アカデミック・ミニマリズム基調。
- 背景：和紙色（`#FAF7F2`）無地
- セクション区切り：`border-b-4 border-double border-green-border`（二重線）
- 見出し装飾：`border-l-4 border-green pl-4`（左ボーダー）
- ヘッダー：固定・ガラス効果・下部に深緑ボーダーライン

詳細は [docs/ui-design.md](ui-design.md) を参照。

### ディレクトリ構成（実装時に作成）

```
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── research/page.tsx
│   ├── works/page.tsx
│   ├── projects/page.tsx
│   ├── activities/page.tsx
│   └── cv/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── SectionHeading.tsx
│   │   ├── Tag.tsx
│   │   ├── MoreLink.tsx
│   │   └── SnsButton.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── NewsSection.tsx
│   │   ├── ResearchSnippet.tsx
│   │   ├── WorksSnippet.tsx
│   │   └── ProjectsSnippet.tsx
│   ├── works/
│   │   ├── WorksTabs.tsx
│   │   └── PaperList.tsx
│   ├── projects/
│   │   └── ProjectCard.tsx
│   └── cv/
│       └── CvSection.tsx
├── data/
│   ├── profile.ts
│   ├── news.ts
│   ├── papers.ts
│   ├── thesis.ts
│   ├── talks.ts
│   ├── presentations.ts
│   ├── projects.ts
│   ├── activities.ts
│   └── cv.ts
└── types/
    └── index.ts
```

---

## 未決事項・実装時に確認が必要なこと

以下はオーナーが実際のデータを用意する必要がある項目。
実装時はダミーデータでプレースホルダーを作り、後から差し替える。

| 項目 | 内容 |
|---|---|
| プロフィール写真 | `public/images/avatar.jpg` に配置 |
| 論文一覧 | タイトル・ジャーナル・年・DOI |
| 博士論文 | タイトル・リポジトリリンク |
| 招待講演一覧 | タイトル・会議名・年 |
| 発表一覧 | タイトル・会議名・年 |
| プロジェクト一覧 | 名前・説明・技術スタック・GitHubリンク |
| アウトリーチ活動 | 登壇タイトル・日時・場所 |
| Technical Writing | Qiita/Note の記事タイトル・URL |
| 受賞・奨学金 | 名称・授与機関・年 |
| 資格 | AWS等の資格名・取得年 |
| 各種 SNS リンク | GitHub / ORCID / Inspire-HEP 等の実 URL |
| Emailアドレス | Contact 用 |
| 各職歴の実績 | シンプレクス・IBM での担当領域・成果 |

---

## 実装手順（推奨順）

### Step 1：プロジェクト初期化

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
```

既存の `docs/`・`README.md`・`.gitignore` は上書きしないよう注意。

### Step 2：Tailwind カスタムカラー設定

`tailwind.config.ts` にカラーパレットとフォントを追加。
`src/app/globals.css` に `border-double` 等の共通スタイルを定義。

### Step 3：共通レイアウト

`src/app/layout.tsx`・`Header.tsx`・`Footer.tsx` を実装。
全ページで使う `SectionHeading` `Tag` `MoreLink` `SnsButton` も合わせて作成。

### Step 4：データ型とダミーデータ

`src/types/index.ts` に型定義を作成。
`src/data/` 各ファイルにダミーデータを投入。

### Step 5：各ページ実装（推奨順）

1. `/` Home — 全体の雰囲気を確認する起点
2. `/works` — データ量が多く、タブ実装もあるため早めに着手
3. `/cv` — 印刷対応の検証
4. `/research` `/projects` `/activities` — 比較的シンプル

### Step 6：Vercel デプロイ

GitHub リポジトリと Vercel を連携し、自動デプロイを設定。

---

## 参照ドキュメント

| ファイル | 内容 |
|---|---|
| [README.md](../README.md) | 画面構成・技術スタック・ディレクトリ構成の概要 |
| [docs/ui-design.md](ui-design.md) | カラー・タイポグラフィ・コンポーネント別 Tailwind クラス例 |
| [docs/drafts/homepage-plan.md](drafts/homepage-plan.md) | 掲載コンテンツ項目の詳細一覧 |
| [docs/drafts/sample.html](drafts/sample.html) | デザイン確認用サンプル（実装の視覚的参考） |
