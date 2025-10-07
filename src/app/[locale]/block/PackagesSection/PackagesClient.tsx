"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import PackagesMob from "./PackagesMob";

interface Package {
  id: string | number;
  title: string;
  description: string;
  price: number | string;
  yearlyPrice: number | string;
  features: string[];
}

export default function PackagesClient({
  packageList,
  isArabic,
}: {
  packageList: Package[];
  isArabic: boolean;
}) {
  const [planType, setPlanType] = useState<"monthly" | "yearly">("monthly");

  const handleToggle = () => {
    setPlanType((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <div>
      <div className="flex justify-center mt-6">
        <div
          className="relative w-[145px] md:w-[172px] h-[39px] bg-[#283F3E] rounded-[4px] p-[2px] cursor-pointer flex items-center justify-between"
          onClick={handleToggle}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute top-[4px] w-[64px] md:w-[77px] h-[31px] rounded-[4px] bg-white z-10"
            style={{
              left: planType === "monthly"
                ? 4
                : typeof window !== "undefined" && window.innerWidth < 768
                  ? 76
                  : 91,
            }}
          ></motion.div>

          <div className={`flex justify-center ${isArabic?"gap-[34px] md:gap-[54px]":"gap-[35px] md:gap-[38px]"}  w-full z-20 relative`}>
            <span
              className={` ${isArabic ?"text-[14px] md:text-[16px]":"text-[10px] md:text-[12px] pr-[8px]"}  font-normal  ${isArabic ? planType === "monthly" ? "text-white" : "text-[#283F3E]" : planType === "monthly" ? "text-[#283F3E]" : "text-white"
                }`}
            >
              {isArabic ? "شهري" : "Monthly"}
            </span>
            <span
              className={` ${isArabic ?"text-[14px] md:text-[16px]":"text-[10px] md:text-[12px] pr-[8px] md:pr-[8px]"} font-normal  ${isArabic ? planType === "yearly" ? "text-white" : "text-[#283F3E]" : planType === "yearly" ? "text-[#283F3E]" : "text-white"
                }`}
            >
              {isArabic ? "سنوي" : "Yearly"}
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-0 mt-[64px]">
        {packageList.map((pkg, index) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            isArabic={isArabic}
            planType={planType}
            index={index}
          />
        ))}
      </div>

      <div className={`md:hidden mt-8 ${isArabic ? "pr-4" : "pl-4"}`}>
        <PackagesMob   planType={planType}/>
      </div>
    </div>
  );
}
