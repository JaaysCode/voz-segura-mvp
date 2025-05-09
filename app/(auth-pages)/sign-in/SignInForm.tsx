'use client';

import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
//import { SignInWithGoogleButton }
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import SignInWithGoogleButton from "./components/SignInWithGoogleButton";

// export default async function Login(props: { searchParams: Promise<Message> }) {
//   const searchParams = await props.searchParams;
//   return (
//     <form className="flex-1 flex flex-col min-w-64">
//       <h1 className="text-2xl font-medium">Sign in</h1>
//       <p className="text-sm text-foreground">
//         Don't have an account?{" "}
//         <Link className="text-foreground font-medium underline" href="/sign-up">
//           Sign up
//         </Link>
//       </p>
//       <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
//         <Label htmlFor="email">Email</Label>
//         <Input name="email" placeholder="you@example.com" required />
//         <div className="flex justify-between items-center">
//           <Label htmlFor="password">Password</Label>
//           <Link
//             className="text-xs text-foreground underline"
//             href="/forgot-password"
//           >
//             Forgot Password?
//           </Link>
//         </div>
//         <Input
//           type="password"
//           name="password"
//           placeholder="Your password"
//           required
//         />
//         <SubmitButton pendingText="Signing In..." formAction={signInAction}>
//           Sign in
//         </SubmitButton>
//         <FormMessage message={searchParams} />
//       </div>
//     </form>
//   );
// }

interface SignInFormProps {
    searchParams?: Message;
}

export default function FormSignIn({searchParams}: SignInFormProps) {

    const router = useRouter();

    const handleSignUpClick = () => {
        router.push('/sign-up');
  }

  return(
    <div className = "min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
        <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-[#ffff]">
            <div className="flex justify-center mb-6">
                <Logo/>
            </div>
            <div className="flex justify-center mb-6 text-black">
                <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
                    Sign In
                </button>
                <button 
                    className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                    onClick={handleSignUpClick}
                >
                    Sign Up
                </button>
            </div>
            <form action="" className="space-y-4 text-white">
              
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
                
                <SubmitButton
                    pendingText="Signing in..."
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
            </form>
            <p className="text-center text-sm text-black mt-4">
                Don't have an account? <a href="/sign-up" className="text-purple-500 hover:underline">Sign Up</a>
            </p>
            {searchParams && <FormMessage message={searchParams} />}
        </div>
    </div>
  )
}
