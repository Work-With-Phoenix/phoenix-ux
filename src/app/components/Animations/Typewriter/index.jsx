"use client"
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Typewriter = ({ text, delay, className, cursorClassName }) => {
  const displayRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const displayElement = displayRef.current;
    const cursorElement = cursorRef.current;
    const textArray = text.split("");
    let index = 0;

    const interval = setInterval(() => {
      if (index < textArray.length) {
        gsap.set(displayElement, { textContent: textArray.slice(0, index + 1).join("") });
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    // Create blinking cursor animation
    const cursorTimeline = gsap.timeline({ repeat: -1 });
    cursorTimeline.to(cursorElement, { opacity: 0, duration: 0.5, ease: "power1.inOut" })
                 .to(cursorElement, { opacity: 1, duration: 0.5, ease: "power1.inOut" });

    return () => {
      clearInterval(interval);
      cursorTimeline.kill();
    };
  }, [text, delay]);

  // Merge default and custom classes for the main container and cursor element
  const mergedContainerClasses = `inline-block relative ${className}`;
  const mergedCursorClasses = `absolute ml-1 bottom-1 w-0.5 h-4 bg-black after:block after:w-0.5 after:h-4 after:bg-black ${cursorClassName}`;

  return (
    <div className={mergedContainerClasses}>
      <span ref={displayRef}></span>
      <span ref={cursorRef} className={mergedCursorClasses}></span>
    </div>
  );
};

export default Typewriter;
