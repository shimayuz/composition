import { CtaButton } from '../ui/CtaButton';
import { Reassurance } from '../ui/Reassurance';

export function ClosingCta() {
  return (
    <section className="bg-ink text-white">
      <div className="container-custom py-20 md:py-28 text-center">
        <p className="data-label text-white/50 mb-5">Get started</p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight">
          あなたの現場のAIは、
          <br className="md:hidden" />
          動いていますか？
        </h2>
        <p className="mt-5 text-white/70 max-w-xl mx-auto">
          導入の相談でも、研修の相談でも、まだ形になっていないアイデアでも。
          実装者の視点でお答えします。
        </p>
        <div className="mt-9 flex justify-center">
          <CtaButton className="px-10">無料相談を予約する</CtaButton>
        </div>
        <Reassurance className="mt-4 !text-white/50" />
      </div>
    </section>
  );
}
