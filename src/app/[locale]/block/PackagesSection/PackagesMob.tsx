"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import PackageCard from "./PackageCard";
import { useTranslation } from "react-i18next";
import { packagesData } from "@/data/packagesData";

export default function PackagesMob() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const packageList = packagesData[isArabic ? "ar" : "en"];

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={1.3}
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
    >
      {packageList.map((pkg, index) => (
        <SwiperSlide key={pkg.id}>
          <PackageCard pkg={pkg} isArabic={isArabic} planType="monthly" index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
