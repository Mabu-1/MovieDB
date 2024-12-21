"use client";

import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold text-red-500">500</h1>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold  text-white">
            Something went wrong!
          </h2>
          <p className="text-white max-w-md mx-auto">
            We apologize for the inconvenience. An unexpected error has
            occurred.
          </p>
          {error.digest && (
            <p className="text-sm text-white">Error ID: {error.digest}</p>
          )}
        </div>

        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg bg-red-200 text-black hover:bg-red-400 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
