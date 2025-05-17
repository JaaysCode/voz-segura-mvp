import { FaMapMarkerAlt } from "react-icons/fa";

export default function ReportCard() {  

    return(
        <div className="
            bg-white 
            rounded-[10px] 
            overflow-hidden 
            shadow-[0,_5px,_15px,_rgba(0,0,0,0.05)]
            transition-all
            hover:transform
            hover:-translate-y-2
            hover:shadow-xl
            ">            
            <div className="
                p-4 
                flex 
                justify-between 
                items-center 
                border-b 
                border-[var(--border-color)]"
            >
                <h4 className="text-[var(--primary-color)] mb-0 font-bold">Problema de luces</h4>
                <span className="px-[0.8rem] py-[0.3rem] rounded-[15px] text-[0.8rem] font-semibold bg-[#FFEBEE] text-[#FFA000] ml-auto">Riesgo Medio</span>
            </div>

            <div className="p-6">
                <div className="
                    text-[var(--secondary-color)]
                    text-[0.9rem]
                    mb-4
                    flex
                    items-center
                    gap-[5px]
                ">
                    <FaMapMarkerAlt/>
                    <span>Cra. 87 frente al bloque 1</span>
                </div>
                <p> Falta de iluminación adecuada en la entrada principal luego de las 7pm.</p>
            </div>
            <div className="
                p-4
                bg-[var(--background-color)]
                flex
                justify-between
                items-center
                text-[0.9rem]
            "> 
                <span className="text-[#666]">Reportado hace 2 días</span>

            </div>
        </div>
       
    )
}
