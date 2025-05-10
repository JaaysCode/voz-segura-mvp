'use client';

import React from 'react';

interface EmailVerificationMessageProps {
  email: string;
}

const EmailVerificationMessage: React.FC<EmailVerificationMessageProps> = ({ email }) => {
  return (
    <div className="bg-[#EDF7ED] border border-[#C8E6C9] text-[#1B5E20] p-4 rounded-lg mb-6 text-center">
      <div className="flex justify-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="font-bold text-lg mb-2">¡Revisa tu correo electrónico!</h3>
      <p className="mb-3">Hemos enviado un enlace de verificación a <strong>{email}</strong></p>
      <p className="text-sm">Por favor haz clic en el enlace para activar tu cuenta.</p>
    </div>
  );
};

export default EmailVerificationMessage;
