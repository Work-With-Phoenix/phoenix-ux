import React, { ReactNode } from 'react';

interface ButtonCircleProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Circle: React.FC<ButtonCircleProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Circle;
