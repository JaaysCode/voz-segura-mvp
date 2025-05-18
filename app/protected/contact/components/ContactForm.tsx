import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
    return (
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border-t-4 border-[var(--secondary-color)] w-[90%]">
            <form className="space-y-5">
                <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-6 flex items-center">
                    <FaPaperPlane className="mr-3 text-[var(--secondary-color)] text-lg" />
                    <span>Envíanos un mensaje</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-5"><div>
                    <label htmlFor="name" className="block text-[var(--primary-color)] mb-2 font-semibold">
                        Nombre completo *
                    </label>                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-[100%] px-[1rem] py-[0.8rem] border-2 border-[var(--primary-color)] rounded-[8px] text-base transition-all duration-300 ease-in-out outline-none shadow-lg"
                    />
                </div>

                    <div>
                        <label htmlFor="email" className="block text-[var(--primary-color)] mb-2 font-semibold">
                            Correo electrónico *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-[100%] px-[1rem] py-[0.8rem] border-2 border-[var(--primary-color)] rounded-[8px] text-base transition-all duration-300 ease-in-out outline-none shadow-lg"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="subject" className="block text-[var(--primary-color)] mb-2 font-semibold">
                        Asunto *
                    </label>                <select
                        id="subject"
                        name="subject"
                        required
                        className="w-[100%] px-[1rem] py-[0.8rem] border-2 border-[var(--primary-color)] rounded-[8px] text-base transition-all duration-300 ease-in-out outline-none shadow-lg"                >
                        <option >Selecciona un tema</option>
                        <option value="support">Soporte técnico</option>
                        <option value="report">Reportar incidente</option>
                        <option value="suggestion">Sugerencia</option>
                        <option value="collaboration">Colaboración</option>
                        <option value="other">Otro</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-[var(--primary-color)] mb-2 font-semibold">
                        Mensaje *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-[100%] px-[1rem] py-[0.8rem] border-2 border-[var(--primary-color)] rounded-[8px] text-base transition-all duration-300 ease-in-out outline-none shadow-lg min-h-[150px] resize-y"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-[var(--primary-color)] hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        Enviar mensaje
                        <FaPaperPlane className="ml-1" />
                    </button>
                </div>
            </form>
        </div>
    );
}