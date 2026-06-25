import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

interface EducationProps {
    title: string;
    education: {
        degree: string;
        institution: string;
        institutionPrefix: string;
        icon?: React.ComponentType<any>;
        status: string;
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="glass-card p-6 md:p-10 border-l-4 border-accent-primary/40 hover:border-accent-primary/70 transition-all duration-300"
                    >
                        {/* Status badge */}
                        <div className="mb-5">
                            <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-semibold tracking-widest text-accent-secondary uppercase bg-accent-secondary/10 rounded-full px-3 py-1 border border-accent-secondary/25">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary animate-pulse" />
                                {education.status}
                            </span>
                        </div>

                        {/* Degree */}
                        <h3 className="text-[4vw] md:text-[clamp(1.1rem,2.2vw,1.6rem)] font-bold text-white leading-snug mb-5">
                            {education.degree}
                        </h3>

                        {/* Gradient divider */}
                        <div className="w-14 h-[2px] rounded-full mb-5" style={{ background: 'linear-gradient(to right, #6366f1, #22d3ee)' }} />

                        {/* Institution */}
                        <p className="text-accent-secondary font-medium text-[3vw] md:text-[clamp(0.9rem,1.8vw,1.1rem)] flex items-start gap-2">
                            <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent-muted" />
                            {education.institution}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
