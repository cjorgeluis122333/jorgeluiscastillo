import React from 'react';
import { CONTENT } from './constants/content';
import { Hero } from './components/sections/Hero';
import { Profile } from './components/sections/Profile';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Education } from './components/sections/Education';
import { SoftSkills } from './components/sections/SoftSkills';
import { Footer } from './components/sections/Footer';

const App: React.FC = () => {
  const { es: content } = CONTENT;

  if (!content) return <div className="text-white">Error: Content not found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden">
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
    </div>
  );
};

export default App;
