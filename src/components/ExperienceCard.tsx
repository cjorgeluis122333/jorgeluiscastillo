import React from 'react';
import { Icon } from './Icon';
import type { ExperienceItem } from '../types/portfolio';

export const ExperienceCard: React.FC<ExperienceItem> = ({ company, role, period, achievements, techs }) => {
    return (
        <div className="glass-card !rounded-[22px] p-5 md:p-8 flex flex-col gap-5">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                <div>
                    <h3 className="text-[clamp(1.3rem,3.2vw,1.75rem)] font-bold text-white leading-tight mb-1">{company}</h3>
                    <p className="text-accent-muted text-base md:text-lg">{role}</p>
                </div>
                <span className="font-mono text-xs text-indigo-200 px-3 py-1.5 bg-accent-primary/20 rounded-full w-fit shrink-0">
                    {period}
                </span>
            </div>
            <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3.5 text-zinc-300 leading-relaxed text-base md:text-[1.05rem]">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-[2px] bg-accent-secondary shrink-0" />
                        {achievement}
                    </li>
                ))}
            </ul>
            {techs && techs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                        <span
                            key={tech.name}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-[10px] text-xs md:text-[13px] font-semibold text-slate-300 hover:text-white hover:border-accent-primary/40 transition-colors duration-150 cursor-default"
                        >
                            <Icon name={tech.icon} className="w-3.5 h-3.5 shrink-0" />
                            {tech.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
