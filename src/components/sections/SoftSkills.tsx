import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SectionHeading } from '../SectionHeading';
import type { SoftSkillsSection } from '../../types/portfolio';

type SoftSkillsProps = Omit<SoftSkillsSection, 'type'>;

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const SoftSkills: React.FC<SoftSkillsProps> = ({ title, icon, items }) => {
    return (
        <section className="section-container">
            <SectionHeading title={title} icon={icon} />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
            >
                {items.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ x: 6 }}
                        className="glass-card !rounded-2xl p-4 md:p-5 text-zinc-300 text-base md:text-[1.05rem] leading-snug flex items-start gap-3.5"
                    >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary shrink-0" />
                        <span>{skill}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
