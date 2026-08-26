export const siteConfig = {
  name: '合同会社コンポジション',
  nameEn: 'Composition, LLC',
  url: 'https://www.composition2940.com',
  tagline: '医療で鍛えたAI実装力を、すべての現場へ',
  timerex: process.env.NEXT_PUBLIC_TIMEREX_URL ?? '',
  kasanNavi: 'https://shinryohoushu.com',
  contactPath: '/contact',
} as const;

/** 無料相談のリンク先。TimeRex未設定時はお問い合わせページへフォールバック */
export function consultUrl(): string {
  return siteConfig.timerex || siteConfig.contactPath;
}
