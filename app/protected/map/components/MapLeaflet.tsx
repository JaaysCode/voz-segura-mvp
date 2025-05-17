'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { useEffect, useState } from "react";

const CustomMarker = () => {
    const map = useMap();

    useEffect(() => {
        const udemCoords: [number, number] = [6.231111, -75.611389];

        const icon = L.divIcon({
            className: 'udem-marker',
            html:`
                <div style="background-color: #6a1b9a; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">
                    <i class="fas fa-university"></i>
                </div>
            `,
            iconSize:[32, 32],
            iconAnchor: [16, 16],
        });
        
        L.marker(udemCoords, {icon})
            .addTo(map)
            .bindPopup('<b>Universidad de Medellín</b><br> Cra. 87 #30-65, Belén')
    }, [map]);

    return null;
};

// Component to handle map clicks when in report mode
const LocationMarker = ({ 
    reportMode, 
    onLocationSelected,
    riskType = 'medium',
    resetMarker
}: { 
    reportMode: boolean, 
    onLocationSelected: (position: [number, number]) => void,
    riskType?: 'high' | 'medium' | 'low',
    resetMarker?: boolean
}) => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    
    // Reset position when resetMarker changes to true
    useEffect(() => {
        if (resetMarker) {
            setPosition(null);
        }
    }, [resetMarker]);
    
    // Define marker colors based on risk type
    const riskColors = {
        high: '#F44336', // Red
        medium: '#FFC107', // Yellow
        low: '#4CAF50' // Green
    };
    
    const map = useMapEvents({
        click(e) {
            if (reportMode) {
                const newPos: [number, number] = [e.latlng.lat, e.latlng.lng];
                setPosition(newPos);
                onLocationSelected(newPos);
            }
        },
    });

    // Create an icon with color based on risk type
    const reportIcon = L.divIcon({
        className: 'report-marker',
        html: `
            <div style="background-color: ${riskColors[riskType]}; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; display: flex; align-items: center; justify-content: center; color: white; font-size: 16px;">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    return position === null ? null : (
        <Marker position={position} icon={reportIcon}>
            <Popup>Ubicación seleccionada para el reporte</Popup>
        </Marker>
    );
};

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface MapLeafletProps {
    reportMode: boolean;
    onLocationSelected?: (position: [number, number]) => void;
    riskType?: 'high' | 'medium' | 'low';
    resetMarker?: boolean;
}

const MapLeaflet = ({ 
    reportMode = false, 
    onLocationSelected = () => {}, 
    riskType = 'medium',
    resetMarker = false
}: MapLeafletProps) => {
    const udemCoords: [number, number] = [6.231111, -75.611389];

    return(
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <MapContainer center={udemCoords} zoom={17} scrollWheelZoom={true} className="w-full h-full z-0">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CustomMarker />
                {reportMode && (
                    <LocationMarker 
                        reportMode={reportMode} 
                        onLocationSelected={onLocationSelected} 
                        riskType={riskType}
                        resetMarker={resetMarker}
                    />
                )}
            </MapContainer>
        </div> 
    );
}

export default MapLeaflet;

