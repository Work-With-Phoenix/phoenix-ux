"use client"
import React, { useEffect, useRef, useState } from 'react';
import { animateCountUp } from '@/utils/CountUp';

const CountUp = ({ start, end, duration = 3 }) => {
  const countRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (countRef.current) {
        const { top, bottom } = countRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (countRef.current && isInView) {
      animateCountUp(countRef.current, start, end, duration);
    } else if (countRef.current) {
      countRef.current.textContent = start.toString();
    }
  }, [start, end, duration, isInView]);

  return <span ref={countRef}>{start}</span>;
};

export default CountUp;
