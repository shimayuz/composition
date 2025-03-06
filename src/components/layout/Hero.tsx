import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-composition.png"
          alt="Composition Healthcare Technology"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Vertical text on sides */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <p className="vertical-text text-white text-sm tracking-wider">
          ビジネスAIソリューション
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
            <a href="#about" className="btn-primary py-3 px-8 text-lg">
              詳細を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};