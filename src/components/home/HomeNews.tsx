import Link from 'next/link';
import { SectionTitle } from '../ui/SectionTitle';
import { newsItems, newsCategoryLabel } from '../../data/news';

export function HomeNews() {
  const latest = newsItems.slice(0, 4);
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex items-end justify-between">
          <SectionTitle en="News" ja="動き続ける会社" />
          <Link href="/news" className="text-sm text-brand font-bold hover:underline shrink-0">
            すべて見る →
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {latest.map((n) => (
            <li key={`${n.date}-${n.title}`}>
              <NewsRow date={n.date} category={newsCategoryLabel[n.category]} title={n.title} href={n.href} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NewsRow({
  date,
  category,
  title,
  href,
}: {
  date: string;
  category: string;
  title: string;
  href?: string;
}) {
  const inner = (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5">
      <time className="font-mono text-xs text-ink/50 w-28 shrink-0">{date}</time>
      <span className="text-[11px] font-bold text-brand border border-brand/40 rounded px-2 py-0.5 w-fit shrink-0">
        {category}
      </span>
      <p className="text-sm text-ink/80">{title}</p>
    </div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:bg-canvas transition-colors">
        {inner}
      </a>
    );
  }
  return inner;
}
