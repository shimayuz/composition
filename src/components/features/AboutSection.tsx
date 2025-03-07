import Image from 'next/image';
import { Section } from '../layout/Section';
import { SectionHeader } from '../ui/SectionHeader';

export const AboutSection = () => {
  return (
    <Section id="about" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ご挨拶</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-[var(--primary-color)]">ヒトとAIのチカラを味方に</h3>
          
          <div className="space-y-4 text-gray-700">
            <p>
              合同会社コンポジションのホームページをご覧いただきありがとうございます。当社はAIで医療の未来を共創し、イノベーションを推進するパートナーとして、皆さまのビジョンを実現するお手伝いをいたします。当社では、医療コンサルティングや医療IoT(IoMT)の導入アドバイザー、医療機器販売サポート、そして生成AIリスキルやAIを用いた開発に至るまで、幅広いサービスを提供しております。
            </p>
            
            <p>
              クライアントの皆さまと密接に協力し、業務プロセスの効率化と『時間』と『労働』コスト削減を実現するサポートをさせていただく一方で、生成AI技術を駆使して医療現場の複雑な課題を解決するためのツールを提供します。これにより、医療従事者が患者様に対して最良の判断とケアを提供できる環境を整えます。
            </p>
            
            <p>
              あなたのビジネスが直面する課題を乗り越え、共に成長し繁栄する未来を築くお手伝いをさせていただければ幸いです。当社と一緒に医療の未来を共創し、より良い世界を築いていきましょう。合同会社コンポジションは、皆さまのビジネスを全力でサポートします。
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="rounded-lg overflow-hidden shadow-lg mt-10 lg:mt-20 aspect-w-1 aspect-h-1">
            <img 
              src="/images/profile-photo.png" 
              alt="代表ポートレート" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};