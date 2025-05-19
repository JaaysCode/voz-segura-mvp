'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Reports from "./components/Reports";
import ReportForm from "./components/ReportForm";
import MapSection from "./components/MapSection";
import { useState, useEffect } from "react";
import { Report, reportService } from "../../../services/reportService";
import { useUser } from "../../../lib/UserContext";

export default function Map() {
    const [showForm, setShowForm] = useState(false);
    const [locationCoords, setLocationCoords] = useState<[number, number] | null>(null);
    const [riskType, setRiskType] = useState<'high' | 'medium' | 'low'>('medium');
    const [reports, setReports] = useState<Report[]>([]);
    const [savedMarkers, setSavedMarkers] = useState<Array<{
        coordinates: [number, number], 
        riskType: 'high' | 'medium' | 'low',
        title?: string,
        specificLocation?: string
    }>>([]);
    const { user } = useUser();
    const [loading, setLoading] = useState(true);
    
    // Cargar reportes de Supabase al iniciar
    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const latestReports = await reportService.getLatestReports(3);
                setReports(latestReports);
                
                // Convertir los reportes a marcadores para el mapa
                const markers = latestReports.map(report => ({
                    coordinates: report.coordinates,
                    riskType: report.risk_type,
                    title: report.title,
                    specificLocation: report.specific_location
                }));
                
                setSavedMarkers(markers);
            } catch (error) {
                console.error('Error al cargar reportes:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchReports();
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

    const handleSubmitReport = async (title: string, description: string, specificLocation: string) => {
        if (locationCoords && user) {
            try {
                setLoading(true);
                
                // Crear nuevo reporte para Supabase
                const newReport: Report = {
                    title: title,
                    description: description,
                    specific_location: specificLocation,
                    coordinates: locationCoords,
                    risk_type: riskType,
                };
                
                // Guardar el reporte en Supabase
                await reportService.addReport(newReport, user.id);
                
                // Recargar los reportes más recientes
                const latestReports = await reportService.getLatestReports(3);
                setReports(latestReports);
                
                // Actualizar los marcadores
                const updatedMarkers = latestReports.map(report => ({
                    coordinates: report.coordinates,
                    riskType: report.risk_type,
                    title: report.title,
                    specificLocation: report.specific_location
                }));
                
                setSavedMarkers(updatedMarkers);
                
                // Cerrar formulario
                setShowForm(false);
            } catch (error) {
                console.error('Error al guardar el reporte:', error);
                alert('Hubo un error al guardar el reporte. Por favor, inténtalo de nuevo.');
            } finally {
                setLoading(false);
            }
        } else if (!user) {
            alert('Debes iniciar sesión para enviar un reporte.');
        }
    };    return (
        <div>
        <Header/>
            <div className="pb-16 bg-white">
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <div className="text-center mb-[2rem]">
                        <h2 className='text-[var(--primary-color)] relative inline-block pb-4 text-4xl font-bold'>Mapa Interactivo UDEM</h2>
                        <div className="h-1 w-24 bg-[var(--secondary-color)] mx-auto mt-2 mb-4 rounded-full"></div>
                        <p className="max-w-[700px] text-[var(--text-color)] mt-4 mx-auto">Explora el mapa del campus de la Universidad de Medellín y contribuye marcando tanto zonas seguras como inseguras.</p>
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
                <Reports reports={reports} isLoading={loading} /></div>
            </div>
            <Footer/>
        </div>
    )
}