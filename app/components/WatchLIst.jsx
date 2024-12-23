import { getWatchlist } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";
export default async function WatchLIst({ email }) {
  const watchlistMovies = await getWatchlist(email);
  if (watchlistMovies.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="text-3xl text-blue-500 font-bold">
          Your watchlist is empty
        </div>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium
            hover:bg-blue-600 transition-colors duration-200 
            transform hover:scale-105 active:scale-95"
        >
          Explore Movies
        </Link>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {watchlistMovies.map((movie) => (
          <Link
            key={movie.movieId}
            href={`/movie/${movie.movieId}`}
            className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <div className="relative w-full aspect-[2/3] ">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt={movie.movieTitle}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                priority={false}
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2 line-clamp-1">
                {movie.movieTitle}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
