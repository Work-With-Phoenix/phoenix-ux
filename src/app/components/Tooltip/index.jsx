"use client"
// components/Tooltip.js
import { useState } from "react";
import { motion } from "framer-motion";

const Tooltip = ({ text, children,direction }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipPositionClasses = () => {
    switch (direction) {
      case "top":
        return "bg-black absolute bottom-full -left-1/2 z-20 ml-14  -translate-x-1/2 whitespace-nowrap rounded-[5px] py-1.5 px-3.5 text-sm text-white";
      case "right":
        return "bg-black absolute left-full top-1/2 z-20 ml-2 -mt-1 -translate-y-1/2 whitespace-nowrap rounded-[5px] py-1.5 px-3.5 text-sm text-white";
      case "bottom":
        return "bg-black absolute top-full left-1/2 z-20 mt-3 -ml-14 -translate-x-1/2 whitespace-nowrap rounded-[5px] py-1.5 px-3.5 text-sm text-white";
      case "left":
        return "bg-black absolute right-full top-1/2 z-20 mr-1 -mt-1 -translate-y-1/2 whitespace-nowrap rounded-[5px] py-1.5 px-3.5 text-sm text-white";
      default:
        return "bg-black absolute bottom-full -left-1/2 z-20 ml-14  -translate-x-1/2 whitespace-nowrap rounded-[5px] py-1.5 px-3.5 text-sm text-white";
    }
  };
  const arrowTransform = () => {
    switch (direction) {
      case "top":
        return "bg-black absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45";
      case "right":
        return "bg-black absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 ";
      case "bottom ":
        return "bg-black absolute top-[-4px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45";
      case "left":
        return "bg-black absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45";
      default:
        return "";
    }
  };

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
          className={`absolute px-3 bg-black text-white text-center text-xs rounded-lg py-2 z-10  ${tooltipPositionClasses()} ${isHovered ? 'opacity-100 block' : 'hidden opacity-0'}`}
        >
          {text}
   
          <span
                        className={`${arrowTransform()}`}
                        ></span>
   
        </motion.div>
      </div>
    </div>
  );
};

export default Tooltip;
