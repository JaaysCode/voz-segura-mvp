import { supabase } from '../lib/supabaseClient';

export interface Report {
    id?: number;
    title: string;
    description: string;
    specific_location: string;
    coordinates: [number, number];
    risk_type: 'high' | 'medium' | 'low';
    created_at?: string;
    user_id?: string;
}

export const reportService = {
    async getLatestReports(limit: number = 3) {
        const { data, error } = await supabase
            .from('reports')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(limit);
        
        if (error) {
            console.error('Error fetching reports:', error);
            return [];
        }
        
        // Transformar las coordenadas de formato Point a array [lat, lng]
        return data.map((report: any) => {
            // El formato de Point en Supabase es "(x,y)" donde x es longitud y y es latitud
            const pointStr = report.coordinates?.replace(/[()]/g, '');
            const [lng, lat] = pointStr ? pointStr.split(',').map(Number) : [0, 0];
            
            return {
                ...report,
                coordinates: [lat, lng] as [number, number]
            };
        });
    },
    
    async addReport(report: Report, userId: string) {
        // Transformar las coordenadas de [lat, lng] a formato Point para PostgreSQL
        const pointFormat = `(${report.coordinates[1]},${report.coordinates[0]})`; // (lng, lat)
        
        const { data, error } = await supabase
            .from('reports')
            .insert({
                title: report.title,
                description: report.description,
                specific_location: report.specific_location,
                coordinates: pointFormat,
                risk_type: report.risk_type,
                user_id: userId
            })
            .select();
        
        if (error) {
            console.error('Error adding report:', error);
            throw error;
        }
        
        return data?.[0];
    },
    
    async deleteReport(reportId: number, userId: string) {
        // Verificar propiedad
        const { data: report } = await supabase
            .from('reports')
            .select('user_id')
            .eq('id', reportId)
            .single();
        
        if (!report || report.user_id !== userId) {
            throw new Error('No tienes permiso para eliminar este reporte');
        }
        
        const { error } = await supabase
            .from('reports')
            .delete()
            .eq('id', reportId);
        
        if (error) {
            console.error('Error deleting report:', error);
            throw error;
        }
        
        return true;
    }
};
