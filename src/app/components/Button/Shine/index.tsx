import React, { ReactNode } from 'react';

interface ButtonShineProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Shine: React.FC<ButtonShineProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "before:ease relative h-[50px] w-40 overflow-hidden border border-blue-500 bg-blue-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Shine;
