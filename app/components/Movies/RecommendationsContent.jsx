import { getRecommendations } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";

export default async function RecommendationsContent({ id }) {
  const recommendations = await getRecommendations(id);

  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-white mt-10 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <p className="text-gray-400">No similar movies found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">More Like This</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {recommendations.map((movie) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="flex-shrink-0 w-48 group"
          >
            {movie.poster_path ? (
              <div className="relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={192}
                  height={288}
                  className="rounded-lg transition-transform group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
              </div>
            ) : (
              <div className="w-full h-72 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
