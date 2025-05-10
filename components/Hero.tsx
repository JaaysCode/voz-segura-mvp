import { FaComments } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section 
      className="relative h-[550px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-image.jpg')"}}>
      <div className="absolute inset-0 bg-purple-900 bg-opacity-60"/>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="text-white max-w-lg">
          <h2 className="text-4xl font-bold mb-4 shadow-text">Juntas creamos espacios más seguros</h2>
          <p className=" text-xl mb-8">Una comunidad de apoyo, información y sororidad para mujeres en espacios públicos.</p>
          <a href="" 
            className="
            inline-flex 
            items-center 
            bg-purple-900 
            hover:bg-purple-800 
            text-white 
            font-bold 
            py-4 
            px-6 
            rounded-full 
            transition-all 
            hover:transform 
            hover:-translate-y-1 
            hover:shadow-lg">
            Únete al foro
            <FaComments className="ml-2" />
          </a>
        </div>
      </div> 
    </section>
  );
}
