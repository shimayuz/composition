import Image from 'next/image';
import { SectionTitle } from '../ui/SectionTitle';
import { siteConfig } from '../../lib/siteConfig';

export function ProductProof() {
  return (
    <section id="product-proof" className="section-padding bg-base">
      <div className="container-custom">
        <SectionTitle en="Proof of work" ja="作ったものが、証明。" />
        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            {/* ブラウザフレーム風 */}
            <div className="rounded-lg border border-line bg-white shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line bg-base">
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
            <h3 className="text-2xl font-black leading-snug">
              診療報酬改定を、
              <br />
              現場が使えるデータベースに。
            </h3>
            <p className="mt-5 text-ink/70 leading-relaxed">
              「診療報酬加算ナビ」は、厚労省の公式資料をもとに621件の加算を構造化し、
              施設基準・届出の要否を質問形式で確認できるサービスです。
              医療事務・院長・事務長が日々使う実運用プロダクトとして稼働しています。
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink/70">
              <li className="flex gap-2"><span className="text-brand font-bold">✓</span>加算チェッカー・AIチャット・取り漏れシミュレーター</li>
              <li className="flex gap-2"><span className="text-brand font-bold">✓</span>令和8年度（2026）改定対応・公式根拠リンク付き</li>
              <li className="flex gap-2"><span className="text-brand font-bold">✓</span>企画から実装・運用まで自社で開発</li>
            </ul>
            <a
              href={siteConfig.kasanNavi}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-brand font-bold hover:underline"
            >
              診療報酬加算ナビを使ってみる ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
