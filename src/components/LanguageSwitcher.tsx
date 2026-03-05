import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show if at top, or scrolling up
            if (currentScrollY < 50 || currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            // Hide if scrolling down and not at top
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -100,
                pointerEvents: isVisible ? 'auto' : 'none'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
