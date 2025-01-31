"use client";

import React from "react";
import AnimatedParagraph from "@/components/ui/AnimatePara";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
      <div >
        <Image
          src="/images/Banner1.jpg"
          alt="Illustration"
          width={900}
          height={300}
          className="w-full h-screen"
        />
      </div>
      <div className="md:flex justify-center absolute z-20 top-1/2 md:top-[30%] left-1/3 md:left-[5%] text-center  md:w-3/12 leading-none text-3xl md:text-7xl font-extrabold  text-secondary">
        <AnimatedParagraph content={"Make AI your brand manager"} />
      </div>
    </div>
  );
};

export default HeroSection;
