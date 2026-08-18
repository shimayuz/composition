interface IconProps {
  name: string;
  className?: string;
}

/**
 * 自作SVGピクトグラム（public/icons/*.svg）をmask-imageで描画する。
 * currentColorで着色されるため、text-*クラスで色を制御できる。
 */
export function Icon({ name, className = '' }: IconProps) {
  const url = `url(/icons/${name}.svg)`;
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 ${className}`}
      style={{
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        backgroundColor: 'currentColor',
      }}
    />
  );
}
