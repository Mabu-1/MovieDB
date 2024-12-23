// app/movie/[movieID]/page.js
import MoreLikeThis from "@/app/components/Movies/MoreLikeThis";
import MovieDetailsPage from "@/app/components/Movies/MovieDetailsPage";
import Navbar from "@/app/Navbar/Navbar";
import { getMovieDetails } from "@/db/queries";
import { notFound } from "next/navigation";

export default async function MoviePage({ params }) {
  const id = params.movieID;

  const movieExists = await getMovieDetails(id);

  if (!movieExists) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8">
        <MovieDetailsPage id={id} />
        <MoreLikeThis id={id} />
      </div>
    </>
  );
}
