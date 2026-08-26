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
          <SectionTitle en="Founder" ja="現役医師で、CEOで、非エンジニア。" />
          <p className="mt-6 text-ink/70 leading-relaxed max-w-2xl">
            代表はコードを1行も書きません。AIエージェントに開発させる「AI駆動開発」で、
            診療報酬加算ナビなどのプロダクトを作り、運用してきました。
            非エンジニアでもここまで作れる——自分の事業でそれを証明してきたことが、
            開発と研修の提供価値の土台です。
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
