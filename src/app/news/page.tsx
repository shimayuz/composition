import type { Metadata } from 'next';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { newsItems, newsCategoryLabel } from '../../data/news';

export const metadata: Metadata = {
  title: 'ニュース',
  description: '合同会社コンポジションのリリース・登壇・受賞・メディア掲載情報。',
};

export default function NewsPage() {
  return (
    <section className="section-padding bg-white min-h-[60vh]">
      <div className="container-custom">
        <SectionTitle en="News" ja="ニュース" />
        <ul className="mt-10 divide-y divide-line border-y border-line max-w-3xl">
          {newsItems.map((n) => {
            const inner = (
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5">
                <time className="font-mono text-xs text-ink/50 w-28 shrink-0">{n.date}</time>
                <span className="text-[11px] font-bold text-brand border border-brand/40 rounded px-2 py-0.5 w-fit shrink-0">
                  {newsCategoryLabel[n.category]}
                </span>
                <p className="text-sm text-ink/80">{n.title}</p>
              </div>
            );
            return (
              <li key={`${n.date}-${n.title}`}>
                {n.href ? (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-canvas transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
