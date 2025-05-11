import React, { useState, useRef, useEffect} from 'react'
import { FaUser } from 'react-icons/fa'
import UserMenuForm from './UserMenuForm';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className='relative' ref={menuRef}>
        <div 
            className='
                    bg-purple-900 
                    text-white 
                    w-10 
                    h-10 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    cursor-pointer 
                    hover:bg-purple-700 
                    hover:scale-110 
                    transition-all'
            onClick={toggleMenu}
          >
           <FaUser/>                    
        </div>
        <div 
          className={`
              absolute
              right-0
              mt-2
              z-50
              transform
              origin-top-right
              transition-all
              duration-300
              ease-in-out
              ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
          `}>
            <UserMenuForm/>
        </div>
    </div>
  )
}

export default UserMenu;

