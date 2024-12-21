import { Suspense } from "react";
import RecommendationsContent from "./RecommendationsContent";

export default function MoreLikeThis({ id }) {
  return (
    <div className="mt-8">
      <Suspense
        fallback={
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">More Like This</h2>
            <div className="flex space-x-4 overflow-x-auto">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-48 h-72 bg-gray-700 animate-pulse rounded-lg"
                />
              ))}
            </div>
          </div>
        }
      >
        <RecommendationsContent id={id} />
      </Suspense>
    </div>
  );
}
