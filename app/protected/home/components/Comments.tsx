'use client';
import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaComment, FaReply, FaTrash } from 'react-icons/fa';
import { commentService, Comment } from '../../../../services/commentService';
import { useUser } from '../../../../lib/UserContext';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

interface CommentsProps {
  postId: number;
}

const Comments = ({ postId }: CommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const { user } = useUser();
  const [likedComments, setLikedComments] = useState<number[]>([]);
  // Cargar comentarios
  useEffect(() => {
    const loadComments = async () => {
      if (postId) {
        setLoading(true);
        try {
          const commentsData = await commentService.getCommentsByPostId(postId);
          setComments(commentsData);
          
          // Cargar los likes del usuario actual
          if (user?.id) {
            const likedStatus = await Promise.all(
              commentsData.flatMap((comment: Comment) => [
                ...(comment.id ? [comment.id] : []),
                ...(comment.replies?.flatMap((reply: Comment) => reply.id ? [reply.id] : []) || [])
              ]).map(async (id: number) => {
                if (id) {
                  const hasLiked = await commentService.hasUserLiked(id, user.id);
                  return hasLiked ? id : null;
                }
                return null;
              })
            );
            
            setLikedComments(likedStatus.filter((id: any): id is number => id !== null));
          }
        } catch (error) {
          console.error('Error loading comments:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadComments();
  }, [postId, user?.id]);

  // Manejar likes
  const handleLike = async (commentId: number) => {
    if (!user?.id || !commentId) return;
    
    try {
      const liked = await commentService.toggleLike(commentId, user.id);
      
      if (liked) {
        setLikedComments(prev => [...prev, commentId]);
      } else {
        setLikedComments(prev => prev.filter(id => id !== commentId));
      }
      
      // Actualizar el contador de likes en la UI
      setComments(prevComments => 
        prevComments.map(comment => {
          if (comment.id === commentId) {
            return {
              ...comment,
              likes_count: (comment.likes_count || 0) + (liked ? 1 : -1)
            };
          } else if (comment.replies) {
            return {
              ...comment,              replies: comment.replies.map((reply: Comment) => {
                if (reply.id === commentId) {
                  return {
                    ...reply,
                    likes_count: (reply.likes_count || 0) + (liked ? 1 : -1)
                  };
                }
                return reply;
              })
            };
          }
          return comment;
        })
      );
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  // Enviar respuesta
  const handleReply = async () => {
    if (!replyingTo || !replyText.trim() || !user?.id) return;
    
    try {
      const newReply: Comment = {
        content: replyText,
        post_id: postId,
        parent_id: replyingTo
      };
      
      const addedReply = await commentService.addComment(newReply, user.id);
      
      // Actualizar la UI con la nueva respuesta
      setComments(prevComments => 
        prevComments.map(comment => {
          if (comment.id === replyingTo) {
            return {
              ...comment,
              replies: [...(comment.replies || []), addedReply]
            };
          }
          return comment;
        })
      );
      
      // Limpiar el formulario
      setReplyText('');
      setReplyingTo(null);
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  // Eliminar comentario
  const handleDelete = async (commentId: number) => {
    if (!user?.id || !commentId) return;
    
    try {
      await commentService.deleteComment(commentId, user.id);
      
      // Actualizar la UI eliminando el comentario
      setComments(prevComments => {
        // Si es un comentario principal
        const filteredComments = prevComments.filter(comment => comment.id !== commentId);
        
        // Si es una respuesta
        if (filteredComments.length === prevComments.length) {
          return prevComments.map(comment => ({
            ...comment,
            replies: (comment.replies || []).filter((reply: Comment) => reply.id !== commentId)
          }));
        }
        
        return filteredComments;
      });
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  // Formatear fecha
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: es
    });
  };

  if (loading) {
    return <div className="p-6 text-center text-gray-500">Cargando comentarios...</div>;
  }

  return (
    <div className="divide-y divide-purple-100">
      {comments.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No hay comentarios todavía. ¡Sé el primero en comentar!
        </div>
      ) : (
        comments.map(comment => (
          <div key={comment.id} className="p-6">
            <div className="flex">
              <div className="bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                {comment.anonymous_id || 'A'}
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="font-semibold">Anónimo #{comment.anonymous_id}</span>
                  <span className="text-gray-500 text-sm ml-auto">{formatDate(comment.created_at)}</span>
                </div>
                
                <p className="mb-3">{comment.content}</p>
                
                <div className="flex items-center space-x-4">
                  <button 
                    className={`flex items-center space-x-1 text-sm ${likedComments.includes(comment.id || 0) ? 'text-purple-700' : 'text-gray-600 hover:text-purple-700'}`}
                    onClick={() => comment.id && handleLike(comment.id)}
                  >
                    <FaThumbsUp /> <span>{comment.likes_count || 0}</span>
                  </button>
                  <button 
                    className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-700"
                    onClick={() => setReplyingTo(comment.id || null)}
                  >
                    <FaComment /> <span>Responder</span>
                  </button>
                  {user?.id === comment.user_id && (
                    <button 
                      className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700"
                      onClick={() => comment.id && handleDelete(comment.id)}
                    >
                      <FaTrash /> <span>Eliminar</span>
                    </button>
                  )}
                </div>

                {/* Formulario de respuesta */}
                {replyingTo === comment.id && (
                  <div className="mt-4 pl-4 border-l-2 border-purple-200">
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      rows={3}
                      placeholder="Escribe tu respuesta aquí..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="mt-2 flex space-x-2 justify-end">
                      <button 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm px-3 py-1 rounded"
                        onClick={() => {
                          setReplyingTo(null);
                          setReplyText('');
                        }}
                      >
                        Cancelar
                      </button>
                      <button 
                        className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-3 py-1 rounded flex items-center"
                        onClick={handleReply}
                        disabled={!replyText.trim()}
                      >
                        <FaReply className="mr-1" /> Responder
                      </button>
                    </div>
                  </div>
                )}

                {/* Respuestas */}
                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-200">
                    {comment.replies.map((reply: Comment) => (
                      <div key={reply.id} className="flex">
                        <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3 text-sm">
                          {reply.anonymous_id || 'A'}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <span className="font-semibold">Anónimo #{reply.anonymous_id}</span>
                            <span className="text-gray-500 text-xs ml-auto">{formatDate(reply.created_at)}</span>
                          </div>
                          <p className="mb-2 text-sm">{reply.content}</p>
                          <div className="flex items-center space-x-4">
                            <button 
                              className={`flex items-center space-x-1 text-xs ${likedComments.includes(reply.id || 0) ? 'text-purple-700' : 'text-gray-600 hover:text-purple-700'}`}
                              onClick={() => reply.id && handleLike(reply.id)}
                            >
                              <FaThumbsUp /> <span>{reply.likes_count || 0}</span>
                            </button>
                            {user?.id === reply.user_id && (
                              <button 
                                className="flex items-center space-x-1 text-xs text-red-600 hover:text-red-700"
                                onClick={() => reply.id && handleDelete(reply.id)}
                              >
                                <FaTrash /> <span>Eliminar</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
