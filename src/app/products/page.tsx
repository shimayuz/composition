import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { CtaButton } from '../../components/ui/CtaButton';
import { Reassurance } from '../../components/ui/Reassurance';
import { siteConfig } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: 'プロダクト',
  description:
    '自社で企画・開発・運用するAIプロダクト。診療報酬加算ナビなど、実運用中のサービスをご紹介します。',
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-white border-b border-line">
        <div className="container-custom py-16 md:py-24">
          <p className="data-label mb-5">Products</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            動いているものが、実績。
          </h1>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            私たちは自社プロダクトを企画から実装・運用まで手がけるプロダクトカンパニーです。
            ここにあるのはデモではなく、現場で日々使われているサービスです。
          </p>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="rounded-lg border border-line bg-white shadow-sm overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-canvas">
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="ml-3 font-mono text-xs text-ink/50">shinryohoushu.com</span>
                  <span className="ml-auto font-mono text-[10px] text-brand">● in production</span>
                </div>
                <Image
                  src="/images/renewal/kasan-navi-home.webp"
                  alt="診療報酬加算ナビのトップ画面"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="data-label">Product 01</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-black">診療報酬加算ナビ</h2>
              <p className="mt-5 text-ink/70 leading-relaxed">
                厚労省の公式資料をもとに621件の診療報酬加算を構造化し、
                自院で算定できる可能性を質問形式で確認できるサービス。
                医療事務・院長・事務長の「調べる時間」を大幅に削減します。
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink/70">
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>施設タイプ・領域別の加算検索</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>加算チェッカー（質問形式の算定要件確認）</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>AIチャットによる個別相談</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>令和8年度（2026）改定対応・公式根拠リンク付き</li>
              </ul>
              <div className="mt-8">
                <CtaButton href={siteConfig.kasanNavi} external>
                  診療報酬加算ナビを使ってみる ↗
                </CtaButton>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-lg border border-dashed border-line bg-white p-10 text-center">
            <p className="data-label">Next</p>
            <p className="mt-3 text-lg font-bold text-ink/60">
              次のプロダクトを開発中です。ニュースでお知らせします。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black">
            この開発力を、あなたの事業でも。
          </h2>
          <div className="mt-7 flex justify-center">
            <CtaButton>無料相談を予約する</CtaButton>
          </div>
          <Reassurance className="mt-4" />
        </div>
      </section>
    </>
  );
}
