const WhyUs = () =>{
    return(
        <section className="relative bg-[url('/img/blue.png')] z-30 bg-cover bg-center">
        <div className="w-full mx-[auto] py-[100px] px-[100px] backdrop-blur-[2px] xl:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">

          <div className="w-52 h-11 px-4 py-3.5 mb-[27px] bg-white/20 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/50 inline-flex justify-center items-center gap-2">
            <p className="justify-start text-zinc-300 text-xl font-semibold tracking-wide lg:text-xl md:text-[16px] sm:text-[14px] max-sm:text-[14px]">Why Choose Us</p>
          </div>
          <div className="self-stretch mb-[27px] justify-center">
            <h2 className="text-white text-5xl font-boldleading-[96px] lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-xl">Why FAARNS is The Right Choice For You </h2>
          </div>

          <div className="flex w-[100%] gap-[10px] lg:flex sm:block max-sm:block">

            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[10px] max-sm:block">
                <div className="w-96 py-[14px] px-[20px] bg-gradient-to-l from-slate-100 to-slate-300 rounded-3xl xxl:w-96 xl:w-[300px] lg:w-[275px] sm:w-[50%] max-sm:w-[100%] max-sm:mb-[10px]" >
                  {/* <div className="w-14 h-14 rounded-full border border-black" > */}
                  <img src="/img/group.svg" className="mb-[13px]" alt="" />
                  {/* </div> */}
                  <h2 className="text-[#000] text-3xl font-bold mb-[13px] xl:text-3xl lg:text-2xl">Integrated team collaboration</h2>
                  <p className="text-black text-base font-normal xl:">By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.</p>
                </div>

                <div className="w-96 py-[14px] px-[20px] bg-gradient-to-l from-slate-100 to-slate-300 rounded-3xl xxl:w-96 xl:w-[300px] lg:w-[275px] sm:w-[50%] max-sm:w-[100%]" >
                  {/* <div className="w-14 h-14 rounded-full border border-black" > */}
                  <img src="/img/group.svg" className="mb-[13px]" alt="" />
                  {/* </div> */}
                  <h2 className="text-[#000] text-3xl font-bold mb-[13px] xl:text-3xl lg:text-2xl">Integrated team collaboration</h2>
                  <p className="text-black text-base font-normal xl:">By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.</p>
                </div>
              </div>






              <div className="w-[774px] py-[14px] px-[20px] bg-gradient-to-l from-slate-100 to-slate-300 rounded-3xl xxl:w-[774px] xl:w-[610px] lg:w-[560px] sm:w-[100%] max-sm:w-[100%]">
                {/* <div className="w-14 h-14 rounded-full border border-black" > */}
                <img src="/img/group.svg" className="mb-[13px]" alt="" />
                {/* </div> */}
                <h2 className="text-[#000] text-3xl font-bold mb-[13px]">Integrated team collaboration</h2>
                <p className="text-black text-base font-normal">By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.</p>
              </div>

              <div className="w-[774px] py-[14px] px-[20px] bg-gradient-to-l from-slate-100 to-slate-300 rounded-3xl xxl:w-[774px] xl:w-[610px] lg:w-[560px] sm:w-[100%] sm:mb-[10px] max-sm:w-[100%] max-sm:mb-[10px]">
                {/* <div className="w-14 h-14 rounded-full border border-black" > */}
                <img src="/img/group.svg" className="mb-[13px]" alt="" />
                {/* </div> */}
                <h2 className="text-[#000] text-3xl font-bold mb-[13px]">Integrated team collaboration</h2>
                <p className="text-black text-base font-normal">By seamlessly blending with your team, we focus on data driven growth strategies that maximize the effetiveness of your products and engage closely with your customer base.</p>
              </div>
            </div>




            <div className="w-[480px] h-[695px] py-[51px] flex flex-col justify-between px-[20px] bg-gradient-to-br from-slate-100 to-slate-400 rounded-3xl border-[5px] border-white/50 xxl:h-[695px] xl:h-[800px] lg:h-[780px] sm:w-[100%] sm:h-[500px] max-sm:w-[100%] max-sm:h-[500px]">
              <div>
                <p className="ext-black text-2xl font-semibold leading-10 tracking-widest xl:text-2xl xl:leading-10 lg:leading-[2] lg:text-lg max-sm:text-lg">With years of expertise, custom solutions, and a customer-first approach, we deliver proven results and build long-term partnerships. Choose us for innovative strategies and unmatched dedication to your success.</p>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div><h2 className="text-slate-900 text-5xl font-bold text-center xl:text-5xl lg:text-2xl max-sm:text-[20px]">500%</h2></div>
                  <div><p className="text-black text-xl font-medium text-center xl:text-xl lg:text-lg max-sm:text-[15px] leading-[1.3]">Average ROI for our clients</p></div>
                </div>
                <div className="flex flex-col">
                  <div><h2 className="text-slate-900 text-5xl font-bold text-center xl:text-5xl lg:text-2xl max-sm:text-[20px]">10K+</h2></div>
                  <div><p className="text-black text-xl font-medium text-center xl:text-xl lg:text-lg max-sm:text-[15px] leading-[1.3]">Leads generated monthly</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}
export default WhyUs