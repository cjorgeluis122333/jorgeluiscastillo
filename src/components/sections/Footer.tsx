import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/5 py-20 text-center bg-black/30">
            <p className="text-accent-muted text-lg font-medium">
                © {new Date().getFullYear()} Jorge Luis Castillo Vidal.</p>
        </footer>
    );
};

