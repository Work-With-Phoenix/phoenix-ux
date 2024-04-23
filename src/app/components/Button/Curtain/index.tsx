import React, { ReactNode } from 'react';

interface ButtonCurtainProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Curtain: React.FC<ButtonCurtainProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Curtain;
