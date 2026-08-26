import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '../ui/SectionTitle';

export function CeoSection() {
  return (
    <section className="section-padding bg-brand-soft">
      <div className="container-custom grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4">
          <div className="relative aspect-square max-w-sm overflow-hidden rounded-lg">
            <Image
              src="/images/renewal/ceo-portrait.webp"
              alt="代表 福島佑輔"
              fill
              sizes="(max-width: 1024px) 90vw, 30vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-8">
          <SectionTitle en="Founder" ja="代表について" />
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            現役医師として診療を続けながら、AIエージェントを使って
            診療報酬加算ナビなどの自社プロダクトを開発・運用しています。
            現場の課題を知る当事者が、AIで自ら解決策を作る——
            その経験をそのまま、開発と研修の形でご提供します。
          </p>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-brand font-bold hover:underline"
          >
            代表とビジョンを詳しく →
          </Link>
        </div>
      </div>
    </section>
  );
}
