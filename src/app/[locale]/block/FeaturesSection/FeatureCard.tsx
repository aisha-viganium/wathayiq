import React from "react";
import EditIcon from "@/assets/SVG/EditIcon";

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Props {
  feature: Feature;
}

export default function FeatureCard({ feature, }: Props) {
  return (
    <div className="flex flex-row justify-start items-start p-4 gap-[10px] min-h-[90px] md:min-h-[165px] bg-[#283F3E]  rounded-[8px] md:rounded-[8px] group hover:bg-[#F9FCFF] hover:border-1 hover:border-[#283F3E] duration-300">
      <div className="flex flex-col justify-center items-center p-[7px] md:p-2.5 gap-2 w-[28px] h-[28px] md:w-[40px] md:h-[40px] bg-[#FFFFFF] rounded-[8px] md:rounded-[12px] group-hover:bg-[#283F3E]">
        <EditIcon color="#0D1B1E" className="block group-hover:hidden w-[17px] h-[17px] md:w-[24px] md:h-[24px]" />
        <EditIcon className="hidden group-hover:block w-[17px] h-[17px] md:w-[24px] md:h-[24px] text-[#0D1B1E] group-hover:text-[#FFC681] fill-current" />
      </div>
      <div>
        <h5 className="font-saudi not-italic font-semibold text-[16px] md:text-[24px] md:leading-[36px] text-[#F4FAFF] group-hover:text-[#0D1B1E] mb-[8px] md:mb-[16px]">
          {feature.title}
        </h5>
        <p className="not-italic font-normal text-[12px] md:text-[16px] leading-[19px] text-[#F4FAFF] group-hover:text-[#4A4E4E] md:mb-[32px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
