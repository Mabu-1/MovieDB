// app/compare/page.jsx
import MovieCompareContainer from "../components/MovieCompareContainer";
import Navbar from "../Navbar/Navbar";

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-8">
        <MovieCompareContainer />
      </div>
    </>
  );
}
