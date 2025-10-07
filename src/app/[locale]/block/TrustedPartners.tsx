'use client'

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

export default function TrustedPartners() {
      const { t } = useTranslation();
    return (
        <div
            className="relative mt-[32px] flex flex-col items-center py-[16px] md:py-[32px] gap-[16px] md:gap-[48px] w-full rounded-[4px] md:rounded-[12px]"
            style={{
                background:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 100%), #095455",
            }}
        >
            <Image
                src="/assets/images/frame-right.svg"
                width={290}
                height={329}
                alt="frame right"
                className="hidden md:block w-[290px] h-fit absolute left-0 bottom-0"
            />
            <Image
                src="/assets/images/frame-left.svg"
                width={290}
                height={329}
                alt="frame left"
                className="hidden md:block w-[290px] h-fit absolute right-0"
            />

            <h3 className="font-saudi not-italic font-medium text-[20px] md:text-[40px] md:leading-[60px] text-white">
                {t("HomePage.trustedPartners")}
            </h3>

            <div className="w-full">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={2.25}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        768: { 
                            slidesPerView: 2.25,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {["logo1", "logo2", "logo1", "logo2"].map((logo, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center text-center">
                            <Image
                                src={`/assets/images/${logo}.svg`}
                                width={150}
                                height={60}
                                alt={logo}
                                className="w-[118px] md:w-[160px] h-fit mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
