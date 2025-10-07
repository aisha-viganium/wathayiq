import React from "react";
import EditIcon from "@/assets/SVG/EditIcon";

interface Service {
  id: number;
  title: string;
  description: string;
}

interface Props {
  service: Service;
  isArabic: boolean;
}

export default function ServiceCard({ service, isArabic }: Props) {
  return (
    <div
      className={`flex flex-row justify-start items-start p-[8px] md:p-4 gap-[16px] min-h-[88px]   bg-[#F9FCFF] border border-[#0D8083] rounded-[8px] md:rounded-[8px] group duration-300 hover:bg-[#283F3E] ${isArabic ? "2xl:min-h-[135px] md:min-h-[175px]" : "2xl:min-h-[200px] md:min-h-[255px]"}`}
    >
      <div className="flex flex-col justify-center items-center p-[7px] md:p-2.5 gap-2 w-[28px] h-[28px] md:w-[40px] md:h-[40px] bg-[#283F3E] rounded-[8px] md:rounded-[12px] group-hover:bg-[#14C4C7]">
        <EditIcon color="#FFC681" className="block group-hover:hidden w-[17px] h-[17px] md:w-[24px] md:h-[24px]" />
        <EditIcon color="#F4FAFF" className="hidden group-hover:block w-[17px] h-[17px] md:w-[24px] md:h-[24px]" />
      </div>
      <div>
        <h5 className="font-saudi not-italic font-semibold text-[16px] md:text-[24px] md:leading-[36px] text-[#0D1B1E] mb-[10px] group-hover:text-[#14C4C7]">
          {service.title}
        </h5>
        <p className="not-italic font-normal text-[12px] md:text-[16px] leading-[19px] text-[#364244] group-hover:text-[#F4FAFF]">
          {service.description}
        </p>
      </div>
    </div>
  );
}
