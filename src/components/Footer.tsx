import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#054269] to-[#0f5f96] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} PrintTech. By Matias Reinoso. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
} 