'use client';

import React, { useState } from 'react'
import Logo from '../Logo'
import NavbarItems from './NavbarItems'
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Solo mostrar el navbar completo en páginas protegidas o la página principal
  const isProtectedOrHome = pathname === '/' || pathname.startsWith('/protected');
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between relative">
          {/* Logo y título */}
          <div className="flex items-center">
            <Logo isNavbarOrHeader={true} />
          </div>
          
          {isProtectedOrHome && (
            <>
              {/* Botón de menú móvil */}
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-purple-900 hover:text-purple-700 transition-colors"
                  aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                  {mobileMenuOpen ? (
                    <FaTimes className="w-6 h-6" />
                  ) : (
                    <FaBars className="w-6 h-6" />
                  )}
                </button>
              </div>
              
              {/* Menú de escritorio */}
              <div className="hidden md:block">
                <NavbarItems />
              </div>
              
              {/* Menú móvil */}
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-lg rounded-lg z-50 md:hidden">
                  <div className="py-2 px-4">
                    <NavbarItems variant="mobile" className="py-2" />
                  </div>
                </div>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar


