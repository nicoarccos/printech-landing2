import { FC, useCallback, useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, Engine, MoveDirection, OutMode } from "@tsparticles/engine";

const Hero: FC = () => {
  const [init, setInit] = useState(false);

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("tsParticles container loaded", container);
  }, []);

  const particleOptions = useMemo(() => ({
    background: {
      color: undefined,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#fcfad4", "#2199ea", "#137DC5"],
      },
      links: {
        enable: false,
      },
      move: {
        direction: "top" as MoveDirection,
        enable: true,
        outModes: {
          default: "out" as OutMode,
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
      },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="relative w-full overflow-hidden animated-gradient text-white py-20">
      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particleOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <h1 className="text-5xl font-extrabold text-[#fcfad4] sm:text-6xl lg:text-7xl leading-tight">
          Soluciones en impresoras <br className="sm:hidden"/> profesionales
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Desde impresoras empresariales hasta impresoras de oficina, te ofrecemos las mejores soluciones para tu negocio.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#servicios"
            onClick={scrollToServices}
            className="inline-block bg-[#137DC5] text-white px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-[#07619a] transition duration-300 ease-in-out"
          >
            Conocé más
          </a>
          <a
            href="#contacto"
            className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-white hover:text-[#137DC5] transition duration-300 ease-in-out"
          >
            Contactanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
