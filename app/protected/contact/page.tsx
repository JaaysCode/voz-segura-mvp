import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import HeroContact from "./components/Hero";

export default function ContactPage() {
  return (
    <>
    <Header/>
      <HeroContact />      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)]">Contáctanos</h2>
            <div className="w-32 h-1 bg-[var(--secondary-color)] mx-auto mt-3 rounded-full"></div>          </div>
          
          <div className="grid md:grid-cols-2 gap-10 px-2">
            <div className="flex justify-end">
              <ContactInfo />
            </div>
            <div className="flex justify-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
}