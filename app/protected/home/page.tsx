import Header from "@/components/Header"
import HeroSection from "@/components/Hero"

export default function Home() {
    return(
        <div className="m-0 p-0 box-border min-h-screen bg-[var(--background-color)] text-[var(--text-color)] leading-[1.6]">
            <Header />
            <main className="container mx-auto px-4 md:px-6 py-8">
                <HeroSection />
            </main>
        </div>
    )
}

