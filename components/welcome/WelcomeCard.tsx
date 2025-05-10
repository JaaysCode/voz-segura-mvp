import React from 'react'

interface WelcomeCardProps {
    children: React.ReactNode;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
    children
}) => {
  // Convertir los children en un array para manipularlos
  const childrenArray = React.Children.toArray(children);
  // El primer hijo es el icono
  const icon = childrenArray[0];
  // Los demás hijos son el contenido (h3 y p)
  const content = childrenArray.slice(1);
  
  return (
    <div 
        className='
            bg-white
            p-6 
            rounded-lg 
            border-t-4
            border-t-[var(--secondary-color)]
            shadow-md 
            min-h-[280px]
            flex
            flex-col
            items-center
            transition-all
            hover:transform
            hover:-translate-y-2
            hover:shadow-xl
            cursor-pointer
            '
        >

        <div 
            className='
                w-20
                h-20
                mx-auto 
                bg-purple-100 
                rounded-full 
                flex 
                items-center
                justify-center
                text-purple-900 
                text-3xl 
                mb-5'
            >
            {icon}
        </div>
        <div className="text-center">
            {content}
        </div>
    </div>

  )
}

export default WelcomeCard