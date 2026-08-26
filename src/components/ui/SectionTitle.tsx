interface SectionTitleProps {
  en: string;
  ja: string;
  align?: 'left' | 'center';
  className?: string;
}

/** 英字モノスペースの小見出し＋日本語大見出しのエディトリアル型セクションタイトル */
export function SectionTitle({ en, ja, align = 'left', className = '' }: SectionTitleProps) {
  const alignCls = align === 'center' ? 'text-center' : 'text-left';
  return (
    <div className={`${alignCls} ${className}`}>
      <p className="data-label mb-3">{en}</p>
      <h2 className="text-3xl md:text-4xl font-black leading-tight">{ja}</h2>
    </div>
  );
}
