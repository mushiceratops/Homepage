# Sohei Tsukahara's Homepage

## 画面構成

### ページ一覧

| URL | ページ名 | 主な対象 |
|---|---|---|
| `/` | Home | 全対象 |
| `/research` | Research | 研究者 |
| `/works` | Works | 研究者 |
| `/projects` | Projects | エンジニア・企業 |
| `/activities` | Activities | 全対象 |
| `/cv` | CV | 企業 |

---

### 各ページの役割

#### `/` — Home

全体のハブ。各セクションのサマリーと他ページへの誘導を担う。

| セクション | 内容 |
|---|---|
| Hero | 写真・名前・肩書き・SNSリンク |
| About Me | 自己紹介・技術スタック・言語・Contact |
| Recent News | 最新3〜5件（全件は各ページへリンク） |
| Research（抜粋） | Research Summary と研究興味の要約 → `/research` へ |
| Works（抜粋） | 最新論文・発表 → `/works` へ |
| Projects（抜粋） | 注目プロジェクト2〜3件 → `/projects` へ |

#### `/research` — Research

研究者向けの詳細ページ。

- Research Summary（詳細版）
- Research Interests
- Collaborators / 所属研究室リンク

#### `/works` — Works

論文・発表の全件一覧。タブまたはアンカーで切り替え。

```
タブ: Papers | Ph.D Thesis | Invited Talks | Presentations
```

論文数が増えた際に年フィルターや検索も追加しやすい構成。

#### `/projects` — Projects

エンジニア・企業向けのポートフォリオ。

- カード形式でプロジェクトを一覧
- 各カードに技術スタック・GitHubリンクを表示

#### `/activities` — Activities

- Outreach 登壇一覧
- Technical Writing（Qiita・Note の記事）
- 査読・委員活動など

#### `/cv` — CV

企業向けの完全なCVを1ページに集約。印刷・PDF出力対応レイアウトを想定。

- Education / Career / Awards / Certifications / Teaching / Skills

---

## 技術スタック

| 領域 | 採用技術 |
|---|---|
| フレームワーク | Next.js（App Router） |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| コンテンツ管理 | TypeScript 定数ファイル（`src/data/`） |
| ホスティング | Vercel |
| バージョン管理 | GitHub |
| DB | なし |

---

## ディレクトリ構成

```
Homepage/
├── docs/                        # 設計ドキュメント
│   ├── ui-design.md
│   └── drafts/
│       ├── homepage-plan.md
│       └── sample.html
├── public/
│   └── images/
│       └── avatar.jpg
├── src/
│   ├── app/                     # Next.js App Router（ルーティング専用）
│   │   ├── layout.tsx           # ルートレイアウト（Header・Footer を含む）
│   │   ├── globals.css          # Tailwind ベース + カスタム CSS
│   │   ├── page.tsx             # Home (/)
│   │   ├── research/
│   │   │   └── page.tsx
│   │   ├── works/
│   │   │   └── page.tsx         # タブ切り替えはここで完結（#papers 等）
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── activities/
│   │   │   └── page.tsx
│   │   └── cv/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                  # 全ページで再利用する小さな部品
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── MoreLink.tsx
│   │   │   └── SnsButton.tsx
│   │   ├── home/                # Home ページ固有のセクション
│   │   │   ├── Hero.tsx
│   │   │   ├── NewsSection.tsx
│   │   │   ├── ResearchSnippet.tsx
│   │   │   ├── WorksSnippet.tsx
│   │   │   └── ProjectsSnippet.tsx
│   │   ├── works/
│   │   │   ├── WorksTabs.tsx
│   │   │   └── PaperList.tsx
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx
│   │   └── cv/
│   │       └── CvSection.tsx
│   ├── data/                    # コンテンツの実体（型付き定数ファイル）
│   │   ├── profile.ts           # 名前・肩書き・自己紹介・SNSリンク
│   │   ├── news.ts
│   │   ├── papers.ts
│   │   ├── thesis.ts
│   │   ├── talks.ts             # Invited Talks
│   │   ├── presentations.ts
│   │   ├── projects.ts
│   │   ├── activities.ts
│   │   └── cv.ts                # Education / Career / Awards 等
│   └── types/
│       └── index.ts             # Paper / Project / Talk 等の型定義
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### 設計方針

- `app/` はルーティング専用に保ち、コンポーネントは `components/` に統一する
- `components/ui/` は複数ページで使う小部品、機能別ディレクトリ（`home/` `works/` 等）はページ固有のセクションを置く
- `data/` のファイルを編集するだけでコンテンツを追加・更新できる構成にする
- `types/index.ts` は型の数が少ないうちは 1 ファイルにまとめ、増えたら分割する
