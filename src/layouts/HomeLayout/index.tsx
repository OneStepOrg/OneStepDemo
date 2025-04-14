import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SneakPeek from "@/components/SneakPeek";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import WhatIsOneStep from "@/components/WhatIsOneStep";
import WhyOneStep from "@/components/WhyOneStep";
import Image from "next/image";

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