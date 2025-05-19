import React, {useState, useEffect} from "react";
import { FaBell, FaClock, FaMapMarkerAlt, FaCheckCircle, FaBellSlash } from "react-icons/fa";
import { eventService } from "@/services/eventService";
import { useUser } from "@/lib/UserContext";

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
    const { user } = useUser();
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const checkSubscription = async () => {
            if (user) {
                try {
                    const subscribed = await eventService.isSubscribed(event.id, user.id);
                    setIsSubscribed(subscribed);
                } catch (error) {
                    console.error('Error checking subscription:', error);
                }
            }
        };
        
        checkSubscription();
    }, [user, event.id]);
    
    // Manejar la suscripción o cancelación
    const handleSubscription = async () => {
        if (!user) {
            alert('Debes iniciar sesión para suscribirte a eventos');
            return;
        }
        
        setIsLoading(true);
        
        try {
            if (isSubscribed) {
                await eventService.unsubscribeFromEvent(event.id, user.id);
                setIsSubscribed(false);
            } else {
                await eventService.subscribeToEvent(event.id, user.id);
                setIsSubscribed(true);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };
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
                </div>                <p className="text-gray-700 leading-relaxed mb-5">{event.description}</p>

                <div className="flex justify-between items-center min-h-[50px]">
                <button 
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                        isSubscribed 
                        ? 'bg-green-100 text-green-600 hover:bg-green-200' 
                        : 'bg-[var(--primary-color)] text-white hover:bg-purple-700'
                    }`}
                    onClick={handleSubscription}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Procesando...
                        </span>
                    ) : isSubscribed ? (
                        <>
                            <FaCheckCircle />
                            Suscrito
                        </>
                    ) : (
                        <>
                            <FaBell />
                            Suscribirse
                        </>
                    )}
                </button>                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex">
                    {event.attendees.map((avatar, index) => (
                        <div key={index} 
                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-purple-100 text-[var(--primary-color)] text-xs font-bold border-2 border-white -ml-2 first:ml-0"
                        >
                        {avatar}
                        </div>
                    ))}
                    </div>
                    {isSubscribed && <span>Asistiendo</span>}
                </div>
                </div>
            </div>
        </div>
    );
}

