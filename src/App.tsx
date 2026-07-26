import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Hero } from './components/sections/Hero';
import { Profile } from './components/sections/Profile';
import { Experience } from './components/sections/Experience';
import { Community } from './components/sections/Community';
import { TechStack } from './components/sections/TechStack';
import { Education } from './components/sections/Education';
import { SoftSkills } from './components/sections/SoftSkills';
import { Footer } from './components/sections/Footer';
import React from 'react';
import { motion } from 'framer-motion';

const AppContent: React.FC = () => {
  const { content } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden relative"
    >
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

      <Community
        title={content.sections.community}
        libraries={content.community}
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
