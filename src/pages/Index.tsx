
import { useEffect, useState } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { CertificatesSection } from '../components/CertificatesSection';
import { ContactSection } from '../components/ContactSection';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-navy text-white overflow-x-hidden">
      {/* Background Stars */}
      <div className="stars fixed inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="star animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <AboutSection />
        <SkillsSection scrollY={scrollY} />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
