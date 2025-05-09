'use client';

import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import { signUpAction } from "@/app/actions";

import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";

interface SignUpFormProps {
  searchParams?: Message;
}

export default function SignUpForm({ searchParams }: SignUpFormProps) {
    const router = useRouter();

    const handleSignInClick = () => {
        router.push('/sign-in');
    }

  return(
    <div className = "min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
        <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-[#ffff]">
            <div className="flex justify-center mb-6">
                <Logo/>
            </div>
            <div className="flex justify-center mb-6 text-black">
                <button 
                    className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                    onClick={handleSignInClick}
                >
                    Sign In
                </button>
                <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
                    Sign Up
                </button>
            </div>
            <form action="" className="space-y-4 text-white">
                <Input
                    type="text"
                    name = "username"
                    placeholder="Your username"
                    required
                />
                <Input
                    type="email"
                    name = "email"
                    placeholder="you@example.com"
                    required
                />
                <Input
                    type="password"
                    name = "password"
                    placeholder="Your password"
                    required
                    minLength={6}
                />  
                <Input
                    type="password"
                    name = "confirmPassword"
                    placeholder="Confirm your password"
                    required
                    minLength={6}
                />
                <SubmitButton
                    formAction={signUpAction}
                    pendingText="Signing up..."
                    className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400"
                >
                    Sign Up
                </SubmitButton>
            </form>
            <p className="text-center text-sm text-black mt-4">
                Already have an account? <a href="sign-in" className="text-purple-500 hover:underline">Sign In</a>
            </p>
            {searchParams && <FormMessage message={searchParams} />}
        </div>
    </div>
  )
}