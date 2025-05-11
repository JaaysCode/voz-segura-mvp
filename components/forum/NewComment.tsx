import React from 'react'
import { FaPen, FaPaperPlane } from 'react-icons/fa';


const NewComment = () => {
  return (
    <div className='p-6 border-b border-purple-200'>
        <h3 className='text-xl font-semibold mb-4 flex items-center text-purple-800'>
            <FaPen className='mr-2'/> Comparte con la comunidad
        </h3>
        <textarea 
            className='
                w-full
                border
                border-gray-300
                rounded-lg
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
                focus:border-transparent
            '
            rows={4}
            placeholder = "Escribe tu experiencia aquí... Que quieres compartir hoy?"
            >
        </textarea>
        <div className='mt-3 flex justify-end'>
            <button className='bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 flex items-center transition-colors rounded-md'>
                Publicar <FaPaperPlane className = 'ml-2'/>
            </button>
        </div>
    </div>
  )
}

export default NewComment
