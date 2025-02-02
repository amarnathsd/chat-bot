"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedParagraph from "@/components/ui/AnimatePara";

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const items = [
    {
      id: 1,
      name: "Intelligent Analytics",
      description:
        "Utilize intelligent analytics to evaluate user engagement levels, identifying warmth and potential conversion opportunities through chat interactions",
      icon: "/images/Banner2.jpg",
    },
    {
      id: 2,
      name: "Team collaboration",
      description:
        "Enable team collaboration with customizable dashboard access levels, allowing individuals to engage as admin, editor, or viewer.",
      icon: "/images/Banner2.jpg",
    },
    {
      id: 3,
      name: "Explainable AI modelling",
      description:
        "Customize your chatbot's tone with Explainable AI, adjusting how it engages with users to match your desired tone.",
      icon: "/images/Banner2.jpg",
    },
    {
      id: 4,
      name: "Prioritized engineering support",
      description:
        "Receive prioritized engineering support, ensuring timely assistance and resolution of technical issues to keep your operations running smoothly.",
      icon: "/images/Banner2.jpg",
    },
    {
      id: 5,
      name: "Personalized onboarding experience",
      description:
        "Experience onboarding made just for you, tailored to your needs and preferences for a personalized journey.",
      icon: "/images/Banner2.jpg",
    },
  ];

  const totalSlides = items.slice(1, 4).length;

  const handleTouchStart = (e) => {
    if (window.innerWidth < 768) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (window.innerWidth < 768) {
      setTouchEndX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (window.innerWidth < 768) {
      const delta = touchStartX - touchEndX;
      if (delta > 50) {
        handleNext();
      } else if (delta < -50) {
        handlePrev();
      }
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const slideIndex = Math.floor(percentage * totalSlides);
    setCurrentSlide(slideIndex);
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="relative flex flex-col md:flex-row justify-between items-center px-5 md:px-16 pt-8 md:h-screen">
        {/* Left Section */}
        <div className="flex flex-col md:justify-between md:w-6/12 w-full h-[75vh] xl:h-[65vh] text-left">
          <h1 className="Heading-style mb-6">
            <AnimatedParagraph content={items[0].name} />
          </h1>
          <p className="description-style w-full md:w-6/12 ">
            <AnimatedParagraph content={items[0].description} />
          </p>
        </div>

        {/* Center Images */}
        <div className="flex-1 flex justify-center items-center">
          {/* Background Dots */}
          {/* <div className="absolute top-[40vh] right-[23vw] md:right-[38vw] md:top-[30vh] z-30 w-[9rem] md:w-[15rem] xl:w-[25rem]">
            <CulinarySVG />
          </div> */}

          {/* Main Image */}
          <div className="absolute z-10 top-[55vh] right-[25vw] md:top-[45vh] md:right-[40vw] lg:top-[55vh] lg:right-[39vw] overflow-hidden rounded-full">
            <Image
              src="/images/round2.webp"
              alt="Culinary Dish"
              className="object-cover w-[9rem] md:w-[15rem] xl:w-[16em]"
              width={270}
              height={270}
            />
          </div>

          {/* Overlay Image */}
          <div className="absolute top-[42vh] right-[40vw] md:right-[42vw] md:top-[32vh] overflow-hidden rounded-full">
            <Image
              src="/images/round.png"
              alt="Culinary Innovation"
              className="object-cover w-[12rem] md:w-[23rem] xl:w-[21rem] rounded-full"
              width={270}
              height={270}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:h-[50vh] w-full md:w-4/12 md:justify-between md:items-center text-left">
          <h2 className="text-4xl text-[#CC9F53] leading-relaxed font-bold mb-6">
            <AnimatedParagraph content={items[4].name} />
          </h2>
          <div className="flex">
            {/* <div className="px-6 md:px-0 md:ps-10 md:pe-4">
              <YellowForkIcon />
            </div> */}
            <div className="flex items-start justify-start md:justify-end">
              <p className="description-style md:pt-6 md:pt-20 pe-6">
                <AnimatedParagraph content={items[4].description} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Cards Section */}
      <div className="hidden md:block px-16 bg-white h-screen flex flex-col justify-between">
        <div className="flex items-end">
          <h2 className="Heading-style w-7/12">
            <AnimatedParagraph content="A truly customizable Chatbot" />
          </h2>
          <div className="w-3/12 description-style md:pb-10 flex items-center">
            <AnimatedParagraph content="Utilize Our Live Chat Feature for Instant, Real-Time Communication with Customers" />
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-row justify-center gap-4 h-2/3">
          {items.slice(1, 4).map((item, index) => (
            <motion.div
              key={item.id}
              className={`${
                hoveredIndex === index
                  ? "lg:w-[50rem] xl:w-[70rem]"
                  : "w-2/12 xl:w-2/12"
              } relative flex rounded-3xl overflow-hidden bg-secondary transition-all duration-1000`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(index)}
            >
              {/* Text Content */}
              <div className="flex flex-col items-start justify-start p-4 z-10 w-full ps-7">
                <h3 className="text-[2.5rem] xl:w-[370px] lg:w-[340px] md:w-[350px] leading-relaxed font-extrabold font-[frutigerArabicRoman] text-primary">
                  <AnimatedParagraph content={item.name} />
                </h3>
                <p className="text-base w-[350px] leading-relaxed text-primary mt-4">
                  <AnimatedParagraph content={item.description} />
                </p>
              </div>

              {/* Image Container */}
              <div
                className={`absolute top-0 right-0 min-w-[250px] lg:min-w-[350px] xl:min-w-[480px] z-20 h-full transition-all duration-500 ${
                  hoveredIndex === index ? "w-5/12" : "w-full"
                } overflow-hidden`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  className="h-full w-[250px] lg:w-[350px] xl:w-[480px] object-cover absolute top-0 right-0"
                  width={500}
                  height={300}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden block h-[37rem] md:h-screen relative mb-16">
        <div className="relative w-full h-full mt-20 z-20 pb-12">
          <div
            ref={carouselRef}
            className="relative w-full h-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute flex transition-transform duration-1000 ease-out w-full h-full"
              style={{
                transform: `translateX(calc(-${currentSlide * 92}% + 4%))`,
              }}
            >
              {items.slice(1, 4).map((slide) => (
                <div
                  key={slide.id}
                  className="min-w-[92%] h-full flex flex-col items-center justify-center p-4"
                >
                  <div className="bg-secondary rounded-3xl overflow-hidden flex flex-col justify-between items-start w-full h-[34rem]">
                    <div className="w-full p-4 flex flex-col justify-center">
                      <h2 className="text-[24px] font-[frutigerArabicRoman] font-bold text-primary mb-4">
                        <AnimatedParagraph content={slide.name} />
                      </h2>
                      <p className="description-style text-left text-sm w-full">
                        <AnimatedParagraph content={slide.description} />
                      </p>
                    </div>
                    <div className="w-full h-7/12 relative p-1">
                      <Image
                        src={slide.icon}
                        alt={slide.name}
                        className="w-full h-full max-h-[15rem] rounded-3xl object-cover"
                        width={700}
                        height={530}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar and Navigation Buttons */}
          <div className="flex items-center justify-between px-10">
            <div
              className="w-[17vw] h-1 bg-white/20 rounded-full relative"
              onClick={handleProgressClick}
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-linear ${
                    index === currentSlide
                      ? "bg-white scale-x-100 opacity-100"
                      : "bg-white/20 scale-x-0 opacity-0"
                  }`}
                  style={{
                    width: `${100 / totalSlides}%`,
                    left: `${(100 / totalSlides) * index}%`,
                    transformOrigin: index > currentSlide ? "left" : "right",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                aria-label="Prev Slide"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14 7L9 12L14 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M10 17L15 12L10 7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-[13rem] bg-primary h-4/6 w-full"></div>
      </div>
    </div>
  );
};

export default PortfolioSection;
