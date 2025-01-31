import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";



export default function AnimatedParagraph({ content, duration }) {
  const paragraphRef = useRef(null);
  const [isInView, setIsInView] = useState(false);


  const animationDuration = duration || 1;

  const slideUp = {
    initial: { y: "100%" },
    open: (i) => ({ y: "-15%", transition: { duration: duration || 1, delay: 0.01 * i } }),
    closed: { y: "110%", transition: { duration: duration || 1 } },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  const textContent = typeof content === "string" ? content : "";

  return (
    <p ref={paragraphRef} className="flex flex-wrap ">
      {textContent.split(" ").map((word, index) => (
        <span key={index} className="relative overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            variants={slideUp}
            custom={index}
            animate={isInView ? "open" : "closed"}
            initial="initial"
          >
            {word}
          </motion.span>
          <span className="inline-block">&nbsp;</span> 
        </span>
      ))}
    </p>
  );
}
