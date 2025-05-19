import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import { eventService } from '@/services/eventService';

interface EventDate {
  day: string;
  month: string;
}

interface EventData {
  id: number;
  category: string;
  categoryLabel: string;
  categoryIcon: string;
  title: string;
  time: string;
  location: string;
  description: string;
  image: string;
  date: EventDate;
  attendees: string[];
}

const EventsSection = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);  // Cargar eventos desde Supabase
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const eventsData = await eventService.getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="flex items-center justify-center text-4xl font-bold text-[var(--primary-color)] mb-4">
            <FaCalendarAlt className="text-[var(--secondary-color)] mr-4"/>
            Próximos Eventos
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Participa en nuestras actividades diseñadas para crear conciencia, empoderar y conectar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border-l-4 border-[var(--secondary-color)] animate-pulse">
                <div className="h-[200px] bg-gray-200"></div>
                <div className="p-8">
                  <div className="h-6 bg-gray-200 rounded-full w-1/3 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded-full w-2/3 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full mb-5"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-2/3 mb-5"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-10 bg-gray-200 rounded-full w-1/3"></div>
                    <div className="h-6 bg-gray-200 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            ))
          ) : events.length === 0 ? (
            <div className="col-span-3 text-center p-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No hay eventos programados actualmente.</p>
            </div>
          ) : (
            events.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          )}
        </div>

        <div className="bg-[var(--tertiary-color)] rounded-xl p-12 text-center mt-8">
          <p className="text-xl font-semibold text-[var(--primary-color)] mb-6">
            ¿Tienes una idea para un evento o quieres colaborar con nosotras?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-[var(--primary-color)] hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contáctanos
            <FaArrowRight/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;