import Image from 'next/image';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';

export const ProjectsSection = () => {
  return (
    <Section id="projects" background="light">
      <SectionHeader title="次世代AIプロダクト開発のアプローチ" />
      
      <div className="space-y-6 text-gray-700 mb-8">
        <p>
          Compositionでは、医療分野における課題解決と価値創出を目的としたAIプロダクト開発に取り組んでいます。私たちのアプローチは、臨床現場のニーズを深く理解し、最新のAI技術と医療知識を融合させることで、実用的かつ革新的なソリューションを生み出すことにあります。
        </p>
        <p>
          開発プロセスでは、医療従事者や患者との緊密な協力体制を構築し、ユーザー中心の設計を徹底します。また、医療分野特有の規制要件やセキュリティ基準を厳守し、安全性と信頼性を確保したプロダクト開発を行います。
        </p>
      </div>
      
      {/* 横長プロジェクトカード */}
      <div className="mt-10">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 h-64 md:h-auto relative">
              <Image 
                src="/images/projects/referak-ai.png"
                alt="紹介状自動作成AI リファラク"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[var(--primary-color)]">
                  紹介状自動作成AI「リファラク」
                </h3>
                <span className="bg-[var(--primary-color)] text-white text-sm py-1 px-3 rounded-full">
                  開発中
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                医療機関間の連携を効率化するために開発された紹介状自動作成AIシステム「リファラク」は、医師の作業負担を大幅に軽減します。患者情報と診療データを基に、AIが適切な医療情報を抽出・構造化し、紹介先医療機関に最適化された紹介状を自動生成します。
              </p>
              <p className="text-gray-700 mb-4">
                医師はコピペだけでOKを達成しました。これで、従来10分かかっていた作業時間を1分に短縮することが可能です。本システムは、医師の診療記録から重要な臨床情報を識別し、専門用語や略語を適切に処理。さらに、紹介先の専門性に合わせたフォーマットで文書を構成し、医師が最終確認・編集するだけで高品質な紹介状が完成します。
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-[var(--light-bg)] text-[var(--primary-color)] text-xs px-2 py-1 rounded">
                  #自然言語処理
                </span>
                <span className="bg-[var(--light-bg)] text-[var(--primary-color)] text-xs px-2 py-1 rounded">
                  #医療情報抽出
                </span>
                <span className="bg-[var(--light-bg)] text-[var(--primary-color)] text-xs px-2 py-1 rounded">
                  #文書自動生成
                </span>
                <span className="bg-[var(--light-bg)] text-[var(--primary-color)] text-xs px-2 py-1 rounded">
                  #医療連携
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};