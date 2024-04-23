import React, { ReactNode } from 'react';

interface ButtonSkewProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Skew: React.FC<ButtonSkewProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Skew;
