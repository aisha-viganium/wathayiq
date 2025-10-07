import React from "react";
import Accordion from "@/components/Questions/Accordion";
import AnimatedSection, { slideFromTopBounce } from "@/animation/AnimatedSection";

export default function FAQ({ t }: { t: (key: string) => string }) {

    return (
        <section id="faq" className="relative bg-[#F6FBFF] pt-[32px] scroll-mt-[120px]">
            <AnimatedSection
                variants={slideFromTopBounce}
                transition={{ duration: 0.8 }}
            >
                <h2
                    className="font-saudi
                                font-bold 
                                text-[20px] md:text-[40px] md:leading-[60px] 
                                text-[#0D1B1E] text-center mb-[8px] md:mb-0
                            "
                >
                    {t("FAQ.title")}
                </h2>

                <p
                    className="
                                font-normal 
                                text-[14px] md:text-[24px] md:leading-[29px] 
                                text-center 
                                text-[#364244]
                                max-w-[343px]
                                md:max-w-[681px] mx-auto 
                                md:mt-[16px]
                            "
                >
                    {t("FAQ.description")}
                </p>
            </AnimatedSection>
            <div className="container mx-auto py-[16px] md:py-[32px] px-2 pr-4">
                <Accordion />
            </div>
        </section>
    );
}
