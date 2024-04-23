import React, { ReactNode } from 'react';

interface SwipeProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Swipe: React.FC<SwipeProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "text-red-500 hover:before:bg-red-500 border-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Swipe;
