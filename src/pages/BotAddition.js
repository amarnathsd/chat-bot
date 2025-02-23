"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti"; 
import Loader from "@/components/ui/Loader"; 
import Image from "next/image";
import Header from "@/components/ui/Header";
import ImageAnimationFromTop from "@/components/ui/imagefromtop";

const BotAddition = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isIntegrationPending, setIsIntegrationPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleTestChatbot = () => {
  
    window.open("https://example.com", "_blank");
  };

  const handleIntegrateChatbot = () => {
    setIsIntegrationPending(true);
  };

  const handleMailInstructions = () => {
  
    alert("Mail instructions have been sent to your developer.");
  };

  const handleTestIntegration = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const isSuccess = Math.random() > 0.5; 
      setSuccess(true);
    }, 3000);
  };

  const handleExploreAdminPanel = () => {
    router.push("/admin");
  };

  const handleStartTalking = () => {
    router.push("/chat");
  };

  const NavigateTo = (page) => {
    router.push(`/` + page);
  };

  return (
    <div>
      <Header Content={isLoggedIn} />
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-white to-primary/35 max-w-screen md:pt-20">
        <div className="w-full md:w-1/2">
          <ImageAnimationFromTop
            src="/images/chatbot-setup.webp"
            alt="Illustration"
            width={900}
            height={300}
            className="w-full h-screen min-h-screen z-[-1]"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-start min-h-screen ">
          {/* Topbar */}
          <div className="w-full bg-primary text-white text-center py-3">
            <p className="font-semibold text-lg">
              Chatbot not working as intended?{" "}
              <span
                onClick={() => NavigateTo("feedback")}
                className="text-blue-400 cursor-pointer underline"
              >
                Share feedback
              </span>
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center mt-12 space-y-8">
            {/* Test Chatbot Button */}
            <button
              onClick={handleTestChatbot}
              className="w-64 p-3  hover:text-primary hover:bg-secondary text-secondary bg-primary text-md md:text-lg font-semibold rounded-lg shadow-lgtransition-all duration-300"
            >
              Test Chatbot
            </button>

            {/* Integrate Chatbot Button */}
            <button
              onClick={handleIntegrateChatbot}
              className="w-64 p-3 hover:text-primary hover:bg-secondary text-secondary bg-primary text-md md:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
            >
              Integrate on your Website
            </button>

            {isIntegrationPending && (
              <div className="mt-8 w-full max-w-md mx-auto p-6 border-2 border-primary rounded-lg text-center space-y-4">
                <h2 className="text-xl font-semibold text-primary">
                  Choose your preferred integration option:
                </h2>
                <button
                  onClick={handleMailInstructions}
                  className="w-full p-3 hover:text-primary hover:bg-secondary text-secondary bg-primary font-semibold rounded-lg shadow-lg  transition-all duration-300"
                >
                  Mail Instructions to Developer
                </button>
                <p className="text-sm text-primary opacity-80">OR</p>
                <button
                  onClick={() =>
                    alert(
                      "Copy-paste the code into the <head> of your website."
                    )
                  }
                  className="w-full p-3 hover:text-primary hover:bg-secondary text-secondary bg-primary font-semibold rounded-lg shadow-lg  transition-all duration-300"
                >
                  Easy Instructions for Integration
                </button>
              </div>
            )}

            {/* Test Integration Button */}
            <button
              onClick={handleTestIntegration}
              className="w-64 p-3 hover:text-primary hover:bg-secondary text-secondary bg-primary  text-md md:text-lg font-semibold rounded-lg shadow-lg  transition-all duration-300"
            >
              Test Integration
            </button>

            {/* Loading Spinner */}
            {isLoading && <Loader text="Testing integration..." />}

            {/* Success or Failure UI */}
            {success && !isLoading && (
              <div className="mt-10 flex flex-col items-center max-w-screen ">
                <Confetti
                  width={window.innerWidth}
                  height={window.innerHeight}
                />
                <h2 className="text-lg md:text-2xl font-semibold text-primary w-10/12 md:w-full ">
                  Success! Your chatbot has been successfully integrated.
                </h2>
                <button
                  onClick={() => NavigateTo("landing")}
                  className="w-64 p-3 text-md md:text-lg font-semibold rounded-lg shadow-lg hover:text-primary hover:bg-secondary text-secondary bg-primary transition-all duration-300 mt-4"
                >
                  Explore Admin Panel
                </button>
                <button
                  onClick={() => NavigateTo("landing")}
                  className="w-64 p-3 hover:text-primary hover:bg-secondary text-secondary bg-primary text-md md:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 mt-4"
                >
                  Start talking to your chatbot
                </button>
                <div className="mt-6">HI</div>
              </div>
            )}

            {/* Failure UI */}
            {success && !isLoading && isIntegrationPending && (
              <div className="mt-10 text-center">
                <h2 className="text-xl text-primary font-semibold">
                  Integration Failed
                </h2>
                <p className="text-sm text-primary opacity-80 mt-4">
                  It seems like the integration could not be detected yet.
                  Please ensure that the chatbot code is correctly placed in the{" "}
                  <code>&lt;head&gt;</code> section of your website.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotAddition;
