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
      <main className="flex-1 max-w-350 mx-auto w-full px-6 lg:px-12 pb-26 pt-12">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="bg-light-gray-bg-alpha p-12 text-center max-w-lg">
            <div className="text-btn-register text-6xl mb-6">!</div>
            <h1 className="text-black text-3xl font-bold mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-8">
              We couldn&apos;t load the sessions. Please try again later.
            </p>
            <button
              onClick={reset}
              className="bg-accent-blue text-white py-4 px-8 text-sm font-bold hover:opacity-90 transition-opacity"
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
