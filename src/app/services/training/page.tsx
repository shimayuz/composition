import type { Metadata } from 'next';
import { Icon } from '../../../components/ui/Icon';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { CtaButton } from '../../../components/ui/CtaButton';
import { Reassurance } from '../../../components/ui/Reassurance';

export const metadata: Metadata = {
  title: 'AI研修',
  description:
    '「AIを導入したのに活用されない」を解決する伴走型AI研修。実装者が教え、現場の業務に接続して定着させます。助成金の活用もご案内します。',
};

const causes = [
  {
    title: 'ツールを配って終わり',
    body: 'アカウントは全員に配られた。でも「何に使えばいいか」が現場の言葉に翻訳されていないため、最初の一歩が踏み出せない。',
  },
  {
    title: '業務に接続されていない',
    body: '一般論の使い方講座は受けた。しかし自社の実際の業務フローのどこでAIを使うかまで落とし込まれておらず、日常に組み込まれない。',
  },
  {
    title: '伴走者がいない',
    body: '最初の熱量が冷めたとき、質問できる相手・背中を押す仕組みがない。活用は一部の得意な人だけのものになり、組織に広がらない。',
  },
];

const faqs = [
  {
    q: '受講対象はどのような人ですか？',
    a: '非エンジニアの業務部門の方から、開発チームまで対応します。事前ヒアリングでレベルと業務内容を確認し、内容を調整します。',
  },
  {
    q: '医療機関でも受講できますか？',
    a: 'はい。病院・クリニック向けには、院内業務や医療情報の取り扱いに配慮したカリキュラムを用意しています。講師は臨床経験のある医師です。',
  },
  {
    q: 'オンラインでも実施できますか？',
    a: 'オンライン・対面・ハイブリッドのいずれも実施可能です。',
  },
  {
    q: '助成金は使えますか？',
    a: '人材開発支援助成金など、要件に合致すれば活用できる場合があります。無料相談時に貴社の状況をお聞きした上でご案内します。',
  },
  {
    q: '1回だけの講演も依頼できますか？',
    a: '可能です。キックオフ向けの講演から、数ヶ月の伴走型プログラムまで、目的に応じて設計します。',
  },
];

export default function TrainingPage() {
  return (
    <>
      <section className="bg-white border-b border-line">
        <div className="container-custom py-16 md:py-24">
          <p className="data-label mb-5">AI training</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            AIを導入したのに、活用されない。
            <br />
            そんな企業様へ。
          </h1>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            ツールの導入は済んだ。それなのに現場の仕事は変わっていない——
            2026年のAI活用の課題は「導入」ではなく「定着」に移っています。
            自らAIで開発・運用する実装者が、あなたの組織の業務に接続する形でAI活用を定着させます。
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <CtaButton>無料相談を予約する</CtaButton>
            <CtaButton variant="ghost" href="/contact">
              <Icon name="icon-06-download" className="w-4 h-4" />
              研修内容について問い合わせる
            </CtaButton>
          </div>
          <Reassurance className="mt-4" />
        </div>
      </section>

      <section className="section-padding bg-base">
        <div className="container-custom">
          <SectionTitle en="Diagnosis" ja="なぜ、活用されないのか" />
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-line border border-line">
            {causes.map((c, i) => (
              <div key={c.title} className="bg-white p-8">
                <p className="font-mono text-xs text-brand">原因 {i + 1}</p>
                <h3 className="mt-3 text-lg font-black">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle en="Program" ja="実装者が教える、伴走型プログラム" />
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            座学で終わらせず、貴社の実業務を題材にAIの使いどころを一緒に設計します。
            研修後も質問できる伴走期間を設け、「一部の得意な人」ではなく組織全体の定着を目指します。
          </p>
          <div className="mt-10 grid md:grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-white p-8">
              <div className="flex items-center gap-3">
                <Icon name="icon-03-training" className="w-8 h-8 text-brand" />
                <h3 className="text-lg font-black">一般企業向け</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>生成AIの業務活用基礎〜応用</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>自社業務を題材にしたワークショップ</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>AI駆動開発の内製化支援</li>
              </ul>
            </div>
            <div className="bg-white p-8">
              <div className="flex items-center gap-3">
                <Icon name="icon-01-medical" className="w-8 h-8 text-brand" />
                <h3 className="text-lg font-black">医療機関向け</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>病院・クリニック職員向け生成AI研修</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>医療情報の取り扱いに配慮したカリキュラム</li>
                <li className="flex gap-2"><span className="text-brand font-bold">✓</span>講師は臨床経験のある医師</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-soft">
        <div className="container-custom grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-1">
            <Icon name="icon-05-grant" className="w-12 h-12 text-brand" />
          </div>
          <div className="md:col-span-11">
            <SectionTitle en="Subsidy" ja="助成金で、実質負担を抑えて導入" />
            <p className="mt-5 text-ink/70 leading-relaxed max-w-2xl">
              人材開発支援助成金など、企業のリスキリングを支援する制度の対象となる場合があります。
              貴社が要件に合致するかどうかを含めて、無料相談時に具体的にご案内します。
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle en="FAQ" ja="よくある質問" />
          <div className="mt-10 divide-y divide-line border-y border-line max-w-3xl">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center gap-3 cursor-pointer list-none">
                  <Icon name="icon-11-faq" className="w-5 h-5 text-brand shrink-0" />
                  <span className="font-bold text-ink group-open:text-brand transition-colors">
                    {f.q}
                  </span>
                </summary>
                <p className="mt-3 pl-8 text-sm text-ink/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black">
            次の研修で、現場は変わり始めますか？
          </h2>
          <div className="mt-7 flex justify-center">
            <CtaButton>無料相談を予約する</CtaButton>
          </div>
          <Reassurance className="mt-4 !text-white/50" />
        </div>
      </section>
    </>
  );
}
