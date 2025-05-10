'use client';

import React, { useState } from 'react'
import Logo from '../Logo'
import NavbarItems from './NavbarItems'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Solo mostrar el navbar completo en páginas protegidas o la página principal
  const isProtectedOrHome = pathname === '/' || pathname.startsWith('/protected');

  return (
    <nav className='flex flex-wrap items-center justify-between py-4 px-0 border-b border-b-[var(--border-color)]'>
        <Logo isNavbarOrHeader={true} />
        
        {isProtectedOrHome && (
          <>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[var(--primary-color)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
                </svg>
              </button>
            </div>
            
            {/* Desktop menu */}
            <div className="hidden md:block">
              <NavbarItems />
            </div>
            
            {/* Mobile menu, show/hide based on state */}
            {mobileMenuOpen && (
              <div className="w-full md:hidden mt-4">
                <ul className="flex flex-col space-y-4 p-4 bg-white rounded shadow">
                  {/* Hacer un mapeo directamente aquí para evitar complicaciones */}
                  <li><a href="#acerca-de" className="font-medium">ACERCA DE</a></li>
                  <li><a href="#mapa" className="font-medium">MAPA</a></li>
                  <li><a href="#eventos" className="font-medium">EVENTOS</a></li>
                  <li><a href="#donaciones" className="font-medium">DONACIONES</a></li>
                  <li><a href="#contacto" className="font-medium">CONTACTO</a></li>
                  <li className="flex justify-center">
                    <button className="p-2 rounded-full bg-[var(--primary-color)] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
    </nav>
  )
}

export default Navbar