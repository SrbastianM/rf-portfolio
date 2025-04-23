import React from 'react';
import { usePageTransition } from '../../../hooks/usePageTransition';
import { PageTransitionProps } from './PageTransitionProps';

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { container, displayChildren } = usePageTransition(children, {
    duration: 400,
    ease: 'easeInOutQuad',
  });
  return (
    <div ref={container} style={{ opacity: 0 }}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
