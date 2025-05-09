import { PiArrowRight } from "react-icons/pi";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
const Cta = () =>{
    return(
        <section>
        <div className="w-[100%] px-[100px] bg-[#fff] py-[50px] flex justify-between items-center lg:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px] max-sm:block">
          <div>
            <h2 className="text-[25px]">GOT MORE</h2>
            <h2 className="flex items-center text-[25px]"><span className="mr-[5px]">QUESTIONS ?</span> <span><PiArrowRight className="text-[20px] max-sm:hidden"/></span></h2>
          </div>

          <div>
            <div className="border-b-[1px] border-b-[#7D40FF] mb-[20px] max-sm:w-fit max-sm:mt-[40px]">
              <h2 className="flex items-center"><span className="mr-[5px] text-[50px] font-bold  max-md:text-[30px]">Contact Us</span> <span><FiArrowUpRight className="text-[50px] text-[#7D40FF]" /></span></h2>
            </div>
            <div className="flex justify-center max-sm:w-fit">
              <BsFacebook className="text-[25px] mx-[15px]" />
              <PiInstagramLogoFill className="text-[25px] mx-[15px]" />
              <BsLinkedin className="text-[25px] mx-[15px]" />
            </div>
          </div>
        </div>
      </section>
    )
}
export default Cta