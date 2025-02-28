"use client";
import { useState } from "react";
import MovieSearchModal from "./MovieSearchModal ";

const EmptyMovieSlot = ({ onRemove, onSelect }) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleMovieSelect = (movie) => {
    onSelect(movie);
    setIsSearchModalOpen(false);
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      <div className="flex justify-end mb-4">
        <button onClick={onRemove} className="text-gray-400 hover:text-white">
          ✕
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <button
          onClick={() => setIsSearchModalOpen(true)}
          className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          Select Movie
        </button>
      </div>
      <MovieSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelect={handleMovieSelect}
      />
    </div>
  );
};

export default EmptyMovieSlot;
