export default function AboutUsHero() {

    return(

        <section 
            className="
                bg-[linear-gradient(135deg,_rgba(106,27,154,0.8),_rgba(156,39,176,0.8))]
                h-[400px]
                flex
                items-center
                justify-center
                text-center
                text-white
            "
            >
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <div>
                        <h1 className="mb-4 text-5xl text-shadow">Acerca de Nosotros</h1>
                        <p className="mx-auto text-xl max-w-[720px]">
                            Conoce los principios fundamentales que guían nuestro trabajo
                            por espacios más seguros para todas las mujeres
                        </p>
                    </div>
                </div>
        </section>
    );


}