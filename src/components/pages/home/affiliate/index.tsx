const Affiliate = () =>{
    return(
        <section>
        <div className="w-[100%] px-[100px] pt-[100px] bg-gradient-to-b from-[#0000] to-[#0F0E23] lg:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">
          <div className="relative">
            <div className="mb-[20px] relative max-lg:mb-[300px]">

              <div className="w-[481px] p-[50px] flex flex-col justify-between absolute right-[5em] top-0 h-[630px] z-30 bg-white/20 rounded-xl outline outline-[0.20px] outline-white backdrop-blur-[4px] xxl:right-[4em] xl:w-[481px] lg:right-0 lg:top-0 lg:h-[630px] sm:w-[400px] sm:right-0 sm:top-[20em] sm:h-[600px] max-sm:w-[320px] max-sm:right-0 max-sm:top-[20em] max-sm:h-[600px] max-sm:px-[30px]">
                <input type="text" placeholder="Name" className="h-12 px-3.5 py-2.5 bg-black/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-lg opacity-60 text-white text-lg font-medium placeholder-[white]" />
                <input type="text" placeholder="Email Address" className="h-12 px-3.5 py-2.5 bg-black/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-lg opacity-60 text-white text-lg font-medium placeholder-[white]" />
                <input type="text" placeholder="Phone number(optional)" className="h-12 px-3.5 py-2.5 bg-black/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-lg opacity-60 text-white text-lg font-medium placeholder-[white]" />
                <textarea placeholder="Tell us about your business" className="h-40 px-3.5 py-2.5 bg-black/30 rounded-xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-lg opacity-60 text-white text-lg font-medium placeholder-[white]"></textarea>
                <button className="w-52 h-14 p-2.5 bg-slate-900 mx-[auto] rounded-xl outline outline-1 outline-offset-[-1px] outline-black text-white text-lg font-semibold">Submit application</button>
              </div>

              <h2 className="text-6xl font-extrabold text-white mb-[18px] xl:text-6xl lg:text-5xl sm:text-4xl max-sm:text-4xl">Become an <br className="hidden lg:block xl:hidden" /> Affiliate <br className="hidden md:block lg:hidden xl:block" />Partner</h2>
              <p className="text-white text-xl font-semibold mb-[20px] max-sm:text-lg">Join our network of successful partners and <br className="max-sm:hidden"/> earn competitive commissions</p>
              <div className="flex">
                <img src="/img/partner1.svg" className="relative left-[0px]" alt="" />
                <img src="/img/partner2.svg" className="relative -left-[20px]" alt="" />
                <img src="/img/partner3.svg" className="relative -left-[40px]" alt="" />
                <img src="/img/partner4.svg" className="relative -left-[60px]" alt="" />
              </div>
              
            </div>
            <div className="bg-[url('/img/typing.png')] z-30 bg-cover bg-center h-96"></div>
          </div>
        </div>
      </section>
    )
}
export default Affiliate