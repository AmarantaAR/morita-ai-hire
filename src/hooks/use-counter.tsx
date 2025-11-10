import { useEffect, useRef, useState } from "react";

interface UseCounterOptions {
  end: number;
  duration?: number;
  start?: number;
  isPercentage?: boolean;
  suffix?: string;
  prefix?: string;
}

export const useCounter = ({ 
  end, 
  duration = 2000, 
  start = 0,
  isPercentage = false,
  suffix = "",
  prefix = ""
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;
    const hasDecimal = end % 1 !== 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (endValue - startValue) * easeOutQuart;
      
      setCount(hasDecimal ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  const displayValue = isPercentage 
    ? `${prefix}${count}%` 
    : suffix || prefix
    ? `${prefix}${count}${suffix}` 
    : count.toLocaleString();

  return { count: displayValue, ref };
};
