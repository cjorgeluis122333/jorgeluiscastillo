import React from 'react';

interface SvgIconProps {
    src: string;
    className?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({ src, className }) => {
    return (
        <img
            src={src}
            alt="icon"
            className={className}
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.7 }}
        />
    );
};
