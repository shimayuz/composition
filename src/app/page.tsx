import { Hero } from '../components/home/Hero';
import { ProductProof } from '../components/home/ProductProof';
import { NumbersBand } from '../components/home/NumbersBand';
import { ServiceSplit } from '../components/home/ServiceSplit';
import { CeoSection } from '../components/home/CeoSection';
import { HomeNews } from '../components/home/HomeNews';
import { ClosingCta } from '../components/home/ClosingCta';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductProof />
      <NumbersBand />
      <ServiceSplit />
      <CeoSection />
      <HomeNews />
      <ClosingCta />
    </>
  );
}
