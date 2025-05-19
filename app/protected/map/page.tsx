'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Reports from "./components/Reports";
import ReportForm from "./components/ReportForm";
import MapSection from "./components/MapSection";
import { useState, useEffect } from "react";

// Interfaz para los reportes
export interface Report {
    id: string;
    coordinates: [number, number];
    riskType: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    specificLocation: string; // Ubicación específica introducida por el usuario
    date: string;
    reporter?: string;
}

export default function Map() {
    const [showForm, setShowForm] = useState(false);
    const [locationCoords, setLocationCoords] = useState<[number, number] | null>(null);
    const [riskType, setRiskType] = useState<'high' | 'medium' | 'low'>('medium');
    const [reports, setReports] = useState<Report[]>([]);
    const [savedMarkers, setSavedMarkers] = useState<Array<{coordinates: [number, number], riskType: 'high' | 'medium' | 'low'}>>([]);
    
    // Cargar reportes del localStorage al iniciar
    useEffect(() => {
        const savedReports = localStorage.getItem('reports');
        if (savedReports) {
            setReports(JSON.parse(savedReports));
        }
        
        const markers = localStorage.getItem('markers');
        if (markers) {
            setSavedMarkers(JSON.parse(markers));
        }
    }, []);    const handleLocationSelected = (position: [number, number]) => {
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
      const handleSubmitReport = (title: string, description: string, specificLocation: string) => {
        if (locationCoords) {
            // Crear nuevo reporte
            const newReport: Report = {
                id: Date.now().toString(),
                coordinates: locationCoords,
                riskType: riskType,
                title: title,
                description: description,
                specificLocation: specificLocation, // Guardamos la ubicación específica
                date: new Date().toISOString(),
                reporter: 'Anónimo' // Puedes cambiarlo si tienes sistema de usuarios
            };
              // Agregar marcador guardado
            const newMarker = {
                coordinates: locationCoords,
                riskType: riskType,
                title: title,
                specificLocation: specificLocation
            };
            
            // Actualizar reportes (manteniendo solo los 3 más recientes)
            const updatedReports = [newReport, ...reports].slice(0, 3);
            const updatedMarkers = [...savedMarkers, newMarker];
            
            // Guardar en el estado y localStorage
            setReports(updatedReports);
            setSavedMarkers(updatedMarkers);
            localStorage.setItem('reports', JSON.stringify(updatedReports));
            localStorage.setItem('markers', JSON.stringify(updatedMarkers));
            
            // Cerrar formulario pero mantener las coordenadas para el marcador
            setShowForm(false);
        }
    };    return (
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
                        savedMarkers={savedMarkers}
                    />
                    {showForm && <ReportForm 
                        onRiskTypeChange={handleRiskTypeChange} 
                        onCancel={handleCancelReport}
                        onSubmit={handleSubmitReport}
                    />}
                <Reports reports={reports} /></div>
            </div>
            <Footer/>
        </div>
    )
}