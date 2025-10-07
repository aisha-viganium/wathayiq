
import React from "react";
import AnimatedSection, { fadeInUp, slideFromTopBounce } from "@/animation/AnimatedSection";
import Image from "next/image";
import FeatureCard from "./FeatureCard";
import FeaturesMob from "./FeaturesMob";
import { features } from "@/data/featuresData";

export default function Features({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";
  const featureList = features[isArabic ? "ar" : "en"];

  return (
    <section id="features" className={`container mx-auto bg-white pt-[32px] pb-[32px] md:pb-[92px] ${isArabic?"pr-4":"pl-4"} scroll-mt-[120px]`}>
      <AnimatedSection className="flex justify-center md:justify-between items-center">
        <Image src="/assets/icons/book.svg" alt="" width={192} height={116} className="hidden md:block w-[34px] md:w-[192px] h-fit" />
        <AnimatedSection
          variants={slideFromTopBounce}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-saudi font-bold text-[20px] md:text-[40px] md:leading-[60px] text-[#0D1B1E] text-center">
            {t("Features.title")}
          </h2>
          <p className="font-normal text-[12px] md:text-[24px] leading-[19px] md:leading-[29px] text-center text-[#364244] max-w-[281px] md:max-w-[681px] mx-auto mt-[12px] md:mt-[16px]">
            {t("Features.subtitle")}
          </p>
        </AnimatedSection>
        <Image src="/assets/icons/book.svg" alt="" width={192} height={116} className="hidden md:block w-[34px] md:w-[192px] h-fit" />
      </AnimatedSection>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-[42px] items-start px-2 md:px-0 md:mt-[64px]">
        {featureList.map((feature, index) => (
          <AnimatedSection
            key={feature.id}
            variants={fadeInUp}
            delay={0.1 * (index + 1)}
            transition={{ duration: 0.3 }}
          >
            <FeatureCard feature={feature} />
          </AnimatedSection>
        ))}
      </div>

      {/* Swiper for mobile */}
      <div className="md:hidden mt-[32px]">
        <FeaturesMob featureList={featureList} />
      </div>
    </section>
  );
}
