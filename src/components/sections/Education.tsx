import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import type { EducationSection } from '../../types/portfolio';

type EducationProps = Omit<EducationSection, 'type'>;

export const Education: React.FC<EducationProps> = ({ title, icon, items }) => {
    return (
        <section className="section-container">
            <SectionHeading title={title} icon={icon} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((education, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="glass-card !rounded-[22px] p-6 md:p-8 flex flex-col gap-4"
                    >
                        <h3 className="text-[clamp(1.3rem,3vw,1.7rem)] font-bold text-white leading-snug tracking-tight">
                            {education.degree}
                        </h3>
                        <p className="text-accent-muted text-base flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-1 shrink-0 text-accent-secondary" />
                            {education.institution}
                        </p>
                        {education.status && (
                            <span className="text-[13px] font-bold px-3.5 py-1.5 rounded-full bg-accent-secondary/15 text-accent-secondary w-fit">
                                {education.status}
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
