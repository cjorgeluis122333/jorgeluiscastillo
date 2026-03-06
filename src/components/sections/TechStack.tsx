import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
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
                    {groups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-lg md:text-2xl font-bold text-accent-secondary mb-6 md:mb-10 pb-4 border-b border-accent-secondary/20">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 md:gap-5">
                                {group.skills.map((skill, sIndex) => (
                                    <SkillBadge key={sIndex} {...skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg md:text-2xl font-bold text-accent-secondary mb-6 md:mb-10 pb-4 border-b border-accent-secondary/20">
                            {toolsTitle}
                        </h3>
                        <div className="flex flex-wrap gap-3 md:gap-5">
                            {tools.map((tool, index) => (
                                <SkillBadge key={index} {...tool} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
