import React from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

export interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    name: string;
    links: NavLink[];
}

/** Iniciales de las dos primeras palabras del nombre ("Jorge Luis Castillo" → "JL"). */
const getInitials = (name: string) =>
    name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join('');

export const Navbar: React.FC<NavbarProps> = ({ name, links }) => {
    const shortName = name.trim().split(/\s+/).slice(0, 2).join(' ');
    const lastLink = links.length - 1;

    return (
        <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-5xl mx-auto px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <a href="#top" className="flex items-center gap-3 min-h-11 font-display font-bold text-lg text-white">
                    <span className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent-primary to-accent-secondary text-background flex items-center justify-center text-sm shadow-glow-sm">
                        {getInitials(name)}
                    </span>
                    <span className="hidden sm:inline">{shortName}</span>
                </a>

                {links.length > 0 && (
                    <nav className="order-3 md:order-none w-full md:w-auto overflow-x-auto md:overflow-visible">
                        <ul className="glass-card !rounded-full p-1 flex gap-0.5 w-max mx-auto text-sm font-semibold">
                            {links.map((link, index) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`min-h-11 px-4 flex items-center rounded-full transition-colors duration-200 ${
                                            index === lastLink && links.length > 1
                                                ? 'bg-accent-primary/25 text-white'
                                                : 'text-slate-300 hover:text-white'
                                        }`}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                <LanguageSwitcher />
            </div>
        </header>
    );
};
