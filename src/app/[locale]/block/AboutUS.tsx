import Image from "next/image";
import React from "react";
import AnimatedSection, { fadeInLeft, fadeInRight } from "@/animation/AnimatedSection";
import EditIcon from "@/assets/SVG/EditIcon";

export default function AboutUS({ locale, t }: { locale: string; t: (key: string) => string }) {
    const isArabic = locale === "ar";

    return (
        <section id="about" className="relative scroll-mt-[120px]">
            <Image
                src="/assets/images/about-img.svg"
                width={510}
                height={557}
                alt=""
                className="hidden md:block absolute left-0 top-0 z-[-1]"
            />

            <div className="container mx-auto px-4 py-[32px]">
                <div className="flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2 items-center justify-around gap-[32px] md:gap-[64px]">

                    <AnimatedSection
                        variants={fadeInLeft}
                        transition={{ duration: 0.8 }}
                        className={`col-span-1 h-full flex flex-col gap-[8px] md:gap-[16px] justify-center 
                            ${isArabic ? "items-start text-right" : "items-start text-left"} 
                            order-2 `}
                    >

                        <h3
                            className={`
                                font-saudi font-bold
                                text-[20px] md:text-[30px] lg:text-[40px]
                                ${isArabic ? "text-right" : "text-left"}
                                text-[#0D1B1E]
                                flex justify-between w-full
                            `}
                        >
                            <span>
                                {t("AboutPage.title")}
                            </span>

                            <Image
                                src="/assets/icons/book.svg"
                                width={50}
                                height={31}
                                alt=""
                                className="block md:hidden"
                            />
                        </h3>

                        <p
                            className={`
                                max-w-[90%] 2xl:max-w-[635px]
                                font-normal not-italic
                                text-[14px] md:text-[18px] lg:text-[20px]
                                leading-[24px] md:leading-[26px] lg:leading-[28px]
                                ${isArabic ? "text-right" : "text-left"}
                                text-[#364244]
                            `}
                        >
                            {t("AboutPage.description")}
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
                    </AnimatedSection>

                    <AnimatedSection
                        variants={fadeInRight}
                        transition={{ duration: 0.8 }}
                        className="col-span-1 w-full h-full  flex items-start justify-start order-2 md:order-1">
       
                        <Image src="/assets/images/about.png" alt="" width={643} height={370} className="object-cover h-[197px] md:h-[370px] rounded-[8px] md:rounded-[16px]"/>

                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
