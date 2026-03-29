# UI デザイン仕様

実装技術スタック：Next.js（App Router）/ TypeScript / Tailwind CSS
デザイン参考：[docs/drafts/sample.html](drafts/sample.html)

---

## デザインコンセプト

**「和モダン × 数理物理」**

アカデミック・ミニマリズムを基調としつつ、和の造形美と量子物理・弦理論が持つ数理的な美しさを静かに共鳴させるデザイン。主張しすぎず、見る人に「何かがある」と感じさせる余白と品格を目指す。

---

## カラーパレット

Tailwind CSS のカスタムカラーとして `tailwind.config.ts` に定義する。

| 名前 | カラーコード | 用途 |
|---|---|---|
| `green.DEFAULT` | `#00451E` | 天鵞絨色。アクセント全般・ヘッダーボーダー・フッター背景 |
| `green.light` | `#E8F3ED` | hover 背景・タグ背景・アバター背景 |
| `green.border` | `#C8D9CC` | 区切り線・カード枠・二重線 |
| `surface` | `#EDE8DF` | Research サマリーブロック背景 |
| `washi` | `#FAF7F2` | 和紙色。ページ全体のベース背景・ヘッダー背景 |
| `text.DEFAULT` | `#1A1A1A` | 本文 |
| `text.sub` | `#555555` | 日付・所属・メタ情報 |

### 使用方針

- `green.DEFAULT` は要所のみに限定し、背景全体には使わない
- ページの大部分は `washi` × `white` の温かい無彩色で構成する
- 緑が効く箇所：ヘッダー下ボーダー・見出し左ボーダー・リンク・タグ・フッター

---

## タイポグラフィ

Google Fonts を `next/font/google` で読み込む。

| 要素 | フォント | Tailwind クラス例 |
|---|---|---|
| 見出し（h2）・名前 | Noto Serif JP | `font-serif` |
| 本文・UI テキスト | Inter + Noto Sans JP | `font-sans` |

- 行間：`leading-relaxed`（1.625）〜 `leading-loose`（2.0）
- 見出しサイズ：`text-2xl`（h2）、`text-3xl`（Hero 名前）

---

## レイアウト原則

- **最大幅：860px**（`max-w-[860px] mx-auto`）を単一カラムで中央寄せ
- セクション間余白：`py-16`
- Projects ページのカード一覧のみ `grid grid-cols-2` を使用
- スマホ（`sm` ブレークポイント以下）では全要素を単一カラムに集約

---

## ヘッダー

```
[名前]  Home | Research | Works | Projects | Activities | CV
```

- `fixed top-0` でスクロール中も常時表示
- 背景：和紙色 `bg-washi/95 backdrop-blur-md`
- 下部：`border-b-2 border-green` の深緑ボーダーライン
- ナビリンク hover：`::after` 疑似要素で下線が左から右へスライドイン
- スマホ：ハンバーガーボタンに切り替え（`useState` で開閉管理）

---

## Hero セクション（`/` のみ）

```
[アバター写真]  塚原 壮平 / Sohei Tsukahara
                Independent Scholar / Web Engineer
                [GitHub] [Inspire-HEP] [Google Scholar] [ORCID] [X] [Qiita]
```

- アバター：`w-30 h-30 rounded-full`・深緑ライト背景
- 肩書き：`Independent Scholar / Web Engineer`
- SNS バッジ：`border border-green.border rounded px-3 py-1 text-green text-xs font-semibold`
- スマホ：`flex-col items-center text-center`

### Hover 演出

| 対象 | 演出 |
|---|---|
| アバター | `hover:shadow-[0_0_0_8px_rgba(0,69,30,0.12)] hover:scale-105` |
| SNS バッジ | 深緑塗りつぶし・白テキスト・`hover:-translate-y-1` |

---

## セクション共通

### 見出し（h2）

左に深緑の縦ボーダーを立てる。

```tsx
<h2 className="font-serif text-2xl border-l-4 border-green pl-4 mb-8">
  Section Title
</h2>
```

