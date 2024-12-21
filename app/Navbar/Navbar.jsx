"use client";
import Link from "next/link";
import Search from "../components/Search";
import SignInOut from "../components/SignInOut";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { auth } = useAuth();
  const email = auth?.email;

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">
            MOVIE DB
          </Link>
          <div className="ml-8 space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/compare" className="text-white hover:text-gray-300">
              Compare Movies
            </Link>
            {email ? (
              <Link
                href="/watchlist"
                className="text-white hover:text-gray-300"
              >
                Watch Later
              </Link>
            ) : (
              <Link href="/login" className="text-white hover:text-gray-300">
                Watch Later
              </Link>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="flex justify-between gap-[20px]">
            <div className="flex items-center">
              <SignInOut />
            </div>
            <div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
