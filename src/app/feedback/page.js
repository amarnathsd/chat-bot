"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Feedback from "@/pages/Feedback";
import { useRouter } from "next/navigation";
import AnimatedParagraph from "@/components/ui/AnimatePara";

const Page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const NavigateTo = (page) => {
    router.push(`/` + page);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <Feedback />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-white to-primary/35 flex flex-col justify-center items-center">
          <div className="Heading-style ">
            {" "}
            <AnimatedParagraph content={"Please Login to See This page"} />
          </div>
          <button
            onClick={() => NavigateTo("login")}
            className="bg-primary text-secondary text-sm md:text-base px-4 py-2 md:px-12 rounded-lg font-bold mt-5"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
