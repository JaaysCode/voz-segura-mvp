'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Reports from "./components/Reports";
import ReportForm from "./components/ReportForm";
import MapSection from "./components/MapSection";
import { useState } from "react";

export default function Map() {
    const [showForm, setShowForm] = useState(false);
    const [locationCoords, setLocationCoords] = useState<[number, number] | null>(null);
    const [riskType, setRiskType] = useState<'high' | 'medium' | 'low'>('medium');    const handleLocationSelected = (position: [number, number]) => {
        setLocationCoords(position);
        setShowForm(true);
    };

    const handleRiskTypeChange = (type: 'high' | 'medium' | 'low') => {
        setRiskType(type);
    };

    const handleCancelReport = () => {
        setShowForm(false);
        setLocationCoords(null);
    };

    return (
        <div>
        <Header/>
            <div className="pb-16 bg-white">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <div className="text-center mb-[2rem]">
                        <h2 className='text-[var(--primary-color)] relative inline-block pb-4 text-4xl font-bold'>Mapa Interactivo UDEM</h2>
                        <div className="h-1 w-24 bg-[var(--secondary-color)] mx-auto mt-2 mb-4 rounded-full"></div>                    <p className="max-w-[700px] text-[var(--text-color)] mt-4 mx-auto">Explora el mapa del campus de la Universidad de Medellín y contribuye marcando tanto zonas seguras como inseguras.</p>
                    </div>
                    <MapSection 
                        onLocationSelected={handleLocationSelected} 
                        riskType={riskType} 
                        resetMarker={!showForm} 
                    />
                    {showForm && <ReportForm 
                        onRiskTypeChange={handleRiskTypeChange} 
                        onCancel={handleCancelReport}
                    />}
                <Reports/></div>
                <Footer/>
            </div>
        </div>
    )
}