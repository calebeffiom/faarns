import { BsHouseDoorFill } from "react-icons/bs";
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const CaseStudy = () => {

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const images = [
    '/img/facebook.png',
    '/img/google.png',
    '/img/cricket.png'
  ];

  useEffect(() => {
    const caseStudyItems = gsap.utils.toArray('.case-study-item');

    caseStudyItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item as Element,
        start: "top center",
        onEnter: () => setActiveImageIndex(index),
        onEnterBack: () => setActiveImageIndex(index),
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);


  return (
    <section ref={containerRef}>
      <div className="w-[100%] px-[100px] bg-[#fff] py-[91px] rounded-3xl xl:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">
        <div className="w-[100%] mb-[49px]">
          <h2 className="text-center text-cyan-950 text-5xl font-bold leading-[96px]">Case Studies</h2>
        </div>

        <div className="flex gap-24 lg:flex sm:hidden max-sm:hidden">
          <div>
            <img
              ref={imageRef}
              src={images[activeImageIndex]}
              className="sticky top-0 w-[614.65px] h-96 rounded-3xl outline outline-[5px] border-[5px] shadow-[_20px_-20px_0_rgba(0,0,0,1)] outline-white xl:h-96 md:h-80 md:w-[100%]"
              alt="Case study"
            />
          </div>

          <div className="flex flex-col gap-[266px]">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="case-study-item w-[fit-content] inline-flex flex-col justify-start items-start gap-8"
              >
                {/* Your case study content */}
                <div className="inline-flex justify-start items-center gap-3.5">
                  <BsHouseDoorFill className="w-7 h-7 text-sky-900" />
                  <h2 className="text-center justify-center text-sky-900 text-xl font-bold leading-10">Realtors</h2>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-5">
                  <div className="w-24 h-9 rounded-xl border border-black/50" />
                  <div className="w-24 h-9 rounded-xl border border-black/50" />
                  <div className="w-24 h-9 rounded-xl border border-black/50" />
                  <div className="w-24 h-9 rounded-xl border border-black/50" />
                </div>
                <div className="w-96 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-5">
                    {/* ... other elements ... */}
                  </div>
                </div>
                <div className="w-[531px] flex flex-col justify-start items-start gap-2.5 xl:w-[531px] max-sm:w-[100%]">
                  <div className="self-stretch flex flex-col justify-start items-start gap-7">
                    <h2 className="justify-center text-cyan-950 text-4xl font-bold leading-10 lg:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl">Website redesign and SEO</h2>
                    <p className="justify-center text-cyan-950 text-2xl leading-10 xl:text-2xl sm:text-xl max-sm:text-[2px]">Revamped website design with optimized SEO strategies boosted user experience and increased organic traffic.</p>
                    <h2 className="justify-center text-sky-900 text-3xl font-semibold leading-10 lg:text-3xl md:text-4xl sm:text-3xl max-sm:text-xl">4x traffic in 3 months</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>










        <div className="block lg:hidden">
          {[1,2,3].map((item, index)=>(
            <div className="my-[60px]">
             <div className="mb-[30px]">
             <img
               src={images[index]}
               className="w-[614.65px] h-96 rounded-3xl outline outline-[5px] border-[5px] shadow-[_20px_-20px_0_rgba(0,0,0,1)] outline-white xl:h-96 max-md:shadow-none sm:h-96 sm:w-[100%] max-sm:h-60"
               alt="Case study"
             />
           </div>
           <div
                key={index}
                className="case-study-item w-[fit-content] inline-flex flex-col justify-start items-start gap-8 max-md:gap-3 max-sm:w-[100%]"
              >
                {/* Your case study content */}
                <div className="inline-flex justify-start items-center gap-3.5">
                  <BsHouseDoorFill className="w-7 h-7 text-sky-900" />
                  <h2 className="text-center justify-center text-sky-900 text-xl font-bold leading-10">Realtors</h2>
                </div>
                <div className="self-stretch inline-flex justify-start items-center gap-5">
                  <div className="w-24 h-9 rounded-xl border border-black/50 max-sm:w-16" />
                  <div className="w-24 h-9 rounded-xl border border-black/50 max-sm:w-16" />
                  <div className="w-24 h-9 rounded-xl border border-black/50 max-sm:w-16" />
                  <div className="w-24 h-9 rounded-xl border border-black/50 max-sm:w-16" />
                </div>
                <div className="w-96 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch inline-flex justify-start items-center gap-5">
                    {/* ... other elements ... */}
                  </div>
                </div>
                <div className="w-[531px] flex flex-col justify-start items-start gap-2.5 xl:w-[531px] max-md:gap-4 max-sm:w-[100%] ">
                  <div className="self-stretch flex flex-col justify-start items-start gap-7 md">
                    <h2 className="justify-center text-cyan-950 text-4xl font-bold leading-10 lg:text-4xl md:text-3xl sm:text-2xl max-sm:text-xl">Website redesign and SEO</h2>
                    <p className="text-justify justify-center text-cyan-950 text-2xl font-normal leading-10 xl:text-2xl md:text-xl sm:text-xl max-sm:text-lg max-sm:w-[100%]">Revamped website design with optimized SEO strategies boosted user experience and increased organic traffic.</p>
                    <h2 className="justify-center text-sky-900 text-3xl font-semibold leading-10 lg:text-3xl md:text-4xl sm:text-3xl max-sm:text-xl">4x traffic in 3 months</h2>
                  </div>
                </div>
              </div>
           </div>
           
          ))}
        </div>
      </div>
    </section>
  )
}
export default CaseStudy