import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
    content: {
        name: string;
        role: string;
        description: string;
        contact: {
            icon: React.ComponentType<any>;
            label: string;
            url: string;
        }[];
    };
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
    return (
        <section className="section-container min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
            >
                <span className="inline-block px-4 py-1 mb-6 md:mb-8 text-xs md:text-sm font-semibold tracking-wider text-accent-primary uppercase bg-accent-primary/10 rounded-full border border-accent-primary/20">
                    {content.role}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-9xl font-bold mb-6 md:mb-8 text-white leading-[1.1] tracking-tighter">
                    Jorge Luis <span className="text-gradient">Castillo Vidal</span>
                </h1>
                <p className="text-lg md:text-3xl text-accent-muted mb-8 md:mb-12 leading-relaxed font-light max-w-2xl">
                    {content.description}
                </p>

                <div className="flex flex-wrap gap-3 md:gap-5">
                    {content.contact.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                            className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 glass-card text-white font-semibold text-base md:text-lg"
                        >
                            <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-secondary" />
                            <span>{item.label}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
