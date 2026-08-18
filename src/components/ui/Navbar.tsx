'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { consultUrl } from '../../lib/siteConfig';

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/services/medical', label: '医療AI開発' },
  { href: '/services/dev', label: 'AI駆動開発' },
  { href: '/services/training', label: 'AI研修' },
  { href: '/products', label: 'プロダクト' },
  { href: '/about', label: '私たちについて' },
  { href: '/news', label: 'ニュース' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-sm transition-colors ${
      pathname.startsWith(href) ? 'text-brand font-bold' : 'text-ink/70 hover:text-brand'
    }`;

  return (
    <nav className="bg-white/95 backdrop-blur border-b border-line sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-3.5">
        <Link href="/" className="flex items-center" aria-label="Composition ホーム">
          <Image
            src="/images/logo.png"
            alt="Composition"
            width={168}
            height={28}
            className="object-contain"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link
            href={consultUrl()}
            className="bg-brand text-white text-sm font-bold rounded-md px-5 py-2.5 hover:bg-ink transition-colors"
          >
            無料相談
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-1 text-ink"
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-line px-5 pb-6">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 border-b border-line/60 ${linkClass(item.href)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={consultUrl()}
              className="mt-4 bg-brand text-white text-center text-sm font-bold rounded-md px-5 py-3 hover:bg-ink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
