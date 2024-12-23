"use client";
import { performLogin } from "@/actions/User";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useAuth } from "../hooks/useAuth";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "Signing In..." : "Sign In"}
    </button>
  );
}

const SignInPage = () => {
  const router = useRouter();
  const { setAuth } = useAuth();
  const [error, setError] = useState("");

  async function handleSubmit(formData) {
    setError("");

    try {
      const user = await performLogin(formData);
      if (user) {
        setAuth(user);
        router.push("/");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("An error occurred during sign in");
    }
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-500 rounded">
              {error}
            </div>
          )}
          <form action={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email or phone number"
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <SubmitButton />
          </form>
          <div className="mt-4 flex justify-between text-gray-400 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
          <div className="mt-6 text-gray-400">
            New to moviedb?{" "}
            <Link href="/register" className="text-white hover:underline">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
