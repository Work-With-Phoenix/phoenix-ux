import React, { ReactNode } from 'react';

interface ButtonHideProps {
    className?: string;
    onClick?: () => void;
    title?: ReactNode;
}

const Hide: React.FC<ButtonHideProps> = ({ className = '', onClick, title }) => {
    const defaultTailwindClasses = "relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]";

    return (
        <button
            className={`relative ${defaultTailwindClasses} ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

export default Hide;
