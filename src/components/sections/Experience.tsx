import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { ExperienceCard } from '../ExperienceCard';

interface ExperienceProps {
    title: string;
    experiences: {
        company: string;
        role: string;
        period: string;
        achievements: string[];
    }[];
}

const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.22 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -18 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' as const },
    },
};

export const Experience: React.FC<ExperienceProps> = ({ title, experiences }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24 flex items-center gap-4 md:gap-5">
                        <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" />
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <motion.div
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Vertical timeline line */}
                        <div
                            className="absolute left-[5px] top-6 bottom-6 w-px hidden md:block"
                            style={{ background: 'linear-gradient(to bottom, rgba(99,102,241,0.55), rgba(34,211,238,0.25), transparent)' }}
                        />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative md:pl-10 group mb-8 last:mb-0"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-[1px] top-[26px] w-[9px] h-[9px] rounded-full bg-accent-primary border-2 border-background hidden md:block z-10 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
                                <ExperienceCard {...exp} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
