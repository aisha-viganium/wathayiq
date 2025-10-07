import Image from "next/image";
import React from "react";
import AnimatedSection, { fadeInLeft, fadeInRight } from "@/animation/AnimatedSection";
import Button from "@/components/Button";
import EditIcon from "@/assets/SVG/EditIcon";

export default function TrialVersion({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";

  return (
    <section id="trial-version" className="relative bg-[#FBFBFB] pt-[32px] scroll-mt-[120px]">

      <Image
        src="/assets/images/trial-version.svg"
        width={510}
        height={557}
        alt=""
        className="hidden md:block absolute left-0 bottom-0"
      />

      <div className="container mx-auto px-4  md:py-[32px]">
        <div className="flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2 items-center justify-around gap-[40px]">
          <AnimatedSection
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className={`col-span-1 h-full flex flex-col gap-[16px] justify-center 
              ${isArabic ? "items-start text-right" : "items-start text-left"} 
              order-2`}
          >
            <h3 className="font-saudi font-bold text-[24px] md:text-[48px] leading-[42px] md:leading-[72px] text-[#0D8083] whitespace-pre-line">
              {t("TrialVersion.subTitle")}
            </h3>

            <p className="font-medium text-[14px] md:text-[16px] md:leading-[19px] text-[#364244] max-w-[477px]">
              {t("TrialVersion.subDescription")}
            </p>


            <div className="grid grid-cols-3 md:grid-cols-2  gap-[16px] md:gap-[32px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-2 md:gap-4 items-center">
                  <div
                    className="
                              flex flex-col justify-center items-center 
                                p-[7px] md:p-2.5 gap-2 
                              w-[28px] h-[28px]  md:w-[40px] md:h-[40px] 
                              bg-[#283F3E] rounded-[4px] md:rounded-[12px]
                          "
                  >
                    <EditIcon color="#FFC681" className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]" />
                  </div>
                  <span
                    className="
                              font-medium 
                              text-[14px] md:text-[20px] md:leading-[24px] 
                              text-[#364244]
                          "
                  >
                    {t("AboutPage.feature")}
                  </span>
                </div>
              ))}
            </div>

            <Button title={t("TrialVersion.button")} className="mt-5 !h-[40px] md:!h-fit " />
          </AnimatedSection>

          <AnimatedSection
            variants={fadeInRight}
            transition={{ duration: 0.8 }}
            className="col-span-1 w-full h-full md:mb-6 lg:mb-0 flex items-start justify-start order-2 md:order-1">
            <Image src="/assets/images/trial-version.png" alt="" width={660} height={481} className=" object-cover w-full md:max-w-[660px] h-[262px] md:h-[481px] rounded-[16px]" />

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
