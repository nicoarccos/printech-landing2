import { FC, useCallback, useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container, Engine, MoveDirection, OutMode } from "@tsparticles/engine";
import Image from 'next/image';
import Link from 'next/link';

interface Slide {
  id: number;
  type: 'hero' | 'image';
  title: string;
  description: string;
  image?: string;
  cta?: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

const Hero: FC = () => {
  const [init, setInit] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      type: 'hero',
      title: 'Soluciones en impresoras profesionales',
      description: 'Desde impresoras empresariales hasta impresoras de oficina, te ofrecemos las mejores soluciones para tu negocio.',
      cta: {
        primary: {
          text: 'Conocé más',
          href: '#servicios'
        },
        secondary: {
          text: 'Contactanos',
          href: '#contacto'
        }
      }
    },
    {
      id: 2,
      type: 'image',
      image: '/images/software-gestion.jpg',
      title: 'Software de Gestión',
      description: 'Monitoreo y control en tiempo real de tus equipos de impresión'
    }
  ];

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden animated-gradient text-white py-20 min-h-[60vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Slide 1: Original Hero Content */}
          {slide.type === 'hero' && (
            <div className="relative w-full h-full flex items-center justify-center">
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
                  {slide.title}
                </h1>
                <p className="mt-6 text-xl text-white max-w-3xl">
                  {slide.description}
                </p>
                {slide.cta && (
                  <div className="mt-10 flex gap-4">
                    <a
                      href={slide.cta.primary.href}
                      onClick={scrollToServices}
                      className="inline-block bg-[#137DC5] text-white px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-[#07619a] transition duration-300 ease-in-out"
                    >
                      {slide.cta.primary.text}
                    </a>
                    <a
                      href={slide.cta.secondary.href}
                      className="inline-block bg-transparent border-2 border-white text-white px-12 py-4 rounded-lg text-xl font-semibold shadow-lg hover:bg-white hover:text-[#137DC5] transition duration-300 ease-in-out"
                    >
                      {slide.cta.secondary.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Slide 2: Image Background */}
          {slide.type === 'image' && slide.image && (
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-5xl font-bold text-white mb-4">{slide.title}</h1>
                  <p className="text-xl text-white mb-8">{slide.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Controles del carrusel */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-20"
      >
        <i className="fas fa-chevron-left text-2xl"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300 z-20"
      >
        <i className="fas fa-chevron-right text-2xl"></i>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero; 