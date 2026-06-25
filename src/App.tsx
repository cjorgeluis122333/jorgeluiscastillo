import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Hero } from './components/sections/Hero';
import { Profile } from './components/sections/Profile';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Education } from './components/sections/Education';
import { SoftSkills } from './components/sections/SoftSkills';
import { Footer } from './components/sections/Footer';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AppContent: React.FC = () => {
  const { content } = useLanguage();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden relative"
    >
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <LanguageSwitcher />
      <Hero content={content.hero} />

      <Profile
        title={content.sections.profile}
        text={content.profile.text}
      />

      <Experience
        title={content.sections.experience}
        experiences={content.experience}
      />

      <TechStack
        title={content.sections.techStack}
        toolsTitle={content.sections.tools}
        groups={content.techStack}
        tools={content.tools}
      />

      <Education
        title={content.sections.education}
        education={content.education}
      />

      <SoftSkills
        title={content.sections.softSkills}
        skills={content.softSkills}
      />

      <Footer />
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
