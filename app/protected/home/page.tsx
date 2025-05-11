import Footer from "@/components/footer/Footer"
import Header from "@/components/Header"
import HeroSection from "@/components/Hero"
import Welcome from "@/components/welcome/Welcome"
import ForumSection from '../../../components/forum/ForumSection';
export default function Home() {
    return(
        <div className="m-0 p-0 box-border min-h-screen bg-[var(--background-color)] text-[var(--text-color)] leading-[1.6]">
            <Header />
            <HeroSection/>
            <Welcome/>
            <ForumSection/>
            <Footer/>
        </div>
    )
}
// 'use client';

