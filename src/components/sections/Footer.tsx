import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SvgIcon } from '../SvgIcon';

export const Footer: React.FC = () => {
    const { content } = useLanguage();

    const whatsappContact = content.hero.contact.find(c => c.label === "WhatsApp");

    return (
        <footer className="relative border-t border-white/5 pt-24 pb-12 overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
            <div
                className="absolute top-0 left-1/4 w-[500px] h-[280px] rounded-full -translate-y-1/2 pointer-events-none"
                style={{ background: 'rgba(99, 102, 241, 0.07)', filter: 'blur(100px)' }}
            />
            <div
                className="absolute top-0 right-1/4 w-[360px] h-[200px] rounded-full -translate-y-1/2 pointer-events-none"
                style={{ background: 'rgba(34, 211, 238, 0.05)', filter: 'blur(80px)' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                        {content.footer.title}
                    </h2>

                    <p className="text-lg mb-10 leading-relaxed text-accent-muted">
                        {content.footer.description}
                    </p>

                    {whatsappContact && (
                        <a
                            href={whatsappContact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
                            style={{
                                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                                boxShadow: '0 0 32px rgba(99, 102, 241, 0.35)',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 48px rgba(99, 102, 241, 0.55)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 32px rgba(99, 102, 241, 0.35)';
                            }}
                        >
                            <SvgIcon name="whatsapp" className="w-5 h-5 transition-transform group-hover:scale-110 shrink-0" />
                            <span>{content.footer.buttonText}</span>
                        </a>
                    )}
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-center items-center">
                    <p className="text-accent-muted text-sm font-medium">
                        © {new Date().getFullYear()} {content.hero.name}.
                        <span className="text-white/15 mx-2">·</span>
                        La Habana, Cuba.
                    </p>
                </div>
            </div>
        </footer>
    );
};