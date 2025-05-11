import React from 'react'

const ForumStats = () => {
  return (
    <div className='flex justify-around py-6 bg-purple-50'>
        <div className='text-center'>
            <div className='text-3xl font-bold text-purple-800'> 1,248</div>
            <div className='text-gray-600'>Miembros</div>
        </div>
        <div className='text-center'>
            <div className='text-3xl font-bold text-purple-800'> 543</div>
            <div className='text-gray-600'>Temas</div>
        </div>
        <div className='text-center'>
            <div className='text-3xl font-bold text-purple-800'>2,876</div>
            <div className='text-gray-600'>Comentarios</div>
        </div>

        
    </div>
  )
}

export default ForumStats
