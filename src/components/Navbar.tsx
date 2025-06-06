export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          PrintTech
        </div>
        <div>
          <a href="#inicio" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
          <a href="#servicios" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
          <a href="#contacto" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
        </div>
      </div>
    </nav>
  )
} 