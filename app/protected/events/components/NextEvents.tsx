import React from 'react';
import EventCard from './EventCard';
import { FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

const EventsSection = () => {
  const events = [
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
      attendees: ['A', 'M', '+12']
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
      attendees: ['C', 'P', '+8']
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
      attendees: ['M', 'G', '+15']
    }
  ];

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
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
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