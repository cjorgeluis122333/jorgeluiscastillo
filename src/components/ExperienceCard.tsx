import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceCardProps {
    company: string;
    role: string;
    period: string;
    achievements: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, achievements }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 mb-6"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{role}</h3>
                    <p className="text-accent-secondary font-medium">{company}</p>
                </div>
                <span className="text-sm text-accent-muted mt-2 md:mt-0 font-medium px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    {period}
                </span>
            </div>
            <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-accent-muted leading-relaxed">
                        <span className="mr-3 text-accent-primary mt-1.5">•</span>
                        {achievement}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};
