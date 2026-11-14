import React from 'react';
import { Icon } from './Icon';

interface SectionHeadingProps {
    title: string;
    /** Solo se muestra si el JSON define `icon` en la sección. */
    icon?: string;
}

/** Título de sección: la última palabra lleva el degradado de texto. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, icon }) => {
    const words = title.trim().split(/\s+/);
    const last = words.length > 1 ? words.pop() : undefined;
    const head = words.join(' ');

    return (
        <h2 className="text-[clamp(2rem,6.5vw,3rem)] font-bold text-white leading-tight tracking-tight mb-8 md:mb-12 flex items-center gap-4">
            {icon && (
                <span className="icon-box w-11 h-11 md:w-12 md:h-12">
                    <Icon name={icon} className="w-5 h-5 md:w-6 md:h-6" />
                </span>
            )}
            <span>
                {last ? (
                    <>
                        {head} <span className="text-gradient">{last}</span>
                    </>
                ) : (
                    <span className="text-gradient">{head}</span>
                )}
            </span>
        </h2>
    );
};
