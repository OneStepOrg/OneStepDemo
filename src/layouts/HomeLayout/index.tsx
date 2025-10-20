'use client';
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SneakPeek from "@/components/SneakPeek";
import WhatIsOneStep from "@/components/WhatIsOneStep";
import WhyOneStep from "@/components/WhyOneStep";

const HomeLayout=()=>{
    return(
        <>
        <Header/>
        <main>
            <HeroSection />
            <WhatIsOneStep />
            <WhyOneStep />
            <SneakPeek />
            <CallToAction />
        </main>
        <Footer/>
        </>
    )
}

export default HomeLayout