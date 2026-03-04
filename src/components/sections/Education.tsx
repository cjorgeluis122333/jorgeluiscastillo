import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
    title: string;
    education: {
        degree: string;
        institution: string;
    };
}

export const Education: React.FC<EducationProps> = ({ title, education }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24 flex items-center gap-4 md:gap-5">
                        <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" />
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-4">{education.degree}</h3>
                        <p className="text-xl md:text-2xl text-accent-secondary font-medium">{education.institution}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
