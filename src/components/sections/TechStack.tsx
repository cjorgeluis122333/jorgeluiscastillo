import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Code, Server, Smartphone, Database, Cloud, Wrench } from 'lucide-react';
import { SkillBadge } from '../SkillBadge';

interface TechStackProps {
    title: string;
    toolsTitle: string;
    groups: {
        title: string;
        skills: {
            name: string;
            icon: React.ComponentType<any>;
        }[];
    }[];
    tools: {
        name: string;
        icon: React.ComponentType<any>;
    }[];
}

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    'Frontend': Code,
    'Backend': Server,
    'Mobile (Android)': Smartphone,
    'Mobile': Smartphone,
    'Bases de Datos & Cach\u00e9': Database,
    'Databases & Cache': Database,
    'DevOps & Cloud': Cloud,
};

const groupVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut' as const,
            staggerChildren: 0.06,
        },
    },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.82, y: 10 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.32, ease: 'easeOut' as const },
    },
};

export const TechStack: React.FC<TechStackProps> = ({ title, toolsTitle, groups, tools }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24 flex items-center gap-4 md:gap-5">
                        <Code className="block md:hidden shrink-0 w-8 h-8 text-accent-primary" />
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8 space-y-12 md:space-y-20">
                    {groups.map((group, index) => {
                        const CategoryIcon = CATEGORY_ICONS[group.title];
                        return (
                            <motion.div
                                key={index}
                                variants={groupVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                            >
                                <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-10 pb-4 border-b border-accent-secondary/20 flex items-center gap-3">
                                    {CategoryIcon && (
                                        <CategoryIcon className="w-5 h-5 md:w-6 md:h-6 text-accent-secondary shrink-0" />
                                    )}
                                    <span className="text-gradient">{group.title}</span>
                                </h3>
                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    {group.skills.map((skill, sIndex) => (
                                        <motion.div key={sIndex} variants={badgeVariants}>
                                            <SkillBadge {...skill} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}

                    <motion.div
                        variants={groupVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                    >
                        <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-10 pb-4 border-b border-accent-secondary/20 flex items-center gap-3">
                            <Wrench className="w-5 h-5 md:w-6 md:h-6 text-accent-secondary shrink-0" />
                            <span className="text-gradient">{toolsTitle}</span>
                        </h3>
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            {tools.map((tool, index) => (
                                <motion.div key={index} variants={badgeVariants}>
                                    <SkillBadge {...tool} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
