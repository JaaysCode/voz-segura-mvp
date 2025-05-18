import { FaCalendarAlt } from "react-icons/fa";


export default function EventsHero() {
    return(
        <section className="relative h-[550px] flex items-center">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-800/70"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="max-w-[600px] text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
                        Únete a entornos seguros
                    </h2>
                    <p className="text-xl mb-8">
                        Participa de los eventos y charlas que tenemos preparados para ti.
                    </p>
                    
                    <a 
                        href="#events" 
                        className="inline-flex items-center gap-2 bg-purple-900 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Ver eventos
                        <FaCalendarAlt/>
                    </a>

                </div>
            </div>


        </section>
    )
}