import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Icon } from '../Icon';
import { CodeCard } from '../CodeCard';
import type { Hero as HeroContent } from '../../types/portfolio';

interface HeroProps {
    content: HeroContent;
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const buttonContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export const Hero: React.FC<HeroProps> = ({ content }) => {
    // La segunda mitad del nombre (mín. 1 palabra) se resalta con el gradiente.
    const nameParts = content.name.trim().split(/\s+/);
    const highlightCount = Math.max(1, Math.floor(nameParts.length / 2));
    const firstName = nameParts.slice(0, nameParts.length - highlightCount).join(' ');
    const lastName = nameParts.slice(nameParts.length - highlightCount).join(' ');
    const stats = content.stats ?? [];
    const lastContact = content.contact.length - 1;

    return (
        <section id="top" className="section-container relative overflow-hidden pt-10 md:pt-20">
            {/* Pulsing radial glow — signature element */}
            <div
                className="absolute pointer-events-none -left-[10%] top-[5%] w-[560px] max-w-[90vw] h-[560px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent 65%)',
                    animation: 'hero-glow 5s ease-in-out infinite',
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14"
            >
                <div className="flex-1 min-w-0 flex flex-col gap-6 md:gap-7">
                    <motion.div variants={itemVariants}>
                        <span className="glass-card !rounded-full inline-flex items-center gap-2.5 px-4 py-2 text-xs md:text-sm font-semibold text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_#22d3ee]" />
                            {content.role}
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-[11vw] sm:text-[clamp(2.75rem,8vw,5.25rem)] font-bold text-white leading-[1] tracking-tighter"
                    >
                        {firstName}
                        {firstName && <br />}
                        <span className="text-gradient">{lastName}</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-base md:text-xl text-accent-muted leading-relaxed max-w-xl"
                    >
                        {content.description}
                    </motion.p>

                    <motion.div variants={buttonContainerVariants} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                        {content.contact.map((item, index) => (
                            <motion.a
                                key={index}
                                variants={buttonVariants}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.97 }}
                                className={
                                    index === lastContact && content.contact.length > 1
                                        ? 'btn-gradient text-sm md:text-base'
                                        : 'glass-card !rounded-2xl min-h-12 px-4 md:px-5 flex items-center justify-center gap-2.5 text-white font-semibold text-sm md:text-base hover:border-accent-primary/40'
                                }
                            >
                                <Icon name={item.icon} className="w-5 h-5 shrink-0" />
                                <span className="truncate">{item.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {content.code && (
                    <motion.div variants={itemVariants} className="lg:flex-1 min-w-0 lg:max-w-md">
                        <CodeCard {...content.code} />
                    </motion.div>
                )}
            </motion.div>

            {stats.length > 0 && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative z-10 mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div key={index} variants={itemVariants} className="glass-card !rounded-[20px] p-4 md:p-6">
                            <div className="text-gradient font-display font-bold text-3xl md:text-5xl leading-tight inline-block">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-base text-accent-muted mt-1 leading-snug">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </section>
    );
};
