"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SearchNotFound() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          No Results
        </h1>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">No Movies Found</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            We couldn&apos;t find any movies matching{" "}
            <span className="px-2 py-1 bg-gray-800 rounded-md font-mono text-blue-400">
              &quot;{query}&quot;
            </span>
          </p>
          <p className="text-gray-400 text-sm">
            Try checking your spelling or using different keywords
          </p>
        </div>
        <div className="space-x-4">
          <Link
            href="/movie"
            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg shadow-blue-600/20"
          >
            Browse Movies
          </Link>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
