"use client";
import { signupUser } from "@/actions/User";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? "Signing Up..." : "Sign Up"}
    </button>
  );
}

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(formData) {
    setError("");

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      const user = await signupUser(formData);

      if (!user) {
        setError("Email already exists");
        return;
      }

      router.push("/login");
    } catch (error) {
      setError(error.message || "An error occurred during signup");
    }
  }

  return (
    <div className="bg-moviedb-black min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        <div className="text-center">
          <h1 className="text-white text-3xl font-bold mb-6">
            Create Your Account
          </h1>
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 text-red-500 rounded">
              {error}
            </div>
          )}
          <form action={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
              minLength={2}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
              minLength={2}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
              minLength={8}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
              required
            />
            <div className="text-left text-moviedb-gray text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  className="mr-2"
                  required
                />
                I agree to the Terms of Service and Privacy Policy
              </label>
            </div>
            <SubmitButton />
          </form>
          <div className="mt-6 text-moviedb-gray">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
