import React from 'react';

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <a 
      href={href} 
      className="block relative py-1 text-white hover:text-white transition-colors group"
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
    </a>
  );
};

interface FooterLinksProps {
  links: { href: string; text: string; }[][];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-center md:text-left mb-8 md:mb-0">
      {links.map((column, colIndex) => (
        <div key={`col-${colIndex}`} className="mx-auto w-full">
          {column.map((link, linkIndex) => (
            <FooterLink 
              key={`link-${colIndex}-${linkIndex}`} 
              href={link.href} 
              text={link.text} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
