"use client"
import React, {useState} from "react";
import HeroSection from "./sections/Herosection";
import InfoSection from "./sections/infosection";
import PricingSection from "./sections/PricingSection.js";
import Header from "@/components/ui/Header";
import ClientsServed from "@/pages/sections/clientsserved";
import Testimonials from "@/pages/sections/testimonials"

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <div className="sticky top-0 z-50">
      <Header Content={isLoggedIn} />
      </div>
      <HeroSection />
      <InfoSection />
      <PricingSection />
      <ClientsServed/>
      <Testimonials/>
    </div>
  );
};

export default Landing;
