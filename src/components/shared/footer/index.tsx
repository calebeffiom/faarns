import gsap from "gsap"
import { CgMail } from "react-icons/cg";
import { CiPhone } from "react-icons/ci";
import { BsArrowUp } from "react-icons/bs";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)
const Footer = () =>{
    const backToTop = () => {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: 0, autoKill: true },
          ease: "power1.inOut"
        })}
    return(
         <footer>
                <div className="pt-[100px] px-[100px] bg-gradient-to-b from-[#0F0E23] to-[#000212] lg:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">
                  <div className="flex justify-between border-b-[#494747] border-b-[1px] pb-[50px] max-md:flex-col max-md:gap-[40px]">
                    <div className="text-[#fff]">
                      <div className="mb-[30px]">
                        <h2 className="text-xl font-bold">Contact</h2>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <div>
                          <p className="text-lg font-normal">Suite A 82 James Carter Road, <br /> Mildenhall, Bury St. Edmunds, England, <br /> United Kingdom, IP28 7DE</p>
                        </div>
                        <div>
                          <p className="flex items-center text-white text-lg font-norma"><span><CgMail className="text-[30px] mr-[5px]" /></span><span>faisal@faarns.com</span></p>
                        </div>
                        <div>
                          <p className="flex items-center text-white text-lg font-norma"><span><CiPhone className="text-[30px] mr-[5px]" /></span><span>+447365617024</span></p>
                        </div>
                      </div>
                    </div>
        
        
        
                    <div className="text-[#fff] lg:block sm:hidden max-sm:hidden">
                      <div className="mb-[30px]">
                        <h2 className="text-xl font-bold">Services</h2>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-[20px]">
                          <li className="text-lg font-normal">Web Design & Development</li>
                          <li className="text-lg font-normal">App Design & Development</li>
                          <li className="text-lg font-normal">Meta Ads</li>
                          <li className="text-lg font-normal">Google Ads</li>
                        </ul>
                      </div>
                    </div>
        
        
        
                    <div className="text-[#fff] lg:block sm:hidden max-sm:hidden">
                      <div className="mb-[30px]">
                        <h2 className="text-xl font-bold">Quick Links</h2>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-[20px]">
                          <li className="text-lg font-normal">Contact Us</li>
                          <li className="text-lg font-normal">About Us</li>
                          <li className="text-lg font-normal">Projects</li>
                          <li className="text-lg font-normal">Blogs</li>
                        </ul>
                      </div>
                    </div>




                    <div className="hidden justify-between items-center lg:hidden sm:gap-[50px] sm:flex sm:flex-row max-sm:flex max-sm:flex-col max-sm:items-start max-sm:gap-[40px] ">
                    <div className="text-[#fff]">
                      <div className="mb-[30px]">
                        <h2 className="text-xl font-bold">Services</h2>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-[20px]">
                          <li className="text-lg font-normal max-md:text-base">Web Design & Development</li>
                          <li className="text-lg font-normal max-md:text-base">App Design & Development</li>
                          <li className="text-lg font-normal max-md:text-base">Meta Ads</li>
                          <li className="text-lg font-normal max-md:text-base">Google Ads</li>
                        </ul>
                      </div>
                    </div>
        
        
        
                    <div className="text-[#fff]">
                      <div className="mb-[30px]">
                        <h2 className="text-xl font-bold">Quick Links</h2>
                      </div>
                      <div>
                        <ul className="flex flex-col gap-[20px]">
                          <li className="text-lg font-normal">Contact Us</li>
                          <li className="text-lg font-normal">About Us</li>
                          <li className="text-lg font-normal">Projects</li>
                          <li className="text-lg font-normal">Blogs</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="pt-[50px] flex justify-between items-center">
                      <div><p className="text-stone-300 text-base font-normal max-sm:text-[8px]">Terms & Conditions</p></div>
                      <div><p className="text-stone-300 text-base font-normal max-sm:text-[8px]">© 2025, FAARNS, All Rights Reserved.</p></div>
                      <div><p className="text-stone-300 text-base font-normal max-sm:text-[8px]">Privacy Policy</p></div>
                  </div>
        
                  <div className="text-[#fff] relative">
                    <h2 className="opacity-20 text-center text-[300px] font-bold xxl:text-[300px] xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[100px] max-sm:text-[50px]">FAARNS</h2>
                    <div className="absolute top-[20em] right-0 lg:top-[10em] md:top-[8em] sm:top-[1em] max-sm:top-[1em] max-sm:right-0">
                      <button
                      onClick={backToTop} 
                      className="bg-[#000] py-[10px] px-[20px] border-[1px] border-[#fff] rounded-[10px] flex items-center max-sm:py-[5px] max-sm:px-[10px]">
                         <span><BsArrowUp className="text-[#fff] text-[20px]"/></span>
                      </button>
                    </div>
                  </div>
        
                </div>
              </footer>
    )
}
export default Footer