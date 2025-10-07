import PackagesClient from "./PackagesClient";
import { packagesData } from "@/data/packagesData";

export default async function PackagesServer({
  locale,
  t,
}: {
  locale: string;
  t: (key: string) => string;
}) {
  const isArabic = locale === "ar";
  const packageList = packagesData[isArabic ? "ar" : "en"];

  return (
    <section id="packages" className="bg-[#F6FBFF] pt-[32px] scroll-mt-[120px]">
      <div className={`${isArabic ? "md:px-0 md:pr-0 2xl:px-6 2xl:pr-10" : "md:px-0 md:pr-0 2xl:px-6 2xl:pl-10"}  mx-auto bg-[url('/assets/images/cover-section.png')] bg-contain bg-center pb-[32px] bg-no-repeat`}>
        <h2
          className="font-saudi font-bold text-[20px] md:text-[40px] md:leading-[60px] text-[#0D1B1E] text-center"
        >
          {t("Packages.title")}
        </h2>
        <p
          className="font-normal max-w-[343px] text-[14px] md:text-[24px] leading-[19px] md:leading-[29px]
          text-center text-[#364244] md:max-w-[681px] mx-auto mt-[8px]"
        >
          {t("Packages.subtitle")}
        </p>

        <PackagesClient packageList={packageList} isArabic={isArabic} />

      </div>
    </section>
  );
}
