import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
    name: string;
    icon: React.ComponentType<any>;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon: Icon }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-accent-primary/50 transition-all group"
        >
            <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent-muted group-hover:text-accent-primary transition-colors" />
            <span className="text-xs md:text-sm font-medium text-accent-muted group-hover:text-white transition-colors">{name}</span>
        </motion.div>
    );
};
