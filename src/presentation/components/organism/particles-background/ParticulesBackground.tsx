import { FC } from 'react';
import Particles from '@tsparticles/react';
import { useParticles } from '../../../hooks/useParticulesBackground';

interface ParticlesBackgroundProps {
  variant?: 'particles' | 'geometric';
}

export const ParticlesBackground: FC<ParticlesBackgroundProps> = ({ variant = 'particles' }) => {
  useParticles(variant);

  return (
    <div className="particles-background">
      <Particles
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: { value: '#f5f6f7' },
            repeat: 'no-repeat',
            size: '20%',
            opacity: 1,
          },
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'repulse' },
              onHover: { enable: true, mode: 'bubble' },
              resize: { enable: true },
            },
            modes: {
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
            },
          },
          particles: {
            color: { value: '#000000' },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'out' },
              speed: { min: 0.1, max: 1 },
            },
            number: {
              density: { enable: true, width: 1920, height: 1080 },
              value: 160,
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            shape: { type: 'triangle' },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
