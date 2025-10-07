import React from "react";
import Services from "./block/ServicesSection/Services";
import HeroSection from "./block/HeroSection";
import { getTranslation } from "@/i18n/server";
import AboutUS from "./block/AboutUS";
import Features from "./block/FeaturesSection/Features";
import Packages from "./block/PackagesSection/Packages";
import TrialVersion from "./block/TrialVersion";
import FAQ from "./block/FAQ";
import ContactUs from "./block/ContactSection/ContactUs";

export default async function Page({ params }: { params: { locale: string } }) {
  const locale = params?.locale || "ar";
  const t = getTranslation(locale);
  return (
    <>
      <HeroSection locale={locale} t={t} />
      <AboutUS locale={locale} t={t}/>
      <Services locale={locale} t={t}/>
      <Features locale={locale} t={t} />
      <Packages locale={locale} t={t} />
      <TrialVersion locale={locale} t={t} />
      <FAQ  t={t}/>
      <ContactUs locale={locale} t={t} />

    </>
  );
}
