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
    collection: "Watchlist",
  }
);

WatchListSchema.index({ userEmail: 1, movieId: 1 }, { unique: true });

const Watchlist =
  mongoose.models.Watchlist || mongoose.model("Watchlist", WatchListSchema);

export default Watchlist;
