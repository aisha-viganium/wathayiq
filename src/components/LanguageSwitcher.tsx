"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] || "en";

  const changeLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    const newPath = segments.join("/");
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-row justify-between items-center p-2 gap-1 w-[88px] h-[36px] bg-[#283F3E] rounded-[8px] text-[#F4FAFF] font-medium text-[16px] leading-[19px] cursor-pointer"
      >
        <span>{currentLocale === "ar" ? "العربية" : "English"}</span>
        <Image
          src="/assets/icons/language.svg"
          alt="i"
          width={8}
          height={6}
        />
      </div>

      {open && (
        <div className="absolute mt-2 w-[126px] bg-[#283F3E] rounded-[4px] shadow-md flex flex-col items-start p-[10px_8px] gap-4 z-10">
          <div
            onClick={() => changeLocale("en")}
            className={`flex flex-row justify-between items-center p-2 gap-[20px] w-[110px] h-[35px] rounded-[4px] cursor-pointer ${
              currentLocale === "en" ? "bg-[#F9FCFF] text-[#0D1B1E]" : "text-[#F4FAFF]"
            }`}
            style={{
              backgroundColor:
                currentLocale === "en" ? "#F9FCFF" : "transparent",
            }}
          >
            <span className=" text-[12px] leading-[14px] font-normal">
              English
            </span>
            <Image
              src="/assets/icons/us.svg"
              alt="US flag"
              width={29}
              height={19}
              className="rounded-[8px]m"
            />
          </div>

          <div
            onClick={() => changeLocale("ar")}
            className={`flex flex-row justify-between items-center p-2 gap-[20px] w-[110px] h-[35px] rounded-[4px] cursor-pointer ${
              currentLocale === "ar" ? "bg-[#F9FCFF] text-[#0D1B1E]" : "text-[#F4FAFF]"
            }`}
            style={{
              backgroundColor:
                currentLocale === "ar" ? "#F9FCFF" : "transparent",
            }}
          >
            <span className=" text-[12px] leading-[14px] font-normal">
              العربية
            </span>
            <Image
              src="/assets/icons/saudi.svg"
              alt="SA flag"
              width={29}
              height={19}
              className="rounded-[8px]m"
            />
          </div>
        </div>
      )}
    </div>
  );
}
