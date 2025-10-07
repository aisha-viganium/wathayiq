'use client';
import { useState } from "react";
import axios from "axios";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "من فضلك املأ الحقول المطلوبة",
      });
      return;
    }

    setStatus({ isSubmitting: true, isSuccess: false, isError: false, message: "" });

    try {
      const htmlbody = `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>رسالة جديدة من نموذج التواصل بوثائق</h2>
          <p><strong>الاسم:</strong> ${formData.name}</p>
          <p><strong>رقم الهاتف:</strong> ${formData.phone}</p>
          <p><strong>الشركة:</strong> ${formData.company}</p>
          <p><strong>البريد الإلكتروني:</strong> ${formData.email}</p>
          <p><strong>الرسالة:</strong></p>
          <p style="background:#f9f9f9; padding:10px; border-radius:6px; border:1px solid #ddd;">
            ${formData.message}
          </p>
        </div>
      `;

      const encodedHtmlBody = encodeURIComponent(htmlbody);

      const res = await axios.post(
        `https://viganium.com/mail_sender_v2.php?data=${encodedHtmlBody}`,
        {},
        { headers: { Accept: "application/json" } }
      );

      if (res.status === 200) {
        setStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "تم إرسال رسالتك بنجاح ✅",
        });
        setFormData({ name: "", phone: "", company: "", email: "", message: "" });
      } else {
        throw new Error("failed");
      }
    } catch (error) {
      console.error(error);
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "حدث خطأ أثناء الإرسال، حاول مرة أخرى.",
      });
    }
  };

  return { formData, handleChange, handleSubmit, status };
};
