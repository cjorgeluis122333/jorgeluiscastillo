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
import { portfolio, validatePortfolio } from './data/portfolio';
import type { LanguageContent, Section } from './types/portfolio';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const renderSection = (section: Section, ui: LanguageContent['ui']) => {
    switch (section.type) {
        case 'profile':
            return <Profile {...section} />;
        case 'experience':
            return <Experience {...section} />;
        case 'community':
            return <Community {...section} copyLabel={ui?.copyCommand} />;
        case 'techStack':
            return <TechStack {...section} />;
        case 'education':
            return <Education {...section} />;
        case 'softSkills':
            return <SoftSkills {...section} />;
    }
};

const AppContent: React.FC = () => {
    const { language, content } = useLanguage();

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = `${content.hero.name} — ${content.hero.role}`;
    }, [language, content]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden relative"
        >
            <LanguageSwitcher />
            <Hero content={content.hero} />

            {content.sections.map((section, index) => (
                <React.Fragment key={`${section.type}-${index}`}>{renderSection(section, content.ui)}</React.Fragment>
            ))}

            <Footer {...content.footer} ownerName={content.hero.name} />
        </motion.div>
    );
};

const ConfigError: React.FC<{ errors: string[] }> = ({ errors }) => (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 font-sans">
        <h1 className="text-2xl font-bold mb-4">Error en src/data/portfolio.json</h1>
        <ul className="list-disc pl-6 space-y-1 text-accent-muted">
            {errors.map((error) => (
                <li key={error}>{error}</li>
            ))}
        </ul>
    </div>
);

const App: React.FC = () => {
    const errors = validatePortfolio(portfolio);
    if (errors.length > 0) return <ConfigError errors={errors} />;

    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
};

export default App;
