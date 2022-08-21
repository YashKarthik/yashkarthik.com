import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { useColorModeValue } from '@chakra-ui/react';

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: object | undefined) => {
    console.log(container);
  }, []);


  const fg = useColorModeValue(
    '#000000',
    '#ffffff'
  );

  return (
    <Particles
      style={{
        position: 'absolute',
        height: '150%',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
      }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: fg,
          },
          links: {
            color: fg,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: "bounce",
            random: false,
            speed: 0.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 860,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: true,
          zIndex: -1,
        }
      }}
    />
  );
};

export default ParticlesBg;
