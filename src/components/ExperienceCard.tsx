import React from 'react';

interface ExperienceCardProps {
    company: string;
    role: string;
    period: string;
    achievements: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, role, period, achievements }) => {
    return (
        <div className="glass-card p-5 md:p-6 border-l-2 border-transparent group-hover:border-accent-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                    <h3 className="text-[4.5vw] md:text-[clamp(1.2rem,2.5vw,2rem)] font-bold text-white mb-1.5 leading-tight">
                        {role}
                    </h3>
                    <p className="text-accent-secondary font-semibold text-[3vw] md:text-[clamp(0.9rem,1.8vw,1.2rem)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary inline-block shrink-0" />
                        {company}
                    </p>
                </div>
                <span className="text-[10px] md:text-xs text-accent-primary mt-2 md:mt-0 font-semibold px-3 py-1 bg-accent-primary/10 rounded-full border border-accent-primary/20 w-fit shrink-0">
                    {period}
                </span>
            </div>
            <ul className="space-y-2 md:space-y-3 pt-4 border-t border-white/5">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-accent-muted leading-relaxed text-[3.5vw] md:text-[clamp(1rem,2vw,1.4rem)] font-light">
                        <span className="mr-3 text-accent-primary mt-1.5 shrink-0">›</span>
                        {achievement}
                    </li>
                ))}
            </ul>
        </div>
    );
};
