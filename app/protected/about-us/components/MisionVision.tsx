import Card from '@/components/Card';
import { FaBullseye, FaEye } from 'react-icons/fa';
export default function MisionVision() {
    return(
        <section className='p-16 bg-white'>
            <div className='w-[90%] max-w-[1200px] mx-auto'>                
                <div className='text-center mb-12'>
                    <h2 className='text-[var(--primary-color)] relative inline-block pb-4 text-4xl font-bold'>Nuestro Propósito</h2>
                    <div className="h-1 w-24 bg-[var(--secondary-color)] mx-auto mt-2 mb-4 rounded-full"></div>
                    <p className='max-w-[700px] mt-4 mx-auto text-[var(--text-color)]'>
                        Los pilares que definen nuestra razón de ser y nuestro rumbo hacia el futuro
                    </p> 
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto'>
                    <Card iconPosition='top-left' cursorPointer={false}>
                        <FaBullseye className='text-5xl'/>
                        <h3 className='text-[var(--primary-color)] text-2xl mb-6 font-bold'>Misión</h3>
                        <p className='text-[var(--text-color)] leading-[1.7]'>Empoderar a las mujeres a través de una plataforma colaborativa que promueva
                            la seguridad en espacios públicos, fomentando la sororidad, brindando herramientas de protección
                            y generando conciencia social sobre la importancia de entornos libres de violencia de género.</p>
                    </Card>
                    <Card iconPosition='top-left' cursorPointer={false}>
                        <FaEye className='text-5xl'></FaEye>
                        <h3 className='text-[var(--primary-color)] text-2xl mb-6 font-bold'>Visión</h3>
                        <p className='text-[var(--text-color)] leading-[1.7]'>Ser el movimiento líder en América Latina que transforme los espacios públicos en entornos
                        verdaderamente seguros e inclusivos para todas las mujeres, donde puedan desarrollarse con 
                        plena libertad y autonomía, sin temor a la violencia o el acoso.</p>
                    </Card>
                </div>
            </div>
        </section>
    ) 
}