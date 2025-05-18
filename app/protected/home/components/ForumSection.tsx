'use client';
import React, { useState, useEffect } from 'react';
import { FaComments } from 'react-icons/fa';
import ForumStats from './ForumStats';
import Comments from './Comments';
import { Comment } from '../../../../services/commentService';
import { postService } from '../../../../services/postService';
import { useUser } from '../../../../lib/UserContext';
import NewComment from './NewComment';

const ForumSection = () => {
  const [postId, setPostId] = useState<number | null>(null);
  const [refreshComments, setRefreshComments] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUser();

  // Asegurar que existe un post predeterminado
  useEffect(() => {
    const createDefaultPost = async () => {
      if (user?.id) {
        try {
          setLoading(true);
          const defaultPost = await postService.ensureDefaultPostExists(user.id);
          if (defaultPost?.id) {
            setPostId(defaultPost.id);
          }
        } catch (error) {
          console.error('Error creating default post:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (user) {
      createDefaultPost();
    }
  }, [user]);

  const handleCommentAdded = (comment: Comment) => {
    // Forzar la actualización de los comentarios cuando se añade uno nuevo
    setRefreshComments(prev => !prev);
  };
  return (
    <section id="forum" className='py-16 bg-purple-100'>
      <div className='container mx-auto px-4'>
        <div className='max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='p-6 border-b border-purple-200'>
            <h2 className='text-2xl font-bold text-purple-900 flex items-center'>
              <FaComments className='mr-2'/> Foro de la Comunidad
            </h2>
          </div>

          <ForumStats/>
          
          {loading ? (
            <div className="p-6 text-center text-gray-500">Cargando foro...</div>
          ) : (
            <>
              {postId ? (
                <>
                  <NewComment postId={postId} onCommentAdded={handleCommentAdded} />
                  <Comments postId={postId} key={refreshComments ? 'refresh' : 'initial'} />
                </>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  No se ha podido cargar el foro. Por favor, inicia sesión para participar.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
