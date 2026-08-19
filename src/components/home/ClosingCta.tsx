import { CtaButton } from '../ui/CtaButton';
import { Reassurance } from '../ui/Reassurance';

export function ClosingCta() {
  return (
    <section className="bg-ink text-white">
      <div className="container-custom py-20 md:py-28 text-center">
        <p className="data-label text-white/50 mb-5">Contact</p>
        <h2 className="text-3xl md:text-5xl font-black leading-tight">
          まずは、30分の無料相談から
        </h2>
        <p className="mt-5 text-white/70 max-w-xl mx-auto">
          AI開発のご相談も、研修のご相談も、まだ形になっていない段階のご相談も受け付けています。
          実装経験にもとづいて、できること・できないことを率直にお答えします。
        </p>
        <div className="mt-9 flex justify-center">
          <CtaButton className="px-10">無料相談を予約する</CtaButton>
        </div>
        <Reassurance className="mt-4 !text-white/50" />
      </div>
    </section>
  );
}
