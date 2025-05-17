'use client';

import { FaExclamationTriangle } from "react-icons/fa";
import { useEffect, useState } from "react";

interface ReportFormProps {
    onRiskTypeChange: (type: 'high' | 'medium' | 'low') => void;
    onCancel?: () => void;  // Nueva prop para manejar la cancelación
}

export default function ReportForm({ onRiskTypeChange, onCancel }: ReportFormProps) {
    const [riskType, setRiskType] = useState<'high' | 'medium' | 'low'>('medium');
      useEffect(() => {
        // Scroll to the form when it appears
        const reportForm = document.getElementById('report-form');
        if (reportForm) {
            reportForm.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleRiskTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as 'high' | 'medium' | 'low';
        setRiskType(value);
        onRiskTypeChange(value);
    };

    return (
        <div id="report-form" className="
            bg-[var(--background-color)]
            rounded-[10px]
            p-8
            shadow-[0,_5px,_15px,_rgba(0,0,0,0.05)]
            mt-8
            border
            border-[var(--border-color)]
        ">
            <h3 className="text-[var(--primary-color)] mb-6 flex items-center gap-[10px]">
                <FaExclamationTriangle className="text-[var(--secondary-color)]"/> Reportar Zona insegura en la UDEM
            </h3>
            <div className="mb-6">
                <label className="inline-block mb-2 font-semibold text-[var(--primary-color)]"> Titulo del Reporte</label>
                <input 
                    className="
                        w-[100%]
                        p-[0.8rem] 
                        border 
                        border-[var(--border-color)] 
                        rounded-[8px] 
                        text-base 
                        transition-all
                        focus: outline-none
                        focus:border-[var(--primary-color)]
                        focus:shadow-[0,_0,_0,_3px_rgba(156,39,176,0.2)] " 
                    type="text" 
                    placeholder="Ej: Entrada del coliseo">
                </input>

            </div>            <div className="mb-6">
                <label className="block mb-2 font-semibold text-[var(--primary-color)]">Ubicación Específica</label>
                <input 
                    className="
                        w-[100%]
                        p-[0.8rem] 
                        border 
                        border-[var(--border-color)] 
                        rounded-[8px] 
                        text-base 
                        transition-all
                        focus: outline-none
                        focus:border-[var(--primary-color)]
                        focus:shadow-[0,_0,_0,_3px_rgba(156,39,176,0.2)] " 
                    type="text" 
                    placeholder="Ej: Bloque 3, segundo piso, baños..." />
            </div>
            <div className="mb-6">                <label className="block mb-2 font-semibold text-[var(--primary-color)]">Tipo de riesgo</label>
                <select 
                    className="
                        w-[100%]
                        p-[0.8rem] 
                        border 
                        border-[var(--border-color)] 
                        rounded-[8px] 
                        text-base 
                        transition-all
                        focus: outline-none
                        focus:border-[var(--primary-color)]
                        focus:shadow-[0,_0,_0,_3px_rgba(156,39,176,0.2)] 
                        "
                    value={riskType}
                    onChange={handleRiskTypeChange}
                    >
                    <option value="high">Alto riesgo (acoso, robos, etc.) </option>
                    <option value="medium">Riesgo medio (falta de iluminación, poca visibilidad.)</option>
                    <option value="low">Bajo riesgo, (áreas solitarias, sin vigilacia.) </option>
                </select>
            </div>
            <div className="mb-6">
                <label className="block mb-2 font-semibold text-[var(--primary-color)]"> Descripción</label>
                <textarea 
                    className="
                        w-[100%]
                        p-[0.8rem] 
                        border 
                        border-[var(--border-color)] 
                        rounded-[8px] 
                        text-base 
                        transition-all
                        min-h-[120px]
                        resize-vertical
                        focus: outline-none
                        focus:border-[var(--primary-color)]
                        focus:shadow-[0,_0,_0,_3px_rgba(156,39,176,0.2)] 
                        " 
                    placeholder="Describe por qué consideras
                                        que esta zona es insegura. Incluye detalles
                                        como horarios, situaciones específicas, etc."> 
                </textarea>
            </div>
            <div className="flex justify-end gap-4">                <button 
                    className="
                        inline-block
                        bg-white 
                        text-[var(--primary-color)] 
                        px-[1.5rem] 
                        py-[0.8rem] 
                        rounded-[30px]
                        no-underline
                        font-semibold
                        transition-all
                        duration-300
                        ease-in-out
                        border-none
                        cursor-pointer
                        hover:bg-[var(--tertiary-color)]
                        hover:-translate-y-1.5
                        hover:shadow-[0,_5,_15,_rgba(0,0,0,0.1)]
                    "
                    onClick={onCancel}
                    type="button"
                    >
                        Cancelar
                </button>
                <button
                    className="
                        inline-block
                        bg-[var(--primary-color)]
                        text-white
                        px-[1.5rem] 
                        py-[0.8rem] 
                        rounded-[30px]
                        no-underline
                        font-semibold
                        transition-all
                        duration-300
                        ease-in-out
                        border-none
                        cursor-pointer
                        hover:-translate-y-1.5
                        hover:bg-[#4a148c]
                    "
                >Enviar Reporte</button>
            </div>
        </div>
    );
}