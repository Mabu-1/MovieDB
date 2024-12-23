import connectMongo from "@/dbConnect/connectMongo";
import WatchList from "@/models/WatchList";
import { NextResponse } from "next/server";

// Add dynamic configuration
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    // Get userEmail from query parameters
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get("userEmail");

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email is required" },
        { status: 400 }
      );
    }

    await connectMongo();
    const watchList = await WatchList.find({ userEmail }).lean();
    return NextResponse.json(watchList);
  } catch (error) {
    console.error("Error fetching watchlist:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
