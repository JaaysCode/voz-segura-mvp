import React from 'react'
import { FaComments } from 'react-icons/fa';
import ForumStats from './ForumStats';
import NewComment from './NewComment';
//import Comments from './Comments';

const ForumSection = () => {
  return (
    <section id = "forum" className='py-16 bg-purple-100'>
        <div className='container mx-auto px-4'>
            <div className='max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
                <div className='p-6 border-b border-purple-200'>
                    <h2 className='text-2xl font-bold text-purple-900 flex items-center'>
                        <FaComments className='mr-2'/> Foro de la Comunidad
                    </h2>
                </div>

                <ForumStats/>
                <NewComment/>
                {/*<Comments/>*/}

            </div>
        </div>

    </section>
  )
}

export default ForumSection
