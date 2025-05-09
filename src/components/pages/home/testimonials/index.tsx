import CardCarousel from "./cards"
const Testimonial = () =>{
    const sampleCards = [
        { id: 1, content: "Working with FAARNS felt seamless. They didn't just enhance our digital presence—they brought in the right audience. It's clear they understand the power of strategy and execution.", img: '/img/carousel.png' },
        { id: 2, content: "Working with FAARNS felt seamless. They didn't just enhance our digital presence—they brought in the right audience. It's clear they understand the power of strategy and execution.", img: '/img/carousel.png' },
        { id: 3, content: "Working with FAARNS felt seamless. They didn't just enhance our digital presence—they brought in the right audience. It's clear they understand the power of strategy and execution.", img: '/img/carousel.png' },
        { id: 4, content: "Working with FAARNS felt seamless. They didn't just enhance our digital presence—they brought in the right audience. It's clear they understand the power of strategy and execution.", img: '/img/carousel.png' },
      ];
    return(
        <section>
        <div className="w-[100%] px-[100px] bg-gradient-to-b from-[#0F0E23] to-[#000212] py-[91px] lg:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">
          <div>
            <div className="text-center justify-center mb-4"><h2 className="text-white text-3xl font-bold lg:text-3xl md:text-2xl sm:text-xl max-sm:text-xl">Don't Take Our Word for It </h2></div>
            <div className="text-center justify-center"><h2 className="text-white text-5xl font-bold lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-2xl">See What Our Clients Say!</h2></div>
          </div>
          <CardCarousel items={sampleCards} />
        </div>
      </section>
    )
}
export default Testimonial