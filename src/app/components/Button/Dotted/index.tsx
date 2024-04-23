import React, { ReactNode } from 'react';

interface ButtonDottedProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Dotted: React.FC<ButtonDottedProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = " border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]  hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px]  active:shadow-none";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Dotted;
