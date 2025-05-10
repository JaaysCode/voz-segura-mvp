'use client';

import Image from 'next/image';
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';

interface LogoProps {
  isNavbarOrHeader?: boolean;
  className?: string;
  showText?: boolean;
}

const Logo = ({ isNavbarOrHeader = false, className = "", showText = true }: LogoProps) => {
    const pathname = usePathname();
    
    // No mostrar texto en las páginas de autenticación
    const isAuthPage = pathname?.includes('/sign-in') || pathname?.includes('/sign-up');
    const shouldShowText = showText && !isAuthPage;    return (
        <div className={cn(
            'flex items-center', 
            isNavbarOrHeader && 'logo',
            isAuthPage && 'auth-logo',
            className
        )}>            
            <Image
                alt='Logo'
                height={100}
                width={100}
                src="/images/voz-segura-logo.png"
                style={{ height: isAuthPage ? '80px' : '100px', width: 'auto' }}
            />
            {shouldShowText && (
                <div className="ml-3">
                    <h1 className="font-bold text-[var(--primary-color)]">Voz Segura</h1>
                    <span className="block text-sm text-[var(--secundary-color)] mt-1">Plataforma de Apoyo, Conciencia y Acción para Mujeres</span>
                </div>
            )}
        </div>
    );
}

export default Logo;