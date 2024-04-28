"use client"
// components/Tooltip.js
import { useState } from "react";
import { motion } from "framer-motion";

const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="relative inline-block  w-28 text-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? -10 : -10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute bg-black text-white text-center text-xs rounded-lg py-2 z-10 bottom-full -left-1/2 ml-14 px-3 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {text}
   
        <svg className="absolute text-black h-2 w-full left-0 top-full"  viewBox="0 0 255 255" >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
          </svg>
   
        </motion.div>
      </div>
    </div>
  );
};

export default Tooltip;
