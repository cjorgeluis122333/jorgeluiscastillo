import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface SoftSkillsProps {
    title: string;
    skills: string[];
}

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -18 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const },
    },
};

export const SoftSkills: React.FC<SoftSkillsProps> = ({ title, skills }) => {
    return (
        <section className="section-container border-t border-white/5 mb-16 md:mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24">
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ x: 6 }}
                                className="p-4 md:p-5 glass-card border-l-2 border-accent-primary/25 hover:border-accent-primary/70 text-accent-muted font-light text-[3.5vw] md:text-[clamp(1rem,1.8vw,1.2rem)] transition-all duration-300 hover:text-white flex items-center gap-3"
                            >
                                <span className="text-accent-primary shrink-0 font-bold text-base leading-none">&rsaquo;</span>
                                <span>{skill}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
