"use client";
import { useSearch } from "@/app/context";
import Image from "next/image";

const MovieSearchModal = ({ isOpen, onClose, onSelect }) => {
  const { searchQuery, searchResults, isLoading, handleSearch } = useSearch();

  if (!isOpen) return null;

  const handleMovieClick = (movie) => {
    onSelect(movie);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div className="max-h-96 overflow-y-auto space-y-4">
          {isLoading && (
            <div className="text-center py-4 text-gray-400">Searching...</div>
          )}
          {!isLoading &&
            searchResults.map((movie) => (
              <div
                key={movie.id}
                onClick={() => handleMovieClick(movie)}
                className="flex gap-4 bg-zinc-800 p-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-24 relative">
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="rounded object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-700 rounded flex items-center justify-center">
                      No Image
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{movie.title}</h3>
                  <p className="text-sm text-gray-400">
                    {movie.release_date?.split("-")[0] || "N/A"}
                  </p>
                  {movie.overview && (
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                      {movie.overview}
                    </p>
                  )}
                </div>
              </div>
            ))}
          {!isLoading &&
            searchQuery.length > 2 &&
            searchResults.length === 0 && (
              <div className="text-center py-4 text-gray-400">
                No movies found
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearchModal;
