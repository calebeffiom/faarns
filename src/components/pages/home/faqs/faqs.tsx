// components/FAQAccordion.tsx
// If you haven't installed Heroicons, run: npm install @heroicons/react
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  /**
   * If true, only one item can be open at a time. Defaults to false (multiple open allowed).
   */
  singleOpen?: boolean;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, singleOpen = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      return singleOpen ? [index] : [...prev, index];
    });
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div
            key={idx}
            className="border-b-[1px] border-b-white/50 overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full flex justify-between items-center py-8 bg-[transparent] max-sm:text-start"
            >
              <span className=" text-white text-3xl font-medium lg:text-3xl md:text-2xl sm:text-lg max-sm:text-lg">{faq.question}</span>
              <ChevronDownIcon
                className={`h-10 w-10 text-white transform transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            <div
              className={` bg-[transparent] text-white text-2xl transition-[max-height,opacity,padding] duration-300 ease-in-out overflow-hidden md:text-2xl sm:text-lg max-sm:text-lg ${
                isOpen ? 'max-h-screen opacity-1 py-2 px-1' : 'max-h-0 opacity-0 p-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
