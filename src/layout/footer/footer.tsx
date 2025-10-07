"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/SVG/Logo";
import AnimatedSection, { fadeInUp } from "@/animation/AnimatedSection";
export default function Footer() {
  const socialLinks = [
    { name: "facebook", url: "https://www.facebook.com/", icon: "/assets/icons/social/facebook.svg" },
    { name: "Instagram", url: "https://www.Instagram.com/add/", icon: "/assets/icons/social/instagram.svg" },
    { name: "Twitter", url: "https://www.Twitter.com/add/", icon: "/assets/icons/social/twitter.svg" },
    { name: "WhatsApp", url: "https://www.WhatsApp.com/company/", icon: "/assets/icons/social/whatsapp.svg" },
  ];



  return (
    <div className=" pt-6 px-0 pb-0 gap-10 bg-gradient-to-b from-[rgba(13,128,131,0)] from-[-8.76%] to-[#045D60] to-[73.05%]">
           <AnimatedSection
                variants={fadeInUp}
                transition={{ duration: 0.8 }}>
      <div className="flex flex-col items-center gap-4 mx-auto">
        <Logo className={`w-[59px] md:w-[152px] h-fit transition-all duration-300`} />
        <div className="grid grid-cols-4 gap-5 py-[8px] md:py-5 md:border-t-[0.5px] md:border-white/50">
          {socialLinks.map((link, idx) => (
            <a href={link.url} key={idx} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-1">
              <span className="font-inter not-italic font-normal text-[12px] md:text-[18px] leading-[150%] text-white">{link.name}</span>
              <Image src={link.icon} alt="" width={16} height={16} className="w-[16px] h-[16px]" />
            </a>
          ))}
        </div>
      </div>
      <div dir="ltr" className=" flex flex-col md:flex-row items-center justify-center md:px-20 py-2 md:py-4 gap-2 md:gap-5  min-h-[52px] mix-blend-normal border-t border-t-[0.5px] border-white/50 rounded-none w-full">
        <p className="font-inter not-italic font-normal text-[12px] md:text-[14px] leading-[150%] text-white">
          ©2025 Copyright Viganium. All rights reserved.
        </p>
        <div className="flex gap-2 md:gap-5 ">
          <Link href="#" className="font-inter not-italic font-normal text-[12px] md:text-[14px] leading-[150%] text-white underline ">
            Privacy Policy
          </Link>
          <Link href="#" className="font-inter not-italic font-normal text-[12px] md:text-[14px] leading-[150%] text-white underline">
            Terms of Use
          </Link>
        </div>
      </div>
      </AnimatedSection>
    </div>
  );
}
