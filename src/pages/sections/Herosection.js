"use client";
import React from "react";
import AnimatedParagraph from "@/components/ui/AnimatePara";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-primary md:flex justify-center">
      <div className="h-screen  md:flex justify-between w-9/12 items-center">
        <div className="md:flex justify-center items-center z-20 top-1/2 md:top-[30%] left-1/3 md:left-[5%] text-center  md:w-6/12 text-3xl md:text-7xl/[1.5] font-extrabold  text-secondary">
          <AnimatedParagraph content={"Make AI your brand manager"} />
        </div>
        <div>
          <Image
            src="/images/bannerimg.png"
            alt="Illustration"
            width={300}
            height={300}
            className="h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
