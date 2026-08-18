import './globals.css';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/layout/Footer';
import { Noto_Sans_JP, IBM_Plex_Mono } from 'next/font/google';
import { siteConfig } from '../lib/siteConfig';
import type { Metadata } from 'next';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Composition | ${siteConfig.tagline}`,
    template: '%s | Composition',
  },
  description:
    '現役医師×開発者が率いるAIカンパニー。医療現場で自ら実装してきたAI開発力で、AIプロダクト開発・AI駆動開発・AI研修を提供します。',
  openGraph: {
    siteName: 'Composition',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/images/renewal/ogp.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${plexMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
