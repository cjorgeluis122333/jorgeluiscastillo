import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { CONTENT } from '../constants/content';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    content: typeof CONTENT.es;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('es');

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const toggleLanguage = () => {
        setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    const content = CONTENT[language];

    return (
        <LanguageContext.Provider value={{ language, content, setLanguage, toggleLanguage }}>
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
