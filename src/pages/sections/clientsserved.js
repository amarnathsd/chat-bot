"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/partner5.png",
  "/images/partner6.png",
  "/images/partner7.png",
  "/images/partner1.png",
  "/images/partner2.png",
  "/images/partner3.png",
  "/images/partner4.png",
];

const RotatingImages = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 45);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col  items-center justify-center h-[80vh]">
    <h2 className="Heading-style py-24">Trusted by these leading businesses</h2>
      <div className="relative w-full h-[300px] flex items-center justify-center overflow-hidden perspective-[1900px]">
        {/* <h2 className='Heading-style'>Trusted by these leading businesses</h2> */}
        <motion.div
          className="relative w-full h-[800px] flex items-center justify-center"
          animate={{ rotateY: angle }}
          transition={{ duration: 2, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {images.map((src, index) => {
            const imgAngle = (360 / images.length) * index * 2;
            return (
              <motion.div
                key={src}
                className="absolute w-96 h-96 "
                style={{
                  transform: `rotateY(${imgAngle}deg) translateZ(400px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src={src}
                  alt="Rotating Image"
                  width={240}
                  height={240}
                  className="rounded-xl"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default RotatingImages;
