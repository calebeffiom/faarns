import FAQAccordion,  { FAQItem } from "./faqs"
const Faqs = () =>{
     const faqList: FAQItem[] = [
        {
          question: 'How long does it take to design and develop a website?',
          answer:
            'We accept returns within 30 days of purchase. Items must be in original condition.',
        },
        {
          question: 'Do you offer website maintenance and support? ',
          answer:
            'Standard shipping typically takes 5-7 business days. Expedited options are available at checkout.',
        },
        {
          question: 'Do you integrate third-party tools or APIs into websites?',
          answer:
            'Yes! Please contact our sales team for pricing on orders over 50 units.',
        },
        {
          question: 'Can you help with website hosting and domain registration?',
          answer:
            'Yes! Please contact our sales team for pricing on orders over 50 units.',
        },
        {
          question: 'How long does it take to see SEO results?',
          answer:
            'Yes! Please contact our sales team for pricing on orders over 50 units.',
        },
    
      ];
    return(
        <section>
        <div className="w-[100%] px-[100px] py-[150px] lg:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">
          <div>
            <div className="w-80 h-11 px-4 py-3.5 bg-white/20 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/50 inline-flex justify-center items-center gap-2">
              <p className="text-zinc-300 text-xl font-semibold tracking-wide lg:text-xl md:text-[16px] sm:text-[14px] max-sm:text-[14px]">Frequently asked questions</p>
            </div>
            <div className="py-[28px]">
              <h2 className="text-white text-5xl font-bold xl:text-5xl lg:text-4xl sm:text-3xl max-sm:text-3xl">Before You Ask, Check Our FAQs!</h2>
            </div>
            <FAQAccordion faqs={faqList} singleOpen={true} />
          </div>
        </div>
      </section>
    )
}
export default Faqs