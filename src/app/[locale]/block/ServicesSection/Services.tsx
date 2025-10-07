import React from "react";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";
import services from "@/data/servicesData";
import ServiceCard from "./ServiceCard";
import ServicesMob from "./ServicesMob";

export default function Services({ locale, t }: { locale: string; t: (key: string) => string }) {
  const isArabic = locale === "ar";
  const servicesData = isArabic ? services["ar"] : services["en"];

  return (
    <section className="container mx-auto bg-white md:py-[32px] px-4">
      <AnimatedSection>
        <h2
          className={`font-saudi not-italic font-bold text-[20px] md:text-[40px] text-[#0D1B1E] ${isArabic ? "text-right" : "text-left"}  md:text-center mb-[16px] md:mb-[32px]`}
        >
          {t("Services.title")}
        </h2>
      </AnimatedSection>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-[32px] items-start">
        {servicesData.map((service, index) => (
          <AnimatedSection
            key={service.id}
            variants={slideFromTopBounce}
            delay={0.1 * (index + 1)}
            transition={{ duration: 0.3 }}
          >
            <ServiceCard service={service} isArabic={isArabic} />
          </AnimatedSection>
        ))}
      </div>

      <div className="md:hidden">
        <ServicesMob />
      </div>
    </section>
  );
}

