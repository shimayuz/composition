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
          <SectionTitle en="Founder" ja="現役医師で、CEOで、エンジニア。" />
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            臨床の現場に立ちながら、自分の手でコードを書き、AIプロダクトを作って運用してきました。
            「医療」という最も失敗が許されない現場で鍛えた実装力が、私たちの提供価値の土台です。
            戦略資料ではなく、動くものでお見せします。
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
