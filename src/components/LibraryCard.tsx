import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Package } from 'lucide-react';
import { Icon } from './Icon';
import type { CommunityItem } from '../types/portfolio';

type LibraryCardProps = CommunityItem & { copyLabel?: string };

export const LibraryCard: React.FC<LibraryCardProps> = ({ name, type, description, install, links, copyLabel }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(install ?? '');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    };

    return (
        <div className="glass-card !rounded-[22px] p-5 md:p-7 flex flex-col gap-5 w-full min-w-0">
            <div className="flex items-center gap-4">
                <span className="icon-box w-11 h-11">
                    <Package className="w-[22px] h-[22px]" />
                </span>
                <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight font-display break-words">{name}</h3>
                    {type && <span className="text-[13px] text-accent-secondary font-semibold">{type}</span>}
                </div>
            </div>

            <p className="text-accent-muted leading-relaxed text-base md:text-[1.05rem]">{description}</p>

            {install && (
                <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-2xl pl-4 pr-1.5 py-1.5 font-mono text-[12px] md:text-sm">
                    <span className="text-accent-secondary select-none shrink-0">$</span>
                    <code className="text-zinc-300 flex-1 min-w-0 truncate">{install}</code>
                    <button
                        type="button"
                        onClick={handleCopy}
                        aria-label={copyLabel}
                        title={copyLabel}
                        className="shrink-0 min-w-11 min-h-11 flex items-center justify-center rounded-xl bg-white/5 text-slate-200 hover:bg-white/10 transition-colors duration-150"
                    >
                        {copied ? <Check className="w-[18px] h-[18px] text-accent-secondary" /> : <Copy className="w-[18px] h-[18px]" />}
                    </button>
                </div>
            )}

            {links && links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                    {links.map((link, index) => (
                        <motion.a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className={`min-h-11 px-4 flex items-center gap-2 rounded-xl border text-sm font-semibold transition-colors duration-150 ${
                                index === links.length - 1 && links.length > 1
                                    ? 'bg-accent-primary/15 border-accent-primary/30 text-indigo-200 hover:bg-accent-primary/25 hover:text-white'
                                    : 'bg-white/5 border-white/10 text-slate-200 hover:border-accent-primary/40 hover:bg-white/10'
                            }`}
                        >
                            <Icon name={link.icon} className="w-4 h-4" />
                            {link.label}
                        </motion.a>
                    ))}
                </div>
            )}
        </div>
    );
};
