import React from 'react'
import { FaUser } from 'react-icons/fa'
const UserMenu = () => {
  return (
    <div className="bg-purple-900 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 hover:scale-110 transition-all">
        <FaUser/>
    </div>
  )
}

export default UserMenu;

