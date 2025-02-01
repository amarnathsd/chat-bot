import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const ImageAnimationFromTop = ({ src, alt, width, height}) => {
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      console.warn("IntersectionObserver is not supported in this browser.");
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`overflow-hidden transition-transform duration-1000 max-h-screen ${
        isInView ? "scale-y-100" : "scale-y-0"
      }`}
      style={{
        transformOrigin: "top", // Ensures animation starts from the top
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="responsive" // Ensures responsiveness
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageAnimationFromTop;
