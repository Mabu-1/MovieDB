"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();
  const movieId = params?.movieID || "Unknown";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          404
        </h1>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Movie Not Found</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the movie with ID{" "}
            <span className="px-2 py-1 bg-gray-800 rounded-md font-mono text-blue-400">
              {movieId}
            </span>
            . It might have been removed or doesn&apos;t exist in our database.
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

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-gray-900 animate-gradient-y"></div>
    </div>
  );
}
