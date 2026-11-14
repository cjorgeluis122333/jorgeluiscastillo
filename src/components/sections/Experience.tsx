import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SectionHeading } from '../SectionHeading';
import { ExperienceCard } from '../ExperienceCard';
import type { ExperienceSection } from '../../types/portfolio';

type ExperienceProps = Omit<ExperienceSection, 'type'>;

const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.22 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const Experience: React.FC<ExperienceProps> = ({ title, icon, items }) => {
    return (
        <section className="section-container">
            <SectionHeading title={title} icon={icon} />
            <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
            >
                {/* Vertical timeline line */}
                <div
                    className="absolute left-[5px] top-2 bottom-2 w-0.5"
                    style={{ background: 'linear-gradient(to bottom, #6366f1, #22d3ee, transparent)' }}
                />

                {items.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-10 group mb-6 last:mb-0">
                        {/* Timeline dot */}
                        <div className="absolute left-[1px] top-[30px] w-[10px] h-[10px] rounded-full bg-accent-secondary z-10 shadow-[0_0_0_4px_rgba(34,211,238,0.18),0_0_14px_#22d3ee] transition-transform duration-300 group-hover:scale-150" />
                        <ExperienceCard {...exp} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
