import Image from 'next/image';
import type { Metadata } from 'next';
import { Icon } from '../../../components/ui/Icon';
import { SectionTitle } from '../../../components/ui/SectionTitle';
import { CtaButton } from '../../../components/ui/CtaButton';
import { Reassurance } from '../../../components/ui/Reassurance';
import { siteConfig } from '../../../lib/siteConfig';

export const metadata: Metadata = {
  title: '医療AI開発',
  description:
    '診療報酬・院内業務・ガバナンスを理解した現役医師×開発者が、医療機関で本当に使われるAIを開発します。',
};

const offerings = [
  {
    icon: 'icon-01-medical',
    title: '院内業務AIの開発',
    body: '書類作成・情報整理・問い合わせ対応など、院内の反復業務をAIで自動化。現場のワークフローに組み込める形で設計します。',
  },
  {
    icon: 'icon-04-product',
    title: '医療データの活用設計',
    body: '院内に眠るデータを、診療とスタッフの意思決定に使える形へ。個人情報保護・ガイドラインへの配慮を前提に構築します。',
  },
  {
    icon: 'icon-09-partnership',
    title: '医療DXの伴走',
    body: 'ツール選定から院内への定着まで。医療現場の言葉で話せる実装者が、導入の最初から最後まで並走します。',
  },
];

export default function MedicalPage() {
  return (
    <>
      <section className="bg-white border-b border-line">
        <div className="container-custom py-16 md:py-24">
          <p className="data-label mb-5">Medical AI</p>
          <h1 className="text-3xl md:text-5xl font-black leading-tight">
            医療AIは、
            <br className="md:hidden" />
            医療を知る実装者がつくる。
          </h1>
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            診療報酬という制度の制約。多職種が関わる院内業務の複雑さ。そして患者情報のガバナンス。
            医療のAI導入には三重の制約があります。私たちは臨床経験のある医師が自ら実装するチームとして、
            この制約を理解した上で「現場で本当に使われるAI」を作ります。
          </p>
        </div>
      </section>

      <section className="section-padding bg-base">
        <div className="container-custom">
          <SectionTitle en="What we build" ja="提供内容" />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {offerings.map((o) => (
              <div key={o.title} className="grid md:grid-cols-12 gap-5 md:gap-8 items-start py-9">
                <div className="md:col-span-1">
                  <Icon name={o.icon} className="w-11 h-11 text-brand" />
                </div>
                <h3 className="md:col-span-3 text-xl font-black">{o.title}</h3>
                <p className="md:col-span-8 text-sm md:text-[15px] text-ink/70 leading-relaxed">
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <SectionTitle en="Case" ja="診療報酬加算ナビ" />
            <p className="mt-6 text-ink/70 leading-relaxed">
              621件の加算を構造化し、算定可否を質問形式で確認できるデータベースサービス。
              医療事務・院長・事務長が日々使うプロダクトとして実運用されています。
              医療制度の知識とAI実装力の掛け算が、私たちの開発の型です。
            </p>
            <a
              href={siteConfig.kasanNavi}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-brand font-bold hover:underline"
            >
              診療報酬加算ナビを見る ↗
            </a>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/images/renewal/kasan-navi-checker.webp"
              alt="診療報酬加算ナビの加算検索画面"
              width={1280}
              height={720}
              className="w-full h-auto rounded-lg border border-line"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="container-custom py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-black">
            院内の課題を、実装者に直接相談してください。
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
