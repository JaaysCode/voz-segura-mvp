'use client';

import UserMenu from "./user-menu/UserMenu";
import NavLink from './NavLink';

// Definir los enlaces en un array para facilitar su mantenimiento
export const navLinks = [
  { href: "#home", label: "INICIO" },
  { href: "#about", label: "ACERCA DE" },
  { href: "#map", label: "MAPA" },
  { href: "#events", label: "EVENTOS" },
  { href: "#donations", label: "DONACIONES" },
  { href: "#contact", label: "CONTACTO" }
];

interface NavbarItemsProps {
  className?: string; // Permitir personalizar clases adicionales
  showUserMenu?: boolean; // Opción para mostrar u ocultar el menú de usuario
  variant?: 'desktop' | 'mobile'; // Variante para estilos diferentes
}

const NavbarItems: React.FC<NavbarItemsProps> = ({
  className = "",
  showUserMenu = true,
  variant = 'desktop'
}) => {
    const baseClassName = 
      variant === 'desktop' 
        ? "md:flex items-center space-x-8" 
        : "flex flex-col space-y-4";
        
    return (
       <ul className={`${baseClassName} ${className}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              {variant === 'desktop' ? (
                <NavLink href={link.href} label={link.label} />
              ) : (
                <a href={link.href} className="font-medium text-purple-900 block py-2">
                  {link.label}
                </a>
              )}
            </li>
          ))}
          
          {showUserMenu && <UserMenu />}
       </ul>
    );
}

export default NavbarItems;