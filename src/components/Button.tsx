import React from "react";

interface PopupProps {
    title: string;
    className: string;

}

export default function Button({ title,className="" }: PopupProps) {
    return (
        <button
            className={`cursor-pointer flex justify-center items-center px-4 py-[8px] gap-2 min-w-[124px] min-h-[36px] 
              bg-[#283F3E] border border-[#F9FCFF] rounded-[8px] 
              font-typo font-medium text-[16px] leading-[19px] text-[#FFC681] ${className} hover:bg-[#095455] hover:scale-y-110 duration-300`}
        >
            <span> {title} </span>
        </button>
    );
}
