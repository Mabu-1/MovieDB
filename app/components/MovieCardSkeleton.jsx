"use client";

export function MovieCardSkeleton() {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <div className="relative w-full aspect-[2/3] bg-zinc-800 animate-pulse" />
      <div className="p-4">
        <div className="h-6 bg-zinc-800 rounded animate-pulse" />
      </div>
    </div>
  );
}

export function MovieCardSkeletonGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
