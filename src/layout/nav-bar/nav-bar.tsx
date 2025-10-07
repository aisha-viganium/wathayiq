'use client';
import Button from "@/components/Button";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Logo from "@/assets/SVG/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();
  const locale = (["ar", "en"].includes(i18n.language) ? i18n.language : "en") as "ar" | "en";

  const links = useMemo(
    () => [
      { href: "#home", label: { ar: "الرئيسية", en: "Home" } },
      { href: "#about", label: { ar: "عن التطبيق", en: "About" } },
      { href: "#features", label: { ar: "المميزات", en: "Features" } },
      { href: "#packages", label: { ar: "الباقات", en: "Packages" } },
      { href: "#trial-version", label: { ar: "النسخة التجريبية", en: "Trial Version" } },
      { href: "#faq", label: { ar: "الأسئلة الشائعة", en: "FAQ" } },
      { href: "#contact", label: { ar: "تواصل معنا", en: "Contact Us" } },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const scrollPos = window.scrollY + 150;
      links.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.clientHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
      setActiveSection(href);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`
        flex flex-row justify-end items-center px-4 py-[10px] gap-2
        lg:absolute lg:left-1/2 lg:-translate-x-1/2
        w-full lg:container min-h-[48px] lg:h-[90px]
        bg-[#FEFFFF] lg:rounded-[16px] 
        z-50 transition-all duration-300 shadow-md
        ${scrolled ? "fixed top-0 lg:top-[2px]" : "lg:top-[64px]"}
      `}
    >
      <div className="container mx-auto px-[16px] lg:px-[24px]">
        <div className="flex justify-between lg:h-16 items-center">

          <div className="flex-shrink-0 transition-all duration-300 cursor-pointer" onClick={() => handleNavClick("#home")}>
            <Logo
              className={`${scrolled
                  ? "w-[57px] h-fit lg:w-[100px] lg:h-[40px]"
                  : "w-[57px] h-fit lg:w-[112px] lg:h-[57px]"
                } transition-all duration-300`}
            />
          </div>

          <div className="hidden lg:flex space-x-8 items-center mx-auto">
            {links.map(link => (
              <motion.a
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`cursor-pointer text-[16px] leading-[19px] ${activeSection === link.href
                    ? "text-[#283F3E] font-bold"
                    : "text-[#4A4E4E] font-medium"
                  }`}
                whileHover={{
                  color: "#0D1B1E",
                  x: [0, -3, 3, -3, 3, 0],
                }}
                transition={{ duration: 0.4 }}
              >
                {link.label[locale]}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-[10px]">
            <LanguageSwitcher />
            <Button
              title={locale === "ar" ? "إشتراك الباقة" : "Subscribe"}
              className=""
            />
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#21409A] focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl font-bold">✕</span>
              ) : (
                <Image height={24} width={24} className="h-6 w-6" src="/assets/icons/burger-menu.svg" alt="menu" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div onClick={() => handleNavClick("#home")} className="cursor-pointer">
            <Logo className="w-[59px] h-fit transition-all duration-300" />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-primary">✕</button>
        </div>

        <div className="flex flex-col p-4 space-y-4 gap-5">
          {links.map(link => (
            <motion.a
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`cursor-pointer text-[16px] leading-[19px] ${activeSection === link.href
                  ? "text-[#283F3E] font-bold"
                  : "text-[#4A4E4E] font-medium"
                }`}
              whileHover={{
                color: "#0D1B1E",
                x: [0, -3, 3, -3, 3, 0],
              }}
              transition={{ duration: 0.4 }}
            >
              {link.label[locale]}
            </motion.a>
          ))}
          <Button title={locale === "ar" ? "إشتراك الباقة" : "Subscribe"} className="" />
          <LanguageSwitcher />
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
