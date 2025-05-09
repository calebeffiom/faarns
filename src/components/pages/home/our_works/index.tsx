import {useRef, useEffect} from "react"
import gsap from "gsap";
const OurWorks = () =>{
     const sectionRef2 = useRef<HTMLElement>(null);
      const leftImageRefs = useRef<(HTMLImageElement | null)[]>([]);
      const rightImageRefs = useRef<(HTMLImageElement | null)[]>([]);




      useEffect(() => {
        if (!sectionRef2.current) return;
    
        // Combine and filter valid refs
        const allImages = [
          ...leftImageRefs.current.filter(Boolean),
          ...rightImageRefs.current.filter(Boolean)
        ] as HTMLImageElement[];
    
        // Create animation timeline
        const animation = gsap.fromTo(allImages, {
    
          x: (index) => {
            // Determine direction based on original position
            const isLeftImage = index < leftImageRefs.current.length;
            return isLeftImage ? '0' : '0';
          },
          y: '0',
          rotate: 0
        },
    
    
    
          {
            x: (index) => {
              // Determine direction based on original position
              const isLeftImage = index < leftImageRefs.current.length;
              return isLeftImage ? '-30%' : '30%';
            },
            y: '0',
            rotate: (index) => {
              // Determine direction based on original position
              const isLeftImage = index < leftImageRefs.current.length;
              return isLeftImage ? -20 : 20 ;
            },
            duration: 0.8,
            ease: "power2.inOut",
            paused: true,
            stagger: {
              each: 0.1,
              from: "edges"
            }
          });
    
        // Event handlers
        const section = sectionRef2.current;
        const onEnter = () => animation.play();
        const onLeave = () => animation.reverse();
    
        section.addEventListener('mouseenter', onEnter);
        section.addEventListener('mouseleave', onLeave);
    
        return () => {
          section.removeEventListener('mouseenter', onEnter);
          section.removeEventListener('mouseleave', onLeave);
          animation.kill();
        };
      }, []);
    
    
    return(
        <section ref={sectionRef2} className="w-[100%] bg-[#fff]">
        <div className="relative py-[100px] h-[100vh] w-[100%] bg-[#fff]">
          <div className="absolute w-[600px] h-full overflow-hidden left-0 top-1/2 -translate-y-1/2 flex flex-col z-20 xxl:w-[600px] xl:w-[450px] lg:w-[350px] md:w-[240px] sm:w-[170px] max-sm:hidden">
            {[1, 2, 3].map((_, i) => (
              <img
                key={`left-${i}`}
                ref={(el: HTMLImageElement | null) => {
                  // 3. Proper callback with no return value
                  leftImageRefs.current[i] = el;
                }}
                src="/img/left-box.png"
                className="w-[100%] h-[360px] mb-[17px] transform"
                alt=""
              />
            ))}
          </div>

          <div className="absolute w-[600px] h-full overflow-hidden right-0 top-1/2 -translate-y-1/2 flex flex-col z-20 xxl:w-[600px] xl:w-[450px] lg:w-[350px] md:w-[240px] sm:w-[170px] max-sm:hidden">
            {[1, 2, 3].map((_, i) => (
              <img
                key={`right-${i}`}
                ref={(el: HTMLImageElement | null) => {
                  // 3. Proper callback with no return value
                  rightImageRefs.current[i] = el;
                }}
                src="/img/right-box.png"
                className="w-[100%] h-[360px] mb-[17px] ml-auto transform"
                alt=""
              />
            ))}
          </div>


          <div className="w-[100%] flex items-center h-full z-10 text-center">
            <div className="w-[35%] mx-auto xxl:w-[35%] xl:w-[45%] lg:w-[50%] md:w-[52%] sm:w-[58%] max-sm:w-[70%]">
            <div className="flex w-[fit-content] mx-[auto] mb-[24px]">
              <span className="block bg-[#000] w-5 h-5 rounded-[20px] mx-[2px]"></span>
              <span className="block bg-[#000] w-5 h-5 rounded-[20px] mx-[2px]"></span>
            </div>

            <div className="mb-[24px]">
              <h2 className="text-5xl font-bold lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl">Some of our works</h2>
            </div>

            <div className="mb-[24px]">
              <p className="text-2xl leading-[1.5] lg:text-2xl md:text-[16px] sm:text-[14px] max-sm:text-[14px]">Each project in our collection reflects the passion and creativity we bring to every digital endeavor. Fro sleek web design to dynamic branding solutions,our portfolio highlights the diversity of our expertise</p>
            </div>

            <div className="w-[fit-content] mx-[auto]">
              <span className="text-white text-2xl block bg-[#000] rounded-[20px] w-80 h-16 flex justify-center items-center cursor-pointer lg:h-16 lg:text-2xl lg:w-80 md:h-12 md:w-60 md:text-[16px] sm:text-[14px] sm:h-10 sm:w-60 max-sm:h-10 max-sm:w-[200px] max-sm:text-[14px]"><p>Explore our works </p><img src="/img/arrow.svg" className="ml-[13px] max-sm:w-[20px] sm:w-[25px] md:w-[30px]" /></span>
            </div>
            </div>
          </div>

        </div>
      </section>
    )
}
export default OurWorks