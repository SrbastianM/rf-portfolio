import { useCallback, useState } from 'react';

export const useSlideNavigation = (totalSlide: number) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % totalSlide);
  }, [totalSlide]);

  const prevSlide = useCallback(() => {
    setActiveIndex(prev => (prev - 1) % totalSlide);
  }, [totalSlide]);

  const goToSlide = useCallback(() => {
    setActiveIndex(activeIndex);
  }, []);

  return { activeIndex, nextSlide, prevSlide, goToSlide };
};
