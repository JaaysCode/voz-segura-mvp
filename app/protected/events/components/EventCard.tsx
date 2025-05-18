import React, {useState} from "react";
import { FaBell, FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface EventDate {
  day: string;
  month: string;
}

interface EventProps {
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

interface EventCardProps {
  event: EventProps;
}

const getTagStyle = (category: string) => {
  switch(category) {
    case 'workshop':
      return 'bg-pink-600/10 text-pink-600';
    case 'talk':
      return 'bg-purple-900/10 text-purple-900';
    case 'meetup':
      return 'bg-purple-600/10 text-purple-600';
    default:
      return 'bg-purple-600/10 text-purple-600';
  }
};

export default function EventCard({ event }: EventCardProps) {
    return(
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-[10px] border-l-4 border-[var(--secondary-color)] ">
            <div className="h-[200px] overflow-hidden relative">
                <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute top-[-40px] right-5 bg-[var(--primary-color)] text-white p-4 w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-md">
                <div className="text-3xl font-bold leading-none">{event.date.day}</div>
                <div className="text-sm uppercase mt-1">{event.date.month}</div>
                </div>
            </div>

            <div className="p-8 relative">
                <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase mb-4 ${getTagStyle(event.category)}`}>
                <i className={`fas ${event.categoryIcon}`}></i>
                {event.categoryLabel}
                </span>

                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{event.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-5 text-gray-600 text-sm">
                <span className="flex items-center">
                    <FaClock className="text-[var(--secondary-color)] mr-1.5"/>
                    {event.time}
                </span>
                <span className="flex items-center">
                    <FaMapMarkerAlt className="text-[var(--secondary-color)] mr-1.5"/>
                    {event.location}
                </span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-5">{event.description}</p>

                <div className="flex justify-between items-center min-h-[50px]">
                <button className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md bg-[var(--primary-color)] text-white hover:bg-purple-700">
                    <FaBell/>

                    Suscribirse
                </button>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex">
                    {event.attendees.map((avatar, index) => (
                        <div key={index} 
                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-purple-100 text-[var(--primary-color)] text-xs font-bold border-2 border-white -ml-2 first:ml-0"
                        >
                        {avatar}
                        </div>
                    ))}
                    </div>
                    <span>Asistiendo</span>
                </div>
                </div>
            </div>
        </div>
    );
}

