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
        <section className="section-container min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl w-full"
            >
                <span className="inline-block px-4 py-1.5 mb-10 md:mb-12 text-[10px] md:text-sm font-semibold tracking-wider text-accent-primary uppercase bg-accent-primary/10 rounded-full border border-accent-primary/20">
                    {content.role}
                </span>

                {/* 
          CALIBRACIÓN GLOBAL FINAL:
          - text-[8.5vw]: Perfecto para móvil (265px+).
          - md:text-[clamp(4rem,6vw,8.5rem)]: Reducimos el tope de 9.5rem a 8.5rem y el factor de escala de 7vw a 6vw para evitar desbordes en escritorio.
          - Mantener whitespace-nowrap y py-2 para asegurar línea única sin cortes.
        */}
                <h1 className="text-[8.5vw] md:text-[clamp(4rem,6vw,8.5rem)] font-bold mb-10 md:mb-12 text-white leading-none tracking-tighter whitespace-nowrap py-2">
                    Jorge Luis <span className="text-gradient">Castillo Vidal</span>
                </h1>

                <p className="text-[3.5vw] md:text-[clamp(1rem,2vw,1.5rem)] text-accent-muted mb-12 md:mb-20 leading-relaxed font-light max-w-3xl mx-auto px-4">
                    {content.description}
                </p>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-6 justify-center w-full max-w-2xl mx-auto px-4">
                    {content.contact.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                            className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-6 py-3 md:py-4 glass-card text-white font-semibold text-[10px] sm:text-sm md:text-lg"
                        >
                            <item.icon className="w-4 h-4 md:w-6 md:h-6 text-accent-secondary shrink-0" />
                            <span className="truncate">{item.label}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
