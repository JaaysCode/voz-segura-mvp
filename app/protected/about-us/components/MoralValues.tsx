import Card from "@/components/Card";
import { FaBalanceScale, FaHandHoldingHeart, FaLightbulb, FaShieldAlt, FaUsers, FaUserSecret } from "react-icons/fa";

export default function MoralValues () {

    return(
        <section className="py-16 bg-[var(--background-color)]">
            <div className="w-[90%] max-w-[1200px] mx-auto">                
                <div className="text-center mb-12">
                    <h2 className='text-[var(--primary-color)] relative inline-block pb-4 text-4xl font-bold'>Nuestros Valores</h2>
                    <div className="h-1 w-24 bg-[var(--secondary-color)] mx-auto mt-2 mb-4 rounded-full"></div>
                    <p className='max-w-[700px] mt-4 mx-auto text-[var(--text-color)]'>
                        Los principios que guían cada acción que tomamos y cada decisión que hacemos
                    </p> 
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-8 mt-12">                    
                    <Card cursorPointer = {false}>
                        <FaHandHoldingHeart/>
                        <h3 className="text-[var(--primary-color)] font-bold">Sororidad</h3>
                        <p>Creemos en la alianza entre mujeres para construir
                            redes de apoyo que nos permitan crecer y desarrollarnos
                            en entornos seguros.
                        </p>
                    </Card>

                    <Card cursorPointer = {false}>
                        <FaBalanceScale/>
                        <h3 className="text-[var(--primary-color)] font-bold">Justicia</h3>
                        <p>Trabajamos por un mundo donde todas las mujeres puedan vivir libres de violencia y con igualdad de oportunidades.</p>
                    </Card>
                    
                    <Card cursorPointer = {false}>
                        <FaShieldAlt/>
                        <h3 className="text-[var(--primary-color)] font-bold">Seguridad</h3>
                        <p>Priorizamos la integridad física y emocional de nuestras usuarias en cada aspecto de nuestra plataforma.</p>
                    </Card>
                    <Card cursorPointer = {false}>
                        <FaUsers/>
                        <h3 className="text-[var(--primary-color)] font-bold">Comunidad</h3>
                        <p>Sabemos que juntas somos más fuertes. Fomentamos la colaboración y el apoyo mutuo entre todas las integrantes.</p>
                    </Card>
                    
                    <Card cursorPointer = {false}>
                        <FaLightbulb/>
                        <h3 className="text-[var(--primary-color)] font-bold">Innovación</h3>
                        <p>Buscamos constantemente nuevas formas de abordar los desafíos de seguridad que enfrentan las mujeres.</p>
                    </Card>
                    
                    <Card cursorPointer = {false}>
                        <FaUserSecret/>
                        <h3 className="text-[var(--primary-color)] font-bold">Confidencialidad</h3>
                        <p>Respetamos y protegemos la privacidad de nuestras usuarias en todo momento.</p>
                    </Card>
                </div>

            </div>

        </section>
    );
}