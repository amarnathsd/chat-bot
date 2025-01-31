"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "@/firebase";
// import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import HeadCrousel from "@/components/ui/HeadCrousel";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
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

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      router.push("/organisationsetup");
    } catch (error) {
      alert(error.message || "Login failed. Please try again.");
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/organisationsetup");
    } catch (error) {
      alert(error.message || "Login failed. Please try again.");
    }
  };

  const NavigateTo = () => {
    router.push("/signin");
  };

  // const checkPaidUser = async (userEmail) => {
  //   const paidUserCollection = collection(db, "paidUser");
  //   const q = query(paidUserCollection, where("email", "==", userEmail));
  //   const querySnapshot = await getDocs(q);

  //   if (!querySnapshot.empty) {
  //     router.push("/landing");
  //   } else {
  //     alert(
  //       "You have successfully logged in."
  //     );
  //     router.push("/landing");
  //   }
  // };

  return (
    <div className="md:h-screen flex flex-col justify-between bg-gradient-to-b from-white to-primary/35">
      <div className=" md:ps-8">
        <Image
          src="/images/logo.png"
          alt="Flying Panda Logo"
          width={144}
          height={50}
          className="h-[110px] w-auto md:mt-10"
        />
      </div>
      <div className="flex flex-col md:flex-row items-end justify-center pb-16">
        <div className="flex flex-col md:flex-row  w-full max-w-[85%] mx-auto items-center">
          {/* Left Section */}
          <div className="md:w-1/2 md:px-8">
            <h1 className="text-3xl text-center md:pe-32 text-primary font-extrabold mb-1">
              Welcome Back!
            </h1>
            <p className="text-base text-center md:pe-32 font-medium text-primary mb-6">
              The faster you fill up, the faster you get a slot
            </p>

            {/* Form */}
            <form onSubmit={handleEmailSignIn}>
              <div className="flex flex-col">
                <label className="text-primary font-bold pb-3">Email*</label>
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full  md:w-10/12 p-2 border-2 border-primary rounded px-3 text-sm font-semibold mb-4"
                />
              </div>
              <div className="relative flex flex-col mb-4">
                <label className="text-primary font-bold pb-3">Password*</label>
                <input
                  type="password"
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full  md:w-10/12 p-2 border-2 border-primary rounded px-3 text-sm font-semibold"
                />
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 p-2 border-gray-300/65 rounded mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label className="text-sm font-medium text-gray-600">
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="w-full  md:w-10/12 p-2 bg-primary text-white text-lg font-semibold rounded mb-6"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full  md:w-10/12 p-2 border-2 border-primary flex items-center justify-center gap-2 rounded text-lg font-semibold"
              >
                <Image
                  src="/images/Google-logo.webp"
                  alt="Google Logo"
                  width={36}
                  height={36}
                  className="object-cover"
                />{" "}
                Sign in with Google
              </button>
              <div className="w-full md:w-10/12 ">
                <div
                  onClick={NavigateTo}
                  className="flex justify-center pt-3 pb-1 text-sm underline text-blue-700 cursor-pointer"
                >
                  Don't have account Please Sign up
                </div>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <HeadCrousel />
        </div>
      </div>
    </div>
  );
};

export default Login;
