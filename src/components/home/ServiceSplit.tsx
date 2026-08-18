import Link from 'next/link';
import { Icon } from '../ui/Icon';
import { SectionTitle } from '../ui/SectionTitle';

interface Service {
  href: string;
  icon: string;
  title: string;
  lead: string;
  body: string;
}

const services: Service[] = [
  {
    href: '/services/medical',
    icon: 'icon-01-medical',
    title: '医療AI開発',
    lead: '医療を知る実装者がつくる',
    body: '診療報酬・院内業務・ガバナンス。医療特有の三重制約を臨床経験者が理解した上で、現場で本当に使われるAIを開発します。',
  },
  {
    href: '/services/dev',
    icon: 'icon-02-ai-dev',
    title: 'AI駆動開発',
    lead: '動くAIを、最短距離で',
    body: 'AIエージェントを駆使した開発プロセスで、要件定義からプロトタイプまで数週間。作りながら決める、速い開発を提供します。',
  },
  {
    href: '/services/training',
    icon: 'icon-03-training',
    title: 'AI研修',
    lead: '実装者が、教える',
    body: '「導入したのに活用されない」を解決する伴走型研修。一般企業から医療機関まで、現場の業務に接続するAI活用を定着させます。',
  },
];

export function ServiceSplit() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle en="Services" ja="作る。動かす。教える。" />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group grid md:grid-cols-12 gap-5 md:gap-8 items-center py-9 hover:bg-canvas transition-colors"
            >
              <div className="md:col-span-1">
                <Icon name={s.icon} className="w-11 h-11 text-brand" />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-black group-hover:text-brand transition-colors">
                  {s.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-ink/50">{s.lead}</p>
              </div>
              <p className="md:col-span-7 text-sm md:text-[15px] text-ink/70 leading-relaxed">
                {s.body}
              </p>
              <p className="md:col-span-1 text-brand font-bold md:text-right" aria-hidden>
                →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
