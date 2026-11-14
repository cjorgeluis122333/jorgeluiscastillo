import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import type { Footer as FooterContent } from '../../types/portfolio';

type FooterProps = FooterContent & { ownerName: string };

export const Footer: React.FC<FooterProps> = ({ title, description, button, location, ownerName }) => {
    // La última palabra del título lleva el degradado de texto.
    const words = title.trim().split(/\s+/);
    const split = Math.max(0, words.length - 3);
    const head = words.slice(0, split).join(' ');
    const tail = words.slice(split).join(' ');

    return (
        <footer id="contact" className="max-w-5xl mx-auto px-4 md:px-6 pt-6 md:pt-12 pb-10 scroll-mt-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-[28px] border border-white/10 p-7 md:p-16 flex flex-col items-start gap-5 md:gap-6"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.28), rgba(34,211,238,0.14))' }}
            >
                <div
                    className="absolute -right-28 -top-28 w-[420px] h-[420px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(34,211,238,0.35), transparent 65%)',
                        animation: 'hero-glow 5s ease-in-out infinite',
                    }}
                />

                <h2 className="relative max-w-3xl text-[clamp(2rem,6vw,3.9rem)] font-bold leading-[1.05] tracking-tight text-white">
                    {head}
                    {head && ' '}
                    <span className="text-gradient">{tail}</span>
                </h2>

                <p className="relative max-w-xl text-base md:text-xl leading-relaxed text-slate-300">{description}</p>

                {button && (
                    <a
                        href={button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gradient relative min-h-[52px] px-7 text-base md:text-lg hover:scale-[1.03] active:scale-95 transition-transform"
                    >
                        <Icon name={button.icon} className="w-5 h-5 shrink-0" />
                        <span>{button.label}</span>
                    </a>
                )}
            </motion.div>

            <p className="mt-8 text-accent-muted text-sm font-medium text-center">
                © {new Date().getFullYear()} {ownerName}.
                {location && (
                    <>
                        <span className="text-white/20 mx-2">·</span>
                        {location}
                    </>
                )}
            </p>
        </footer>
    );
};
