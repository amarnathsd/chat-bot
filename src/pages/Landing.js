import React from 'react';
import HeroSection from './sections/Herosection';
import InfoSection from './sections/infosection';
import PricingSection from './sections/PricingSection.js';

const Landing = () => {
  return (
    <div>
      <HeroSection/>
      <InfoSection/>
      <PricingSection/>
    </div>
  )
}

export default Landing