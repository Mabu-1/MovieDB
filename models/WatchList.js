// models/Watchlist.js
import mongoose from "mongoose";

const WatchListSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },
    movieId: {
      type: String,
      required: true,
    },
    movieTitle: {
      type: String,
      required: true,
    },
    posterPath: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "watchlist",
  }
);

WatchListSchema.index({ userEmail: 1, movieId: 1 }, { unique: true });

const Watchlist =
  mongoose.models.watchlist || mongoose.model("watchlist", WatchListSchema);
export default Watchlist;
