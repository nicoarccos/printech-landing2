import Image from 'next/image'

export default function Navbar() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-blue-900 text-white p-4 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center z-20">
          <Image
            src="/images/printech_new.png"
            alt="PrintTech Logo"
            width={60}
            height={15}
            className="mr-2"
          />
        </div>
        <div className="flex space-x-1 z-20">
          <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-800 hover:scale-105 cursor-pointer flex items-center gap-2">
            <i className="fas fa-print"></i>
            Inicio
          </a>
          <a 
            href="#servicios" 
            onClick={scrollToServices}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-800 hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <i className="fas fa-tools"></i>
            Servicios
          </a>
          <a href="#contacto" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-800 hover:scale-105 cursor-pointer flex items-center gap-2">
            <i className="fas fa-envelope"></i>
            Contacto
          </a>
          <a href="#sobre-nosotros" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-800 hover:scale-105 cursor-pointer flex items-center gap-2">
            <i className="fas fa-info-circle"></i>
            Sobre Nosotros
          </a>
        </div>
      </div>
    </nav>
  )
} 