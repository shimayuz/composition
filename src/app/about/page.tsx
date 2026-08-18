import type { Metadata } from 'next';
import Image from 'next/image';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { CtaButton } from '../../components/ui/CtaButton';
import { Reassurance } from '../../components/ui/Reassurance';
import { siteConfig } from '../../lib/siteConfig';

export const metadata: Metadata = {
  title: '私たちについて',
  description:
    '合同会社コンポジションは、現役医師×開発者が率いるAIカンパニー。医療で鍛えた実装力で、AIプロダクト開発・AI駆動開発・AI研修を提供します。',
};

const timeline = [
  { year: '医師として', body: '臨床現場で診療にあたりながら、現場の非効率を技術で解決したいという思いから独学でソフトウェア開発を始める。' },
  { year: '実装者として', body: 'AIの実用化とともに、医療×AIのプロダクト開発に本格参入。診療報酬加算ナビなど、実運用されるサービスを自ら開発。' },
  { year: 'Compositionとして', body: '「医療で鍛えたAI実装力を、すべての現場へ」を掲げ、AIプロダクト開発・AI駆動開発・AI研修の3領域で事業を展開。' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white border-b border-line">
        <div className="container-custom grid lg:grid-cols-12 gap-10 items-center py-16 md:py-24">
          <div className="lg:col-span-7">
            <p className="data-label mb-5">About us</p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              診察室から、
              <br />
              コードを書き始めた。
            </h1>
            <p className="mt-6 text-ink/70 leading-relaxed max-w-xl">
              合同会社コンポジションは、現役医師×開発者が率いるAIカンパニーです。
              「失敗が許されない医療現場」で自らAIを実装してきた経験を土台に、
              作る・動かす・教えるの3つの動詞で事業を展開しています。
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square max-w-sm mx-auto lg:ml-auto overflow-hidden rounded-lg">
              <Image
                src="/images/renewal/ceo-labcoat.webp"
                alt="代表（白衣）"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-base">
        <div className="container-custom">
          <SectionTitle en="Journey" ja="歩み" />
          <div className="mt-12 divide-y divide-line border-y border-line max-w-3xl">
            {timeline.map((t) => (
              <div key={t.year} className="grid md:grid-cols-12 gap-3 md:gap-8 py-7">
                <p className="md:col-span-3 font-mono text-sm text-brand font-medium">{t.year}</p>
                <p className="md:col-span-9 text-sm md:text-[15px] text-ink/70 leading-relaxed">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle en="Company" ja="会社概要" />
          <dl className="mt-10 divide-y divide-line border-y border-line max-w-3xl">
            {[
              ['社名', siteConfig.name],
              ['英文社名', siteConfig.nameEn],
              ['事業内容', 'AIプロダクト開発／AI駆動開発／AI研修'],
              ['代表', '福島 佑輔（医師）'],
              ['ウェブサイト', 'www.composition2940.com'],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-4 py-4">
                <dt className="col-span-4 md:col-span-3 text-sm font-bold text-ink/60">{k}</dt>
                <dd className="col-span-8 md:col-span-9 text-sm text-ink/90">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black">
            まずは、実装者と話してみませんか。
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
