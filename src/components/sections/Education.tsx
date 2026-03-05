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
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10 }}
                        className="md:glass-card md:p-10 lg:p-12 py-2 group cursor-default"
                    >
                        <p className="text-[3.5vw] md:text-[clamp(1rem,2vw,1.5rem)] text-accent-muted leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                            {education.degree} en la {education.institution}.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
