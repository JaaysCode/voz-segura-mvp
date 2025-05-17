import React from 'react'
import Navbar from './navbar/Navbar'
const Header = () => {
  return (
    <header className='bg-white shadow-md'>
        <div className='container mx-auto px-4 py-4'>
            <Navbar />
        </div>
    </header>
  )
}

export default Header

// import { FaUser } from "react-icons/fa"

// {/* Header / Navegación */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-4">
//           <nav className="flex items-center justify-between">            
//             <div className="flex items-center">
//               <img src="/images/voz-segura-logo.png" alt="Logo Mujeres Seguras" className="h-24 mr-4" />
//               <div>
//                 <h1 className="text-2xl font-bold text-purple-900">Voz Segura</h1>
//                 <span className="text-sm text-purple-700">Plataforma de Apoyo, Conciencia y Acción para Mujeres.</span>
//               </div>
//             </div>
            
//             <ul className="hidden md:flex items-center space-x-8">
//               <li><a href="#about" className="font-semibold text-purple-900 hover:text-purple-700 relative group">
//                 ACERCA DE
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
//               </a></li>
//               <li><a href="#map" className="font-semibold text-purple-900 hover:text-purple-700 relative group">
//                 MAPA
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
//               </a></li>
//               <li><a href="#events" className="font-semibold text-purple-900 hover:text-purple-700 relative group">
//                 EVENTOS
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
//               </a></li>
//               <li><a href="#donations" className="font-semibold text-purple-900 hover:text-purple-700 relative group">
//                 DONACIONES
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
//               </a></li>
//               <li><a href="#contact" className="font-semibold text-purple-900 hover:text-purple-700 relative group">
//                 CONTACTO
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-700 group-hover:w-full transition-all duration-300"></span>
//               </a></li>
//             </ul>
            
//             <div className="bg-purple-900 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 hover:scale-110 transition-all">
//               <FaUser />
//             </div>
//           </nav>
//         </div>
//       </header>    
