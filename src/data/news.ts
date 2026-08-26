export type NewsCategory = 'release' | 'talk' | 'award' | 'media';

export interface NewsItem {
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  title: string;
  href?: string;
}

export const newsCategoryLabel: Record<NewsCategory, string> = {
  release: 'リリース',
  talk: '登壇',
  award: '受賞',
  media: 'メディア',
};

/** 新しい順に並べる */
export const newsItems: NewsItem[] = [
  {
    date: '2026-08-18',
    category: 'release',
    title: 'コーポレートサイトを全面リニューアルしました',
  },
  {
    date: '2026-06-01',
    category: 'release',
    title: '「診療報酬加算ナビ」令和8年度改定対応版を公開（登録加算621件）',
    href: 'https://shinryohoushu.com',
  },
  {
    date: '2026-03-15',
    category: 'award',
    title: 'AIハッカソンで優勝しました',
  },
  {
    date: '2026-02-01',
    category: 'release',
    title: '医療機関向けAIエージェントの開発を開始',
  },
];
