"use client";
import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "@/firebase";
import Image from "next/image";
import HeadCrousel from "@/components/ui/HeadCrousel";
import { useDispatch } from "react-redux";
import { setUserSignedUp, setShowPopup } from "@/store/userSlice"; // Adjust the import path
import { sendEmailVerification } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create the user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      alert("Sign-up successful! Please verify your email before logging in.");
      router.push("/login");
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Sign-up failed. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      alert("You have successfully logged in.");
      router.push("/login");
      dispatch(setUserSignedUp(true));
    } catch (error) {
      alert(error.message || "Google login failed. Please try again.");
    }
  };

  return (
    <div className="md:h-screen flex flex-col justify-start  bg-gradient-to-b from-white to-primary/35">
      <div className=" md:ps-8">
        <Image
          src="/images/logo.png"
          alt="Flying Panda Logo"
          width={144}
          height={36}
        />
      </div>
      <div className="flex items-end justify-center ">
        <div className="flex flex-col md:flex-row w-full md:max-w-[85%] md:mx-auto items-center">
          {/* Left Section */}
          <div className="md:w-1/2 px-8">
            <h1 className="text-3xl text-center md:pe-32 text-primary font-extrabold mb-1">
              Join Us Today!
            </h1>
            <p className="text-base text-center md:pe-32 font-medium text-primary mb-6">
              The faster you fill up, the faster you get a slot
            </p>

            {/* Form */}
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col md:flex-row gap-4 md:gap-16 mb-4 ">
                <div className="flex flex-col">
                  <label className="text-primary font-bold pb-3 ">
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder="First Name*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border-2 p-2 border-primary rounded text-sm font-semibold"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-primary font-bold pb-3">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 border-2 border-primary rounded text-sm font-semibold"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-primary font-bold pb-3">Email*</label>
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="md:w-10/12 p-2 border-2 border-primary rounded px-3 text-sm font-semibold mb-4"
                />
              </div>
              <div className="relative flex flex-col mb-4">
                <label className="text-primary font-bold pb-3">Password*</label>
                <input
                  type="password"
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="md:w-10/12 p-2 border-2 border-primary rounded px-3 text-sm font-semibold"
                />
              </div>
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-gray-300/65 rounded mr-2"
                />
                <label className="text-sm font-medium text-gray-600">
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                className="w-full md:w-10/12 p-2 bg-primary text-white text-lg font-semibold rounded mb-6"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full  md:w-10/12 p-2 border-2 border-primary flex items-center justify-center gap-2 rounded text-lg font-semibold"
              >
                <Image
                  src="/images/Google-logo.webp"
                  alt="Google Logo"
                  width={36}
                  height={36}
                  className="object-cover"
                />
                Sign in with Google
              </button>
            </form>
          </div>

          {/* Right Section */}
          <HeadCrousel />
        </div>
      </div>
    </div>
  );
};

export default Signup;
