import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export const useSliderElementAnimation = (isActive: boolean) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && elementRef) {
      animate(`${elementRef.current}`, {
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad',
      });
    }
  }, [isActive]);

  return elementRef;
};
