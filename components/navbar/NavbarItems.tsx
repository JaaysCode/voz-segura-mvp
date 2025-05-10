'use client';

export const navbarItems = [

    {
        label: 'INICIO',
        description: 'Pagina Principal',
    },

    {
        label: 'ACERCA DE',
        description: 'Acerca de Voz Segura',
    },
    {
        label: 'MAPA',
        description: 'Mapa de Zonas de Riesgo y puntos seguros, tambien se pueden agregar puntos de riesgo',
    },
    {
        label: 'EVENTOS',
        description: 'Eventos y Actividades de Voz Segura Desarrollados Por Profesionales invitados', 
    },
    {
        label: 'DONACIONES',
        description: 'Donaciones a la causa de Voz Segura',
    },
    {
        label: 'CONTACTO',
        description: 'Contacto con Voz Segura',
    },
]

const NavbarItems = () => {
    return (
        <div className="flex-grow">
            <ul className="flex justify-end items-center space-x-8">
                {navbarItems.map((item, index) => (
                    <li key={index} className="hover:text-[var(--highlight-color)] transition-colors">
                        <a href={`#${item.label.toLowerCase().replace(' ', '-')}`} 
                           className="font-medium text-sm tracking-wider"
                           title={item.description}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                <li className="ml-4">
                    <button className="p-2 rounded-full bg-[var(--primary-color)] text-white hover:bg-[var(--secundary-color)] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavbarItems;