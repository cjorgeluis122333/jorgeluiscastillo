import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceCard } from '../ExperienceCard';

interface ExperienceProps {
    title: string;
    experiences: {
        company: string;
        role: string;
        period: string;
        achievements: string[];
    }[];
}

export const Experience: React.FC<ExperienceProps> = ({ title, experiences }) => {
    return (
        <section className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <div className="md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:sticky md:top-24 flex items-center gap-4 md:gap-5">
                        <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-accent-primary" />
                        {title}
                    </h2>
                </div>
                <div className="md:col-span-8">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};
