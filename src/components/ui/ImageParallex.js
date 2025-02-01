import { useState, useEffect, useRef } from "react";

const ParallaxImage = ({ src, alt, className, OffsetMultipler=0.05, ScalePercent=1.21 }) => {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offset = window.scrollY - rect.top;
      setOffsetY(offset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full   ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute bottom-[2.3rem] md:bottom-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${offsetY * OffsetMultipler}px) scale(${ScalePercent})`, // Adjust multiplier for effect
        }}
      />
    </div>
  );
};

export default ParallaxImage;
