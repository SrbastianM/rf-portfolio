import { useEffect, useMemo } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import particlesOptions from '../../config/particleOptions';
import geometricOptions from '../../config/geometricOptions';

type Variant = 'particles' | 'geometric';

export const useParticles = (variant: Variant = 'particles') => {
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    });
  }, []);

  const options = useMemo(() => {
    return variant === 'particles' ? particlesOptions : geometricOptions;
  }, [variant]);

  return { options };
};
