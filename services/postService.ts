import { supabase } from '../lib/supabaseClient';

export interface Post {
    id?: number;
    title: string;
    content: string;
    created_at?: string;
    user_id?: string;
}

export const postService = {
    async createPost(post: Post, userId: string) {
        const newPost = {
            ...post,
            user_id: userId
        };

        const { data, error } = await supabase
            .from('posts')
            .insert(newPost)
            .select();

        if (error) {
            console.error('Error creating post:', error);
            throw error;
        }

        return data?.[0];
    },

    async getPostById(postId: number) {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', postId)
            .single();

        if (error) {
            console.error('Error fetching post:', error);
            throw error;
        }

        return data;
    },

    async getAllPosts() {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching posts:', error);
            return [];
        }

        return data || [];
    },

    // Esta función es temporal para crear un post predeterminado si no existe ninguno
    async ensureDefaultPostExists(userId: string) {
        const { count, error } = await supabase
            .from('posts')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('Error checking for posts:', error);
            return null;
        }

        // Si no hay posts, crear uno predeterminado
        if (count === 0) {
            const defaultPost: Post = {
                title: 'Foro general',
                content: 'Espacio para compartir experiencias y apoyarnos mutuamente.'
            };

            return await this.createPost(defaultPost, userId);
        }

        // Si ya hay posts, devolver el primero
        const { data } = await supabase
            .from('posts')
            .select('*')
            .order('id', { ascending: true })
            .limit(1);

        return data?.[0] || null;
    }
};
