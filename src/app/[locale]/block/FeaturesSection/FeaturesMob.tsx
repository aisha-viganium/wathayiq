"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import FeatureCard from "./FeatureCard";

interface Feature {
    id: number;
    title: string;
    description: string;
}

interface Props {
    featureList: Feature[];
}

export default function FeaturesMob({ featureList }: Props) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={6}
            slidesPerView={1.1}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
        >
            {featureList.map((feature) => (
                <SwiperSlide key={feature.id}>
                    <FeatureCard feature={feature}  />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
