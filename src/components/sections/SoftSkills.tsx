import React from 'react';
import { motion } from 'framer-motion';

interface SoftSkillsProps {
    title: string;
    skills: string[];
}

export const SoftSkills: React.FC<SoftSkillsProps> = ({ title, skills }) => {
    return (
        <section className="section-container border-t border-white/5 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-5xl font-bold text-white mb-8 md:sticky md:top-24">
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 15, backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="p-6 glass-card border-none bg-white/5 text-accent-muted font-semibold text-xl"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
