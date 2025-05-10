import React from 'react'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <header className='bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] sticky top-0 z-50'>
        <div className='container mx-auto px-4 md:px-6'>
            <Navbar />
        </div>
    </header>
  )
}

export default Header
