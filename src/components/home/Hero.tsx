import Image from 'next/image';
import { CtaButton } from '../ui/CtaButton';
import { Reassurance } from '../ui/Reassurance';

export function Hero() {
  return (
    <section className="bg-white border-b border-line">
      <div className="container-custom grid lg:grid-cols-12 gap-10 items-center py-16 md:py-24">
        <div className="lg:col-span-7">
          <p className="data-label mb-5">Medical-grade AI, for every field</p>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.25]">
            AIは、
            <br className="md:hidden" />
            実装で語る。
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
            コードを1行も書かずに、AIでプロダクトを作り運用してきた現役医師。
            <br />
            その「AI駆動開発」の実践知で、プロダクト開発・AI研修を通じて
            あなたの現場に伴走します。
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <CtaButton>無料相談を予約する</CtaButton>
            <CtaButton variant="ghost" href="#product-proof">
              動いているプロダクトを見る
            </CtaButton>
          </div>
          <Reassurance className="mt-4" />
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto lg:ml-auto overflow-hidden rounded-lg">
            <Image
              src="/images/renewal/ceo-workscene.webp"
              alt="診察室でAI開発を行う代表"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-3 font-mono text-xs text-ink/50 text-right">
            dev environment / clinical site — 医療現場が開発現場
          </p>
        </div>
      </div>
    </section>
  );
}
