'use client';

import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import EventsHero from "./components/Hero";
import EventsSection from "./components/NextEvents";

export default function Events() {
    return(
        <div>
            <Header/>
            <EventsHero/>
            <EventsSection/>
            <Footer/>
        </div>
    );
}