import { supabase } from '../lib/supabaseClient';

const generateAnonymousId = () => {
    return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
};

export interface Comment {
    id?: number;
    content: string;
    post_id: number;
    parent_id?: number | null;
    likes_count?: number;
    created_at?: string;
    anonymous_id?: string;
    user_id?: string;
    is_anonymous?: boolean;
    replies?: Comment[];
}

export const commentService = {    async getCommentsByPostId(postId: number) {
        const { data, error } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', postId)
            .is('parent_id', null)
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
        
        // Ya no necesitamos mapear los datos porque la interfaz ahora usa los mismos nombres que la DB
        const formattedData = data || [];

        const commentsWithReplies = await Promise.all(
            formattedData.map(async (comment: Comment) => {
                // Solo procesar comentarios que tengan un ID definido
                if (comment.id) {
                    const replies = await this.getReplies(comment.id);
                    return {
                        ...comment,
                        replies: replies || [],
                    };
                }
                return { ...comment, replies: [] };
            })
        );
        return commentsWithReplies;
    },

    async getReplies(commentId: number) {
        const {data, error} = await supabase
            .from('comments')
            .select('*')
            .eq('parent_id', commentId)
            .order('created_at', { ascending: true });

        if (error) {
            console.error('Error fetching replies:', error);
            return [];
        }

        return data;
    },    async addComment(comment: Comment, userId: string) {
        const anonymousId = generateAnonymousId();

        const newComment = {
            ...comment,
            user_id: userId,
            anonymous_id: anonymousId,
            is_anonymous: true,
            likes_count: 0
        };

        const { data, error } = await supabase
            .from('comments')
            .insert(newComment)
            .select();

        if (error) {
            console.error('Error adding comment:', error);
            throw error;
        }

        return data?.[0];
    },    async toggleLike(commentId: number, userId: string) {
        const { data: existingLike} = await supabase
            .from('comment_likes')
            .select('id')
            .eq('comment_id', commentId)
            .eq('user_id', userId)
            .maybeSingle();

        if (existingLike) {
            
            await supabase
                .from('comment_likes')
                .delete()
                .eq('id', existingLike.id);

            await supabase.rpc('decrement_likes', {comment_id: commentId});

            return false;
        } else {

            await supabase
                .from('comment_likes')
                .insert({ comment_id: commentId, user_id: userId });

            await supabase.rpc('increment_likes', {comment_id: commentId});

            return true;
        }
    },

    async hasUserLiked(commentId: number, userId: string) {
        const {data } = await supabase
            .from('comment_likes')
            .select('id')
            .eq('comment_id', commentId)
            .eq('user_id', userId)
            .maybeSingle();
        
        return !!data;
    },

    async deleteComment(commentId: number, userId: string) {
    // Verificar propiedad
    const { data: comment } = await supabase
      .from('comments')
      .select('user_id')
      .eq('id', commentId)
      .single();
    
    if (!comment || comment.user_id !== userId) {
      throw new Error('No tienes permiso para eliminar este comentario');
    }
    
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);
    
    if (error) {
      console.error('Error deleting comment:', error);
      throw error;
    }
    
    return true;
  }
};