import React, { ReactNode } from 'react';

interface ButtonSmooshProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Smoosh: React.FC<ButtonSmooshProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Smoosh;
