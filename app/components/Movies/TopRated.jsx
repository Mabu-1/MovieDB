import { getAllTopRated } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";

export default async function TopRated() {
  const movies = await getAllTopRated();

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width={192}
                height={288}
                className="w-full rounded-lg"
              />
              <div className="mt-2">
                <h3 className="text-light text-sm font-bold truncate">
                  {movie.title}
                </h3>
                <p className="text-primary text-xs">
                  {new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
