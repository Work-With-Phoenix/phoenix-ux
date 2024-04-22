"use client"

import React, { useEffect, useRef, useState } from 'react';
import { animateCountUp } from '@/utils/CountUp';

interface CountUpProps {
    start: number;
    end: number;
    duration?: number; // Make duration prop optional
}

const DEFAULT_DURATION = 3; // Default duration in seconds

const CountUp: React.FC<CountUpProps> = ({ start, end, duration = DEFAULT_DURATION }) => {
    const countRef = useRef<HTMLSpanElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (countRef.current) {
                const top = countRef.current.getBoundingClientRect().top;
                const bottom = countRef.current.getBoundingClientRect().bottom;
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
        if (countRef.current) {
            if (isInView) {
                const countElement = countRef.current;
                const animate = () => animateCountUp(countElement, start, end, duration);
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            animate();
                        }
                    });
                });
                observer.observe(countElement);
                return () => observer.disconnect();
            } else {
                const countElement = countRef.current;
                countElement.textContent = start.toString();
            }
        }
    }, [start, end, duration, isInView]);

    return <span ref={countRef}>{start}</span>;
};

export default CountUp;