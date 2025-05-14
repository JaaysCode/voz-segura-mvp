'use client';

import { useRouter } from "next/navigation";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/FormMessage";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { Input } from "@/components/ui/Input";
import SignInWithGoogleButton from "@/components/auth/SignInWithGoogleButton";
import Logo from "@/components/Logo";

interface SignInFormProps {
    searchParams?: Message;
    standalone?: boolean; // Para determinar si se muestra como página independiente
}

export default function SignInForm({searchParams, standalone = true}: SignInFormProps) {
    const router = useRouter();    const handleSignUpClick = () => {
        router.push('/auth?mode=signup');
    };

    const formContent = (
        <>
            <form className="space-y-4">
                <Input
                    type="email"
                    name="email"
                    placeholder="tu@ejemplo.com"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Tu contraseña"
                    required
                    minLength={6}
                />
                
                <SubmitButton
                    pendingText="Iniciando Sesión..."
                    formAction={signInAction}
                    type="submit"
                    className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400">
                    Iniciar Sesión
                </SubmitButton>
                
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                </div>
                <SignInWithGoogleButton/>
            </form>            {standalone && (
                <p className="text-center text-sm text-black mt-4">
                    ¿Eres nuevo? <a href="/auth?mode=signup" className="text-purple-500 hover:underline">Sign Up</a>
                </p>
            )}
            {searchParams && <FormMessage message={searchParams} />}
        </>
    );

    if (standalone) {
        return (
            <div className="min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
                <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-white">
                    <div className="flex justify-center mb-6">
                        <Logo isNavbarOrHeader={false} showText={false}/>
                    </div>
                    <div className="flex justify-center mb-6 text-black">
                        <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
                            Iniciar Sesión
                        </button>
                        <button 
                            className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                            onClick={handleSignUpClick}
                        >
                            Registrarse
                        </button>
                    </div>
                    {formContent}
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg p-6 w-full shadow-md bg-white">
            {formContent}
        </div>
    );
}
