import React from 'react';



const Center = ({ className = '',  title }) => {
    const defaultTailwindClasses = "relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
            
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};



const Circle = ({ className = '',  title }) => {
    const defaultTailwindClasses = "relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
            
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

const Curtain = ({ className = '',  title }) => {
    const defaultTailwindClasses = "relative h-[50px] w-40 overflow-hidden border border-pink-400 bg-white text-pink-400 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-pink-400 hover:before:w-2/4 hover:before:bg-pink-400 hover:after:w-2/4 hover:after:bg-pink-400";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
            
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

const Hide = ({ className = '',  title }) => {
    const defaultTailwindClasses = "relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
            
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};

const Shine = ({ className = '', title }) => {
    const defaultTailwindClasses = "before:ease relative h-[50px] w-40 overflow-hidden border border-blue-500 bg-blue-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-40";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
           
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};
const Dotted = ({ className = '', title }) => {
    const defaultTailwindClasses = " border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]  hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px]  active:shadow-none";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
           
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};
const Swipe = ({ className = '', title }) => {
    const defaultTailwindClasses = "text-red-500 hover:before:bg-red-500 border-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
           
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};
const Slide = ({ className = '', title }) => {
    const defaultTailwindClasses = "before:ease relative h-12 w-40 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
           
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};
const Skew = ({ className = '', title }) => {
    const defaultTailwindClasses = "before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
           
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};
const Smoosh = ({ className = '', title }) => {
    const defaultTailwindClasses = "relative h-[50px] w-40 overflow-hidden border border-green-900 bg-white text-green-900 shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-green-900 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-green-900 after:duration-500 hover:text-white hover:shadow-green-900 hover:before:h-2/4 hover:after:h-2/4";

    return (
        <button
        className={`relative ${defaultTailwindClasses} ${className || ''}`}
           
        >
            <span className="relative z-10">{title}</span>
        </button>
    );
};
export default {Center, Circle,Curtain, Hide,Shine,Dotted,Swipe,Smoosh,Skew,Slide};


