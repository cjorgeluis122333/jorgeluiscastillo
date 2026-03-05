import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 px-4 py-2 glass-card border border-white/10 text-white font-medium text-sm flex items-center gap-2"
        >
            <span className={language === 'es' ? 'text-accent-primary' : 'text-accent-muted'}>ES</span>
            <div className="w-[1px] h-4 bg-white/20" />
            <span className={language === 'en' ? 'text-accent-primary' : 'text-accent-muted'}>EN</span>
        </motion.button>
    );
};
