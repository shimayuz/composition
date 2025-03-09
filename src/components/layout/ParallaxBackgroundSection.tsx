'use client';

import { ReactNode } from 'react';
import { Parallax } from 'react-parallax';

interface ParallaxBackgroundSectionProps {
  id: string;
  imageSrc: string;
  strength?: number;
  children: ReactNode;
  overlayOpacity?: number;
  className?: string;
  height?: string;
}

export const ParallaxBackgroundSection = ({
  id,
  imageSrc,
  strength = 200,
  children,
  overlayOpacity = 0.3,
  className = '',
  height = 'auto',
}: ParallaxBackgroundSectionProps) => {
  return (
    <section id={id} className={`section-padding ${className}`} style={{ height }}>
      <Parallax
        bgImage={imageSrc}
        strength={strength}
        className="relative w-full h-full"
        bgClassName="object-cover"
        contentClassName="relative z-10 h-full"
      >
        {/* オーバーレイ */}
        <div 
          className="absolute inset-0 bg-black z-0" 
          style={{ opacity: overlayOpacity }}
        ></div>
        
        {/* コンテンツ */}
        <div className="container-custom relative z-10 h-full">
          {children}
        </div>
      </Parallax>
    </section>
  );
};
