"use client";
import Image from "next/image";

const MovieSlot = ({ movie, onRemove }) => {
  if (!movie) return null;

  const formatMoney = (amount) => {
    if (!amount) return "N/A";
    return `$${(amount / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div className="flex justify-end mb-4">
        <button onClick={onRemove} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-full">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="w-full rounded-lg mb-4 object-contain max-h-full"
            />
          ) : (
            <div className="w-full aspect-[2/3] bg-zinc-800 rounded-lg mb-4 flex items-center justify-center">
              No Image
            </div>
          )}
          <h2 className="text-xl font-bold mb-2 text-center">{movie.title}</h2>
        </div>
        <div className="w-full space-y-4 col-span-3">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {movie.vote_average?.toFixed(1)}/10
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">
              {movie.release_date?.split("-")[0]}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Runtime:</span>
            <span className="float-right">{movie.runtime || "N/A"} min</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Budget:</span>
            <span className="float-right">{formatMoney(movie.budget)}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">{formatMoney(movie.revenue)}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSlot;
