"use client"
import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ start, end, duration = 3, separator = ',', decimalPlaces = 2 }) => {
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
      animateCountUp(countRef.current, start, end, duration, separator, decimalPlaces);
    } else if (countRef.current) {
      countRef.current.textContent = formatNumber(start, separator, decimalPlaces);
    }
  }, [start, end, duration, isInView, separator, decimalPlaces]);

  return <span ref={countRef}>{formatNumber(start, separator, decimalPlaces)}</span>;
};

export default CountUp;

export function animateCountUp(element, start, end, duration, separator, decimalPlaces) {
  const range = end - start;
  const increment = range / (duration * 60); // Assuming 60 frames per second

  let current = start;
  const updateCount = () => {
      if (current < end) {
          current += increment;
          element.textContent = formatNumber(Math.floor(current), separator, decimalPlaces); // Update the element's text content
          requestAnimationFrame(updateCount);
      } else {
          element.textContent = formatNumber(end, separator, decimalPlaces); // Ensure the final value is exact
      }
  };

  updateCount();
}

export function formatNumber(number, separator, decimalPlaces) {
  const parts = number.toFixed(decimalPlaces).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return parts.join('.');
}
