import { animate } from 'animejs';
import { useEffect, useRef, useState } from 'react';

export const usePageTransition = (
  children: any,
  { duration = 300, ease = 'easeInOutQuad' }: any,
) => {
  const container = useRef(null);
  const [displayChildren, setDisplayChildren] = useState(children);

  const animateIn = () => {
    if (container.current) {
      animate(container.current, {
        opacity: [0, 1],
        duration,
        ease,
      });
    }
  };

  const animateOut = () => {
    if (!container.current) return null;

    const anim = animate(container.current, {
      opacity: [1, 0],
      duration,
      ease,
    });
    return anim.then(() => {
      setDisplayChildren(children);
      animateIn();
    });
  };

  useEffect(() => {
    if (displayChildren !== children && container.current) {
      animateOut();
    }
  }),
    [children, displayChildren];

  useEffect(() => {
    animateIn();
  }, []);

  return { container, displayChildren };
};
