import { useEffect, useRef } from 'react';
import { animate, createScope } from 'animejs';

export const useSliderElementAnimation = (isActive: boolean) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<any>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    scopeRef.current = createScope({ root: elementRef });

    scopeRef.current.add((scope: { root: HTMLElement }) => {
      if (isActive) {
        animate(scope.root, {
          translateX: [100, 0],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutQuad',
        });
      }
    });

    return () => {
      if (scopeRef.current) {
        scopeRef.current?.revert();
      }
    };
  }, [isActive]);

  return elementRef;
};
