"use client";
import React, { useState, useEffect } from "react";
import { db, collection, addDoc, auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import LabelInput from "@/components/ui/Lableinput";
import { useRouter } from "next/navigation";

const FeedbackForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "5",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData((prev) => ({ ...prev, email: user.email }));
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "feedbacks"), formData);
      setSubmitted(true);
    } catch (error) {
      alert("Error submitting feedback. Please try again.");
    }
  };

  const NavigateTo = () => {
    router.push("/landing");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center mx-auto bg-white p-6 rounded-lg bg-gradient-to-b from-white to-primary/35">
      {submitted ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-4 text-primary">
            Successfully Submitted Feedback Form
          </h2>
          <p className="text-primary text-center">
            Thank you for your feedback!
          </p>
          <button
            onClick={NavigateTo}
            className="mt-3 px-2 md:px-4 py-2 rounded-lg text-extrabold text-white bg-primary"
          >
            Landing Page
          </button>
        </div>
      ) : (
        <div className="w-11/12 md:w-2/3">
          <h2 className="text-2xl font-bold text-center mb-4 text-primary">
            Feedback Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <LabelInput
              label="Name:"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <LabelInput
              label="Email:"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              readOnly
              className="bg-secondary"
              required
            />

            <div>
              <label className="block text-primary font-semibold">
                Rating:
              </label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-xl"
              >
                {[5, 4, 3, 2, 1].map((num) => (
                  <option key={num} value={num}>
                    {num} Stars
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-primary font-semibold">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-xl"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-xl font-semibold"
            >
              Submit
            </button>
          </form>
          <button
            onClick={NavigateTo}
            className="flex mt-3 px-2 md:px-4 py-2 rounded-lg text-extrabold text-white bg-primary"
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
            Landing Page
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
