import Card from "@/components/Card"
import { FaHeart } from "react-icons/fa"

export default function Impact() {
    return(

        <section className="p-16 bg-[var(--background-color)] ">
            <div className='w-[90%] max-w-[1200px] mx-auto'>                
                <div className='text-center mb-12'>
                    <h2 className='text-[var(--primary-color)] relative inline-block pb-4 text-4xl font-bold'>Nuestro Impacto</h2>
                    <div className="h-1 w-24 bg-[var(--secondary-color)] mx-auto mt-2 mb-4 rounded-full"></div>
                    <p className='max-w-[700px] mt-4 mx-auto text-[var(--text-color)]'>
                        Los números que reflejan el cambio que estamos generando juntas
                    </p> 
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">                    
                    <Card borderPosition="bottom" minHeight="200px" cursorPointer={false}>
                        <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">500+</div>
                        <div className="text-[var(--text-color)] text-[0.9rem]">Mujeres forman parte de nuestra comunidad</div>
                    </Card>
                    <Card borderPosition="bottom" minHeight="200px" cursorPointer={false}>
                        <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">85%</div>
                        <div className="text-[var(--text-color)] text-[0.9rem]">De usuarias reportan sentirse más seguras usando nuestra plataforma</div>
                    </Card>
                    <Card borderPosition="bottom" minHeight="200px" cursorPointer={false}>
                        <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">1</div>
                        <div className="text-[var(--text-color)] text-[0.9rem]">Estamos presentes en la Universidad de Medellín</div>
                    </Card>
                    <Card borderPosition="bottom" minHeight="200px" cursorPointer={false}>
                        <div className="text-5xl font-bold text-[var(--primary-color)] mb-2">20</div>
                        <div className="text-[var(--text-color)] text-[0.9rem]">Acompañamientos seguros realizados</div>
                    </Card>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#"
                        className="
                        inline-block 
                        bg-[var(--primary-color)] 
                        text-white 
                        px-6 
                        py-3 
                        rounded-full 
                        font-semibold 
                        no-underline 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        hover:bg-[#4a148c] 
                        hover:-translate-y-1 
                        hover:shadow-lg"                    >
                        <span className="flex items-center justify-between w-full">
                            Únete a nuestra causa <FaHeart className="ml-2"/>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}