'use client';

import Image from 'next/image';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { ParallaxBackgroundSection } from '../layout/ParallaxBackgroundSection';

export const ServicesSection = () => {
  return (
    <ParallaxBackgroundSection 
      id="services" 
      imageSrc="/images/parallax-bg-services.jpg" 
      strength={300}
      overlayOpacity={0.8}
      className="bg-white text-white"
    >
      <SectionHeader title="医療コンサルティングエキスパイザリー" align="center" />
      
      {/* 16:9アスペクト比の画像エリアを追加 */}
      <div className="w-full mb-8 aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
        <img 
          src="/images/modern-office-fusion.webp" 
          alt="モダンオフィスシーン" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="space-y-6 text-white mb-8">
        <p>
          Compositionでは、医療分野における豊富な経験と専門知識を活かし、医療機関や製薬企業、ヘルステック企業向けの包括的なコンサルティングサービスを提供しています。AIと医療の両方に精通した専門家チームが、クライアント固有の課題解決と戦略的目標の達成をサポートします。
        </p>
        <p>
          私たちのコンサルティングサービスは、医療業界の深い理解に基づいており、規制環境、市場動向、技術革新を考慮した実践的なアドバイスを提供します。また、AIの導入による医療プロセスの最適化、患者ケアの向上、コスト削減など、具体的な成果につながるソリューションを設計・実装します。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Service 1 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-white/30">
          <div className="mb-4 h-40 relative">
            <Image 
              src="/images/services/ai-strategy-consulting.jpg"
              alt="AI戦略コンサルティング"
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            AI戦略コンサルティング
          </h3>
          <p className="text-white/80">
            医療機関向けのAI導入戦略の策定、ROI分析、ロードマップ作成など、技術導入の全フェーズをサポートします。
          </p>
        </div>
        
        {/* Service 2 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-white/30">
          <div className="mb-4 h-40 relative">
            <Image 
              src="/images/services/medical-data-analysis.jpg"
              alt="医療データ分析・活用支援"
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            医療データ分析・活用支援
          </h3>
          <p className="text-white/80">
            臨床データの収集・分析フレームワーク構築、データガバナンス体制整備、分析結果の臨床応用をサポートします。
          </p>
        </div>
        
        {/* Service 3 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-white/30">
          <div className="mb-4 h-40 relative">
            <Image 
              src="/images/services/medical-dx-support.jpg"
              alt="医療DX推進支援"
              fill
              className="object-cover rounded"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">
            医療DX推進支援
          </h3>
          <p className="text-white/80">
            デジタル変革のビジョン策定から実装まで、医療機関のDXを包括的に支援し、患者体験と業務効率の向上を実現します。
          </p>
        </div>
      </div>
    </ParallaxBackgroundSection>
  );
};