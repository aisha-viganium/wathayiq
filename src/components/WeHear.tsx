import React from "react";
import AnimatedSection, { slideFromRightBounce, slideFromLeftBounce } from "@/animation/AnimatedSection";
import PoPUpChat from "@/components/PoPUpChat"
export default function WeHear() {
    return (
        <section className="py-16 container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 w-full">
                <AnimatedSection
                    variants={slideFromRightBounce}
                    className="flex flex-col text-center md:text-right md:items-start"
                >
                    <p className="font-bold text-[20px] md:text-[24px] leading-[30px] md:leading-[34px] text-[#1A1A1A]">
                        إحنا بنحب نسمع, خلينا نشوف فكرتك
                    </p>
                    <h2 className="font-bold text-[22px] md:text-[32px] leading-[32px] md:leading-[46px] text-[#987931] max-w-[783px] mt-4">
                        بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في  هو ببساطة نص شكلي (بمعنى أن الغاية
                    </h2>
                </AnimatedSection>
                <AnimatedSection
                    variants={slideFromLeftBounce}
                >
                <PoPUpChat bg="#1A1A1A" color="#FDFFFC" />
               
                </AnimatedSection>
            </div>
        </section>
    );
}
