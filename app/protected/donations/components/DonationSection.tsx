import React from 'react';
import DonationForm from './DonationForm';

export default function DonationSection () {
  return (
    <section id="donations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl">
          {/* Formulario de donación */}
          <DonationForm />
          
          {/* Imagen de donación */}
          <div className="w-full lg:w-2/5 bg-cover bg-center h-80 lg:h-auto" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
          </div>
        </div>
      </div>
    </section>
  );
};

