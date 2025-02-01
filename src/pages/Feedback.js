"use client"
import React, { useState, useEffect } from "react";
import { db, collection, addDoc, auth } from "@/firebase"; // Import Firebase Auth
import { onAuthStateChanged } from "firebase/auth";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: "5",
  });

  const [submitted, setSubmitted] = useState(false);

  // Fetch logged-in user's email
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

  

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Feedback Form</h2>

      {submitted ? (
        <p className="text-green-600 text-center">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full border border-gray-300 p-2 rounded bg-gray-200"
              readOnly
              required
            />
          </div>

          <div>
            <label className="block font-semibold">Rating:</label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            >
              {[5, 4, 3, 2, 1].map((num) => (
                <option key={num} value={num}>
                  {num} Stars
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded font-semibold"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
