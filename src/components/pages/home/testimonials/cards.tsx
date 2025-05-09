import { useState, useRef } from 'react';
import gsap from 'gsap';
import { IoArrowBack } from 'react-icons/io5';
import { IoArrowForward } from 'react-icons/io5';
import { FaQuoteLeft } from 'react-icons/fa';

interface CardItem {
  id: number | string;
  content: React.ReactNode;
  img: string;
}

interface CardCarouselProps {
  items: CardItem[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ items }) => {
  const [cards, setCards] = useState<CardItem[]>(items);
  const containerRef = useRef<HTMLDivElement>(null);


  const animateNext = () => {
    if (!containerRef.current) return;
    const front = containerRef.current.children[0] as HTMLElement;
    gsap.to(front, {
      x: 300,
      rotation: 20,
      duration: 0.6,
      onComplete: () => {
        setCards(prev => {
          const [first, ...rest] = prev;
          return [...rest, first];
        });
        gsap.set(front, { x: 0, rotation: 0 });
      },
    });
  };

  const animatePrev = () => {
    if (!containerRef.current) return;
    setCards(prev => {
      const rest = prev.slice(0, -1);
      const last = prev[prev.length - 1];
      return [last, ...rest];
    });
    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const newFront = containerRef.current.children[0] as HTMLElement;
      gsap.from(newFront, { x: -300, rotation: -20, duration: 0.6 });
    });
  };

  return (
    <div className="relative w-[60%] h-96 mx-auto mt-[70px] xxl:w-[60%] lg:w-[75%] lg:h-96 sm:h-80 sm:w-[90%] max-sm:h-96 max-sm:w-[100%]">
      <div ref={containerRef} className="absolute inset-0">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="absolute w-full h-full bg-white rounded-xl px-[30px] shadow-lg flex items-center justify-start max-sm:block"
            style={{
              transform: `scale(${1 - index * 0.03}) translateX(${index * 10}px) translateY(${index * -10}px)`,
              zIndex: cards.length - index,
            }}
          >
            <div className='w-[30%] mr-[30px] h-full flex items-center lg:h-full md:h-full sm:h-[70%] max-sm:h-[50%] max-sm:w-[100%]'>
                <img src={card.img} className="h-[90%] rounded-[20px] w-[100%] object-fit" alt="" />
            </div>
            <div className='w-[60%] h-full flex py-[30px] flex-col justify-between max-sm:block max-sm:w-[100%] max-sm:py-0 max-sm:px-[10px]'>
                <div>
                <FaQuoteLeft className='text-[30px] md:text-[30px] sm:text-[20px] max-sm:text-[20px] max-sm:mb-[5px]'/>
                </div>
               
                <div>
               <p className='text-2xl font-normal leading-tight mb-[30px] lg:text-2xl sm:text-lg max-sm:text-[15px] max-sm:mb-[5px]'>{card.content}</p>
               <p className='text-2xl font-bold lg:text-2xl sm:text-lg max-sm:text-[15px]'>Chrisian Owerky</p>
               <span className='text-neutral-600 text-base font-normal'>Founder and CEO, Equity</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 mt-4 flex top-1/2 -translate-y-1/2 justify-between">
        <button onClick={animatePrev} className="px-2 rounded-[50%] bg-[#fff] py-2 border-[#000] border-[1px]">
          <IoArrowBack/>
        </button>
        <button onClick={animateNext} className="px-2 rounded-[50%] bg-[#fff] py-2 border-[#000] border-[1px]">
          <IoArrowForward/>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;