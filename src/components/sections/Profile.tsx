import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import type { ProfileSection } from '../../types/portfolio';

type ProfileProps = Omit<ProfileSection, 'type'>;

export const Profile: React.FC<ProfileProps> = ({ title, icon, text }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24 flex items-center gap-4 md:gap-5">
                        {icon && <Icon name={icon} className="shrink-0 w-8 h-8 md:w-10 md:h-10 text-accent-primary" />}
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[3.5vw] md:text-[clamp(1rem,2vw,1.5rem)] text-accent-muted leading-relaxed font-light"
                    >
                        {text}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
