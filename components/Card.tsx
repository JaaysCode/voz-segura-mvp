import React from 'react'

interface CardProps {
    children: React.ReactNode;
    iconPosition?: 'center' | 'top-left';
    borderPosition?: 'top' | 'bottom';
    cursorPointer?: boolean;
    minHeight?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    iconPosition = 'center',
    borderPosition = 'top',
    cursorPointer = true,
    minHeight = '280px',
}) => {
  const childrenArray = React.Children.toArray(children);
  const icon = childrenArray[0];
  const content = childrenArray.slice(1);
  
  return (
    <div 
        className={`
            bg-white
            p-6 
            rounded-lg            ${borderPosition === 'top' ? 'border-t-4' : 'border-b-4'} 
            ${borderPosition === 'top' ? 'border-t-[var(--secondary-color)]' : 'border-b-[var(--secondary-color)]'}
            shadow-md 
            min-h-[${minHeight}]
            flex
            flex-col
            ${iconPosition === 'center' ? 'items-center' : 'items-start'}
            transition-all
            hover:transform
            hover:-translate-y-2
            hover:shadow-xl
            ${cursorPointer ? 'cursor-pointer' : ''}
        `}
    >
        <div 
            className={`
                w-20
                h-20
                ${iconPosition === 'center' ? 'mx-auto' : 'self-start'} 
                rounded-full 
                flex 
                items-center
                justify-center
                text-purple-900 
                text-3xl 
                ${iconPosition === 'center' ? 'mb-5' : 'mb-3'}
            `}
        >
            {icon}
        </div>
        <div className={iconPosition === 'center' ? "text-center" : "w-full"}>
            {content}
        </div>
    </div>
  )
}

export default Card;
