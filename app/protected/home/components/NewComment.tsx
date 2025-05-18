'use client';
import React, { useState } from 'react';
import { FaPen, FaPaperPlane } from 'react-icons/fa';
import { commentService, Comment } from '../../../../services/commentService';
import { useUser } from '../../../../lib/UserContext';

interface NewCommentProps {
  postId: number;
  onCommentAdded?: (comment: Comment) => void;
}

const NewComment = ({ postId, onCommentAdded }: NewCommentProps) => {
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { user } = useUser();

  const handleSubmit = async () => {
    if (!content.trim() || !user?.id) return;
    
    setSubmitting(true);
    try {
      const newComment: Comment = {
        content: content,
        post_id: postId,
        parent_id: null,
      };
      
      const addedComment = await commentService.addComment(newComment, user.id);
      
      setContent('');
      
      // Notificar al componente padre que se agregó un comentario
      if (onCommentAdded && addedComment) {
        onCommentAdded(addedComment);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

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
          p-3
          focus:outline-none
          focus:ring-2
          focus:ring-purple-500
          focus:border-transparent
        '
        rows={4}
        placeholder="Escribe tu experiencia aquí... ¿Qué quieres compartir hoy?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className='mt-3 flex justify-end'>
        <button 
          className='bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 flex items-center transition-colors rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
          onClick={handleSubmit}
          disabled={!content.trim() || submitting || !user}
        >
          {submitting ? 'Publicando...' : 'Publicar'} <FaPaperPlane className='ml-2'/>
        </button>
      </div>
    </div>
  );
};

export default NewComment;
