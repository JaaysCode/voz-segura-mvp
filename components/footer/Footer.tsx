import React from 'react'
import Image from 'next/image'
import { FaCommentDots } from 'react-icons/fa'
import FooterLinks from './FooterLinks'

const Footer = () => {
  const footerLinks = [
    [
      { href: "/protected/about-us", text: "Acerca de" },
      { href: "/protected/map", text: "Mapa seguro" },
      { href: "/protected/events", text: "Eventos" },
      { href: "/protected/donations", text: "Donaciones" }
    ],
    [
      { href: "/protected/contact", text: "Contacto" },
      { href: "#", text: "Política de privacidad" },
      { href: "#", text: "Términos de uso" },
      { href: "#", text: "Preguntas frecuentes" }
    ]
  ];

  return (        <footer className="bg-purple-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    <div className="flex justify-center">
                        <FooterLinks links={footerLinks} />
                    </div>
                    <div className="flex items-center">
                        <Image 
                            src="/images/logo-universidad.png" 
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="Logo Universidad de Medellín" 
                            className="h-auto w-auto mr-4" 
                            style={{ maxHeight: '64px' }}
                        />
                    </div><div className="fixed bottom-8 right-8 bg-[var(--primary-color)] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-purple-600 hover:scale-110 transition-all duration-300 group">
                        <FaCommentDots className="text-xl" />
                        <span className="absolute left-auto right-full mr-3 bg-white text-purple-900 font-medium text-sm py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-purple-200">
                            Contáctanos
                        </span>
                    </div>
                </div>
          
          <p className="text-center mt-8 text-sm">
            © 2025 Voz Segura. Todos los derechos reservados. Juntas somos más fuertes.
          </p>
        </div>
      </footer>
  )
}

export default Footer
