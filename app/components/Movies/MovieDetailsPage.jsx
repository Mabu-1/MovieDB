import { getCastDetails, getMovieDetails } from "@/db/queries";

import Image from "next/image";
import Link from "next/link";
import WatchLaterButton from "../WatchLaterButton";

export default async function MovieDetailsPage({ id }) {
  const movie = await getMovieDetails(id);
  const credits = await getCastDetails(id);
  const cast = credits.cast;

  return (
    <>
      <title>{movie.title} - Movie Details</title>
      <meta name="description" content={movie.overview} />
      <meta property="og:title" content={movie.title} />
      <meta property="og:description" content={movie.overview} />
      <meta
        property="og:image"
        content={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <meta property="og:url" content={movie.homepage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={movie.title} />
      <meta name="twitter:description" content={movie.overview} />
      <meta
        name="twitter:image"
        content={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />

      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              fill
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
          </div>

          <div className="relative container mx-auto px-4 pt-32">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={500}
                  height={750}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

                <div className="flex items-center mb-4 space-x-4">
                  <span className="text-green-500">
                    {new Date(movie.release_date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span>| </span>
                  <span>{movie.runtime} min</span>
                </div>

                <p className="text-lg mb-6">{movie.overview}</p>

                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Cast</h3>
                  <div className="flex flex-wrap gap-4">
                    {cast.slice(0, 5).map((actor) => (
                      <div key={actor.id} className="text-center">
                        <Image
                          src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                          alt={actor.name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full object-cover mb-2"
                        />
                        <p className="text-sm">{actor.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <WatchLaterButton movie={movie} />

                <div className="mb-6">
                  <h3 className="text-gray-400 mb-2">Share on social media</h3>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        movie.homepage
                      )}`}
                      target="_blank"
                      className="text-center cursor-pointer"
                    >
                      <Image
                        src="http://facebook.com/favicon.ico"
                        alt="Facebook"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                      />
                      <p className="text-sm">Facebook</p>
                    </Link>

                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        movie.homepage
                      )}&text=${encodeURIComponent(movie.title)}`}
                      target="_blank"
                      className="text-center cursor-pointer"
                    >
                      <Image
                        src="http://x.com/favicon.ico"
                        alt="X"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                      />
                      <p className="text-sm">X</p>
                    </Link>

                    <Link
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                        movie.homepage
                      )}&title=${encodeURIComponent(movie.title)}`}
                      target="_blank"
                      className="text-center cursor-pointer"
                    >
                      <Image
                        src="http://linkedin.com/favicon.ico"
                        alt="Linkedin"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover mb-2 mx-auto"
                      />
                      <p className="text-sm">Linkedin</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
