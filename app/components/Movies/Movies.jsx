import Popular from "./Popular";
import TopRated from "./TopRated";
import Trending from "./Trending";

export default function Movies() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}
