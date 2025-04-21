import { animate } from 'animejs';
import { useEffect, useRef } from 'react';

export const useSliderAnimation = (activeIndex: number) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef) {
      animate(sliderRef, {
        backgroundColor: ['rgba(245, 245, 245, 0.7)', 'rgba(245, 245, 245, 1)'],
        duration: 800,
        easing: 'easeInOutQuad',
      });
    }
  }, [activeIndex]);
  return sliderRef;
};
