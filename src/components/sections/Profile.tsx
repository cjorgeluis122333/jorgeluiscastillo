import React from 'react';
import { motion } from 'framer-motion';

interface ProfileProps {
    title: string;
    text: string;
}

export const Profile: React.FC<ProfileProps> = ({ title, text }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24">
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-3xl text-accent-muted leading-relaxed font-light"
                    >
                        {text}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
