import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '../../../components/ui/Icon';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { CtaButton } from '../../../components/ui/CtaButton';
import { Reassurance } from '../../../components/ui/Reassurance';

export const metadata: Metadata = {
  title: 'AI駆動開発',
  description:
    'AIエージェントを駆使した開発プロセスで、要件からプロトタイプまで数週間。動くAIを最短距離で届けます。',
};

const steps = [
  {
    icon: 'icon-08-checklist',
    label: 'STEP 1',
    title: '現場の課題を言語化する',
    body: '最初の相談で、解きたい業務課題と成功条件を一緒に定義します。分厚い要件定義書は作りません。動かして確かめる前提で、最小の仕様に絞ります。',
  },
  {
    icon: 'icon-02-ai-dev',
    label: 'STEP 2',
    title: '1〜2週間でプロトタイプ',
    body: 'AIエージェントを駆使した開発プロセスで、実際に触れるプロトタイプを短期間で構築。画面と動きを見ながら、作るべきものを固めていきます。',
  },
  {
    icon: 'icon-04-product',
    label: 'STEP 3',
    title: '本番運用と改善',
    body: '現場に組み込んで運用を開始。使われ方のデータをもとに改善を重ね、業務に定着するまで伴走します。',
  },
];

export default function DevPage() {
  return (
    <>
      <section className="bg-white border-b border-line">
        <div className="container-custom py-16 md:py-24">
          <p className="data-label mb-5">AI-driven development</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            動くAIを、最短距離で。
          </h1>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            私たち自身が、AIエージェントでプロダクトを作り運用している開発チームです。
            AIを使って開発する速さと、医療で鍛えた「失敗できない現場」への品質意識。
            その両方で、あなたの事業のAIを形にします。
          </p>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-custom">
          <SectionTitle en="Process" ja="進め方" />
          <div className="mt-12 space-y-0 divide-y divide-line border-y border-line">
            {steps.map((s) => (
              <div key={s.title} className="grid md:grid-cols-12 gap-5 md:gap-8 items-start py-9">
                <div className="md:col-span-1">
                  <Icon name={s.icon} className="w-11 h-11 text-brand" />
                </div>
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-brand mb-1.5">{s.label}</p>
                  <h3 className="text-xl font-black">{s.title}</h3>
                </div>
                <p className="md:col-span-8 text-sm md:text-[15px] text-ink/70 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle en="Why us" ja="実装で語る、が方針です" />
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            提案書の枚数ではなく、動いているプロダクトが私たちの実績です。
            自社で企画・開発・運用まで手がけた「診療報酬加算ナビ」をはじめ、
            作ったものは<Link href="/products" className="text-brand font-bold hover:underline">プロダクト一覧</Link>でご覧いただけます。
          </p>
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black">
            そのアイデア、動くところまで最短で。
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
