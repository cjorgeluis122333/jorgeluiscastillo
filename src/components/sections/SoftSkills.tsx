import React from 'react';
import { motion } from 'framer-motion';

interface SoftSkillsProps {
    title: string;
    skills: string[];
}

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }}
                                className="p-3 md:p-6 glass-card border-none bg-white/5 text-accent-muted font-light text-[3.5vw] md:text-[clamp(1rem,1.8vw,1.3rem)] transition-colors duration-300 hover:text-white"
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
