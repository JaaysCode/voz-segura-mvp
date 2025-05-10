import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <a 
      href={href} 
      className="font-semibold text-purple-900 hover:text-purple-700 relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
};

export default NavLink;
