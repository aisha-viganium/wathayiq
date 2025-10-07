"use client";

import React from "react";
import services from "@/data/servicesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

export default function ServicesMob() {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const servicesData = isArabic ? services["ar"] : services["en"];

    return (

        <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
            {servicesData.map((service) => (
                <SwiperSlide key={service.id}>
                    <ServiceCard service={service} isArabic={isArabic} />
                </SwiperSlide>
            ))}
        </Swiper>

    );
}

