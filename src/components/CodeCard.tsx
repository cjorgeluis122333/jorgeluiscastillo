import React from 'react';
import type { HeroCode } from '../types/portfolio';

// Resalta cadenas, números y declaraciones; el resto se pinta como texto normal.
const TOKEN = /("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|(\b(?:const|let|var)\b)/g;

const highlight = (line: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let last = 0;
    for (const match of line.matchAll(TOKEN)) {
        const index = match.index ?? 0;
        if (index > last) parts.push(line.slice(last, index));
        const color = match[1] ? 'text-accent-secondary' : match[2] ? 'text-amber-400' : 'text-indigo-400';
        parts.push(
            <span key={index} className={color}>
                {match[0]}
            </span>,
        );
        last = index + match[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return parts;
};

/** Ventana decorativa con un fragmento de código; todo el texto viene del JSON. */
export const CodeCard: React.FC<HeroCode> = ({ file, lines }) => (
    <div className="glass-card !rounded-3xl overflow-hidden shadow-glow-primary" aria-hidden="true">
        <div className="flex items-center gap-2 px-4 py-3.5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
            <span className="ml-2 font-mono text-xs text-accent-muted">{file}</span>
        </div>
        <pre className="m-0 px-5 py-5 font-mono text-[12.5px] md:text-sm leading-[1.85] text-slate-300 overflow-x-auto">
            {lines.map((line, index) => (
                <div key={index}>{highlight(line)}</div>
            ))}
        </pre>
    </div>
);
