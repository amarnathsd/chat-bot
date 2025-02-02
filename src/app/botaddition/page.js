"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import BotAddition from "@/pages/BotAddition";
import AnimatedParagraph from "@/components/ui/AnimatePara";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const NavigateTo = (page) => {
    router.push(`/` + page);
  };

  return (
    <div>
      {user ? (
        <BotAddition />
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
