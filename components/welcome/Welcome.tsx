import React from 'react'
import WelcomeCard from './WelcomeCard';
import { FaHandsHelping, FaInfoCircle, FaMapMarkedAlt } from 'react-icons/fa';
const Welcome = () => {
  return (
    <>      <section className='py-16 text-center'>
          <div className='container mx-auto px-4 '>
              <h2 className='text-3xl font-bold mb-4 text-purple-900 relative inline-block pb-2 after:content-[""] after:block after:w-1/2 after:h-[3px] after:bg-[var(--secondary-color)] after:absolute after:bottom-0 after:left-1/4'>
                  Bienvenido a nuestra comunidad
              </h2>                
              <p className='max-w-3xl mx-auto mb-12 text-lg'>
                  En Voz Segura creemos en la importancia de espacios públicos inclusivos donde todas podamos sentirnos libres y seguras.
                  Esta plataforma es tu espacio para compartir experiencias, recibir apoyo y encontrar recursos que te empoderen.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto'>                
                <WelcomeCard>
                  <FaHandsHelping/>
                  <h3 className='text-xl font-bold mb-3 text-[var(--primary-color)]'>Sororidad</h3>
                  <p>Conéctate con otras mujeres que comparten tus preocupaciones y experiencias en un espacio seguro y de apoyo mutuo.</p>
                </WelcomeCard>

                <WelcomeCard>
                  <FaMapMarkedAlt/>
                  <h3 className='text-xl font-bold mb-3 text-purple-900'>Mapa Seguro</h3>
                  <p>Identifica zonas seguras y de riesgo en la Universidad de Medellín con nuestro mapa colaborativo actualizado por la comunidad.</p>
                </WelcomeCard>

                <WelcomeCard>
                  <FaInfoCircle/>
                  <h3 className='text-xl font-bold mb-3 text-purple-900'>Recursos</h3>
                  <p>Accede a información clave sobre tus derechos, protocolos de seguridad y organizaciones de apoyo.</p>
                </WelcomeCard>
              </div>    
          </div>
      </section>
    </>
  );
}

export default Welcome