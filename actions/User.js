"use server";

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import Watchlist from "@/models/WatchList";

import { redirect } from "next/navigation";

export const signupUser = async (formData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const agreeToTerms = formData.get("agreeToTerms") === "on";

  try {
    await connectMongo();
    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      return null;
    }
    await new User({
      firstName,
      lastName,
      email,
      password,
      agreeToTerms,
    }).save();
    redirect("/login");
  } catch (error) {
    console.error("Signup error:", error);
    return { message: "Error creating account!", success: false };
  }
};

export async function performLogin(formData) {
  await connectMongo();
  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const user = await User.findOne(credentials).lean();
  if (user) {
    return JSON.parse(JSON.stringify(user));
  } else return null;
}

export async function addToWatchList(
  userEmail,
  movieId,
  movieTitle,
  posterPath
) {
  if (!userEmail) return null;
  try {
    await connectMongo();
    const watchListEntry = {
      userEmail,
      movieId,
      movieTitle,
      posterPath,
    };
    const result = await Watchlist.create(watchListEntry);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    if (error.code === 11000) {
      return watchListEntry; // Return plain object for duplicate entries
    }
    console.error("Error adding to watchlist:", error);
    return null;
  }
}

export async function removeFromWatchList(userEmail, movieId) {
  if (!userEmail) return false;
  try {
    await connectMongo();
    const result = await Watchlist.deleteOne({ userEmail, movieId });
    return result.deletedCount > 0;
  } catch (error) {
    console.error("Error removing from watchlist:", error);
    return false;
  }
}

export async function checkInWatchList(userEmail, movieId) {
  if (!userEmail) return false;
  try {
    await connectMongo();
    const count = await Watchlist.countDocuments({ userEmail, movieId });
    return count > 0;
  } catch (error) {
    console.error("Error checking watchlist:", error);
    return false;
  }
}

export async function getWatchList(userEmail) {
  if (!userEmail) return [];
  try {
    await connectMongo();
    console.log("Searching for email:", userEmail);
    const watchlist = await Watchlist.find({ userEmail }).lean();
    console.log("Found watchlist:", watchlist);
    return JSON.parse(JSON.stringify(watchlist));
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    return [];
  }
}
