import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Icon } from '../Icon';
import type { EducationSection } from '../../types/portfolio';

type EducationProps = Omit<EducationSection, 'type'>;

export const Education: React.FC<EducationProps> = ({ title, icon, items }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24 flex items-center gap-4 md:gap-5">
                        <Icon name={icon ?? 'lucide:graduation-cap'} className="shrink-0 w-8 h-8 md:w-10 md:h-10 text-accent-primary" />
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8 space-y-6">
                    {items.map((education, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="glass-card p-6 md:p-8"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                                <h3 className="text-[4vw] md:text-[clamp(1.1rem,2.2vw,1.6rem)] font-bold text-white leading-snug">
                                    {education.degree}
                                </h3>
                                {education.status && (
                                    <span className="text-[10px] md:text-xs text-accent-primary font-semibold px-3 py-1 bg-accent-primary/10 rounded-full border border-accent-primary/20 w-fit shrink-0">
                                        {education.status}
                                    </span>
                                )}
                            </div>
                            <p className="text-accent-muted text-[3vw] md:text-[clamp(0.85rem,1.6vw,1rem)] flex items-center gap-2">
                                <MapPin className="w-4 h-4 shrink-0 text-accent-primary" />
                                {education.institution}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
