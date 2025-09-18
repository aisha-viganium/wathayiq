import Image from "next/image";
import Accordion from "./Accordion";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";

export default function Questions() {
  return (
    <section className="container mx-auto py-16 px-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <AnimatedSection
          variants={slideFromRightBounce}
          className="flex flex-col gap-6"
        >
          <div className="border-r-[12px] lg:border-r-[20px] border-r-[#F9C751] pr-3 lg:pr-4">
            <p className="font-bold text-[28px] sm:text-[36px] lg:text-[48px] leading-[40px] sm:leading-[50px] lg:leading-[69px] text-right text-[#414141]">
              الأسئلة الشائعة
            </p>
          </div>

          <Image
            src="/assets/images/Q&A.png"
            alt=""
            width={547}
            height={286}
            className="h-auto w-full max-w-[547px] object-contain mx-auto"
          />

          <form className="flex flex-col gap-3">
            <label
              className="font-bold text-[22px] sm:text-[28px] lg:text-[36px] leading-[32px] sm:leading-[40px] lg:leading-[51px] text-right text-[#414141]"
              htmlFor="question"
            >
              اي السؤال الي عاوز تساله
            </label>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full gap-2">
              <input
                type="text"
                placeholder="أكتب سؤالك هنا"
                className="flex-1 p-4 h-[57px] bg-[#1A1A1A] border border-[#C2C2C2] rounded-lg sm:rounded-r-[8px] sm:rounded-l-none font-semibold text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] text-white placeholder:text-white"
              />
              <button className="flex justify-center items-center p-4 w-full sm:w-16 h-[57px] bg-[#BD171D] rounded-lg sm:rounded-l-lg sm:rounded-r-none">
                <Image
                  src="/assets/icons/arrow-left-white.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
            </div>
          </form>
        </AnimatedSection>

        <AnimatedSection
          variants={slideFromLeftBounce}
          className="flex flex-col gap-6"
        >
          <Accordion />
        </AnimatedSection>
      </div>
    </section>
  );
}
