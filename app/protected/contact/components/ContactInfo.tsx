import { FaEnvelope, FaInfoCircle, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo(){
    return(
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-[var(--secondary-color)] w-[90%]">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
                <FaInfoCircle className="mr-3 text-[var(--secondary-color)] text-lg"/>
                <span>Información de contacto</span>
            </h3>
            
            <div className="space-y-6">
                <div className="flex items-start">
                <div className="bg-purple-200 text-[var(--primary-color)] p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-lg"/>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Oficina Principal</h4>
                    <p className="text-gray-600">Universidad de Medellín, bloque bienestar</p>
                </div>
                </div>
                
                <div className="flex items-start">
                <div className="bg-purple-200 text-[var(--primary-color)] p-3 rounded-full mr-4">
                    <FaPhoneAlt/>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Teléfono</h4>
                    <p>
                    <a href="tel:+573025698744" className="hover:text-[var(--secondary-color)] hover:underline">
                        +57 3025698744
                    </a>
                    </p>
                </div>
                </div>
                
                <div className="flex items-start">
                <div className="bg-purple-200 text-[var(--primary-color)] p-3 rounded-full mr-4">
                    <FaEnvelope className="text-lg"/>
                </div>
                <div>
                    <h4 className="font-medium text-gray-800 mb-1">Correo Electrónico</h4>
                    <p className="mb-1">
                    <a href="mailto:contacto@vozsegura.org" className="hover:text-[var(--secondary-color)] hover:underline">
                        contacto@vozsegura.org
                    </a>
                    </p>
                    <p>
                    <a href="mailto:soporte@vozsegura.org" className="hover:text-[var(--secondary-color)] hover:underline">
                        soporte@vozsegura.org
                    </a>
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}