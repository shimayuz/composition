'use client';

import { ReactNode } from 'react';
import { Parallax } from 'react-parallax';

interface ParallaxSectionProps {
  imageSrc: string;
  strength?: number;
  height?: string;
  children: ReactNode;
  overlayOpacity?: number;
  className?: string;
}

export const ParallaxSection = ({
  imageSrc,
  strength = 300,
  height = '500px',
  children,
  overlayOpacity = 0.4,
  className = '',
}: ParallaxSectionProps) => {
  return (
    <Parallax
      bgImage={imageSrc}
      strength={strength}
      className={`relative ${className}`}
      bgClassName="object-cover"
      contentClassName="relative z-10"
      style={{ height }}
    >
      {/* オーバーレイ */}
      <div 
        className="absolute inset-0 bg-black z-0" 
        style={{ opacity: overlayOpacity }}
      ></div>
      
      {/* コンテンツ */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </Parallax>
  );
};
