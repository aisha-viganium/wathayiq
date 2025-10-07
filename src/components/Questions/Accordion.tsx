"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import questions from "@/data/questionsData";
import AnimatedSection, { fadeInRight, fadeInLeft } from "@/animation/AnimatedSection";

export default function Accordion() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  // عكس ترتيب الأسئلة
  const accordionData = [...questions[isArabic ? "ar" : "en"]].reverse();

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[32px]">
      {accordionData.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        const isRightSide = index % 2 === 0;
        const delay = ( accordionData.length-index) * 0.1;

        return (
          <AnimatedSection
            key={index}
            variants={isRightSide ? fadeInRight : fadeInLeft}
            transition={{ duration: 0.8 }}
            delay={delay}
          >
            <div className="w-full">
              <button
                onClick={() => toggle(index)}
                className="cursor-pointer flex justify-between w-full items-center p-3 md:p-4 h-[45px] border-r-[6px] md:border-r-[8px] border-[#283F3E] rounded-lg transition-colors duration-300"
              >
                <span
                  className={`font-saudi ${
                    isArabic ? "text-right" : "text-left"
                  } font-semibold text-[14px] md:text-[16px] md:leading-[24px] text-[#414141] max-w-[245px] md:max-w-[427px]`}
                >
                  {item.question}
                </span>
                <span
                  className={`w-[24px] h-[24px] md:w-[44px] md:h-[44px] bg-[#283F3E] rounded-full flex justify-center items-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <Image
                    src="/assets/icons/arrow-down.svg"
                    alt="toggle"
                    width={20}
                    height={20}
                    className="w-[13px] h-[13px] md:w-[20px] md:h-[20px] transition-transform duration-300 "
                  />
                </span>
              </button>

              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                }}
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out md:border-t md:border-t-[#A5A5A5] mt-[16px]`}
              >
                <div
                  className={`font-normal text-[14px] leading-[17px] px-4 border-t border-t-[#A5A5A5] md:border-t-0 text-[#0D1B1E] pt-3 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
