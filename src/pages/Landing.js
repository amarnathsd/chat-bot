import React from "react";
import HeroSection from "./sections/Herosection";
import InfoSection from "./sections/infosection";
import PricingSection from "./sections/PricingSection.js";
import Header from "@/components/ui/Header";

const Landing = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <HeroSection />
      <InfoSection />
      <PricingSection />
    </div>
  );
};

export default Landing;
