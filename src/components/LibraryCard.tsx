import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Package, ExternalLink } from 'lucide-react';
import { SvgIcon } from './SvgIcon';

interface LibraryCardProps {
    name: string;
    type: string;
    description: string;
    install: string;
    links: {
        github: string;
        npm: string;
        demo: string;
    };
}

export const LibraryCard: React.FC<LibraryCardProps> = ({ name, type, description, install, links }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(install);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="glass-card p-5 md:p-6 border-l-2 border-transparent group-hover:border-accent-secondary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <h3 className="text-[4.5vw] md:text-[clamp(1.2rem,2.5vw,2rem)] font-bold text-white leading-tight font-display">
                    {name}
                </h3>
                <span className="text-[10px] md:text-xs text-accent-secondary font-semibold px-3 py-1 bg-accent-secondary/10 rounded-full border border-accent-secondary/20 w-fit shrink-0">
                    {type}
                </span>
            </div>

            <p className="text-accent-muted leading-relaxed text-[3.5vw] md:text-[clamp(0.95rem,1.6vw,1.1rem)] font-light mb-5">
                {description}
            </p>

            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-lg px-3 py-2 mb-4 font-mono text-[11px] md:text-sm">
                <span className="text-accent-muted select-none shrink-0">$</span>
                <code className="text-accent-secondary flex-1 truncate">{install}</code>
                <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy install command"
                    className="ml-auto shrink-0 p-1.5 rounded-md text-accent-muted hover:text-white hover:bg-white/10 transition-colors duration-150"
                >
                    {copied ? <Check className="w-3.5 h-3.5 text-accent-secondary" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                <motion.a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-accent-muted hover:text-white hover:border-accent-primary/40 hover:bg-white/10 transition-colors duration-150"
                >
                    <SvgIcon name="github" className="w-3.5 h-3.5" />
                    GitHub
                </motion.a>
                <motion.a
                    href={links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-accent-muted hover:text-white hover:border-accent-primary/40 hover:bg-white/10 transition-colors duration-150"
                >
                    <Package className="w-3.5 h-3.5" />
                    npm
                </motion.a>
                <motion.a
                    href={links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-accent-primary/10 border border-accent-primary/20 rounded-lg text-xs text-accent-primary hover:text-white hover:bg-accent-primary/20 transition-colors duration-150"
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo / Docs
                </motion.a>
            </div>
        </div>
    );
};
