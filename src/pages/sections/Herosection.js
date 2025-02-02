"use client";
import React from "react";
import AnimatedParagraph from "@/components/ui/AnimatePara";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-primary md:flex justify-center">
      <div className="h-screen  md:flex justify-between w-full md:w-10/12 items-center">
        <div className="hidden md:!block md:flex justify-center items-center z-20 top-1/2 md:top-[30%] left-1/3 md:left-[5%] text-center  md:w-6/12 text-3xl md:text-7xl/[1.5] font-extrabold  text-secondary">
          <AnimatedParagraph content={"Make AI your brand manager"} />
        </div>
        <div className="flex justify-center md:justify-end items-end pt-24 md:pt-0">
          <Image
            src="/images/mainBanner.png"
            alt="Illustration"
            width={300}
            height={300}
            className="h-[80vh] md:w-[50vw] w-[90vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
