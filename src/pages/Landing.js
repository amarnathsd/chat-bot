"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti"; // To show the success confetti
import Loader from "@/components/ui/Loader"; // Assuming you have a Loader component
// import SocialShareButtons from "@/components/ui/SocialShareButtons"; // Create this component for social sharing

const Landing = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isIntegrationSuccessful, setIsIntegrationSuccessful] = useState(false);
  const [isIntegrationPending, setIsIntegrationPending] = useState(false);

  const handleTestChatbot = () => {
    // Open a dummy website with chatbot integration
    window.open("https://example.com", "_blank");
  };

  const handleIntegrateChatbot = () => {
    setIsIntegrationPending(true);
  };

  const handleMailInstructions = () => {
    // Here, you can implement an email sending functionality (e.g., using an API to send the email to the developer).
    alert("Mail instructions have been sent to your developer.");
  };

  const handleTestIntegration = () => {
    setIsLoading(true);
    // Simulate a success/failure of the integration
    setTimeout(() => {
      setIsLoading(false);
      const isSuccess = Math.random() > 0.5; // Simulate a random success/failure
      setIsIntegrationSuccessful(isSuccess);
    }, 3000);
  };

  const handleExploreAdminPanel = () => {
    router.push("/admin");
  };

  const handleStartTalking = () => {
    router.push("/chat");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-primary/35">
      {/* Topbar */}
      <div className="w-full bg-primary text-white text-center py-3">
        <p className="font-semibold text-lg">
          Chatbot not working as intended? <a href="#" className="text-secondary">Share feedback</a>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-12 space-y-8">
        {/* Test Chatbot Button */}
        <button
          onClick={handleTestChatbot}
          className="w-64 p-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
        >
          Test Chatbot
        </button>

        {/* Integrate Chatbot Button */}
        <button
          onClick={handleIntegrateChatbot}
          className="w-64 p-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary transition-all duration-300"
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
              className="w-full p-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
            >
              Mail Instructions to Developer
            </button>
            <p className="text-sm text-primary opacity-80">OR</p>
            <button
              onClick={() => alert("Copy-paste the code into the <head> of your website.")}
              className="w-full p-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
            >
              Easy Instructions for Integration
            </button>
          </div>
        )}

        {/* Test Integration Button */}
        {!isIntegrationPending && (
          <button
            onClick={handleTestIntegration}
            className="w-64 p-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
          >
            Test Integration
          </button>
        )}

        {/* Loading Spinner */}
        {isLoading && <Loader text="Testing integration..." />}

        {/* Success or Failure UI */}
        {isIntegrationSuccessful && !isLoading && (
          <div className="mt-10 flex flex-col items-center">
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <h2 className="text-2xl font-semibold text-primary">Success! Your chatbot has been successfully integrated.</h2>
            <button
              onClick={handleExploreAdminPanel}
              className="w-64 p-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary transition-all duration-300 mt-4"
            >
              Explore Admin Panel
            </button>
            <button
              onClick={handleStartTalking}
              className="w-64 p-3 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300 mt-4"
            >
              Start talking to your chatbot
            </button>
            <div className="mt-6">
              <SocialShareButtons />
            </div>
          </div>
        )}

        {/* Failure UI */}
        {!isIntegrationSuccessful && !isLoading && isIntegrationPending && (
          <div className="mt-10 text-center">
            <h2 className="text-xl text-primary font-semibold">Integration Failed</h2>
            <p className="text-sm text-primary opacity-80 mt-4">
              It seems like the integration could not be detected yet. Please ensure that the chatbot code is correctly placed in the <code>&lt;head&gt;</code> section of your website.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
