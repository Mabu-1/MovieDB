"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-red-500 to-orange-600 text-transparent bg-clip-text">
          Oops!
        </h1>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Something Went Wrong</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            An unexpected error occurred while loading the movie. This might be
            due to a connection issue or a temporary server problem.
          </p>

          <div className="mt-4">
            <p className="text-sm text-gray-400">
              Error Code:{" "}
              <span className="px-2 py-1 bg-gray-800 rounded-md font-mono text-red-400">
                {error?.digest || "Unknown Error"}
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <button
            onClick={reset}
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-colors shadow-lg shadow-red-600/20"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors shadow-lg shadow-gray-800/20"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Animated Background Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-gray-900 animate-gradient-y"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
