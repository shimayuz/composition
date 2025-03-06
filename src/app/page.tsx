import { Hero } from '../components/layout/Hero';
import { AboutSection } from '../components/features/AboutSection';
import { ServicesSection } from '../components/features/ServicesSection';
import { ProjectsSection } from '../components/features/ProjectsSection';
import { NewsSection } from '../components/features/NewsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-counter">
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
      </div>
      <NewsSection />
    </>
  );
}