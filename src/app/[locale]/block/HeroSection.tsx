import React from "react";
import AnimatedSection, { fadeInLeft, fadeInRight, fadeInUp } from "@/animation/AnimatedSection";
import Button from "@/components/Button";
import Link from "next/link";
import TrustedPartners from "./TrustedPartners";
import Image from "next/image";

export default function HeroSection({ locale, t }: { locale: string; t: (key: string) => string }) {
    const isArabic = locale === "ar";

    return (
        <section
            id="home"
            className="relative bg-[url('/assets/images/bg.png')] bg-cover bg-center bg-[#F5F7F9] min-h-[50vh] md:min-h-[90vh]"
        >
            <div className="container mx-auto pt-[16px] md:pb-[32px] lg:pt-[128px]">
                <div className="flex flex-col-reverse md:flex-col lg:grid lg:grid-cols-2 items-center justify-around gap-0 lg:pt-[100px]">

                    <AnimatedSection
                        variants={fadeInRight}
                        transition={{ duration: 0.8 }}
                        className={`col-span-1 px-4 h-full flex flex-col gap-[16px] md:gap-[32px] justify-center 
                        ${isArabic ? "items-start text-right" : "items-start text-left"} 
                          order-2 mt-[16px] md:mt-0`}
                    >

                        <h1
                            className={`
                                    mt-0 md:mt-[50px] 
                                    max-w-[323px] lg:max-w-[1039.36px] 
                                    font-saudi font-bold 
                                    text-[24px] md:text-[45px] 
                                   md:pr-0
                                    whitespace-pre-line
                                    ${isArabic
                                    ? "text-right 2xl:mt-[45px]"
                                    : "text-left 2xl:mt-[5px]"
                                } 
                                text-[#0D8083]
                            `}
                        >
                            {t("HomePage.title")}
                        </h1>

                        <p
                            className={`
                                        max-w-[90%] 2xl:max-w-[477px] 
                                        font-medium
                                        text-[16px] md:text-[16px]  
                                        leading-[19px] md:leading-7 lg:leading-[38px] 
                                        md:pr-0
                                        ${isArabic ? "text-right" : "text-left"} 
                                        text-[#364244]
                                    `}
                        >
                            {t("HomePage.description")}
                        </p>

                        <div className="flex items-center gap-[8px] md:gap-[32px]">
                            <Link href="#packages">
                                <Button title={t("HomePage.subscribeButton")} className="" />
                            </Link>
                            <Link href="#trial-version">
                                <Button title={t("HomePage.tryFreeButton")} className="" />
                            </Link>
                        </div>

                    </AnimatedSection>

                    <AnimatedSection
                        variants={fadeInLeft}
                        transition={{ duration: 0.8 }}
                        className="col-span-1 w-full h-full order-2 md:mb-6 lg:mb-0 lg:order-2 flex items-end justify-end px-4 md:px-0">

                        <Image src="/assets/images/hero-image.png" alt="" width={648} height={455} className=" object-cover w-full md:w-[648px] h-[282px] md:h-[455px]  rounded-[8px] md:rounded-[16px] "/>

                    </AnimatedSection>

                </div>
                <AnimatedSection
                    variants={fadeInUp}
                    transition={{ duration: 0.8 }}
                    className={`px-4 md:px-0 ${isArabic?"md:pr-4":"md:pl-4"} mx-auto`}>
                    <TrustedPartners />
                </AnimatedSection>
            </div>

        </section>
    );
}
