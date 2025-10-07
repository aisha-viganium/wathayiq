'use client';
import React from "react";
import Button from "@/components/Button";
import { useContactForm } from "@/hooks/useContactForm";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const { formData, handleChange, handleSubmit, status } = useContactForm();
    return (
        <>
            <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <input name="name" value={formData.name} onChange={handleChange}
                    type="text" placeholder={t("ContactUs.name")}
                    className="outline-none p-3 h-[36px] md:h-[85px] border-b-2 border-[#D2D2D2] font-medium text-[16px] md:text-[20px] text-[#4A4E4E]" />

                <input name="phone" value={formData.phone} onChange={handleChange}
                    type="tel" placeholder={t("ContactUs.phone")}
                    className={`outline-none p-3 h-[36px] md:h-[85px] border-b-2 border-[#D2D2D2] font-medium text-[16px] md:text-[20px] text-[#4A4E4E] ${isArabic ? "text-right" : "text-left"}`} />

                <input name="company" value={formData.company} onChange={handleChange}
                    type="text" placeholder={t("ContactUs.company")}
                    className="outline-none p-3 h-[36px] md:h-[85px] border-b-2 border-[#D2D2D2] font-medium text-[16px] md:text-[20px] text-[#4A4E4E]" />

                <input name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder={t("ContactUs.emailField")}
                    className="outline-none p-3 h-[36px] md:h-[85px] border-b-2 border-[#D2D2D2] font-medium text-[16px] md:text-[20px] text-[#4A4E4E]" />

                <textarea name="message" value={formData.message} onChange={handleChange}
                    placeholder={t("ContactUs.message")}
                    className="outline-none p-3 h-32 border-b-2 border-[#D2D2D2] font-medium text-[16px] md:text-[20px] text-[#4A4E4E] md:col-span-2 resize-none" />

                <div className="md:col-span-2 flex justify-start">
                    <Button title={status.isSubmitting ? t("ContactUs.sending") : t("ContactUs.submit")} className="w-full md:w-[181px] !h-[40px]" />
                </div>
            </form>

            {status.message && (
                <p className={`text-center mt-4 ${status.isError ? "text-red-500" : "text-green-600"}`} >
                    {status.message}
                </p>
            )}
        </>
    )
}