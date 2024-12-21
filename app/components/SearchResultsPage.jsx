import { getSearchResult } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default async function SearchResultsPage({ query }) {
  const results = await getSearchResult(query);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Search Stats */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Search Results for &quot;{query}&quot;
          </h1>
          <p className="text-gray-400">Found {results.length} results</p>
        </div>
        {/* Movie Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map(
            (movie) =>
              // Only show movies with poster paths
              movie.poster_path && (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.id}`}
                  className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
                >
                  <div className="relative w-full aspect-[2/3]">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-1">
                      {movie.title}
                    </h3>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>
                        {movie.release_date
                          ? new Date(movie.release_date).getFullYear()
                          : "N/A"}
                      </span>
                      <span>
                        ⭐{" "}
                        {movie.vote_average
                          ? movie.vote_average.toFixed(1)
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </Link>
              )
          )}
        </div>
      </main>
    </>
  );
}
