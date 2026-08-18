# composition2940.com リニューアル実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 医療で鍛えたAI実装力を証明する「実装者の証明」型コンバージョンサイトへ全面リニューアルする。

**Architecture:** 既存 Next.js 14 (App Router) + Tailwind 3 を土台に、トップ＋7下層ページを新デザイントークンで再構築。アイコンは自作SVG（currentColor）、写真はwebp最適化済み素材を使用。News はTSデータファイル管理。

**Tech Stack:** Next.js 14 / TypeScript / Tailwind CSS 3 / next/font (Noto Sans JP) / 既存contact API (Resend)

**Spec:** docs/superpowers/specs/2026-08-17-composition2940-renewal-design.md

## Global Constraints

- 「コンサルティング」「受託」「顧問」「アドバイザリー」の語を全ページで使用しない（プロダクトカンパニー表現）
- リファラク・株式会社quaiに言及しない
- Lucide/Heroicons等の既製アイコン禁止。`public/icons/*.svg`（自作11種）のみ使用
- 紫グラデ・グラスモーフィズム・絵文字見出し・均一角丸カード3枚横並びの連続を禁止
- 配色: クリニカルホワイト `#f7f9fa` / ディープネイビー `#0f2a43` / 医療ブルー `#2563a8` / 淡ブルー `#e8f0f7`。緑系(#3a5a40)は全廃
- CTA: ハード=無料相談（TimeRex、URL未定のため `siteConfig.timerex` で一元管理、未設定時は `/contact` へフォールバック）、加算ナビ導線=トップ・medical・productsの3箇所以上
- 不安打消し文をCTAボタン近傍に必ず置く（「売り込みはしません／30分・オンライン」）
- 検証は `npm run build`（型+ビルド）＋ dev サーバーでの目視（テストランナー不使用。静的マーケサイトのため、ロジックを持つ箇所のみビルド時型検証でカバー）

---

### Task 1: デザイントークンとフォント基盤

**Files:**
- Modify: `tailwind.config.js`（colors全面差し替え）
- Modify: `src/app/globals.css`（ベーススタイル）
- Modify: `src/app/layout.tsx`（next/font で Noto Sans JP、メタデータ刷新）
- Create: `src/lib/siteConfig.ts`

**Interfaces:**
- Produces: Tailwindクラス `bg-base/ink/brand/brand-soft`、`siteConfig`（`{ name, url, timerex, kasanNavi, contactPath }`）

- [ ] **Step 1: tailwind.config.js の colors を差し替え**

```js
colors: {
  base: '#f7f9fa',      // クリニカルホワイト
  ink: '#0f2a43',       // ディープネイビー（テキスト・見出し）
  brand: '#2563a8',     // 医療ブルー（CTA・リンク）
  'brand-soft': '#e8f0f7', // 淡ブルー（セクション背景）
  line: '#d6dee6',      // 罫線
},
```

- [ ] **Step 2: siteConfig.ts を作成**

```ts
export const siteConfig = {
  name: '合同会社コンポジション',
  url: 'https://www.composition2940.com',
  timerex: process.env.NEXT_PUBLIC_TIMEREX_URL ?? '', // 未設定時は /contact へ
  kasanNavi: 'https://shinryohoushu.com',
  contactPath: '/contact',
} as const;
export const consultUrl = () => siteConfig.timerex || siteConfig.contactPath;
```

- [ ] **Step 3: layout.tsx に Noto Sans JP（next/font/google, weight 400/500/700/900）とメタデータ（title: 「Composition | 医療で鍛えたAI実装力を、すべての現場へ」）を設定**
- [ ] **Step 4: `npm run build` が通ることを確認**
- [ ] **Step 5: Commit** `feat: 新デザイントークン・フォント・siteConfig基盤`

### Task 2: 共通UIコンポーネント

**Files:**
- Create: `src/components/ui/Icon.tsx` / `CtaButton.tsx` / `SectionTitle.tsx` / `Reassurance.tsx`

**Interfaces:**
- Produces:
  - `<Icon name="icon-01-medical" className="w-10 h-10 text-brand" />`（`/icons/{name}.svg` をmask-imageで描画、currentColor着色）
  - `<CtaButton variant="primary|ghost" href?>`（href省略時は `consultUrl()`）
  - `<SectionTitle en="Services" ja="サービス" />`（英小見出し＋日本語大見出しのエディトリアル型）
  - `<Reassurance />`（「売り込みはしません。30分・オンラインで気軽にご相談ください。」の小文）

- [ ] **Step 1: Icon.tsx 実装**

```tsx
export function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span aria-hidden className={`inline-block ${className}`}
      style={{ WebkitMaskImage: `url(/icons/${name}.svg)`, maskImage: `url(/icons/${name}.svg)`,
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain', maskSize: 'contain', backgroundColor: 'currentColor' }} />
  );
}
```

- [ ] **Step 2: CtaButton / SectionTitle / Reassurance を実装（brand色・角丸控えめ rounded-md、影なし）**
- [ ] **Step 3: build 確認 → Commit** `feat: 共通UIコンポーネント（Icon/CTA/SectionTitle/Reassurance）`

### Task 3: Navbar / Footer 刷新

**Files:**
- Modify: `src/components/ui/Navbar.tsx` / `src/components/ui/Footer.tsx`

**Interfaces:**
- Consumes: `CtaButton`, `siteConfig`
- Produces: ナビ項目 = 医療AI開発 `/services/medical`・AI駆動開発 `/services/dev`・AI研修 `/services/training`・プロダクト `/products`・私たちについて `/about`・ニュース `/news`＋右端に無料相談CTA。Footer = サイトマップ全リンク＋加算ナビ外部リンク＋特商法/プライバシー既存リンク維持

- [ ] **Step 1: Navbar 差し替え（白背景・ink文字・スクロールで影、モバイルはドロワー）**
- [ ] **Step 2: Footer 差し替え（ネイビー背景・白文字。「プロダクト」列に診療報酬加算ナビ外部リンク）**
- [ ] **Step 3: build 確認 → Commit** `feat: ナビゲーションとフッターを新IA対応に刷新`

### Task 4: 加算ナビUIスクリーンショット取得

**Files:**
- Create: `public/images/renewal/kasan-navi-home.png` / `kasan-navi-checker.png`

- [ ] **Step 1: Playwright CLIで https://shinryohoushu.com/ と加算チェッカー画面を viewport 1440x900・deviceScaleFactor 2 で撮影**
- [ ] **Step 2: magick で webp 変換（品質85）し public/images/renewal/ へ**
- [ ] **Step 3: Commit** `assets: 加算ナビUIスクリーンショット追加`

### Task 5: トップページ（7セクション）

**Files:**
- Modify: `src/app/page.tsx`（全面書き換え）
- Create: `src/components/home/Hero.tsx` / `ProductProof.tsx` / `NumbersBand.tsx` / `ServiceSplit.tsx` / `CeoSection.tsx` / `HomeNews.tsx` / `ClosingCta.tsx`
- Create: `src/data/news.ts`

**Interfaces:**
- Consumes: Task 2 の全UI、`news.ts` の `newsItems: { date: string; category: 'release'|'talk'|'award'|'media'; title: string; href?: string }[]`
- Produces: `newsItems` は Task 10 の /news でも使用

- [ ] **Step 1: Hero 実装** — コピー「AIは、実装で語る。」サブ「医療の現場で自らAIを作り、動かしてきた現役医師×開発者が、AI駆動開発とAI研修であなたの現場に伴走します。」CTA=無料相談＋プロダクトを見る（#product-proof へ）。右側に ceo-workscene.webp をエディトリアル配置（非対称2カラム、モバイル縦積み）
- [ ] **Step 2: ProductProof 実装** — 見出し「作ったものが、証明。」加算ナビのスクショ（ブラウザフレーム風枠）＋「診療報酬改定を、現場が使えるデータベースに変えた」説明＋ shinryohoushu.com への外部リンクボタン
- [ ] **Step 3: NumbersBand 実装** — 4項目: 「621加算を構造化」「紹介状業務など医療AIを実運用」→（※数字はデプロイ前にユーザー確認）「ハッカソン優勝 2026」「技術書籍を執筆」。数字はtext-5xl font-black、ラベルはtext-sm
- [ ] **Step 4: ServiceSplit 実装** — 3本柱（icon-01/02/03使用）: 医療AI開発・AI駆動開発・AI研修。各カードは左ボーダーアクセントの非対称デザイン、各詳細ページへリンク
- [ ] **Step 5: CeoSection 実装** — ceo-portrait.webp＋「現役医師で、CEOで、エンジニア。」経歴3行＋ /about リンク
- [ ] **Step 6: HomeNews + news.ts 実装（最新4件表示）／ ClosingCta 実装** — 「あなたの現場のAIは、動いていますか？」＋無料相談CTA＋Reassurance
- [ ] **Step 7: page.tsx を7セクション構成に差し替え、build＋devサーバー目視確認 → Commit** `feat: トップページを実装者の証明型LPに全面刷新`

### Task 6: /services/medical

**Files:**
- Create: `src/app/services/medical/page.tsx`

- [ ] **Step 1: 構成実装** — FV「医療AIは、医療を知る実装者がつくる。」／課題提起（診療報酬・院内業務・ガバナンスの三重制約）／提供内容3つ（院内業務AI開発・医療データ活用・医療DX伴走。icon-01/04/09）／加算ナビ紹介ブロック（スクショ＋外部リンク）／CTA＋Reassurance
- [ ] **Step 2: build → Commit** `feat: 医療機関向けAI開発ページ`

### Task 7: /services/dev

**Files:**
- Create: `src/app/services/dev/page.tsx`

- [ ] **Step 1: 構成実装** — FV「動くAIを、最短距離で。」／AI駆動開発の説明（Claude等のAIエージェントを使った開発プロセスそのものが商品）／進め方3ステップ（要件→プロトタイプ1〜2週→本番運用。icon-08/02/04）／「実装で語る」実績（自社プロダクト群）／CTA＋Reassurance
- [ ] **Step 2: build → Commit** `feat: AI駆動開発ページ`

### Task 8: /services/training（BtoB王道LP）

**Files:**
- Create: `src/app/services/training/page.tsx`

- [ ] **Step 1: 構成実装** — FV悩み指名「AIを導入したのに、活用されない。そんな企業様へ。」／原因分析3点（ツール導入止まり・業務接続の欠如・伴走者不在）／プログラム（実装者が教える伴走型研修。一般企業／医療機関の2セグメントタブ）／数字・実績／**助成金独立セクション**（人材開発支援助成金・icon-05・「実質負担を抑えて導入できます」＋詳細は相談時案内）／FAQ（icon-11、5問）／各セクション末にCTA（資料DLは `/contact` 経由の問い合わせ種別で代替、icon-06）＋Reassurance
- [ ] **Step 2: build → Commit** `feat: AI研修LP（助成金・FAQ・複線CTA装備）`

### Task 9: /products と /about

**Files:**
- Create: `src/app/products/page.tsx` / `src/app/about/page.tsx`

- [ ] **Step 1: products 実装** — 加算ナビを大きく1枚（スクショ・特徴3点・外部リンク）＋「次のプロダクトを準備中」枠
- [ ] **Step 2: about 実装** — ceo-labcoat.webp＋代表挨拶（実装者思想）／経歴タイムライン／会社概要表（社名・所在地・事業内容=AIプロダクト開発・AI駆動開発・AI研修）
- [ ] **Step 3: build → Commit** `feat: プロダクト・会社紹介ページ`

### Task 10: /news と /contact

**Files:**
- Create: `src/app/news/page.tsx`
- Modify: `src/app/contact/page.tsx`（新トーン適用＋TimeRex案内枠）

- [ ] **Step 1: news 実装（news.ts 全件をカテゴリバッジ付き時系列リスト）**
- [ ] **Step 2: contact 刷新** — 上部に「オンライン相談を予約」枠（`consultUrl()`、TimeRex未設定時は非表示）＋既存フォーム維持（デザインのみ新トークン適用）
- [ ] **Step 3: build → Commit** `feat: ニュース一覧とお問い合わせページ刷新`

### Task 11: SEO・仕上げ

**Files:**
- Create: `src/app/sitemap.ts` / `src/app/robots.ts` / `src/app/opengraph-image.png`（素材から組版）
- Modify: 各ページの `metadata`

- [ ] **Step 1: 全ページに title/description（「〜｜Composition」）、sitemap.ts・robots.ts 追加**
- [ ] **Step 2: OGP画像作成（ネイビー地に白ロゴ＋タグライン、magickで組版）**
- [ ] **Step 3: 旧ページ整理** — 旧セクションコンポーネント（AboutSection/ServicesSection/ProjectsSection等）の未参照ファイル削除、`Profilephoto (2).png` 等のルート直下画像を整理
- [ ] **Step 4: build → Commit** `feat: SEO・OGP・不要ファイル整理`

### Task 12: 検証

- [ ] **Step 1: `npm run build` / `npm run lint` クリーン**
- [ ] **Step 2: devサーバーで全8ページをデスクトップ/モバイル幅で目視（Browser paneスクリーンショット）**
- [ ] **Step 3: 禁止語チェック** `grep -rn -E "コンサル|受託|顧問|アドバイザリー|リファラク|quai" src/` → 0件
- [ ] **Step 4: Lighthouse（モバイル）Performance/A11y/SEO 90+ 確認**
- [ ] **Step 5: Commit＋ユーザーへ画面共有・レビュー依頼（デプロイはユーザー承認後）**