### セクション区切り線

二重線を CSS で表現。Tailwind のユーティリティでは `border-double` を使用。

```tsx
<section className="py-16 border-b-4 border-double border-green-border">
```

和の几帳・論文の欄罫を想起させる。

---

## コンポーネント別仕様

### Recent News リスト

- 日付（`text-sub` 色）＋ テキストの横並び
- hover：`hover:bg-green-light hover:pl-4 transition-all`

### Research サマリーブロック（`/research`）

```tsx
<p className="bg-surface border-l-3 border-green pl-5 py-4 rounded-r-md leading-loose">
```

### タグ（研究キーワード・技術スタック）

```tsx
<span className="text-xs px-3 py-1 bg-green-light text-green rounded-full font-semibold
                 hover:bg-green hover:text-white transition-colors">
```

### 論文リスト（`/works`）

- タイトル（`font-semibold`）＋ ジャーナル・年・DOI の 2 行構成
- hover：`hover:bg-green-light hover:pl-3 transition-all rounded`
- タブ切り替え（Papers / Ph.D Thesis / Invited Talks / Presentations）は `useState` で管理

### プロジェクトカード（`/projects`）

```tsx
<div className="border border-green-border border-l-4 border-l-green rounded-md p-5 bg-white
                hover:-translate-y-1.5 hover:shadow-lg transition-all">
```

### 続きリンク（more-link）

```tsx
<a className="inline-flex items-center gap-1.5 text-sm font-semibold text-green
              border-b border-green-border hover:gap-3 hover:border-green transition-all">
  <span className="transition-transform group-hover:translate-x-1">→</span>
  Works 一覧へ
</a>
```

### フッター

- `bg-green text-white` の深緑背景
- SNS リンクを横並び
- hover：`hover:-translate-y-1 hover:opacity-100 transition-all`

---

## Hover 演出一覧

| 対象 | Tailwind クラス | duration |
|---|---|---|
| ナビリンク | `::after` で下線スライドイン | 250ms |
| アバター | `hover:scale-105` + グロー影 | 300ms |
| SNS バッジ | `hover:bg-green hover:text-white hover:-translate-y-1` | 200ms |
| ニュース行 | `hover:bg-green-light hover:pl-4` | 180ms |
| タグ | `hover:bg-green hover:text-white` | 180ms |
| 論文行 | `hover:bg-green-light hover:pl-3` | 180ms |
| プロジェクトカード | `hover:-translate-y-1.5 hover:shadow-lg` | 220ms |
| 続きリンク矢印 | `hover:gap-3`（矢印が右へずれる） | 200ms |
| フッター SNS | `hover:-translate-y-1 hover:opacity-100` | 200ms |

---

## レスポンシブ対応

Tailwind のモバイルファーストブレークポイントを使用。

| 要素 | スマホ（デフォルト） | タブレット以上（`md:`） |
|---|---|---|
| Hero | `flex-col items-center text-center` | `flex-row items-center` |
| ナビ | 非表示・ハンバーガーボタン表示 | `flex` で横並び |
| Projects グリッド | `grid-cols-1` | `grid-cols-2` |

---

## `/cv` の印刷対応

```css
@media print {
  header, footer { display: none; }
  section { border-bottom: 1px solid #ccc; }
  .no-print { display: none; }
  body { background: white; color: black; }
}
```

Tailwind の `print:` バリアントを使用して同様の制御も可能。

---

## ファイル構成イメージ（Tailwind 設定）

```ts
// tailwind.config.ts
extend: {
  colors: {
    green: {
      DEFAULT: '#00451E',
      light:   '#E8F3ED',
      border:  '#C8D9CC',
    },
    washi:   '#FAF7F2',
    surface: '#EDE8DF',
    text: {
      DEFAULT: '#1A1A1A',
      sub:     '#555555',
    },
  },
  fontFamily: {
    sans:  ['Inter', 'Noto Sans JP', 'sans-serif'],
    serif: ['Noto Serif JP', 'serif'],
  },
}
```
