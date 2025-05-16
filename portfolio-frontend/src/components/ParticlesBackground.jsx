import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: '#111' },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ['#e600ff', '#1de9b6', '#fff'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1.2, direction: 'none', outModes: 'out' },
          links: {
            enable: true,
            distance: 120,
            color: '#e600ff',
            opacity: 0.2,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground; 