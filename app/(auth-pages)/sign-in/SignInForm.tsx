// 'use client';

// import Logo from "@/components/Logo";
// import { useRouter } from "next/navigation";
// import { signInAction } from "@/app/actions";
// import { FormMessage, Message } from "@/components/FormMessage";
// import { SubmitButton } from "@/components/ui/SubmitButton";
// import { Input } from "@/components/ui/Input";
// import SignInWithGoogleButton from "./components/SignInWithGoogleButton";


// interface SignInFormProps {
//     searchParams?: Message;
//     standalone?: boolean;
// }

// export default function SignInForm({searchParams, standalone = true}: SignInFormProps) {
//     const router = useRouter();

//     const handleSignUpClick = () => {
//         router.push('/sign-up');
//     };

//     const formContent = (
//         <>
//             <form action="" className="space-y-4 text-white">
//                 <Input
//                     type="email"
//                     name="email"
//                     placeholder="you@example.com"
//                     required
//                 />
//                 <Input
//                     type="password"
//                     name="password"
//                     placeholder="Your password"
//                     required
//                     minLength={6}
//                 />
                
//                 <SubmitButton
//                     pendingText="Signing in..."
//                     formAction={signInAction}
//                     type="submit"
//                     className="w-full text-white py-3 rounded transition bg-[#7A0A9A] hover:bg-[#9B2DCA] focus:outline-none focus:border-2 focus:border-purple-400">
//                     Iniciar Sesión
//                 </SubmitButton>
                
//                 <div className="relative my-4">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-300"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                         <span className="px-2 bg-white text-gray-500">Or</span>
//                     </div>
//                 </div>
//                 <SignInWithGoogleButton/>
//             </form>
//             {standalone ? (
//                 <p className="text-center text-sm text-black mt-4">
//                     Don't have an account? <a href="/sign-up" className="text-purple-500 hover:underline">Sign Up</a>
//                 </p>
//             ) : null}
//             {searchParams && <FormMessage message={searchParams} />}
//         </>
//     );

//     // Si es una página independiente, mostrar con el layout completo
//     if (standalone) {
//         return (
//             <div className="min-h-screen bg-[#f2caff] flex flex-col justify-center items-center px-4">
//                 <div className="rounded-lg p-8 w-full max-w-md shadow-md bg-[#ffff]">
//                     <div className="flex justify-center mb-6">
//                         <Logo isNavbarOrHeader={false} showText={false}/>
//                     </div>
//                     <div className="flex justify-center mb-6 text-black">
//                         <button className="px-4 font-semibold border-b-2 border-purple-400 transition">
//                             Sign In
//                         </button>
//                         <button 
//                             className="px-4 font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
//                             onClick={handleSignUpClick}
//                         >
//                             Sign Up
//                         </button>
//                     </div>
//             {formContent}
//                 </div>
//             </div>
//         );
//     }

//     // Si es usado en el componente animado, solo devolver el contenido del formulario
//     return (
//         <div className="rounded-lg p-6 w-full shadow-md bg-white">
//             {formContent}
//         </div>
//     );
// }

