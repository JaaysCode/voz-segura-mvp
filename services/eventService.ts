import { supabase } from '../lib/supabaseClient';

// Datos fijos de eventos para el MVP
const EVENTS_DATA = [
  {
    id: 1,
    category: 'workshop',
    categoryLabel: 'Taller',
    categoryIcon: 'fa-hands-helping',
    title: 'Autodefensa feminista',
    time: '16:00 - 18:00 hrs',
    location: 'Teatro',
    description: 'Taller práctico impartido por expertas en seguridad personal, donde aprenderás técnicas básicas de autodefensa desde una perspectiva feminista.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: {
      day: '15',
      month: 'JUN'
    },
    attendees: []
  },
  {
    id: 2,
    category: 'talk',
    categoryLabel: 'Charla',
    categoryIcon: 'fa-comments',
    title: 'Seguridad digital para mujeres',
    time: '14:00 - 15:30 hrs',
    location: 'Aula 302',
    description: 'Aprende a proteger tu privacidad en redes sociales y plataformas digitales con herramientas prácticas y consejos de expertas en ciberseguridad.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: {
      day: '22',
      month: 'JUN'
    },
    attendees: []
  },
  {
    id: 3,
    category: 'meetup',
    categoryLabel: 'Encuentro',
    categoryIcon: 'fa-heart',
    title: 'Círculo de sororidad',
    time: '18:00 - 20:00 hrs',
    location: 'Prometeo',
    description: 'Un espacio seguro para compartir experiencias, construir redes de apoyo y fortalecer nuestros lazos como comunidad de mujeres.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    date: {
      day: '30',
      month: 'JUN'
    },
    attendees: []
  }
];

export interface EventSubscription {
  id?: number;
  event_id: number;
  user_id: string;
  created_at?: string;
}

export const eventService = {
  // Obtener todos los eventos (datos fijos)
  async getAllEvents() {
    return EVENTS_DATA;
  },
  
  // Verificar si un usuario está suscrito a un evento
  async isSubscribed(eventId: number, userId: string) {
    const { data, error } = await supabase
      .from('event_subscriptions')
      .select('*')
      .eq('event_id', eventId)
      .eq('user_id', userId)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') { // error code for "no rows returned"
        return false;
      }
      console.error('Error checking subscription:', error);
      return false;
    }
    
    return true;
  },
  
  // Suscribir a un usuario a un evento
  async subscribeToEvent(eventId: number, userId: string) {
    // Primero verificamos si ya está suscrito
    const isAlreadySubscribed = await this.isSubscribed(eventId, userId);
    
    if (isAlreadySubscribed) {
      return { success: true, message: 'Ya estás suscrito a este evento' };
    }
    
    // Si no está suscrito, lo agregamos
    const { data, error } = await supabase
      .from('event_subscriptions')
      .insert({
        event_id: eventId,
        user_id: userId
      });
    
    if (error) {
      console.error('Error subscribing to event:', error);
      throw error;
    }
    
    return { success: true, message: 'Te has suscrito al evento' };
  },
  
  // Cancelar suscripción de un usuario a un evento
  async unsubscribeFromEvent(eventId: number, userId: string) {
    const { error } = await supabase
      .from('event_subscriptions')
      .delete()
      .eq('event_id', eventId)
      .eq('user_id', userId);
    
    if (error) {
      console.error('Error unsubscribing from event:', error);
      throw error;
    }
    
    return { success: true, message: 'Has cancelado tu suscripción' };
  }
};
