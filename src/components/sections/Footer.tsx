import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/5 py-20 text-center bg-black/30">
            <p className="text-accent-muted text-lg font-medium">
                © {new Date().getFullYear()} Jorge Luis Castillo Vidal. Implementación Full-Stack & Mobile.
            </p>
            <p className="text-accent-muted/50 text-sm mt-4 tracking-widest uppercase">
                Diseño Premium • React 19 • Tailwind CSS v3
            </p>
        </footer>
    );
};
