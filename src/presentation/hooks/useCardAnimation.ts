import { useEffect } from 'react';
import { animate, stagger } from 'animejs';

export const useCardAnimation = (shouldRun: boolean) => {
  useEffect(() => {
    if (!shouldRun) return;

    animate('.lang-title', {
      opacity: [0, 1],
      scale: [0.8, 1],
      easing: 'easeOutExpo',
      duration: 800,
      delay: stagger(200),
    });
  }, [shouldRun]);
};
