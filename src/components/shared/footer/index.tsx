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
                <div className="pt-[100px] px-[100px] bg-gradient-to-b from-[#0F0E23] to-[#000212]">
                  <div className="flex justify-between border-b-[#494747] border-b-[1px] pb-[50px]">
        
        
                    <div className="text-[#fff]">
                      <div className="mb-[30px]">
                        <h2 className="text-xl font-bold">Contact</h2>
                      </div>
                      <div className="flex flex-col gap-[30px]">
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
        
        
        
                    <div className="text-[#fff]">
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
                  <div className="pt-[50px] flex justify-between">
                      <div><p className="text-stone-300 text-base font-normal">Terms & Conditions</p></div>
                      <div><p className="text-stone-300 text-base font-normal">© 2025, FAARNS, All Rights Reserved.</p></div>
                      <div><p className="text-stone-300 text-base font-normal">Privacy Policy</p></div>
                  </div>
        
                  <div className="text-[#fff] relative">
                    <h2 className="opacity-20 text-center text-[300px] font-bold">FAARNS</h2>
                    <div className="absolute top-[20em] right-[4em]">
                      <button
                      onClick={backToTop} 
                      className="bg-[#000] py-[10px] px-[20px] border-[1px] border-[#fff] rounded-[10px] flex items-center">
                         <span className="mr-[5px]">Back to Top</span><span><BsArrowUp className="text-[#fff] text-[20px]"/></span>
                      </button>
                    </div>
                  </div>
        
                </div>
              </footer>
    )
}
export default Footer