import React from 'react';
import { motion, type Variants } from 'framer-motion';

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

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: 'easeOut' as const },
    },
};

const buttonContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.09 },
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: 'easeOut' as const },
    },
};

export const Hero: React.FC<HeroProps> = ({ content }) => {
    const nameParts = content.name.split(' ');
    const firstName = nameParts.slice(0, 2).join(' ');
    const lastName = nameParts.slice(2).join(' ');

    return (
        <section className="section-container min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden relative">
            {/* Pulsing radial glow — signature element */}
            <div
                className="absolute pointer-events-none"
                style={{
                    top: '50%',
                    left: '50%',
                    width: '80vw',
                    maxWidth: '720px',
                    height: '320px',
                    background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, rgba(34,211,238,0.07) 45%, transparent 70%)',
                    animation: 'hero-glow 5s ease-in-out infinite',
                    zIndex: 0,
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl w-full relative z-10"
            >
                {/* Role badge */}
                <motion.div variants={itemVariants}>
                    <span className="inline-block px-4 py-1.5 mb-10 md:mb-12 text-[10px] md:text-sm font-semibold tracking-widest text-accent-primary uppercase bg-accent-primary/10 rounded-full border border-accent-primary/30">
                        {content.role}
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-[8.5vw] md:text-[clamp(4rem,6vw,8.5rem)] font-bold mb-10 md:mb-12 text-white leading-none tracking-tighter whitespace-nowrap py-2"
                >
                    {firstName}{' '}
                    <span className="text-gradient">{lastName}</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-[3.5vw] md:text-[clamp(1rem,2vw,1.5rem)] text-accent-muted mb-12 md:mb-20 leading-relaxed font-light max-w-3xl mx-auto px-4"
                >
                    {content.description}
                </motion.p>

                {/* Contact buttons */}
                <motion.div
                    variants={buttonContainerVariants}
                    className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 md:gap-6 justify-center w-full max-w-2xl mx-auto px-4"
                >
                    {content.contact.map((item, index) => (
                        <motion.a
                            key={index}
                            variants={buttonVariants}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center justify-center gap-2 md:gap-3 px-3 md:px-6 py-3 md:py-4 glass-card text-white font-semibold text-[10px] sm:text-sm md:text-lg hover:border-accent-primary/40 hover:shadow-[0_0_24px_rgba(99,102,241,0.22)] transition-all"
                        >
                            <item.icon className="w-4 h-4 md:w-6 md:h-6 text-accent-secondary shrink-0" />
                            <span className="truncate">{item.label}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
