import React from 'react';
import { useLanguage } from '../context/LanguageContext';

/** Selector de idioma en forma de píldora. Se oculta con un solo idioma. */
export const LanguageSwitcher: React.FC = () => {
    const { language, languages, setLanguage } = useLanguage();

    if (languages.length < 2) return null;

    return (
        <div className="glass-card !rounded-full p-1 flex font-mono text-xs" role="group">
            {languages.map((code) => {
                const active = language === code;
                return (
                    <button
                        key={code}
                        type="button"
                        onClick={() => setLanguage(code)}
                        aria-pressed={active}
                        className={`min-w-11 min-h-9 px-2 rounded-full font-medium transition-colors duration-200 ${
                            active
                                ? 'bg-gradient-to-br from-accent-primary to-accent-secondary text-background'
                                : 'text-accent-muted hover:text-white'
                        }`}
                    >
                        {code.toUpperCase()}
                    </button>
                );
            })}
        </div>
    );
};
