import Image from 'next/image';
import Link from 'next/link';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';

// NewsPicks記事のモックデータ
const newsItems = [
  {
    id: 1,
    title: '【新時代】「PCはAIが自動操作」が常識に？',
    date: '2025年1月24日',
    excerpt: '折しも記事公開のタイミングに合わせてOpenAI Operator が発表されました。このComputer Using Agent についても本記事で簡単に解説させていただきましたのでご覧下さい。',
    image: '/images/news/ikigai-lab.png',
    url: 'https://newspicks.com/news/11177200/?ref=user_9109528',
    source: 'NewsPicks',
    // いらないよ
  },
  {
    id: 2,
    title: '【衝撃】新時代到来！データ管理はAIにお任せ。',
    date: '2024年12月21日',
    excerpt: 'LLMの性能だけでは無い、『便利な』AIに進化を続けているClaude。今回、連携機能の構築ができるMCPについて解説しました。',
    image: '/images/news/ikigai-lab-2.png',
    url: 'https://newspicks.com/news/11030246/?ref=user_9109528',
    source: 'NewsPicks',
    // いらないよ
  },
  {
    id: 3,
    title: '【鬼時短】審査に通る！「事業計画書」が10分で楽々完成',
    date: '2024年12月19日',
    excerpt: '今回、貴重なインタビューの機会をいただきありがとうございました。ちょうど経産省主催スタートアップ支援プログラム「始動」に参加していたタイミングでもあり、事業計画立案のためのプロンプトを提供しました。',
    image: '/images/news/business-plan.png',
    url: 'https://newspicks.com/news/10996722/?ref=user_9109528',
    source: 'NewsPicks',
    // いらないよ
  }
];

export const NewsSection = () => {
  return (
    <Section id="news" background="white">
      <SectionHeader title="最新情報" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-[var(--light-bg)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white py-1 px-2 rounded text-xs font-medium flex items-center">
                <Image 
                  src="/images/ikigai-logo-white.png" 
                  alt="IKIGAI Lab" 
                  width={16} 
                  height={16} 
                  className="mr-1"
                />
                {item.source}
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{item.date}</div>
              <h3 className="text-xl font-bold mb-3 text-[var(--primary-color)]">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.excerpt}
              </p>
              <div className="flex justify-end items-center">
                <Link 
                  href={item.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--secondary-color)] hover:underline font-medium"
                >
                  記事を読む →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://newspicks.com/user/9109528" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary flex items-center justify-center mx-auto w-64"
        >
          <Image 
            src="/images/ikigai-logo-white.png" 
            alt="IKIGAI Lab" 
            width={20} 
            height={20} 
            className="mr-2"
          />
          NewsPicks プロフィールを見る
        </a>
      </div>
    </Section>
  );
};