import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icon';
import type { ProfileSection } from '../../types/portfolio';

type ProfileProps = Omit<ProfileSection, 'type'>;

export const Profile: React.FC<ProfileProps> = ({ title, icon, text }) => {
    return (
        <section className="section-container">
            <p className="eyebrow mb-4 flex items-center gap-3">
                {icon && <Icon name={icon} className="w-5 h-5" />}
                {title}
            </p>
            <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="max-w-4xl font-display font-medium text-[clamp(1.4rem,3.4vw,2.4rem)] leading-[1.3] tracking-tight text-white"
            >
                {text}
            </motion.p>
        </section>
    );
};
