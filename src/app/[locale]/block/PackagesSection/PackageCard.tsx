
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideFromTopBounce } from "@/animation/AnimatedSection";
import Button from "@/components/Button";
import Link from "next/link";

interface Package {
  id: string | number;
  title: string;
  description: string;
  price: number | string;
  yearlyPrice: number | string;
  features: string[];
  buttonText: string;
}

interface Props {
  pkg: Package;
  isArabic: boolean;
  planType?: "monthly" | "yearly";
  index?: number;
}

export default function PackageCard({
  pkg,
  isArabic,
  planType = "monthly",
  index = 0,
}: Props) {
  return (
    <motion.div
      variants={slideFromTopBounce}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mx-auto flex flex-col items-center p-2 md:p-4 gap-[8px] h-[241px] md:h-[596px] bg-white border border-[#364244] rounded-[8px] md:rounded-[16px] max-w-[318px] md:max-w-[273px]"
    >
      <h3 className={`font-saudi text-[16px] font-bold text-center  text-[#0D1B1E] ${isArabic ? "md:text-[28px]" : "md:text-[22px]"}`}>
        {pkg.title}
      </h3>
      <p className={`text-[#364244] text-center ${isArabic ? "text-[14px]" : "text-[12px]"}  md:w-[241px]`}>{pkg.description}</p>

      <div className="hidden md:flex flex-row justify-end items-center gap-2">
        <h5 className="font-saudi font-extrabold text-[48px] text-[#0D1B1E]">
          {planType === "monthly" ? pkg.price : pkg.yearlyPrice}/
        </h5>
        <div>
          <Image
            src="/assets/icons/Saudi_Riyal_Symbol.svg"
            width={24}
            height={24}
            alt="SAR"
          />
          <p className="text-[14px] text-[#364244]">
            {isArabic
              ? planType === "monthly"
                ? "شهرياً / لكل مستخدم"
                : "سنوياً / لكل مستخدم"
              : planType === "monthly"
                ? "Monthly / Per user"
                : "Yearly / Per user"}

          </p>
        </div>
      </div>
      <Link href="#contact">
        <Button
          title={pkg.buttonText}
          className="hidden md:block !min-w-[241px] !w-[241px] md:my-[24px]  !p-[8px]"
        />
      </Link>
      <div className={`grid grid-cols-2 md:grid-cols-1 gap-[8px] md:gap-[16px] ${isArabic ? "ml-auto" : "mr-auto"}`}>
        {pkg.features.map((item, i) => (
          <div key={i} className="flex flex-row items-center gap-2">
            <Image
              src="/assets/icons/check.svg"
              width={20}
              height={20}
              alt="check"
              className="w-[20px]"
            />
            <p className={`text-[#364244] text-[10px] md:text-[12px] leading-[14px] max-w-[115px] md:max-w-none  ${isArabic ? "text-right" : "text-left"}`}>
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="flex md:hidden items-center gap-[8px] w-full mt-2">
        <Button
          title={isArabic ? "إشتراك الباقة" : "Subscribe"}
          className="!min-w-[144px] !w-[144px] text-[16px] !h-[35px] !p-[8px]"
        />
        <div className="flex flex-row justify-end items-center gap-2">
          <h5 className="font-saudi font-extrabold text-[32px] md:text-[48px] text-[#0D1B1E]">
            {planType === "monthly" ? pkg.price : pkg.yearlyPrice}/
          </h5>
          <div>
            <Image
              src="/assets/icons/Saudi_Riyal_Symbol.svg"
              width={16}
              height={16}
              alt="SAR"

            />
            <p className="text-[10px] md:text-[14px] text-[#364244]">
              {isArabic
                ? planType === "monthly"
                  ? "شهرياً / لكل مستخدم"
                  : "سنوياً / لكل مستخدم"
                : planType === "monthly"
                  ? "Monthly / Per user"
                  : "Yearly / Per user"}            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
