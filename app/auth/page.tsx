'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SignInForm from '@/components/auth/SignInForm';
import SignUpForm from '@/components/auth/SignUpForm';
import { AnimatedFormContainer } from '@/components/auth/AnimatedFormContainer';
import Logo from '@/components/Logo';
import { motion } from 'framer-motion';

// Componente interior que usa useSearchParams
function AuthPageContent() {
  const searchParams = useSearchParams();
  const modeParam = searchParams.get('mode');
  const [isSignIn, setIsSignIn] = useState(modeParam !== 'signup');
  
  // Update the state when URL parameters change
  useEffect(() => {
    setIsSignIn(modeParam !== 'signup');
  }, [modeParam]);  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2caff] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <Logo isNavbarOrHeader={false} showText={false} />
          <h2 className="mt-6 text-center text-3xl font-bold text-purple-900">
            {isSignIn ? "Iniciar sesión" : "Crear cuenta"}
          </h2>
        </div>
        
        <div className="relative mt-8" style={{ minHeight: '450px' }}>
          <div className="absolute w-full">
            <AnimatedFormContainer isVisible={isSignIn} direction="left">
              <SignInForm standalone={false} />
            </AnimatedFormContainer>
          </div>
          
          <div className="absolute w-full">
            <AnimatedFormContainer isVisible={!isSignIn} direction="right">
              <SignUpForm standalone={false} />
            </AnimatedFormContainer>
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-purple-900 hover:text-purple-700 font-medium bg-white px-4 py-2 rounded shadow-sm"
          >
            {isSignIn 
              ? "¿No tienes una cuenta? Regístrate" 
              : "¿Ya tienes una cuenta? Inicia sesión"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// Componente principal que envuelve AuthPageContent con Suspense
export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#f2caff]">
        <div className="text-center">
          <Logo isNavbarOrHeader={false} showText={false} />
          <h2 className="mt-6 text-xl font-medium text-purple-900">Cargando...</h2>
        </div>
      </div>
    }>
      <AuthPageContent />
    </Suspense>
  );
}
