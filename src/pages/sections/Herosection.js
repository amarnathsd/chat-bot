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
          className="w-full md:h-screen"
        />
      </div>
      <div className="absolute z-20 top-[30%] left-[5%]  w-3/12 leading-none text-7xl font-extrabold  text-secondary">
        <AnimatedParagraph content={"Welcome Abrod"} />
      </div>
    </div>
  );
};

export default HeroSection;
