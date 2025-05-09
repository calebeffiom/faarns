import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Logos = () => {
  const images = [
    "/img/firstLogo.png",
    "/img/secondLogo.png",
    "/img/thirdLogo.png",
    "/img/firstLogo.png",
    "/img/secondLogo.png",
    "/img/thirdLogo.png",
    "/img/firstLogo.png",
    "/img/secondLogo.png",
    "/img/thirdLogo.png",
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween>();

  useEffect(() => {
    if (!containerRef.current) return;

    // We duplicate the logos array so the scroll can wrap seamlessly
    const totalItems = images.length * 2;

    tweenRef.current = gsap.to(containerRef.current, {
      // move left by half the width (i.e. one full set of logos)
      xPercent: -50,
      ease: 'none',
      duration: 10,
      repeat: -1,
      modifiers: {
        // wrap the percentage back to 0 as soon as it gets to -50%
        xPercent: gsap.utils.wrap(-50, 0)
      }
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section>
      <div className="py-[100px] px-[100px] lg:px-[100px] md:px-[50px] sm:px-[20px] max-sm:px-[20px]">
        <div
          className="w-[80%] mx-auto overflow-hidden relative group lg:w-[80%] max-lg:w-[100%]"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.play()}
        >
          <div
            ref={containerRef}
            className="flex gap-[30px] justify-between"
            style={{ width: `${images.length * 30}%` }} 
            // container is twice as wide as one set
          >
            {/* original + duplicate */}
            {[...images, ...images].map((src, i) => (
              <div key={i} className="flex items-center justify-center">
                <img
                  src={src}
                  alt=""
                  className="h-[50px] w-auto max-w-[200px] object-contain max-sm:max-w-[100px]"
                />
              </div>
            ))}
          </div>

          {/* optional fade gradients */}
          {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" /> */}
        </div>
      </div>
    </section>
  );
};

export default Logos;
