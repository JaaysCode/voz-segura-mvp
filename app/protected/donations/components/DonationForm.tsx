'use client';

import React, { useState, FormEvent } from 'react';

// Definición de tipos para mejorar el tipado
type PaymentMethodType = 'visa' | 'mastercard' | 'paypal' | 'transfer' | '';
type DonationFrequency = 'one-time' | 'monthly' | 'quarterly' | 'annual';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  frequency: DonationFrequency;
}

const DonationForm: React.FC = () => {
  // Estados con tipos apropiados
  const [selectedAmount, setSelectedAmount] = useState<number | ''>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('');
  const [newsletterChecked, setNewsletterChecked] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    frequency: 'one-time'
  });
  const [errors, setErrors] = useState<Partial<FormData & { amount: string }>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  
  // Manejadores de eventos tipados
  const handleAmountSelect = (amount: number): void => {
    setSelectedAmount(amount);
    setErrors({ ...errors, amount: '' });
  };
  
  const handleCustomAmount = (): void => {
    if (customAmount && !isNaN(Number(customAmount)) && Number(customAmount) > 0) {
      setSelectedAmount(Number(customAmount));
      setErrors({ ...errors, amount: '' });
    } else {
      setErrors({ ...errors, amount: 'Por favor ingresa un monto válido' });
    }
  };
  
  const handlePaymentMethodSelect = (method: PaymentMethodType): void => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    
    // Limpiar error cuando el usuario escribe
    if (errors[id as keyof typeof errors]) {
      setErrors({
        ...errors,
        [id]: ''
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData & { amount: string }> = {};
    
    // Validación de monto
    if (!selectedAmount) {
      newErrors.amount = 'Por favor selecciona o ingresa un monto';
    }
    
    // Validación de datos personales
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre completo';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulación de envío (aquí se conectaría con una API real)
      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage('¡Gracias por tu donación! Hemos enviado un correo de confirmación.');
        
        // Resetear formulario
        setSelectedAmount('');
        setCustomAmount('');
        setPaymentMethod('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          frequency: 'one-time'
        });
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl bg-white p-8 rounded-l-xl shadow-lg">
      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">Haz tu donación</h2>
        <p className="text-gray-600">
          Tus donaciones nos permiten continuar con nuestro trabajo de crear espacios seguros, 
          ofrecer talleres y apoyar a mujeres en situaciones de vulnerabilidad.
        </p>
      </div>
      
      {/* Selección de monto */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Selecciona el monto de tu donación
        </label>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[100, 200, 500, 1000, 1500, 2000].map(amount => (
            <button
              type="button"
              key={amount}
              className={`py-2 px-4 rounded-md ${
                selectedAmount === amount 
                  ? 'bg-purple-100 border-2 border-purple-600 text-purple-800' 
                  : 'border-2 border-gray-300 hover:border-purple-400'
              }`}
              onClick={() => handleAmountSelect(amount)}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="number"
            placeholder="Otro monto"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            min="1"
            aria-label="Ingresa un monto personalizado"
            className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <button
            type="button"
            onClick={handleCustomAmount}
            className="bg-purple-600 text-white py-2 px-4 rounded-r-md hover:bg-purple-700 transition-colors"
          >
            Aplicar
          </button>
        </div>
        {errors.amount && (
          <p className="text-red-500 text-sm mt-2">{errors.amount}</p>
        )}
      </div>
      
      {/* Datos personales */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nombre completo</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleInputChange}
          required
          aria-required="true"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
        <input 
          type="email" 
          id="email" 
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleInputChange}
          required
          aria-required="true"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Teléfono (opcional)</label>
        <input 
          type="tel" 
          id="phone" 
          placeholder="Tu teléfono"
          value={formData.phone}
          onChange={handleInputChange}
          aria-required="false"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="frequency" className="block text-gray-700 font-medium mb-1">Frecuencia de donación</label>
        <select 
          id="frequency"
          value={formData.frequency}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
        >
          <option value="one-time">Donación única</option>
          <option value="monthly">Mensual</option>
          <option value="quarterly">Trimestral</option>
          <option value="annual">Anual</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensaje (opcional)</label>
        <textarea 
          id="message" 
          rows={3} 
          placeholder="Déjanos un mensaje..."
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>
      
      {/* Métodos de pago */}
      <div className="mb-6">
        <div className="text-gray-700 font-medium mb-2">Selecciona tu método de pago</div>
        <div className="grid grid-cols-4 gap-3">
          <div 
            className={`flex flex-col items-center justify-center p-3 border-2 rounded-md cursor-pointer ${
              paymentMethod === 'visa' ? 'bg-purple-100 border-purple-600' : 'border-gray-300 hover:border-purple-400'
            }`}
            onClick={() => handlePaymentMethodSelect('visa')}
            role="button"
            tabIndex={0}
            aria-pressed={paymentMethod === 'visa'}
            aria-label="Pagar con Visa"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="w-10 h-10 mb-1" />
            <span className="text-sm">Visa</span>
          </div>
          
          <div 
            className={`flex flex-col items-center justify-center p-3 border-2 rounded-md cursor-pointer ${
              paymentMethod === 'mastercard' ? 'bg-purple-100 border-purple-600' : 'border-gray-300 hover:border-purple-400'
            }`}
            onClick={() => handlePaymentMethodSelect('mastercard')}
            role="button"
            tabIndex={0}
            aria-pressed={paymentMethod === 'mastercard'}
            aria-label="Pagar con Mastercard"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="w-10 h-10 mb-1" />
            <span className="text-sm">Mastercard</span>
          </div>
          
          <div 
            className={`flex flex-col items-center justify-center p-3 border-2 rounded-md cursor-pointer ${
              paymentMethod === 'paypal' ? 'bg-purple-100 border-purple-600' : 'border-gray-300 hover:border-purple-400'
            }`}
            onClick={() => handlePaymentMethodSelect('paypal')}
            role="button"
            tabIndex={0}
            aria-pressed={paymentMethod === 'paypal'}
            aria-label="Pagar con PayPal"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" alt="PayPal" className="w-10 h-10 mb-1" />
            <span className="text-sm">PayPal</span>
          </div>
          
          <div 
            className={`flex flex-col items-center justify-center p-3 border-2 rounded-md cursor-pointer ${
              paymentMethod === 'transfer' ? 'bg-purple-100 border-purple-600' : 'border-gray-300 hover:border-purple-400'
            }`}
            onClick={() => handlePaymentMethodSelect('transfer')}
            role="button"
            tabIndex={0}
            aria-pressed={paymentMethod === 'transfer'}
            aria-label="Pagar con Transferencia Bancaria"
          >
            <i className="fas fa-university text-purple-600 text-2xl mb-2"></i>
            <span className="text-sm">Transferencia</span>
          </div>
        </div>
        {!paymentMethod && (
          <p className="text-amber-600 text-sm mt-2">Por favor selecciona un método de pago</p>
        )}
      </div>
      
      {/* Newsletter checkbox */}
      <div className="mb-6">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={newsletterChecked}
            onChange={() => setNewsletterChecked(!newsletterChecked)}
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" 
          />
          <span className="ml-2 text-gray-700">Deseo recibir información sobre las actividades de Voz Segura</span>
        </label>
      </div>
      
      {/* Botón de donación */}
      <button 
        type="submit"
        disabled={!paymentMethod || !selectedAmount || isSubmitting}
        className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
          paymentMethod && selectedAmount && !isSubmitting
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Procesando...' : paymentMethod && selectedAmount ? 
          'Donar ahora' : 
          'Selecciona un monto y método de pago para continuar'}
      </button>
    </form>
  );
};

export default DonationForm;