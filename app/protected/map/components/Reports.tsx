import ReportCard from "./ReportCard";

export default function Reports() {
    return (
        <div className="w-[90%] max-w-[1200px] mx-auto">
            <div className="text-center mb-[2rem]">
                <h2 className='
                    text-[var(--primary-color)] 
                    relative 
                    inline-block 
                    pb-4 
                    text-4xl 
                    font-bold
                    pt-20'>

                        Zonas Reportadas Recientemente en la UDEM
                </h2>

                <div className="
                    h-1 
                    w-24 
                    bg-[var(--secondary-color)] 
                    mx-auto 
                    mt-2 
                    mb-4 
                    rounded-full">                        
                </div>
                <p className="max-w-[700px] text-[var(--text-color)] mt-4 mx-auto">Estas son algunas de las zonas que nuestra comunidad ha identificado como potencialmente inseguras</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-6 mt-[2rem]">
                <ReportCard/>
            </div>

        </div>
    )
}