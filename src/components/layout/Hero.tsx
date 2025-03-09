'use client';

import Image from 'next/image';
import { ParallaxSection } from '../ui/ParallaxSection';
import { smoothScrollTo } from '../../utils/smoothScroll';

export const Hero = () => {
  return (
    <ParallaxSection 
      imageSrc="/images/webpagecomposition01.webp" 
      strength={500} 
      height="80vh" 
      overlayOpacity={0.4}
      className="min-h-[600px] overflow-hidden"
    >

      {/* Vertical text on sides */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <p className="vertical-text text-white text-sm tracking-wider">
          AIソリューション
        </p>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <p className="vertical-text text-white text-sm tracking-wider">
          医療テクノロジー
        </p>
      </div>

      {/* Central content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            for us, <br />
            <span className="text-[#a3b18a]">your health is our priority</span>
          </h1>
          
          {/* Call to action */}
          <div className="mt-8">
            <a 
              href="#about" 
              className="btn-primary py-3 px-8 text-lg"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('about', 80);
                window.history.replaceState(null, '', '#about');
              }}
            >
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};