import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
    const { content } = useLanguage();

    return (
        <footer className="border-t border-white/5 py-20 text-center bg-black/30">
            <p className="text-accent-muted text-lg font-medium">
                © {new Date().getFullYear()} {content.hero.name}.</p>
        </footer>
    );
};

