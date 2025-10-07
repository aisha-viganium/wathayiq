import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import AnimatedSection, { fadeInRight, slideFromTopBounce } from "@/animation/AnimatedSection";

export default function ContactUs({ t }: { locale: string; t: (key: string) => string }) {

    return (
        <section id="contact" className="relative py-[32px] scroll-mt-[120px]">
            <Image src="/assets/images/contact-left.svg" width={510} height={557} alt="img1" className="w-[147px] md:w-[510px] h-fit absolute right-0 top-0 z--1" />
            <Image src="/assets/images/contact-right.svg" width={510} height={557} alt="img1" className="w-[147px] md:w-[510px] h-fit absolute left-0 bottom-0 z--1" />


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
                    {t("ContactUs.title")}
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
                    {t("ContactUs.subtitle")}
                </p>
            </AnimatedSection>
            <AnimatedSection
                variants={fadeInRight}
                transition={{ duration: 0.8 }}
                className="container mx-auto md:pb-20 ">
                <div className="flex flex-row items-start justify-center gap-4 mb-[24px] md:mt-[16px] md:mb-[32px]">
                    <div className="flex flex-row justify-center items-center gap-[13.9px]">
                        <a href="https://wa.me/9665088156465" target="_blank" rel="noopener noreferrer"
                            className="w-[24px] h-[24px] md:w-[44px] md:h-[44px] bg-[#283F3E] rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110">
                            <Image src="/assets/icons/whatsapp.svg" alt="whatsapp" width={20} height={20} className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                        </a>
                        <div>
                            <h5 className="font-medium text-[14px] md:text-[16px] text-[#364244]">{t("ContactUs.whatsapp")}</h5>
                            <a href="https://wa.me/9665088156465" target="_blank" className="text-[#364244] text-[12px] md:text-[16px] hover:text-[#0D8083]">
                                +9665088156465
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-[13.9px]">
                        <a href="mailto:mail@info.com"
                            className="w-[24px] h-[24px] md:w-[44px] md:h-[44px] bg-[#283F3E] rounded-full flex justify-center items-center transition-transform duration-300 hover:scale-110">
                            <Image src="/assets/icons/email.svg" alt="email" width={20} height={20} className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]" />
                        </a>
                        <div>
                            <h5 className="font-medium text-[14px] md:text-[16px] text-[#364244]">{t("ContactUs.email")}</h5>
                            <a href="mailto:mail@info.com" className="text-[#364244] text-[12px] md:text-[16px] hover:text-[#0D8083]">
                                mail@info.com
                            </a>
                        </div>
                    </div>
                </div>

                <ContactForm />
            </AnimatedSection>
        </section>
    );
}
