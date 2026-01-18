"use client";

import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-350 mx-auto w-full px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 lg:pb-26 pt-6 sm:pt-8 lg:pt-12">
        <div className="flex flex-col items-center justify-center py-10 sm:py-14 lg:py-20">
          <div className="bg-light-gray-bg-alpha p-6 sm:p-8 lg:p-12 text-center max-w-md sm:max-w-lg w-full mx-4">
            <div className="text-btn-register text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">!</div>
            <h1 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
              We couldn&apos;t load the sessions. Please try again later.
            </p>
            <button
              onClick={reset}
              className="bg-accent-blue text-white py-3 sm:py-4 px-6 sm:px-8 text-xs sm:text-sm font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
