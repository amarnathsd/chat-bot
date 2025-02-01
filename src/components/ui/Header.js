import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

const Header = ({ Content }) => {
  const router = useRouter();

  const NavigateTo = (page) => {
    router.push(`/` + page);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-between items-center absolute bg-secondary md:px-12 md:h-[80px] w-full z-20">
      <div>
        <Image
          src="/images/logo.png"
          alt="Flying Panda Logo"
          width={144}
          height={50}
          className="h-[70px] w-auto"
        />
      </div>

      {Content ? (
        <div className="flex gap-4">
          <button
            onClick={() => NavigateTo("landing")}
            className="bg-primary text-secondary text-sm md:text-base px-4 py-2 md:px-12 rounded-lg font-bold"
          >
            Landing
          </button>
          <button
            onClick={handleLogout}
            className="bg-primary text-secondary text-sm md:text-base px-4 py-2 md:px-12 rounded-lg font-bold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => NavigateTo("login")}
            className="bg-primary text-secondary text-sm md:text-base px-4 py-2 md:px-12 rounded-lg font-bold"
          >
            Login
          </button>
          <button
            onClick={() => NavigateTo("signin")}
            className="bg-primary text-secondary text-sm md:text-base px-4 py-2 md:px-6 rounded-lg font-bold"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
