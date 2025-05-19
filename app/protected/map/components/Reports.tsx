import ReportCard from "./ReportCard";
import { Report } from "@/services/reportService";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface ReportsProps {
  reports: Report[];
  isLoading?: boolean;
}

export default function Reports({ reports = [], isLoading = false }: ReportsProps) {
    // Función para formatear la fecha
    const formatReportDate = (dateString?: string) => {
        if (!dateString) return "Fecha desconocida";
        
        try {
            const date = new Date(dateString);
            // Calcular el tiempo transcurrido
            const now = new Date();
            const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
            
            if (diffInDays === 0) {
                return "Reportado hoy";
            } else if (diffInDays === 1) {
                return "Reportado ayer";
            } else {
                return `Reportado hace ${diffInDays} días`;
            }
        } catch (e) {
            return "Fecha desconocida";
        }
    };

    const getRiskLabel = (riskType: 'high' | 'medium' | 'low') => {
        switch(riskType) {
            case 'high':
                return { label: 'Riesgo Alto', classes: 'bg-[#FFEBEE] text-[#F44336]' };
            case 'medium':
                return { label: 'Riesgo Medio', classes: 'bg-[#FFF8E1] text-[#FFA000]' };
            case 'low':
                return { label: 'Riesgo Bajo', classes: 'bg-[#E8F5E9] text-[#4CAF50]' };
            default:
                return { label: 'Riesgo Medio', classes: 'bg-[#FFF8E1] text-[#FFA000]' };
        }
    };
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
                <p className="max-w-[700px] text-[var(--text-color)] mt-4 mx-auto">Estas son algunas de las zonas que nuestra comunidad ha identificado como potencialmente inseguras</p>            </div>            <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,1fr))] gap-6 mt-[2rem] mb-20">
                {isLoading ? (
                    <div className="col-span-full text-center p-8 bg-white rounded-lg shadow-md">
                        <p className="text-gray-500">Cargando reportes...</p>
                    </div>
                ) : reports.length === 0 ? (
                    <div className="col-span-full text-center p-8 bg-white rounded-lg shadow-md">
                        <p className="text-gray-500">No hay reportes disponibles. ¡Sé el primero en reportar una zona!</p>
                    </div>
                ) : (
                    reports.map((report, index) => (
                        <ReportCard
                            key={report.id || index}
                            title={report.title}
                            description={report.description}
                            location={report.specific_location || "Ubicación no especificada"}
                            date={formatReportDate(report.created_at)}
                            riskType={getRiskLabel(report.risk_type)}
                        />
                    ))
                )}
            </div>

        </div>
    )
}