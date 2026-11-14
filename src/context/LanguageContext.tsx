import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { portfolio } from '../data/portfolio';
import type { LanguageContent } from '../types/portfolio';

interface LanguageContextType {
    language: string;
    languages: string[];
    content: LanguageContent;
    setLanguage: (lang: string) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages = Object.keys(portfolio.languages);
const initialLanguage =
    portfolio.defaultLanguage && languages.includes(portfolio.defaultLanguage)
        ? portfolio.defaultLanguage
        : languages[0];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>(initialLanguage);

    // Con dos idiomas alterna entre ellos; con más, recorre la lista en orden.
    const toggleLanguage = () => {
        setLanguage((prev) => languages[(languages.indexOf(prev) + 1) % languages.length]);
    };

    const content = portfolio.languages[language];

    return (
        <LanguageContext.Provider value={{ language, languages, content, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
