"use client"
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);
  const headersRef = useRef<HTMLDivElement>(null);
  // Store service refs with proper TypeScript typing
  const addServiceRef = (el: HTMLDivElement | null) => {
    if (el && !servicesRef.current.includes(el)) {
      servicesRef.current.push(el);
    }
  }






    useEffect(() => {
      const services = servicesRef.current;

      // Return early if no services found
      if (services.length === 0) return;

      // Set initial positions with proper element typing
      gsap.set(services, {
        y: 100,
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: '50%',
        translateX: "-50%"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: 'top top',
          end: `+=${services.length * 100}%`,
          pin: true,
          scrub: 1,
        }
      });

      services.forEach((service: HTMLDivElement, i: number) => {
        tl.to(service, {
          y: 0,
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out'
        }, i * 0.2);

        if (i > 0) {
          tl.to(services[i - 1], {
            y: -50,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in'
          }, i * 0.2);
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }, []);


  return (
    <section ref={sectionRef} className="w-[100%] relative h-[100vh] py-[50px]">
      {/* Header sections */}
      <div className="w-full flex mb-[50px] justify-center sm:mb-[25px] max-sm:mb-[10px]" ref={headersRef}>
        <div className="text-[#fff] shadow-[inset_0px_3px_8px_0px_rgba(112,87,241,1.00)] rounded-3xl px-7 py-3.5 h-14 max-w-[955.48px] md:h-14 md:py-3.5 sm:h-[fit-content] sm:py-[10px] max-sm:py-[5px] max-sm:h-[fit-content]">
          <h2 className="text-2xl text-white lg:text-2xl md:text-[16px] sm:text-[14px] max-sm:text-[14px]">Our Services</h2>
        </div>
      </div>

      <div className="w-full flex justify-center mb-[82px] max-md:mb-[100px]">
        <div className="text-[#fff]">
          <h2 className="text-5xl font-bold text-white lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-lg">
            We create brands that make an impact.
          </h2>
        </div>
      </div>

      {/* Service sections with typed refs */}
      <div className="w-[100%] flex flex-col relative h-[100vh]">
        <div ref={addServiceRef} className="bg-[url('/img/tools.png')] bg-cover bg-center h-[550px] w-[80%] mx-[auto] rounded-[48px] xl:h-[550px] lg:w-[80%] md:h-[500px] sm:h-[350px] max-sm:h-[280px] max-sm:w-[95%]">
          <div className="flex items-end h-[100%] w-[100%] px-7 py-12 bg-gradient-to-l from-black/60 to-white/0 max-sm:py-4">
            <div>
              <h2 className="text-5xl mb-[26px] text-white font-extrabold lg:text-5xl md:text-[30px] md:mb-[18px] sm:text-[20px] sm:mb-[5px] max-sm:text-[18px] max-sm:mb-[8px]">Website Design and Development</h2>
              <p className="text-white text-2xl font-semibold lg:text-2xl md:text-[18px] sm:text-[15px] sm:leading-[1.3] max-sm:text-[12px] max-sm:leading-[1.3]">Custom built websites that load faster, convert better & impress clients</p>
            </div>
          </div>
        </div>


        
        <div ref={addServiceRef} className="bg-[url('/img/world.png')] bg-cover bg-center h-[550px] w-[80%] mx-[auto] rounded-[48px] xl:h-[550px] lg:w-[80%] md:h-[500px] sm:h-[350px] max-sm:h-[280px] max-sm:w-[95%]">
          <div className="flex items-end h-[100%] w-[100%] px-7 py-12 bg-gradient-to-l from-black/60 to-white/0 max-sm:py-4">
            <div>
              <h2 className="text-5xl mb-[26px] text-white font-extrabold lg:text-5xl md:text-[30px] md:mb-[18px] sm:text-[20px] sm:mb-[5px] max-sm:text-[18px] max-sm:mb-[8px]">SEO</h2>
              <p className="text-white text-2xl font-semibold lg:text-2xl md:text-[18px] sm:text-[15px] sm:leading-[1.3] max-sm:text-[12px] max-sm:leading-[1.3]">Your 24/7 silent salesperson, making sure your clients find you first on google.</p>
            </div>
          </div>
        </div>

        <div ref={addServiceRef} className="bg-[url('/img/facebook.png')] bg-cover bg-center h-[550px] w-[80%] mx-[auto] rounded-[48px] xl:h-[550px] lg:w-[80%] md:h-[500px] sm:h-[350px] max-sm:h-[280px] max-sm:w-[95%]">
          <div className="flex items-end h-[100%] w-[100%] px-7 py-12 bg-gradient-to-l from-black/60 to-white/0 max-sm:py-4">
            <div>
              <h2 className="text-5xl mb-[26px] text-white font-extrabold lg:text-5xl md:text-[30px] md:mb-[18px] sm:text-[20px] sm:mb-[5px] max-sm:text-[18px] max-sm:mb-[8px]">Meta Ads</h2>
              <p className="text-white text-2xl font-semibold lg:text-2xl md:text-[18px] sm:text-[15px] sm:leading-[1.3] max-sm:text-[12px] max-sm:leading-[1.3]">Laser-targeted ads on Facebook and Instagram that generates real leads</p>
            </div>
          </div>
        </div>

        <div ref={addServiceRef} className="bg-[url('/img/google.png')] bg-cover bg-center h-[550px] w-[80%] mx-[auto] rounded-[48px] xl:h-[550px] lg:w-[80%] md:h-[500px] sm:h-[350px] max-sm:h-[280px] max-sm:w-[95%]">
          <div className="flex items-end h-[100%] w-[100%] px-7 py-12 bg-gradient-to-l from-black/60 to-white/0 max-sm:py-4">
            <div>
              <h2 className="text-5xl mb-[26px] text-white font-extrabold lg:text-5xl md:text-[30px] md:mb-[18px] sm:text-[20px] sm:mb-[5px] max-sm:text-[18px] max-sm:mb-[8px]">Google Ads</h2>
              <p className="text-white text-2xl font-semibold lg:text-2xl md:text-[18px] sm:text-[15px] sm:leading-[1.3] max-sm:text-[12px] max-sm:leading-[1.3]">Laser-targeted ads on Facebook and Instagram that generates real leads</p>
            </div>
          </div>
        </div>

        <div ref={addServiceRef} className="bg-[url('/img/cricket.png')] bg-cover bg-center h-[550px] w-[80%] mx-[auto] rounded-[48px] xl:h-[550px] lg:w-[80%] md:h-[500px] sm:h-[350px] max-sm:h-[280px] max-sm:w-[95%]">
          <div className="flex items-end h-[100%] w-[100%] px-7 py-12 bg-gradient-to-l from-black/60 to-white/0 max-sm:py-4">
            <div>
              <h2 className="text-5xl mb-[26px] text-white font-extrabold lg:text-5xl md:text-[30px] md:mb-[18px] sm:text-[20px] sm:mb-[5px] max-sm:text-[18px] max-sm:mb-[8px]">Cricket management</h2>
              <p className="text-white text-2xl font-semibold lg:text-2xl md:text-[18px] sm:text-[15px] sm:leading-[1.3] max-sm:text-[12px] max-sm:leading-[1.3]">Laser-targeted ads on Facebook and Instagram that generates real leads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Services