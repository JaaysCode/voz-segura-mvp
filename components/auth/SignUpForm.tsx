'use client';

import { useRouter } from "next/navigation";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/FormMessage";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { Input } from "@/components/ui/Input";
import Logo from "@/components/Logo";
import { useState } from "react";
import EmailVerificationMessage from "./EmailVerificationMessage";

interface SignUpFormProps {
  searchParams?: Message;
  standalone?: boolean; // Para determinar si se muestra como página independiente
}

export default function SignUpForm({ searchParams, standalone = true }: SignUpFormProps) {
    const router = useRouter();
    const [registrationComplete, setRegistrationComplete] = useState(false);
    const [email, setEmail] = useState("");
    
    const handleSignInClick = () => {
        router.push('/auth?mode=signin');
    };

    // El contenido del formulario que siempre se muestra
    const formContent = (
        <>            {registrationComplete ? (
                <EmailVerificationMessage email={email} />
            ) : (
                <form 
                    className="space-y-4"
                    action={async (formData) => {
                        const emailValue = formData.get("email")?.toString() || "";
                        
                        // Agregar un campo oculto para indicar que queremos mostrar el mensaje en la página
                        formData.append("showOnPage", "true");
                        
                        try {
                            const result = await signUpAction(formData);
                            if (result && typeof result === 'object' && 'success' in result) {
                                setEmail(emailValue);
                                setRegistrationComplete(true);
                            }
                        } catch (error) {
                            console.error("Error during sign up:", error);
                        }
                    }}
                >
                    <Input
                        type="text"
                        name="username"
                        placeholder="Tu nombre de usuario"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="tu@ejemplo.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Tu contraseña"
                        required
                        minLength={6}
                    />  
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirma tu contraseña"
                        required
                        minLength={6}
                    />
                    <SubmitButton
                        pendingText="Creando cuenta..."
                        className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400"
                    >
                        Registrarse
                    </SubmitButton>
                </form>
            )}{standalone && (
                <p className="text-center text-sm text-black mt-4">
                    ¿Ya tienes cuenta? <a href="/auth?mode=signin" className="text-purple-500 hover:underline">Sign In</a>
                </p>
            )}
            {!registrationComplete && searchParams && <FormMessage message={searchParams} />}
        </>
    );

    // Si es una página independiente, mostrar con el layout completo
    if (standalone) {
        return (
            <div className="min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
                <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-white">
                    <div className="flex justify-center mb-6">
                        <Logo isNavbarOrHeader={false} showText={false}/>
                    </div>
                    <div className="flex justify-center mb-6 text-black">
                        <button 
                            className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                            onClick={handleSignInClick}
                        >
                            Iniciar Sesión
                        </button>
                        <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
                            Registrarse
                        </button>
                    </div>
                    {formContent}
                </div>
            </div>
        );
    }

    // Si es usado en el componente animado, solo devolver el contenido del formulario
    return (
        <div className="rounded-lg p-6 w-full shadow-md bg-white">
            {formContent}
        </div>
    );
}
