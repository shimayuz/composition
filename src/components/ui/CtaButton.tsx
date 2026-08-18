import Link from 'next/link';
import { consultUrl } from '../../lib/siteConfig';

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  external?: boolean;
  className?: string;
}

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-sm md:text-base font-bold transition-colors';

const variantClass = {
  primary: 'bg-brand text-white hover:bg-ink',
  ghost: 'border border-ink/30 text-ink hover:border-brand hover:text-brand',
} as const;

/** CTAボタン。href省略時は無料相談（TimeRex or /contact）へ */
export function CtaButton({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
}: CtaButtonProps) {
  const target = href ?? consultUrl();
  const cls = `${baseClass} ${variantClass[variant]} ${className}`;
  const isExternal = external || target.startsWith('http');

  if (isExternal) {
    return (
      <a href={target} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={target} className={cls}>
      {children}
    </Link>
  );
}
