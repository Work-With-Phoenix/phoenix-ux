"use client"
import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

interface EntranceAnimationProps {
  children: ReactNode;
  duration: number;
  delay: number;
  distance: number;
  direction: 'left' | 'right' | 'up' | 'down';
}

const EntranceAnimation: React.FC<EntranceAnimationProps> = ({
  children,
  duration,
  delay,
  distance,
  direction,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const lastScrollTopRef = useRef<number>(0);
  const isInViewRef = useRef<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInViewRef.current = true;
          animateEntrance();
        } else {
          isInViewRef.current = false;
        }
      });
    };

    const animateEntrance = () => {
      const tl = gsap.timeline();

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
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    });

    observer.observe(element);

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTopRef.current) {
        // Scroll down
        if (!isInViewRef.current) {
          // Only trigger animation if not already in view
          isInViewRef.current = true;
          animateEntrance();
        }
      } else {
        // Scroll up
        isInViewRef.current = false;
      }
      lastScrollTopRef.current = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [duration, delay, distance, direction]);

  return <div ref={elementRef}>{children}</div>;
};

export default EntranceAnimation;
