"use client";
import { useState } from "react";
import EmptyMovieSlot from "./Compare/EmptyMovieSlot ";
import MovieSlot from "./Compare/MovieSlot";

export default function MovieCompareContainer() {
  const [movieSlots, setMovieSlots] = useState([]);

  const addEmptySlot = () => {
    setMovieSlots([...movieSlots, { id: Date.now() }]);
  };

  const removeSlot = (index) => {
    setMovieSlots(movieSlots.filter((_, i) => i !== index));
  };

  const handleMovieSelect = async (index, movieData) => {
    const response = await fetch(`/api/movie/${movieData.id}`);
    const detailedMovie = await response.json();

    const updatedSlots = [...movieSlots];
    updatedSlots[index] = {
      id: updatedSlots[index].id,
      movie: detailedMovie,
    };
    setMovieSlots(updatedSlots);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Compare Movies</h1>
        <button
          onClick={addEmptySlot}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Add Movie +
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {movieSlots.map((slot, index) =>
          slot.movie ? (
            <MovieSlot
              key={slot.id}
              movie={slot.movie}
              onRemove={() => removeSlot(index)}
            />
          ) : (
            <EmptyMovieSlot
              key={slot.id}
              onRemove={() => removeSlot(index)}
              onSelect={(movie) => handleMovieSelect(index, movie)}
            />
          )
        )}
      </div>
    </div>
  );
}
