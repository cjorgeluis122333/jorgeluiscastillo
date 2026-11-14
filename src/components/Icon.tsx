import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';

/**
 * Resuelve un icono a partir de un nombre en texto (el que se escribe en portfolio.json).
 *
 *  1. `"lucide:mail"`        -> icono de Lucide (https://lucide.dev/icons, nombre en kebab-case).
 *  2. `"git"`                -> fichero `src/assets/icons/git.svg` (o .png). Basta con soltar el fichero ahí.
 *  3. `"kotlin"`             -> marca de Simple Icons (https://simpleicons.org), se pide al CDN al vuelo.
 *  4. `"https://..."`/`"/x"` -> URL directa de una imagen SVG/PNG.
 *  Si no se encuentra, se muestra un icono genérico.
 */

interface IconProps {
    name?: string;
    className?: string;
}

const LOCAL_ICONS: Record<string, string> = Object.fromEntries(
    Object.entries(
        import.meta.glob('../assets/icons/*.{svg,png}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>,
    ).map(([file, url]) => [file.split('/').pop()!.replace(/\.[^.]+$/, '').toLowerCase(), url]),
);

const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org/';

const Fallback: React.FC<{ className?: string }> = ({ className }) => <Code className={className} />;

/** Pinta una imagen como máscara para que tome el color del texto (`currentColor`) y reaccione al hover. */
const MaskIcon: React.FC<{ url: string; className?: string }> = ({ url, className }) => {
    const mask = `url("${url}") center / contain no-repeat`;
    return (
        <span
            aria-hidden="true"
            className={`${className ?? ''} inline-block shrink-0`}
            style={{ backgroundColor: 'currentColor', mask, WebkitMask: mask }}
        />
    );
};

/** Igual que MaskIcon, pero cae al icono genérico si la imagen no existe o no carga. */
const RemoteIcon: React.FC<{ url: string; className?: string }> = ({ url, className }) => {
    const [failed, setFailed] = useState(false);
    if (failed) return <Fallback className={className} />;
    return (
        <>
            <MaskIcon url={url} className={className} />
            <img src={url} alt="" hidden onError={() => setFailed(true)} />
        </>
    );
};

export const Icon: React.FC<IconProps> = ({ name, className }) => {
    if (!name) return null;

    if (name.startsWith('lucide:')) {
        return (
            <DynamicIcon
                name={name.slice(7) as IconName}
                className={className}
                fallback={() => <Fallback className={className} />}
            />
        );
    }

    if (/^(https?:)?\/\//.test(name) || name.startsWith('/')) {
        return <RemoteIcon url={name} className={className} />;
    }

    const localUrl = LOCAL_ICONS[name.toLowerCase()];
    if (localUrl) return <MaskIcon url={localUrl} className={className} />;

    return <RemoteIcon url={`${SIMPLE_ICONS_CDN}${encodeURIComponent(name.toLowerCase())}`} className={className} />;
};
