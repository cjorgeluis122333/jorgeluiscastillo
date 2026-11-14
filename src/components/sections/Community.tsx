import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SectionHeading } from '../SectionHeading';
import { LibraryCard } from '../LibraryCard';
import type { CommunitySection } from '../../types/portfolio';

type CommunityProps = Omit<CommunitySection, 'type'> & { copyLabel?: string };

const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export const Community: React.FC<CommunityProps> = ({ title, icon, items, copyLabel }) => {
    return (
        <section className="section-container">
            <SectionHeading title={title} icon={icon} />
            <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
                {items.map((lib, index) => (
                    <motion.div key={index} variants={itemVariants} className="min-w-0 flex">
                        <LibraryCard {...lib} copyLabel={copyLabel} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
