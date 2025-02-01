"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "CEO, AgriTech",
    text: "The dashboard is intuitive and the chatbot's responses are precise.We are planning to direct our existing customers to use the chatbot on our website for any queries / issues they have. ",
  },
  {
    name: "Amit Sharma",
    role: "CEO, AgriTech",
    text: "The dashboard is intuitive and the chatbot's responses are precise.We are planning to direct our existing customers to use the chatbot on our website for any queries / issues they have. ",
  },
  {
    name: "Amit Sharma",
    role: "CEO, AgriTech",
    text: "The dashboard is intuitive and the chatbot's responses are precise.We are planning to direct our existing customers to use the chatbot on our website for any queries / issues they have. ",
  },
  {
    name: "Amit Sharma",
    role: "CEO, AgriTech",
    text: "The dashboard is intuitive and the chatbot's responses are precise.We are planning to direct our existing customers to use the chatbot on our website for any queries / issues they have. ",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full px-6 py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-green-700 mb-8">What Our Clients Say</h2>
      
      {/* Background Leaf Animation */}
      <motion.div
        className="absolute top-10 left-10 w-12 h-12 bg-green-300 rounded-full opacity-30"
        animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-14 h-14 bg-green-400 rounded-full opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className="relative w-full max-w-2xl">
        <AnimatePresence>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center bg-white p-8 shadow-lg rounded-xl text-center relative"
          >
            {/* Growing Animation */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1.1 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute w-32 h-32 bg-green-300 blur-3xl opacity-20 -z-10"
            />
            <p className="text-green-600 text-lg italic mb-4">
              "{testimonials[index].text}"
            </p>
            <h3 className="text-lg font-semibold text-green-800">
              {testimonials[index].name}
            </h3>
            <p className="text-sm text-green-500">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-green-200 hover:bg-green-300 transition"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-green-200 hover:bg-green-300 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
