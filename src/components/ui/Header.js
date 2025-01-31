"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const NavigateTo = (page) => {
    router.push(`/` + page); 
};
  return (
    <div className="flex justify-between items-center bg-secondary px-12 absolute  md:h-[80px] w-full ">
      <div className=" ">
        <Image
          src="/images/logo.png"
          alt="Flying Panda Logo"
          width={144}
          height={50}
          className="h-[70px] w-auto"
        />
      </div>
      <div className="flex gap-4">
        <button onClick={() => NavigateTo("login")}  className="bg-primary text-secondary py-2 px-12 rounded-lg font-bold">
          Login
        </button>
        <button onClick={() => NavigateTo("signin")} className="bg-primary text-secondary py-2 px-6 rounded-lg font-bold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
