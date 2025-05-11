import React from "react";
import { FiUser, FiLogOut } from "react-icons/fi";

const UserMenuForm = () => {
  return (
    <div
        className="
                absolute 
                right-0
                mt-2                    
                w-48
                bg-white
                rounded-md
                shadow-lg
                py-1
                z-10
                "
        >
        <a
            href=""
            className="
                    flex                        
                    items-center
                    px-4
                    py-2
                    text-sm
                    text-gray-700
                    hover:bg-purple-100                            
                    transition-colors
                    "
        >
        <FiUser className="mr-2" /> Mi Cuenta
      </a>
      <a
        href=""
        className="
                flex
                items-center
                px-4
                py-2
                text-sm
                text-gray-700
                hover:bg-purple-100
                transition-colors
                "
        >
        <FiLogOut className="mr-2" /> Cerrar Sesión
      </a>
    </div>
  );
};

export default UserMenuForm;
