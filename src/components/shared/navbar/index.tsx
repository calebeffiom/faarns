import { BiBulb } from "react-icons/bi";
const Navbar = () =>{
    return(
        <nav className="text-[#fff] shadow-sm bg-black fixed bottom-[2em] px-6 py-4 rounded-3xl left-[50%] -translate-x-[50%] z-50 bg-[red] w-[50%] mx-[auto]">
                <ul className="flex w-[100%] justify-evenly items-center">
                  <li className="font-medium">Services</li>
                  <li className="font-medium">Case Studies</li>
                  <li className="rounded-xl border-t-[1px] border-b-[1px] border-t-fuchsia-500 border-b-blue-500"><div className="flex items-center font-medium gap-[5px] shadow-[0px_0px_32.35268020629883px_0px_rgba(255,0,230,0.60)] px-[50px] py-[15px] bg-gradient-to-b from-fuchsia-500/20 to-blue-600/20 rounded-xl relative overflow-hidden"><span><BiBulb className="text-[25px]"/></span><span>Got a Concept?</span><span className="absolute top-0 right-0"><img src="/img/star1.svg" alt="" /></span></div></li>
                  <li className="font-medium">Projects</li>
                  <li className="font-medium">More</li>
                </ul>
        </nav>
    )
}
export default Navbar