"use client";
import { useState, useEffect } from "react";
import withAuth from "../components/auth/AuthProvider";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/ui/Header";

const SetupPage = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [scrapedPages, setScrapedPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const fetchMetaDescription = async () => {
    if (!companyWebsite) return;
    try {
      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(companyWebsite)}`
      );
      const data = await response.json();
      if (data?.data?.description) {
        setCompanyDescription(data.data.description);
      }
    } catch (error) {
      console.error("Failed to fetch meta description", error);
    }
  };

  const navigateToIntegration = () => {
    router.push("/botaddition");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const defaultPages = [
        {
          id: 1,
          url: `${companyWebsite}landingpage`,
          status: "scraped",
          dataChunks: ["Data 1", "Data 2"],
        },
        {
          id: 2,
          url: `${companyWebsite}homepage`,
          status: "scraped",
          dataChunks: ["Data 3", "Data 4"],
        },
        {
          id: 3,
          url: `${companyWebsite}aboutuspage`,
          status: "scraped",
          dataChunks: ["Data 5", "Data 6"],
        },
      ];
      setScrapedPages(defaultPages);
      setIsLoading(false);
    }, 4000);
  };

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <Header Content={isLoggedIn} />
      <div className="sticky z-[-1] top-0">
        <Image
          src="/images/Banner1.jpg"
          alt="Illustration"
          width={900}
          height={300}
          className="w-full h-screen"
        />
      </div>
      <div className="flex z-10 flex-col md:flex-row min-h-screen h-full items-center justify-center 5">
        <div className="flex z-20 flex-col w-full min-h-screen pt-10 bg-white">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold  text-primary tracking-tight transition-all duration-300 hover:font-extrabold">
              Welcome to the Setup Page
            </h1>
            <p className="text-lg mt-4 text-primary opacity-80 transition-all duration-300 hover:opacity-100">
              Let’s get your company setup and monitor the scraping progress.
            </p>
          </div>

          {/* Company Setup Form */}
          <form
            onSubmit={handleSubmit}
            className="w-10/12 md:w-2/3 mx-auto md:transition-all duration-500 transform hover:scale-105"
          >
            <div className="flex flex-col mb-4">
              <label className="text-primary font-bold pb-2">
                Company Name*
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-2 border-2 border-primary rounded-lg px-3 text-sm font-semibold transition-all duration-300 focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label className="text-primary font-bold pb-2">
                Company Website*
              </label>
              <input
                type="url"
                placeholder="Enter company website URL"
                value={companyWebsite}
                onChange={(e) => setCompanyWebsite(e.target.value)}
                className="w-full p-2 border-2 border-primary rounded-lg px-3 text-sm font-semibold transition-all duration-300 focus:ring-2 focus:ring-secondary"
                required
              />
            </div>
            <button
              type="button"
              onClick={fetchMetaDescription}
              className="w-full p-2 bg-secondary  text-lg font-semibold text-primary rounded-lg shadow-lg hover:bg-primary hover:text-secondary transition-all duration-300"
            >
              AutoFetch Meta Description
            </button>
            <div className="flex flex-col mb-6 pt-4">
              <label className="text-primary font-bold pb-2">
                Company Description
              </label>
              <textarea
                placeholder="Enter company description"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                className="w-full p-2 border-2 border-primary rounded-lg px-3 text-sm font-semibold focus:ring-2 focus:ring-secondary transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-primary text-white hover:text-primary text-lg font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300"
            >
              Submit
            </button>
          </form>

          <div className="flex justify-center border-t-2 mt-16 border-primary ">
            <div className="w-10/12 md:w-8/12 transition-all duration-500 transform hover:scale-105 md:pb-28">
              {isLoading || scrapedPages.length > 0 ? (
                <div className="mt-10 ">
                  <button
                    onClick={navigateToIntegration}
                    className={`${!isLoading? "md:mt-12": ""} w-full p-2 bg-primary text-white  text-lg font-semibold rounded-lg shadow-lg hover:bg-secondary hover:text-primary transition-all duration-300`}
                  >
                    Go to Integration
                  </button>
                </div>
              ) : (
                <></>
              )}
              {isLoading ? (
                <div className="pt-20">
                  <Loader text="Scraping website data for chatbot training" />
                </div>
              ) : (
                <div className="mt-12">
                  {scrapedPages.length > 0 && (
                    <h2 className="text-2xl text-primary font-bold mb-4">
                      Scraped Pages
                    </h2>
                  )}
                  <div className="space-y-4">
                    {scrapedPages.map((page) => (
                      <div
                        key={page.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          page.status === "scraped"
                            ? "bg-green-100"
                            : page.status === "scraping"
                            ? "bg-yellow-100"
                            : "bg-gray-100"
                        }`}
                        onClick={() => handlePageClick(page)}
                      >
                        <p className="font-semibold text-primary max-w-10/12">{page.url}</p>
                        <div
                          className={`text-sm font-semibold  ${
                            page.status === "scraped"
                              ? "text-green-600"
                              : page.status === "scraping"
                              ? "text-yellow-600"
                              : "text-gray-600"
                          }`}
                        >
                          {page.status === "scraped"
                            ? "Scraped"
                            : page.status === "scraping"
                            ? "Scraping"
                            : "Pending"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedPage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg w-4/5 max-w-3xl animate__animated animate__fadeIn">
                    <h3 className="text-xl text-primary font-bold mb-4 text-xs md:text-base">
                      Scraped Data from {selectedPage.url}
                    </h3>
                    <ul className="space-y-2">
                      {selectedPage.dataChunks.length ? (
                        selectedPage.dataChunks.map((chunk, idx) => (
                          <li
                            key={idx}
                            className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg"
                          >
                            {chunk}
                          </li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">
                          No data chunks available yet.
                        </li>
                      )}
                    </ul>
                    <div className="mt-4 text-center">
                      <button
                        onClick={() => setSelectedPage(null)}
                        className="p-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(SetupPage);
