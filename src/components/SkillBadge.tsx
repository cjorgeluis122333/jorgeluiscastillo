import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
    name: string;
    icon: React.ComponentType<any>;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: Icon }) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.08,
                y: -4,
                boxShadow: '0 0 22px rgba(99, 102, 241, 0.38)',
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent-primary/50 transition-all group cursor-default"
        >
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent-muted group-hover:text-accent-secondary transition-colors duration-150" />
            <span className="text-xs md:text-sm font-medium text-accent-muted group-hover:text-white transition-colors duration-150">{name}</span>
        </motion.div>
    );
};
