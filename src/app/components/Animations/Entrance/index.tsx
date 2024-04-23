"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface GlobalEntranceAnimationProps {
  children: ReactNode;
  duration: number;
  delay: number;
  distance: number;
  direction: 'left' | 'right' | 'up' | 'down';
}

const GlobalEntranceAnimation: React.FC<GlobalEntranceAnimationProps> = ({
  children,
  duration,
  delay,
  distance,
  direction,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom-=100',
      },
    });

    const animationProps: any = { opacity: 0 }; // Use any type assertion here
    switch (direction) {
      case 'left':
        animationProps.x = -distance;
        break;
      case 'right':
        animationProps.x = distance;
        break;
      case 'up':
        animationProps.y = -distance;
        break;
      case 'down':
        animationProps.y = distance;
        break;
      default:
        break;
    }

    tl.fromTo(
      element,
      { opacity: 0, ...(animationProps as any) }, // Use type assertion here
      { opacity: 1, x: 0, y: 0, duration, delay }
    );

    return () => {
      tl.kill();
    };
  }, [duration, delay, distance, direction]);

  return <div ref={elementRef}>{children}</div>;
};

export default GlobalEntranceAnimation;
