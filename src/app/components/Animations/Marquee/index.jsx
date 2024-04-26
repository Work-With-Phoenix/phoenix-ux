"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ direction = 'left', speed = 'ease', duration = 30, className = '', gap = '1.25rem', children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;

    let animationId;
    let scrollDirection = direction === 'right' ? 1 : -1;

    const animateScroll = () => {
      const distance =
        direction === 'left' ? contentWidth - containerWidth : direction === 'right' ? containerWidth : 0;
      const scrollProperty = direction === 'up' || direction === 'down' ? 'scrollTop' : 'scrollLeft';

      animationId = requestAnimationFrame(() => {
        container.scrollTo({
          [scrollProperty]: container[scrollProperty] + scrollDirection,
        });

        if (container[scrollProperty] === distance) {
          container.scrollTo({ [scrollProperty]: 0 });
        }
      });
    };

    const intervalId = setInterval(animateScroll, speed === 'ease' ? 60 : 30);

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed]);

  return (
    <div className={`marquee overflow-hidden ${direction === 'up' || direction === 'down' ? 'flex-col' : 'flex-row'} ${className}`} style={{ width: '100%' }}>
      <motion.div
        ref={containerRef}
        style={{ display: 'flex', whiteSpace: 'nowrap', columnGap: gap }}
        initial={{ x: direction === 'left' ? 0 : '100%' }}
        animate={{ x: direction === 'left' ? '100%' : 0, transition: { duration, repeat: Infinity, ease: 'linear' } }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
