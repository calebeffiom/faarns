import { useState, useRef } from "react";
import gsap from "gsap";
import Logos from "../logo_carousel";
const Hero = () => {
    const [line, setLine] = useState(90)
    const box = useRef<HTMLDivElement>(null)
    const image = useRef<HTMLDivElement>(null)
    const backgroundImage1 = `conic-gradient(from 90deg at ${line}% 20.00%, #241E43 0deg, #27233F 126deg, #161328 145deg, #161328 157deg, #161328 189deg, #161328 212deg, #161328 222deg, #000212 271deg, #000212 281deg, #000212 288deg, rgba(0,2,18,0.50) 317deg, rgba(0,2,18,0.63) 343deg, rgba(0,0,0,0.77) 360deg)`;
    const backgroundImage2 = `conic-gradient(from 90deg at ${line}% 20.00%, #241E43 0deg, #27233F 126deg, #161328 145deg, #161328 157deg, #161328 189deg, #161328 212deg, #161328 222deg, #000212 271deg, #000212 281deg, #000212 288deg, rgba(0,2,18,0.50) 317deg, rgba(0,2,18,0.63) 343deg, rgba(0,0,0,0.77) 360deg)`;
    const animObjRef = useRef({ val: 76.93 });
    const handleMouseEnter = () => {
        gsap.to(animObjRef.current, {
            duration: 1.5,        // animation duration in seconds
            val: 70,           // target value
            ease: "power1.out", // easing function for a smooth effect
            onUpdate: () => {
                // Update state with the current value from the animation object.
                setLine(animObjRef.current.val);
            },
        });
    };

    const handleMouseLeave = () => {
        gsap.to(animObjRef.current, {
            duration: 1.5,
            val: 76.93,
            ease: "power1.out",
            onUpdate: () => {

                // Update state with the current value from the animation object.
                setLine(animObjRef.current.val);
            },
        });
    };
    return (
        <div>
            <div className="hero"
                id="top"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <section className="relative w-full h-[550px] overflow-hidden flex md:h-[550px] sm:h-[400px] max-sm:h-[300px]">
                    {/* Left Gradient */}
                    <div className="relative w-1/2 z-0 h-full">
                        <div
                            style={{ backgroundImage: `${backgroundImage1}` }}
                            className={`absolute inset-0 blur-[1px] origin-center`}></div>
                    </div>

                    {/* Right Gradient */}
                    <div className="relative w-1/2 z-0 h-full ">
                        <div
                            style={{ backgroundImage: `${backgroundImage2}` }}
                            className={`absolute -inset-1 scale-x-[-1] blur-[1px] origin-center`}></div>
                    </div>

                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 w-full flex justify-center items-end h-[20%] bg-gradient-b-to from-black to-black backdrop-blur-[6px] z-10 max-sm:h-[25%]">
                        <div className='w-[fit-content] relative bottom-[20px]'><img src="/img/logo.svg" className="max-sm:w-[40px]" alt="" /></div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-[80%] text-center backdrop-blur-[6px] bg-gradient-to-b from-transparent to-black z-10">
                        <div className='w-[100%] relative top-[70px] lg:top-[70px] sm:top-[40px] max-sm:top-[20px]'>
                            <div className='w-[375px] h-fit mx-[auto] rounded-[30px] shadow-[1px_1px_2.700000047683716px_0px_rgba(255,255,255,0.55)] bg-white/20 h-[45px] py-[14px] px-[16px] lg:w-[375px] md:py-[14px] md:w-[320px] sm:w-[275px] sm:py-[12px] max-sm:w-[220px] max-sm:py-[8px]'>
                                <span className='text-zinc-300 text-[20px] lg:text-[20px] md:text-[16px] sm:text-[14px] max-sm:text-[12px]'>Leading Marketing Agency</span>
                            </div>
                        </div>

                        <div className='w-[100%]'>
                            <div className="w-[80%] mx-[auto] xxl:w-[80%] xs:w-[100%] max-xs:w-[100%]">
                                <h1 className='text-[300px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent xl:text-[300px] lg:text-[250px] md:text-[180px] sm:text-[150px] max-sm:text-[80px]'>FAARNS</h1>
                            </div>


                            <div className='w-[70%] flex justify-between mx-[auto] relative -top-[100px] xl:-top-[100px] lg:-top-[80px] md:-top-[60px] sm:-top-[40px] max-sm:-top-[20px] sm:w-[40%] xs:w-[60%]'>
                                <span className=' text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent lg:text-[20px] md:text-[16px] sm:text-[14px] max-sm:text-[10px]'>WEBSITE</span><span className='float text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent lg:text-[20px] md:text-[16px] sm:text-[14px] max-sm:text-[10px]'>MARKETING</span><span className='float text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent lg:text-[20px] md:text-[16px] sm:text-[14px] max-sm:text-[10px]'>SAAS</span><span className='float text-[white] block text-[18px] bg-gradient-to-b from-[#EDEDED] to-[rgba(237,237,237,0.61)] bg-clip-text text-transparent lg:text-[20px] md:text-[16px] sm:text-[14px] max-sm:text-[10px]'>SEO</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Hero section part 2 */}
                <section className=' h-[full-content] relative z-20 w-full py-[50px] max-sm:py-0 max-sm:px-[20px]'>
                    <div className='flex justify-evenly items-end md:flex max-sm:block'>
                        <div className='w-[302px] text-justify justify-center lg:w-[302px] md:w-[250px] sm:w-[200px] max-sm:w-[200px]'>
                            <p className='text-gray-200 text-2xl lg:text-2xl md:text-[18px] sm:text-[15px] max-sm:text-[15px] max-md:leading-tight'>Generating leads is the first step; true profit comes from converting those leads into long-term customers</p>
                        </div>
                        <div className='w-[fit-content] inline-flex justify-center items-center gap-2 max-sm:w-[100%] max-sm:my-[30px]'>
                            <button className='w-72 h-16 bg-white text-center outline outline-[0.78px] outline-offset-[-0.78px] outline-fuchsia-500 shadow-[0px_0px_35.299400329589844px_0px_rgba(244,30,255,0.75)] rounded-[9.41px] justify-start text-black text-2xl font-semibold lg:text-2xl lg:w-72 md:text-[18px] md:w-[200px] md:h-16 sm:h-12 sm:text-[15px] sm:w-[150px] max-sm:h-12 max-sm:text-[18px] max-sm:w-[180px]'>Book a free call</button>
                        </div>
                        <div className='w-[302px] text-right justify-center lg:w-[302px] md:w-[250px] sm:w-[200px] max-sm:ml-[auto] max-sm:w-[200px]'>
                            <p className='text-gray-200 text-2xl lg:text-2xl md:text-[18px] sm:text-[15px] max-sm:text-[15px] max-md:leading-tight'>Got marketing questions? Book a free call and see why we’re the right fit for you.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* hero section part 3 */}
            <section ref={box} className='h-[fit-content] relative  z-10 w-full py-[50px] max-sm:hidden'>
                <div className='flex justify-between'>
                    <div ref={image} className="image"><img src="/img/image1.png" alt="" /></div>
                    <div ref={image} className='image'><img src="/img/image2.png" alt="" /></div>
                    <div ref={image} className='image'><img src="/img/image3.png" alt="" /></div>
                    <div ref={image} className='image'><img src="/img/image4.png" alt="" /></div>
                    <div ref={image} className="image"><img src="/img/image5.png" alt="" /></div>
                </div>
            </section>
            <Logos/>
        </div>
    )
}
export default Hero;