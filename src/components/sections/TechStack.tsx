import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SkillBadge } from '../SkillBadge';
import { SectionHeading } from '../SectionHeading';
import { Icon } from '../Icon';
import type { TechStackSection } from '../../types/portfolio';

type TechStackProps = Omit<TechStackSection, 'type'>;

const groupVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const, staggerChildren: 0.05 },
    },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

export const TechStack: React.FC<TechStackProps> = ({ title, icon, groups }) => {
    return (
        <section className="section-container">
            <SectionHeading title={title} icon={icon} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {groups.map((group, index) => (
                    <motion.div
                        key={index}
                        variants={groupVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        className="glass-card !rounded-[22px] p-5 md:p-6 flex flex-col gap-5"
                    >
                        <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-3">
                            {group.icon && (
                                <span className="icon-box w-9 h-9">
                                    <Icon name={group.icon} className="w-[18px] h-[18px]" />
                                </span>
                            )}
                            {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-2.5">
                            {group.skills.map((skill, sIndex) => (
                                <motion.div key={sIndex} variants={badgeVariants}>
                                    <SkillBadge {...skill} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
