'use client';

import { FaMapMarkerAlt } from "react-icons/fa";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const MapLeaflet = dynamic(() => import("./MapLeaflet"), {
    ssr: false,
});

interface MapSectionProps {
    onLocationSelected: (position: [number, number]) => void;
    riskType: 'high' | 'medium' | 'low';
    resetMarker?: boolean;
}

export default function MapSection({ onLocationSelected, riskType, resetMarker }: MapSectionProps) {
    const [reportMode, setReportMode] = useState(false);

    // Reset report mode when resetMarker changes to true
    useEffect(() => {
        if (resetMarker) {
            setReportMode(false);
        }
    }, [resetMarker]);

    const handleReportButtonClick = () => {
        setReportMode(true);
        
        // Show instructions to the user
        alert("Haz clic en un punto del mapa para marcar la ubicación del reporte");
    };    const handleLocationSelected = (position: [number, number]) => {
        // Call the parent component's handler
        onLocationSelected(position);
    };

    return(
        <div className="flex flex-col gap-8">
            <div className="
                flex 
                justify-between 
                items-center 
                flex-wrap 
                gap-4 
                bg-white
                p-6
                rounded-[10px]
                shadow-[0_5px_15px_rgba(0,0,0,0.05)]
                mb-8
            "
            >                
                <div className="flex gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-[rgba(0,0,0,0.2)] bg-[#4CAF50]"></div>
                        <span>Zona Segura</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-[rgba(0,0,0,0.2)] bg-[#FFC107]"></div>
                        <span>Zona con Precaución</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full border border-[rgba(0,0,0,0.2)] bg-[#F44336]"></div>
                        <span>Zona Insegura</span>
                    </div>
                </div>                
                <button
                    onClick={handleReportButtonClick}
                    className="
                        inline-block
                        bg-[var(--primary-color)] 
                        text-white 
                        px-6 
                        py-3 
                        rounded-[30px] 
                        font-semibold 
                        transition-all 
                        duration-300 
                        ease-in-out 
                        cursor-pointer 
                        border-none 
                        hover:bg-[#4a148c] 
                        hover:-translate-y-1 
                        hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]"
                    >
                    <span className="flex items-center">
                        Reportar zona <FaMapMarkerAlt className="ml-2"/>
                    </span>
                </button>
            </div>
            <MapLeaflet 
                reportMode={reportMode} 
                onLocationSelected={handleLocationSelected} 
                riskType={riskType}
            />
        </div>
    )
};
