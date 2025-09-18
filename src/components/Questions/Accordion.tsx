"use client";

import Image from "next/image";
import { useState } from "react";

const accordionData = [
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
  {
    question:
      "السؤال الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ؟",
    answer:
      "الجواب الأول السؤال الأول السؤال الأول الأول الأول ر الأول الأول الأول الأول ",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={index} className="w-full mt-4 sm:mt-5">
          <button
            onClick={() => toggle(index)}
            className="cursor-pointer flex justify-between w-full items-center p-3 sm:p-4 min-h-[45px] border-r-[6px] sm:border-r-[8px] border-[#F9C751] rounded-lg"
          >
            <span className="font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[27px] lg:leading-[29px] text-right text-[#414141]">
              {item.question}
            </span>
            <span className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-[#F9C751] rounded-full flex justify-center items-center shrink-0">
              <Image
                src="/assets/icons/plus-question.svg"
                alt="plus"
                width={20}
                height={20}
                className="sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px]"
              />
            </span>
          </button>

          {openIndex === index && (
            <div className="font-light text-[14px] sm:text-[15px] lg:text-[16px] mt-2 leading-[22px] sm:leading-[23px] text-right text-[#414141] p-3 sm:p-4 border-t border-[#414141]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
