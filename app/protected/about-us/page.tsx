import Footer from '@/components/footer/Footer';
import Header from '@/components/Header';
import AboutUsHero from './components/Hero'; 
import MisionVision from './components/MisionVision';
import MoralValues from './components/MoralValues';
import Impact from './components/Impact';
export default function AboutUs() {
    return(
        <div className="m-0 p-0 box-border min-h-screen bg-[var(--background-color)] text-[var(--text-color)] leading-[1.6]">
            <Header />
            <AboutUsHero /> 
            <MisionVision/>
            <MoralValues/>
            <Impact/>
            <Footer/>
        </div>
    )
}