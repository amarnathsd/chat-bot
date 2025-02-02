import React from "react";
import AnimatedParagraph from "@/components/ui/AnimatePara";

const page = () => {
  return (
    <div className="bg-gradient-to-b from-white to-primary/35 flex justify-center items-center">
      <button
        onClick={() => NavigateTo("login")}
        className="bg-primary text-secondary text-sm md:text-base px-4 py-2 md:px-12 rounded-lg font-bold"
      >
         <AnimatedParagraph content={"Login"} />
      </button>
    </div>
  );
};

export default page;
