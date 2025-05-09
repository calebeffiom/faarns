"use client"
import Hero from "./hero";
import Services from "./services";
import OurWorks from "./our_works";
import WhyUs from "./why_us";
import CaseStudy from "./case_study";
import Testimonial from "./testimonials";
import Affiliate from "./affiliate";
import Faqs from "./faqs";
import Cta from "./cta";
import { useLayoutEffect } from "react";
import Lenis from '@studio-freight/lenis';
const HomePage = () =>{
      useLayoutEffect(() => {
        const lenis = new Lenis({
          orientation: 'vertical',   // replaces `direction`
          lerp: 0.1,               // try between 0.15 (still laggy) to 0.4 (very snappy)
          smoothWheel: true,
          wheelMultiplier: 0.8,     // makes wheel scroll faster
          touchMultiplier: 1,
        });
    
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    
        return () => lenis.destroy();
      }, []);
    const home = [
        <Hero/>,
        <Services/>,
        <OurWorks/>,
        <WhyUs/>,
        <CaseStudy/>,
        <Testimonial/>,
        <Affiliate/>,
        <Faqs/>,
        <Cta/>
    ]
    return(
        home.map((pages, index)=>(
            <div
            key={index}
            >
                {pages}
            </div>
        ))
    )
}
export default HomePage;