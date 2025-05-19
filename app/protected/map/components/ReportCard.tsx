import { FaMapMarkerAlt } from "react-icons/fa";

interface ReportCardProps {
    title: string;
    description: string;
    location: string;
    date: string;
    riskType: {
        label: string;
        classes: string;
    };
}

export default function ReportCard({ title, description, location, date, riskType }: ReportCardProps) {  

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
                border-b                border-[var(--border-color)]"
            >
                <h4 className="text-[var(--primary-color)] mb-0 font-bold">{title}</h4>
                <span className={`px-[0.8rem] py-[0.3rem] rounded-[15px] text-[0.8rem] font-semibold ${riskType.classes} ml-auto`}>{riskType.label}</span>
            </div>

            <div className="p-6">
                <div className="
                    text-[var(--secondary-color)]
                    text-[0.9rem]
                    mb-4
                    flex
                    items-center                    gap-[5px]
                ">
                    <FaMapMarkerAlt/>
                    <span>{location}</span>
                </div>
                <p>{description}</p>
            </div>
            <div className="
                p-4
                bg-[var(--background-color)]
                flex
                justify-between
                items-center
                text-[0.9rem]
            "> 
                <span className="text-[#666]">{date}</span>

            </div>
        </div>
       
    )
}
