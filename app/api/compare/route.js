import axios from "axios";

export async function GET(request, { params }) {
  const movieId = params.movieID;

  try {
    // Fetch trending movies from TMDB API
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`;
    const response = await axios.get(url);

    // Return the movie data as JSON
    return new Response(JSON.stringify(response.data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching movie data:", error.message);
    return new Response(
      JSON.stringify({
        error: error.response?.data || "Internal Server Error",
      }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
