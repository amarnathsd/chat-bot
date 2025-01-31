"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimatedParagraph from "@/components/ui/AnimatePara";

const packages = [
  {
    id: 1,
    name: "Startup",
    price: 899,
    // originalPrice: 599,
    benefits: [
      "50 chats in a month",
      "Basic dashboard (Chats management)",
      "Train chatbot on 20 articles",
      "Restricted dashboard",
    ],
  },
  {
    id: 2,
    name: "Standard",
    price: 4499,
    benefits: [
      "50 chats in a month",
      "Advanced Dashboard",
      "Train chatbot on 500 articles",
      "Emailers: Daily Stats + Monthly analysis",
    ],
  },
  {
    id: 3,
    name: "Business",
    price: 6999,
    benefits: [
      "50 chats in a month",
      "Advanced Dashboard",
      "Train chatbot on 1k articles",
      "Emailers: Daily Stats + Monthly analysis",
      "AI Analysis",
      "Qualified ⁠Business leads",
    ],
    planId: "PLATINUM",
  },
  {
    id: 4,
    name: "VIP Package",
    price: 1499,
    benefits: [
      "All Platinum Package Features",
      "View up to 50 profiles",
      "Compatibility report - (horoscope matching)",
      "24x7 Availability of Matchmaking Expert and personal concierge",
      "Wedding-related discounts and vouchers",
      "Exclusive access to all events and seminars",
    ],
    planId: "VIP",
  },
];

const PackageCards = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");
  const router = useRouter();

  const handlePackageSelect = async (planId) => {
    try {
      const response = await axios.post("/api/payment-initiate/", {
        subscription_plan: planId,
      });

      const { transaction_id, url } = response.data;
      Cookies.set("transaction_id", transaction_id);
      window.location.href = url;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setSnackbarMessage("Please log in to proceed with the payment!");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
        setTimeout(() => {
          router.push("/auth/login");
        }, 3000);
      } else {
        console.error("Error initiating payment:", error);
      }
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#packages") {
      const element = document.getElementById("packages");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div>
        <div className="Heading-style pb-5"><AnimatedParagraph content="We have multiple plans for your growth"/></div>
        <div className="text-primary text-3xl pb-8 text-center flex justify-center"><AnimatedParagraph content="Flexible plans that adapt to your needs"/></div>
      </div>
      <div
        id="packages"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:w-11/12"
      >
        {packages.map((pkg, index) => (
          <div key={index} className="mb-8 relative ">
            {pkg.name === "Standard" && (
              <div className="absolute transform bold -translate-y-1/2 rounded-t-2xl text-white bg-primary py-2 w-full md:w-[310px] text-center z-10">
                Most Popular
              </div>
            )}
            <div className="relative py-[5px] w-full md:w-[310px] hover:before:border-transparent hover:before:absolute hover:before:inset-0 hover:before:rounded-2xl hover:before:bg-gradient-to-b hover:before:from-primary hover:before:to-primary/60">
              <div
                className={`max-w-full sm:max-w-[300px] h-[580px] mx-auto rounded-lg shadow-lg text-center bg-white flex flex-col justify-between overflow-visible relative rounded-xl ${
                  pkg.id === 2
                    ? "bg-gradient-to-b from-white to-primary/75"
                    : "bg-gradient-to-b from-[#F7ECFD] to-primary/35"
                }`}
              >
                <div className="p-4">
                  <div className="text-white font-bold text-base rounded-3xl text-center py-2 px-3 w-[80%] bg-primary">
                    {pkg.name}
                  </div>
                  <div className="border-b border-black pt-4"></div>
                  <ul className="pt-2 flex flex-col justify-between">
                    {pkg.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start justify-start pt-5"
                      >
                        <Image
                          width={16}
                          height={16}
                          src="icons/tik-icon.svg"
                          className="mr-3 flex items-start"
                          alt="tick"
                        />
                        <div className="leading-5 text-start text-sm text-[#010101]">
                          <AnimatedParagraph content={benefit} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="border-b border-black mb-6"></div>
                  <div className="text-3xl md:text-4xl text-black font-extrabold pb-6">
                    {pkg.id === 1 && (
                      <>
                        <span
                          style={{
                            textDecoration: "line-through",
                            marginRight: "8px",
                          }}
                        >
                          {/* ₹599 */}
                        </span>
                        ₹{pkg.price}{" "}
                        <span className="text-base font-normal"></span>
                        <span className="text-base font-normal">/month</span>
                      </>
                    )}
                    {pkg.id !== 1 && (
                      <>
                        ₹{pkg.price}
                        <span className="text-base font-normal"></span>
                        <span className="text-base font-normal">/month</span>
                      </>
                    )}
                  </div>
                  <button
                    className="w-10/12 px-5 rounded-lg py-3 normal-case font-base bg-primary mb-3 text-white"
                  >
                    Select Package
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <CustomSnackbar
          open={snackbarOpen}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          severity={snackbarSeverity}
        /> */}
      </div>
    </div>
  );
};

export default PackageCards;
