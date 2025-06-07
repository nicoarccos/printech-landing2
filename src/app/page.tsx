"use client";

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'

// Datos detallados de los servicios
const servicesData = [
  {
    id: 'equipos',
    title: 'Alquiler y Venta de Equipos de Impresion',
    shortDescription: 'Contamos con una amplia gama de equipos de impresion\nque se adaptan pefectamente a tus necesidades...',
    longDescription: 'Ofrecemos soluciones completas de alquiler y venta de equipos de impresión para empresas y hogares. Desde impresoras multifuncionales de alta velocidad hasta equipos especializados, te asesoramos para encontrar la opción ideal que optimice tus costos y mejore tu productividad.',
    icon: 'fas fa-print',
    subServices: [
      {
        title: 'Abono Mensual',
        description: 'Ofrecemos un servicio integral de alquiler, que incluye el mantenimiento y entrega de los insumos.',
        icon: 'fas fa-calendar-alt'
      },
      {
        title: 'Asesoramiento Personalizado',
        description: 'Nuestro equipo de expertos te guiará en la elección del equipo más adecuado para tu negocio.',
        icon: 'fas fa-user-tie'
      },
      {
        title: 'Reparación',
        description: 'Servicio técnico especializado con respuesta rápida y garantía en todas las reparaciones.',
        icon: 'fas fa-tools'
      },
    ],
  },
  {
    id: 'software',
    title: 'Software de Gestion',
    shortDescription: 'Somos desarrolladores del software de gestion\nque complementa con el cuidado de tu equipo en tiempo real.',
    longDescription: 'Nuestro software de gestión de impresión te permite monitorear el uso de tus equipos, controlar costos, optimizar el flujo de trabajo y asegurar el mantenimiento preventivo. Desarrollado a medida para ofrecerte control total y eficiencia en tu infraestructura de impresión.',
    icon: 'fas fa-cogs',
    subServices: [
      {
        title: 'Monitoreo en Tiempo Real',
        description: 'Controla el estado y rendimiento de tus equipos desde cualquier dispositivo.',
        icon: 'fas fa-chart-line'
      },
      {
        title: 'Reportes Detallados',
        description: 'Genera informes personalizados sobre el uso y costos de impresión.',
        icon: 'fas fa-file-alt'
      },
      {
        title: 'Mantenimiento Preventivo',
        description: 'Sistema de alertas para programar mantenimientos y evitar fallas.',
        icon: 'fas fa-shield-alt'
      }
    ],
  },
  {
    id: 'insumos',
    title: 'Venta de Insumos y Consumibles',
    shortDescription: 'Contamos con un equipo de profesionales que te asesoraran en la compra de insumos y consumibles para tu equipo de impresion.',
    longDescription: 'Disponemos de un amplio catálogo de tintas, toners, papeles y otros consumibles de alta calidad para todo tipo de impresoras. Nuestro equipo te brindará asesoramiento experto para que elijas los insumos correctos, garantizando el mejor rendimiento y durabilidad de tus equipos.',
    icon: 'fas fa-box',
    subServices: [
      {
        title: 'Tintas y Toners',
        description: 'Amplia variedad de consumibles originales y compatibles de alta calidad.',
        icon: 'fas fa-tint'
      },
      {
        title: 'Papeles Especiales',
        description: 'Diferentes tipos de papel para cada necesidad específica de impresión.',
        icon: 'fas fa-copy'
      },
      {
        title: 'Entrega Programada',
        description: 'Servicio de entrega regular de insumos para mantener tu stock siempre actualizado.',
        icon: 'fas fa-truck'
      }
    ],
  },
];

export default function Home() {
  // Estado para la tarjeta de servicio seleccionada
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Manejador de clic para las tarjetas
  const handleCardClick = (id: string) => {
    setSelectedServiceId(selectedServiceId === id ? null : id); // Toggle
  };

  // Efecto para hacer scroll cuando se selecciona un servicio
  useEffect(() => {
    if (selectedServiceId) {
      // Encuentra el elemento de la sección de detalles (o la sección de servicios en general)
      const servicesSection = document.getElementById('servicios'); // Usamos la sección servicios como referencia
      if (servicesSection) {
        // Espera un poco para que la transición de expansión termine
        setTimeout(() => {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500); // Mantenemos el delay
      }
    }
  }, [selectedServiceId]); // Este efecto se ejecuta cada vez que selectedServiceId cambia

  // Encontrar el servicio seleccionado por su ID
  const selectedService = servicesData.find(service => service.id === selectedServiceId);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Sección de Servicios */}
      <section id="servicios" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
          
          {/* Grid de Tarjetas de Servicio */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(service => (
              <ServiceCard 
                key={service.id} // Clave única para la lista
                id={service.id}
                title={service.title}
                description={service.shortDescription} // Usamos la descripción corta aquí
                icon={service.icon}
                onCardClick={handleCardClick} // Pasamos el manejador de clic
              />
            ))}
          </div>

          {/* Sección de Detalles del Servicio (Expandible) */}
          <div className={`
            mt-8 p-8 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-500 ease-in-out
            ${selectedService ? 'max-h-[800px] opacity-100 animate-pulse-glow' : 'max-h-0 opacity-0 p-0'}
          `}>
            {selectedService && (
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  {selectedService.icon && (
                    <div className="text-4xl text-[#137DC5]">
                      <i className={selectedService.icon}></i>
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-gray-800">{selectedService.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{selectedService.longDescription}</p>
                
                {selectedService.subServices && (
                  <div className="mt-8">
                    <h4 className="text-2xl font-semibold text-gray-800 mb-6">Nuestras Soluciones:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedService.subServices.map((subService, index) => (
                        <div 
                          key={index} 
                          className="bg-gradient-to-br from-[#054269] via-[#0f5f96] to-[#137DC5] 
                                   p-6 rounded-lg shadow-lg text-white transform transition-all 
                                   duration-300 hover:scale-105"
                        >
                          <div className="text-3xl mb-4 text-[#fcfad4]">
                            <i className={subService.icon}></i>
                          </div>
                          <h5 className="text-xl font-bold mb-2 text-[#fcfad4]">{subService.title}</h5>
                          <p className="text-sm text-gray-200">{subService.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <a
                    href="#contacto"
                    className="inline-block bg-[#137DC5] text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#07619a] transition duration-300 ease-in-out"
                  >
                    Solicitar Información
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 