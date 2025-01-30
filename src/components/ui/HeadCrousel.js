"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeadCrousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    "Flat 10% off for 1st Appointment Booking! Code: FLYPANDA",
    "Special Discount for New Users. Code: NEWFLY",
    "Refer a Friend and Earn Rewards!",
    "Book Now and Get Free Consultation!",
    "Flat ₹500 Off on Family Packages!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative md:w-1/2 max-w-full flex flex-col items-center overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {slides.map((text, index) => (
          <div key={index} className="flex flex-col items-center min-w-full">
            <Image
              src="/images/Google-logo.webp"
              alt="Illustration"
              width={300}
              height={300}
            />
            <p className="text-lg font-bold text-center text-primary mt-3 w-[70%]">
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-5 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-4 h-4 rounded-full ${
              activeSlide === index ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadCrousel;
