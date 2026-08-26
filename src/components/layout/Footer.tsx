import Link from 'next/link';
import { siteConfig } from '../../lib/siteConfig';

const serviceLinks = [
  { href: '/services/medical', label: '医療AI開発' },
  { href: '/services/dev', label: 'AI駆動開発' },
  { href: '/services/training', label: 'AI研修' },
];

const companyLinks = [
  { href: '/about', label: '私たちについて' },
  { href: '/news', label: 'ニュース' },
  { href: '/contact', label: 'お問い合わせ' },
];

export const Footer = () => {
  return (
    <footer className="bg-ink text-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <p className="text-lg font-black tracking-wide">Composition</p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              医療で鍛えたAI実装力を、
              <br />
              すべての現場へ。
            </p>
          </div>
          <nav aria-label="サービス">
            <p className="data-label text-white/50 mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="プロダクト">
            <p className="data-label text-white/50 mb-4">Products</p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products" className="text-sm text-white/80 hover:text-white">
                  プロダクト一覧
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.kasanNavi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  診療報酬加算ナビ ↗
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="会社情報">
            <p className="data-label text-white/50 mb-4">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-white/50 hover:text-white">
              プライバシーポリシー
            </Link>
            <Link href="/specified-commercial-transaction" className="text-xs text-white/50 hover:text-white">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
