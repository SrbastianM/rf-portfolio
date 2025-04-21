import { animate } from 'animejs';
import { useEffect, useRef } from 'react';

export const useIconAnimation = (isActive: boolean) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive && iconRef) {
      animate(`${iconRef}`, {
        scale: [0.8, 1],
        opacity: [0.6, 1],
        rotate: ['0deg', '360deg'],
        duration: 800,
        easing: 'easeOutElastic(1, .6)',
      });
    }
  }, [isActive]);
  return iconRef;
};
