"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EntranceAnimation = ({ children, duration, delay, distance, direction }) => {
  const elementRef = useRef(null);
  const lastScrollTopRef = useRef(0);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleIntersect = (entries) => {
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

      const animationProps = { opacity: 0 };
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
        { opacity: 0, ...animationProps },
        { opacity: 1, x: 0, y: 0, duration, delay }
      );
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
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
