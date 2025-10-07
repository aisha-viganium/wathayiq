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
      <div className="container mx-auto bg-[url('/assets/images/cover-section.png')] bg-contain bg-center pb-[32px] bg-no-repeat">
        <h2
          className="font-saudi font-bold text-[20px] md:text-[40px] md:leading-[60px] text-[#0D1B1E] text-center"
        >
          {t("Packages.title")}
        </h2>
        <p
          className="font-normal text-[12px] md:text-[24px] leading-[19px] md:leading-[29px]
          text-center text-[#364244] max-w-[681px] mx-auto mt-[8px]"
        >
          {t("Packages.subtitle")}
        </p>

        <PackagesClient packageList={packageList} isArabic={isArabic} />
        
      </div>
    </section>
  );
}
